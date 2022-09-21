import { defineComponent, FunctionalComponent} from "vue";
import s from "./First.module.scss";
import clock from"../assets/icons/clock.svg"

export const Second :FunctionalComponent=()=>{
    return (
        <div class={s.container}>   
             <div class={s.card}>
                <img src={clock}/>
                <h2>每日提醒</h2>
                <h2>不会遗漏每一笔账单</h2>
             </div>
        </div>

    )
}

Second.displayName = 'Second'