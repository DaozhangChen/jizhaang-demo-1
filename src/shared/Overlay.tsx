import {defineComponent, PropType} from "vue";
import charts from "../assets/icons/charts.svg"
import notice from "../assets/icons/notice.svg"
import classify from "../assets/icons/classify.svg"
import box from "../assets/icons/box.svg"
import s from "./Overlay.module.scss"

export const Overlay =defineComponent({
    props:{
        onClose:{
            type:Function as PropType <() => void>
        }
    },
    setup:(props,context)=>{
        const close=()=> {
            props.onClose?.()
        }
        return ()=><>
            <div class={s.mask} onClick={close}></div>
                <div class={s.overlay}>
                <section >
                    <h2>未登录用户</h2>
                    <p>点击这里登录</p>
                </section>
                    <nav>
                        <ul>
                            <li>
                                <img src={charts}/>
                                <span>统计图表</span>
                            </li>
                            <li>
                                <img src={box}/>
                                <span>导出数据</span>
                            </li>
                            <li>
                                <img src={classify}/>
                                <span>自定义分类</span>
                            </li>
                            <li>
                                <img src={notice}/>
                                <span>记账提醒</span>
                            </li>
                        </ul>
                    </nav>
                </div>

            </>

    }
})