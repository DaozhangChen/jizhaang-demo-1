import {FunctionalComponent} from "vue";
import s from "./First.module.scss";
import chart from"../assets/icons/chart.svg"

export const Third :FunctionalComponent=()=>{
    return (
        <div class={s.container}>   
             <div class={s.card}>
                <img src={chart}/>
                <h2>数据可视化</h2>
                <h2>收支一目了然</h2>
             </div>
        </div>

    )
}

Third.displayName = 'Third'