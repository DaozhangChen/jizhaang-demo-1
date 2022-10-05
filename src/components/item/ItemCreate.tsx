import { defineComponent, onMounted, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { http } from '../../shared/Http';
import { Tabs, Tab } from '../../shared/Tabs';
import { useTags } from '../../shared/useTags';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
import { Tags } from './Tags';
import comeback from "../../assets/icons/comeback.svg";
export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        const refKind = ref('支出')
        const { tags: incomeTags,
            hasMore: hasMore2,
            fetchTags: fetchTags2
        } = useTags((page) => {
            return http.get<Resources<Tag>>('/tags', {
                kind: 'income',
                page: page + 1,
                _mock: 'tagIndex'
            })
        })
        return () => (
            <MainLayout class={s.layout}>{{
                title: () => '记一笔',
                icon: () => <img src={comeback} class={s.navIcon}/>,
                default: () => <>
                    <div class={s.wrapper}>
                        <Tabs v-model:selected={refKind.value} class={s.tabs}>
                            <Tab name="支出">
                                <Tags kind="expenses"/>
                            </Tab>
                            <Tab name="收入">
                                <Tags kind="income"/>
                            </Tab>
                        </Tabs>
                        <div class={s.inputPad_wrapper}>
                            <InputPad />
                        </div>
                    </div>
                </>
            }}</MainLayout>
        )
    }
})
