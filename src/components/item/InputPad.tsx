import {defineComponent, PropType, ref} from "vue";
import s from './InputPad.module.scss'
import date from '../../assets/icons/date.svg'

import { time } from '../../shared/time';
import { Button } from 'vant';

export const InputPad = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
    setup:(props,context)=>{
        const now = new Date()
        const refDate = ref<Date>(now)
        const buttons=[
            {text:'1',onClick:()=>{ }},
            {text:'2',onClick:()=>{ }},
            {text:'3',onClick:()=>{ }},
            {text:'清空',onClick:()=>{ }},
            {text:'4',onClick:()=>{ }},
            {text:'5',onClick:()=>{ }},
            {text:'6',onClick:()=>{ }},
            {text:'+',onClick:()=>{ }},
            {text:'7',onClick:()=>{ }},
            {text:'8',onClick:()=>{ }},
            {text:'9',onClick:()=>{ }},
            {text:'-',onClick:()=>{ }},
            {text:'.',onClick:()=>{ }},
            {text:'0',onClick:()=>{ }},
            {text:'删',onClick:()=>{ }},
            {text:'提交',onClick:()=>{ }},
        ]
        const refDatePickerVisible = ref(false)
        const showDatePicker = () => refDatePickerVisible.value = true
        const hideDatePicker = () => refDatePickerVisible.value = false
        const setDate = (date:Date) => { refDate.value = date; hideDatePicker() }
        return ()=><>
            <div class={s.dateAndAmount}>
                <span class={s.date} >
                    <img src={date} class={s.icon}/>
                    <span><span>
            <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
            <Button />
          </span></span>
                </span>
                <span class={s.amount}>199.99</span>
            </div>
            <div class={s.buttons}>
                {buttons.map(button=><button onClick={button.onClick}>{button.text}</button>)}
            </div>
            </>

    }
})