import {defineComponent, reactive, ref} from "vue";
import {MainLayout} from "../layouts/MainLayout";
import {OverlayIcon} from "../shared/Overlay";
import s from './SignInPage.module.scss'
import {Form, FormItem} from "../shared/From";
import {Button} from "../shared/Button";
import {hasError,  validate} from "../shared/validate";
import mangosteen from '../assets/icons/mangosteen.svg'
import {http} from "../shared/Http";
import {useBool} from "../hooks/useBool";
import {useRoute, useRouter} from "vue-router";
import {refreshMe} from "../shared/me";
import {useMeStore} from "../stores/useMeStore";
export const SignInPage =defineComponent({
    setup:(props,context)=>{
        const meStore=useMeStore()
        const formData=reactive({
                email:'',
                code:''
            })
        const errors=reactive({
            email:[],
            code:[]
        })
        const refValidationCode=ref<any>()
        const {ref:refDisabled,toggle,on:disabled,off:enable}=useBool(false)
        const router=useRouter()
        const route=useRoute()
        const onSubmit =async (e:Event)=>{
            e.preventDefault()
            Object.assign(errors,{email:[],code:[]})
            Object.assign(errors,validate(formData,[
                {key:'email',type:'required',message:'必填'},
                {key:'email',type:'pattern',regex:/.+@.+/,message:'必须是邮箱地址'},
                {key:'code',type:'required',message:'必填'}
            ]))
            if (!hasError(errors)){
                const response = await http.post<{ jwt: string }>('/session', formData, {
                }).catch(onError)
                localStorage.setItem('jwt', response.data.jwt)
                // router.push('/sign_in?return_to='+ encodeURIComponent(route.fullPath))
                const returnTo = route.query.return_to?.toString()
                meStore.refreshMe()
                router.push(returnTo || '/')

            }

        }
        const onError=(error:any)=>{
            if (error.response.status===422){
                Object.assign(errors,error.response.data.errors)
            }
            throw error
        }
        const onSubmitError=(error:any)=>{
            if (error.response.status===422){
                Object.assign(errors,error.response.data.errors)
            }
            throw error
        }
        const onClickSendValidationCode= async ()=> {
            disabled()
             await http
                .post('/validation_codes', {email: formData.email},{
                   _autoLoading:true
                })
                .catch(onError)
                .finally(enable)
            refValidationCode.value.startCount()
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
                           <FormItem ref={refValidationCode} label='验证码' type='validationCode' v-model={formData.code}
                                     placeholder='请输入六位数'
                                     disabled={refDisabled.value}
                                     onClick={onClickSendValidationCode}
                                     error={errors.code?.[0]}/>
                           <FormItem style={{paddingTop:'96px'}}>
                           <Button type='submit'>登录</Button>
                           </FormItem>
                       </Form>
                   </div>
               )
           }}</MainLayout>
        )
    }
})