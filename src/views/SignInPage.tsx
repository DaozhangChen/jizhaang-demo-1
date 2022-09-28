import {defineComponent, reactive} from "vue";
import {MainLayout} from "../layouts/MainLayout";
import {OverlayIcon} from "../shared/Overlay";
import s from './SignInPage.module.scss'
import {Form, FormItem} from "../shared/From";
import {Button} from "../shared/Button";
import {validate} from "../shared/validate";
import mangosteen from '../assets/icons/mangosteen.svg'
export const SignInPage =defineComponent({
    setup:(props,context)=>{
        const formData=reactive({
                email:'',
                code:''
            })
        const errors=reactive({
            email:[],
            code:[]
        })
        const onSubmit =(e:Event)=>{
            e.preventDefault()
            Object.assign(errors,{email:[],code:[]})
            Object.assign(errors,validate(formData,[
                {key:'email',type:'required',message:'必填'},
                {key:'email',type:'pattern',regex:/.+@.+/,message:'必须是邮箱地址'},
                {key:'code',type:'required',message:'必填'}
            ]))
        }
        return ()=>(
           <MainLayout>{{
             title:()=>'登录',
             icon:()=><OverlayIcon />,
               default:()=>(
                   <div class={s.wrapper}>
                       <div class={s.logo}>
                           <img class={s.icon} src={mangosteen}/>
                           <h1 class={s.appName}>山竹记账</h1>
                       </div>
                       <Form onSubmit={onSubmit}>
                           <FormItem label='邮箱地址' type='text' v-model={formData.email}
                                     placeholder='请输入邮箱，然后点击发送验证码'
                                     error={errors.email?.[0]}/>
                           <FormItem label='验证码' type='validationCode' v-model={formData.code}
                                     placeholder='请输入六位数'
                                     error={errors.code?.[0]}/>
                           <FormItem style={{paddingTop:'96px'}}>
                           <Button>登录</Button>
                           </FormItem>
                       </Form>
                   </div>
               )
           }}</MainLayout>
        )
    }
})