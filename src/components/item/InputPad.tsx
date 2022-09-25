import {defineComponent, PropType, ref} from "vue";
import s from './InputPad.module.scss'
import date from '../../assets/icons/date.svg'
import { time } from '../../shared/time';

import 'vant/es/datetime-picker/style/index';
import 'vant/es/popup/style/index';
import { DatetimePicker, Popup } from "vant/es";


export const InputPad = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
    setup:(props,context)=>{
        const now = new Date()
        const refDate = ref<Date>(now)
        const refAmount=ref('')
const appendText=(n:Number|String)=>{
    if (refAmount.value.length >= 13) {
        return
      }
    if(n.toString()==='.'){
        if(refAmount.value===''){
            return
        }else if(refAmount.value.indexOf('.')!==-1){
            return
        }
    }
    if(n.toString()==='0'){
        if(refAmount.value.length===1 && refAmount.value.indexOf('0')===0){
            return
        }
    }
    if(refAmount.value.indexOf('0')===0 && n.toString()!=='0' && n.toString()!=='.' && refAmount.value.length===1){
        refAmount.value=n.toString()
    }else{
    refAmount.value += n.toString()}
}
        const buttons=[
            {text:'1',onClick:()=>{appendText(1)}},
            {text:'2',onClick:()=>{appendText(2) }},
            {text:'3',onClick:()=>{appendText(3) }},
            {text:'4',onClick:()=>{appendText(4) }},
            {text:'5',onClick:()=>{appendText(5) }},
            {text:'6',onClick:()=>{appendText(6) }},
            {text:'7',onClick:()=>{appendText(7) }},
            {text:'8',onClick:()=>{appendText(8) }},
            {text:'9',onClick:()=>{appendText(9) }},
            {text:'0',onClick:()=>{appendText(0) }},
            {text:'.',onClick:()=>{appendText('.') }},
            {text:'清空',onClick:()=>{refAmount.value=''}},
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
            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
              <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                onConfirm={setDate} onCancel={hideDatePicker}
              />
            </Popup>
          </span></span>
                </span>
                <span class={s.amount}>{refAmount.value}</span>
            </div>
            <div class={s.buttons}>
                {buttons.map(button=><button onClick={button.onClick}>{button.text}</button>)}
            </div>
            </>

    }
})