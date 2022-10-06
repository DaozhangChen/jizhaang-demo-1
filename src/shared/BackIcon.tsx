import {defineComponent} from "vue";
import comeback from "../assets/icons/comeback.svg";
import {useRoute, useRouter} from "vue-router";


export const BackIcon=defineComponent({
    setup:(props,context)=>{
        const route=useRoute()
        const router=useRouter()
        const onClick=()=>{
          const {return_to}=route.query
            if (return_to){
                router.push(return_to.toString())
            }else {
                router.back()
            }
        }

        return ()=>(
            <img src={comeback} onClick={onClick}/>
        )
    }
})