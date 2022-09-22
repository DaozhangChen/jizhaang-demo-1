import {defineComponent, FunctionalComponent, ref, watchEffect} from "vue";
import s from "./First.module.scss";
import pig from"../assets/icons/pig.svg"


export const First:FunctionalComponent=()=>{
    return (
        <div class={s.container}>
            <div class={s.card}>
                <img src={pig}/>
                <h2>会省钱</h2>
                <h2>还要会花钱</h2>
            </div>
        </div>
    )
}

First.displayName = 'First'