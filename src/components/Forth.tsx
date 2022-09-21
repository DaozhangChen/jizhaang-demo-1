import { FunctionalComponent} from "vue";
import s from "./First.module.scss";
import cloud from"../assets/icons/cloud.svg"

export const Forth :FunctionalComponent=()=>{
    return (
        <div class={s.container}>   
             <div class={s.card}>
                <img src={cloud}/>
                <h2>云备份</h2>
                <h2>不怕数据丢失</h2>
             </div>
        </div>

    )
}

Forth.displayName = 'Forth'