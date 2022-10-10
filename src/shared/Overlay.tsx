import {defineComponent, onMounted, PropType, ref} from "vue";
import charts from "../assets/icons/charts.svg"
import notice from "../assets/icons/notice.svg"
import {RouterLink, useRoute} from 'vue-router';
import classify from "../assets/icons/classify.svg"
import box from "../assets/icons/box.svg"
import s from "./Overlay.module.scss"
import menu from "../assets/icons/menu.svg";
import {mePromise} from "./me";
import {Dialog} from "vant/es";
import {useMeStore} from "../stores/useMeStore";
import pig from "../assets/icons/pig.svg";

export const Overlay =defineComponent({
    props:{
        onClose:{
            type:Function as PropType <() => void>
        }
    },
    setup:(props,context)=>{
        const meStore=useMeStore()
        const close=()=> {
            props.onClose?.()
        }
        const route=useRoute()
        const me=ref<User>()
        onMounted( async ()=>{
            const response=await meStore.mePromise
            // @ts-ignore
            me.value=response?.data.resource

        })
        const onSignOut=async ()=>{
           await Dialog.confirm({
                title:'确认',
                message:'你真的要退出吗'
            })
            localStorage.removeItem('jwt')
            window.location.reload()
        }
        return ()=><>
            <div class={s.mask} onClick={close}></div>
                <div class={s.overlay}>
                <section class={s.currentUser}>
                    {me.value ?
                        (<div>
                            <h2 class={s.email}>{me.value?.email}</h2>
                                <p onClick={onSignOut}>点击这里退出登录</p>
                         </div>
                        ) :
                    <RouterLink to={`/sign_in?return_to=${route.fullPath}`}>
                        <h2>未登录用户</h2>
                        <p> 点击这里登录</p>
                    </RouterLink>
                    }

                </section>
                    <nav>
                        <ul class={s.action_list}>
                            <li>
                                <RouterLink to="/items" class={s.action}>
                                    <img src={pig} class={s.miniIcon}/>
                                    <span class={s.text}>记账</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/statistics" class={s.action}>
                                <img src={charts} class={s.miniIcon}/>
                                <span class={s.text}>统计图表</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/export" class={s.action}>
                                <img src={box} class={s.miniIcon}/>
                                <span class={s.text}>导出数据</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/notify" class={s.action}>
                                <img src={notice} class={s.miniIcon}/>
                                <span class={s.text}>记账提醒</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </>

    }
})

export const OverlayIcon =defineComponent({
    setup:(props,context)=>{
        const refOverlayVisible =ref(false)
        const onClickMenu=()=>{
            refOverlayVisible.value = !refOverlayVisible.value
        }
    return ()=>
        <>
            <img src={menu} alt={menu} class={s.icon}
                 onClick={onClickMenu}/>
            {refOverlayVisible.value &&
                <Overlay onClose={()=>refOverlayVisible.value = false}/>
            }
        </>


}})