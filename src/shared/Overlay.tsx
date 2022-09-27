import {defineComponent, PropType, ref} from "vue";
import charts from "../assets/icons/charts.svg"
import notice from "../assets/icons/notice.svg"
import { RouterLink } from 'vue-router';
import classify from "../assets/icons/classify.svg"
import box from "../assets/icons/box.svg"
import s from "./Overlay.module.scss"
import menu from "../assets/icons/menu.svg";

export const Overlay =defineComponent({
    props:{
        onClose:{
            type:Function as PropType <() => void>
        }
    },
    setup:(props,context)=>{
        const onClickSignIn = () => { }
        const close=()=> {
            props.onClose?.()
        }
        return ()=><>
            <div class={s.mask} onClick={close}></div>
                <div class={s.overlay}>
                <section class={s.currentUser} onClick={onClickSignIn}>
                    <h2>未登录用户</h2>
                    <p>点击这里登录</p>
                </section>
                    <nav>
                        <ul class={s.action_list}>
                            <li>
                                <RouterLink to="/statistics" class={s.action}>
                                <img src={charts}/>
                                <span>统计图表</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/export" class={s.action}>
                                <img src={box}/>
                                <span>导出数据</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/notify" class={s.action}>
                                <img src={notice}/>
                                <span>记账提醒</span>
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