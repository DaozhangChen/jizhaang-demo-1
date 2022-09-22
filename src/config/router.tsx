import { First } from "../components/First"
import { Forth } from "../components/Forth"
import { Second } from "../components/Second"
import { Third } from "../components/Third"
import { Welcome } from "../views/Welcome"
import { RouteRecordRaw } from "vue-router"
import { FirstActions } from "../components/FirstActions"
import { SecondActions } from "../components/SecondActions"
import { ThirdActions } from "../components/ThirdActions"
import { ForthActions } from "../components/ForthActions"
import { StartPage } from "../views/StartPage"


export const routes :RouteRecordRaw[]= [
    {path:'/',redirect:'/welcome'},
    {path:'/welcome',component:Welcome,
    children:[
        {path:'',
        redirect:'/welcome/1'},
        {path:'1',name:'Welcome1',components:{main:First,footer:FirstActions},},
        {path:'2',name:'Welcome2',components:{main:Second,footer:SecondActions},},
        {path:'3',name:'Welcome3',components:{main:Third,footer:ThirdActions},},
        {path:'4',name:'Welcome4',components:{main:Forth,footer:ForthActions},},
    ]},
    {path:'/start',component:StartPage}
  ]
  
