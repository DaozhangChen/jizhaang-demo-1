import { defineComponent, PropType } from 'vue'
import { Center } from './Center'
import s from './ComingSoon.module.scss'
import pig from "../assets/icons/pig.svg";
import {Button} from "./Button";
import {useRouter} from "vue-router";
export const ComingSoon = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        const router = useRouter()
        const onClick = () => {
            router.back()
        }
        return () => (
            <div>
                <Center class={s.pig_wrapper}>
                    <img src={pig} alt={pig} class={s.pig}/>
                </Center>
                <p class={s.text}>敬请期待</p>
                <p class={s.link}>
                    <Button onClick={onClick}>返回</Button>
                </p>
            </div>
        )
    }
})