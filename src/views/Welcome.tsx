import { defineComponent, ref, Transition, VNode, watchEffect} from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import s from './Welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'
import { useSwipe } from "../hooks/useSwipe";


export const Welcome =defineComponent({
setup:()=>{
const main=ref<HTMLElement>()
const{direction,swiping}=useSwipe(main)
watchEffect(()=>{
    console.log(direction.value,swiping.value)
})
return () =>
<div class={s.wrapper}>
<header>
<img src={logo}/>
<h1>山竹记账</h1>
</header>
<main class={s.main} ref={main}>
<RouterView name="main">
{({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
    <Transition 
    enterFromClass={s.slide_fade_enter_from} 
    enterActiveClass={s.slide_fade_enter_active}
    leaveToClass={s.slide_fade_leave_to} 
    leaveActiveClass={s.slide_fade_leave_active}
    >
    {X}
    </Transition>
     }
</RouterView>

</main>
<footer>
    <RouterView name="footer"/>
</footer>
</div> 
},
watch:{
    $route(to,from){
            console.log(from.path);//从哪来
            console.log(to.path);//到哪去
     }
   }
})