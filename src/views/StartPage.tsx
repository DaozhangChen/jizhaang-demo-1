import {defineComponent, ref} from "vue";
import {Button} from "../shared/Button";
import s from "./StartPage.module.scss"
import {FloatButton} from "../shared/FloatButton";
import {Center} from "../shared/Center";
import pig from '../assets/icons/pig.svg'
import {Navbar} from "../shared/Navbar";
import menu from '../assets/icons/menu.svg'
import {Overlay, OverlayIcon} from "../shared/Overlay";
import {RouterLink} from "vue-router";
import {MainLayout} from "../layouts/MainLayout";

export const StartPage =defineComponent({

setup(){
return()=>(
        <MainLayout>
            {{
                title: () => '山竹记账',
                icon:() =><OverlayIcon />,
                default:()=><div>
                    <Center class={s.pig_wrapper}>
                    <img src={pig} alt={pig} class={s.pig}/>
                </Center>
                <div class={s.button_wrapper} >
                <RouterLink to='/items/create'>
                <Button class={s.button}>开始记账</Button>
                </RouterLink>
                </div>
                <RouterLink to='/items/create'>
                <FloatButton/>
                </RouterLink>
                </div>

            }}
        </MainLayout>
        )
}
})