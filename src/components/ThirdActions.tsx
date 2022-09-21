import { FunctionalComponent} from "vue";
import { RouterLink } from "vue-router";
import s from "./First.module.scss"

export const ThirdActions:FunctionalComponent =()=>{
return(<div class={s.nav}>
    <p class={s.fake} >跳过</p>
    <RouterLink to='/welcome/4'>下一页</RouterLink>
    <RouterLink to='/start'>跳过</RouterLink>
    </div>
)}

ThirdActions.displayName = 'ThirdActions'