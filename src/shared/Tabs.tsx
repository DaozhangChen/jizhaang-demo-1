import {defineComponent, PropType} from "vue";
import s from './Tabs.module.scss'
export const Tabs = defineComponent({
    props:{
        selected:{
            type:String as PropType<string>,
            required:false,
        },
    },
    setup:(props,context)=>{
        return  ()=> {
            const array = context.slots.default?.()
            if (!array) return () => null
            for (const element of array) {
                if (element.type !== Tab) {
                    throw new Error('<Tab> only accepts <Tab> as children')
                }
            }
           return <div class={s.tabs}>
               <nav>
               <ol class={s.tabs_nav}>
             {array.map(item=>
          <li class={item.props?.name===props.selected?s.selected:''}
               onClick={()=>context.emit('update:selected',item.props?.name)}
          >{item.props?.name}</li>)}
               </ol>
           </nav>
               <div></div>
            </div>
        }
    }
})


export const Tab = defineComponent({
    props:{
        name:{
            type:String as PropType<string>
        }
    },
    setup:(props,context)=>{
        return  ()=>(
            <div>{context.slots.default?.()}</div>
        )
    }
})