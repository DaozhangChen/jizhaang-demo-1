import {defineComponent, markRaw, reactive} from "vue";
import {Rules, validate} from "../../shared/validate";
import {MainLayout} from "../../layouts/MainLayout";
import comeback from "../../assets/icons/comeback.svg";
import s from "./Tag.module.scss";
import {EmojiSelect} from "../../shared/EmojiSelect";
import {Button} from "../../shared/Button";
import {TagForm} from "./TagForm";
import {useRoute} from "vue-router";
import {http} from "../../shared/Http";
import * as assert from "assert";
export const TagEdit =defineComponent({
    setup: () => {
        const route=useRoute()
        const numberId=parseInt(route.params.id!.toString())
        if (Number.isNaN(numberId)){
            return
        }
        const onDelete=async ()=>{
           await http.delete()
        }
        const onDeleteHard=()=>{}
        return () =>
            <MainLayout>{{
                title: () => '新建标签',
                icon: () => <img src={comeback} onClick={() => { }} />,
                default: () => (<>
                    <TagForm id={numberId}/>
                        <div class={s.actions}>
                            <Button level='danger' class={s.removeTags}
                                    onClick={()=>{onDelete} }>删除标签</Button>
                            <Button level='danger' class={s.removeTagsAndItems}
                                    onClick={()=>{onDeleteHard} }>删除标签和记账</Button>
                        </div>
                    </>
                )
            }}</MainLayout>
    }
})