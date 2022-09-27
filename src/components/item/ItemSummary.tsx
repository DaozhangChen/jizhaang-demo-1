import {defineComponent, PropType} from "vue";

export const ItemSummary=defineComponent({
    props:{
        starDate:{
            type:String as PropType<string>,
            required:true
        },
        endDate:{
            type:String as PropType<string>,
            required: true
        }
    },
    setup:(props,context)=>{
        return ()=>(
            <>
            <div>hi</div>
            </>
        )
    }
})