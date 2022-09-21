import { FunctionalComponent} from "vue";
import { RouterLink } from "vue-router";
import s from "./First.module.scss"

export const SecondActions:FunctionalComponent =()=>{
return(<div class={s.nav}>
    <p class={s.fake} >跳过</p>
    <RouterLink to='/welcome/3'>下一页</RouterLink>
    <RouterLink to='/start'>跳过</RouterLink>
    </div>
)}

SecondActions.displayName = 'SecondActions'