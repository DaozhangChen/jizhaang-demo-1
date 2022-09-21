import {FunctionalComponent} from "vue";
import { RouterLink } from "vue-router";
import s from "./First.module.scss"
export const ForthActions :FunctionalComponent=()=>{
return(<div class={s.nav}>
    <p class={s.fake} >跳过</p>
    <RouterLink to='/start'>完成</RouterLink>
    <p class={s.fake} >跳过</p>
    </div>
)
}

ForthActions.displayName = 'ForthActions'