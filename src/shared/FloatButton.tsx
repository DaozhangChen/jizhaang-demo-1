import {defineComponent} from "vue";
import add from "../assets/icons/add.svg"
import s from "./FloatButton.module.scss"

export const FloatButton = defineComponent({
    setup:(props,context)=>{
        return ()=>(
            <div class={s.floatButton}>
                <img src={add} class={s.icon}/>
            </div>
        )
    }
})