import {defineComponent, ref} from "vue";
import {Button} from "../shared/Button";
import s from "./StartPage.module.scss"
import {FloatButton} from "../shared/FloatButton";
import {Center} from "../shared/Center";
import pig from '../assets/icons/pig.svg'
import {Navbar} from "../shared/Navbar";
import menu from '../assets/icons/menu.svg'
import {Overlay} from "../shared/Overlay";
export const StartPage =defineComponent({

setup(){
const refOverlayVisible =ref(false)
    const onClickMenu=()=>{
refOverlayVisible.value = !refOverlayVisible.value
    }
return()=>(
    <div>
        <nav>
            <Navbar>{
                {default:'山竹记账',icon:<img src={menu} alt={menu} class={s.navIcon}
                    onClick={onClickMenu}/>}
            }</Navbar>
        </nav>
        <Center class={s.pig_wrapper}>
            <img src={pig} alt={pig} class={s.pig}/>
        </Center>
    <div class={s.button_wrapper} >
     <Button class={s.button}>开始记账</Button>
    </div>
        <FloatButton/>
        {refOverlayVisible.value &&
        <Overlay onClose={()=>refOverlayVisible.value = false}/>
        }
        </div>
        )
}
})