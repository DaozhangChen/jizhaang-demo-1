import {defineComponent, onMounted, PropType, reactive} from "vue";
import s from "./Tag.module.scss";
import {EmojiSelect} from "../../shared/EmojiSelect";
import {Button} from "../../shared/Button";
import {hasError, Rules, validate} from "../../shared/validate";
import {useRoute, useRouter} from "vue-router";
import {http} from "../../shared/Http";
import {onFormError} from "../../shared/onFormError";

export const TagForm=defineComponent({
    props:{
        id:Number
    },
    setup:(props,context)=>{
        const route=useRoute()
        const router=useRouter()
        const formData = reactive<Partial<Tag>>({
            id:undefined,
            kind:route.query.kind!.toString() as ('expenses' | 'income'),
            name: '',
            sign: '',
        })
        const errors = reactive<FormErrors<typeof formData>>({})
        const onSubmit =async (e: Event) => {
            e.preventDefault()
            const rules: Rules<typeof formData> = [
                { key: 'name', type: 'required', message: '必填' },
                { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
                { key: 'sign', type: 'required', message: '必填' },
            ]
            Object.assign(errors, {
                name: [],
                sign: []
            })
            Object.assign(errors, validate(formData, rules))
            if (!hasError(errors)) {
                const promise = await formData.id ?
                    http.patch(`/tags/${formData.id}`, formData, { _mock: 'tagEdit',_autoLoading:true}) :
                    http.post('/tags', formData, { _mock: 'tagCreate',_autoLoading:true})
                await promise.catch((error) =>
                    onFormError(error, (data) => Object.assign(errors, data.errors))
                )
                router.back()
            }

        }
        onMounted(async ()=>{
            if (!props.id){return}
            const response = await http.get<Resource<Tag>>(
                `/tags/${props.id}`, { }, { _mock: 'tagShow' }
            )
                // @ts-ignore
            Object.assign(formData,response.data.resource)
        })
        return ()=>(<>
        <form class={s.form} onSubmit={onSubmit}>
            <div class={s.formRow}>
                <label class={s.formLabel}>
                    <span class={s.formItem_name}>标签名(最多四个字符)</span>
                    <div class={s.formItem_value}>
                        <input v-model={formData.name} class={[s.formItem, s.input, s.error]}></input>
                    </div>
                    <div class={s.formItem_errorHint}>
                        <span>{errors['name'] ?.[0]　??'　'}</span>
                    </div>
                </label>
            </div>
            <div class={s.formRow}>
                <label class={s.formLabel}>
                    <span class={s.formItem_name}>符号 {formData.sign}</span>
                    <div class={s.formItem_value}>
                        <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]}/>
                    </div>
                    <div class={s.formItem_errorHint}>
                        <span>{errors['sign']?.[0]　??　'　'}</span>
                    </div>
                </label>
            </div>
            <p class={s.tips}>记账时长按标签即可进行编辑</p>
            <div class={s.formRow}>
                <div class={s.formItem_value}>
                    <Button type='submit' class={[s.formItem, s.button]}>确定</Button>
                </div>
            </div>
        </form>
        </>
        )
    }
})