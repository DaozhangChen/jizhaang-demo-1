import { defineComponent, PropType } from 'vue'
import { Center } from './Center'
import s from './ComingSoon.module.scss'
import pig from "../assets/icons/pig.svg";
export const ComingSoon = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        return () => (
            <div>
                <Center class={s.pig_wrapper}>
                    <img src={pig} alt={pig} class={s.pig}/>
                </Center>
                <p class={s.text}>敬请期待</p>
            </div>
        )
    }
})