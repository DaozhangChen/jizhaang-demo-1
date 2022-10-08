import { defineComponent, ref, Transition, VNode, watchEffect} from "vue";
import {RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter} from "vue-router";
import s from './Welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'
import { useSwipe } from "../hooks/useSwipe";
import {throtte} from "../shared/throtte";
const pushMap:Record<string, string>={
    'Welcome1':'/welcome/2',
    'Welcome2':'/welcome/3',
    'Welcome3':'/welcome/4',
    'Welcome4':'/items',
}


export const Welcome =defineComponent({
setup:(props,context)=>{
const main=ref<HTMLElement>()
const{direction,swiping}=useSwipe(main,{beforeStart:e => e.preventDefault()})
    const route = useRoute()
    const router = useRouter()
    const  replace=throtte(()=>{
        const name =(route.name||'Welcome1').toString()
        router.replace(pushMap[name]).then()
    },500)
watchEffect(()=>{
    if (swiping.value && direction.value==="left"){
        replace()
    }
})
    const onClick=()=>{
    localStorage.setItem('skipFeatures','yes')
    }
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
    <span onClick={onClick}>
     {/*解决bug*/}
    <RouterView name="footer"/>
        </span>
</footer>
</div> 
},

})