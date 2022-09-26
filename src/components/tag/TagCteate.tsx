import { defineComponent, reactive } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import comeback from '../../assets/icons/comeback.svg'
import s from './Tag.module.scss'
import { EmojiSelect } from "../../shared/EmojiSelect";
import {Button} from "../../shared/Button";
import {Rules, validate} from "../../shared/validate";
import {TagForm} from "./TagForm";

export const TagCreate = defineComponent({
    setup: () => {
        const formData = reactive({
            name: '',
            sign: '',
        })
        const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
        const onSubmit = (e: Event) => {
            const rules: Rules<typeof formData> = [
                { key: 'name', type: 'required', message: '必填' },
                { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
                { key: 'sign', type: 'required', message: '必填' },
            ]
            Object.assign(errors, {
                name: undefined,
                sign: undefined
            })
            Object.assign(errors, validate(formData, rules))
            e.preventDefault()
        }
        return () =>
            <MainLayout>{{
                title: () => '新建标签',
                icon: () => <img src={comeback} onClick={() => { }} />,
                default: () => (
                   <TagForm />
                )
            }}</MainLayout>
    }
})