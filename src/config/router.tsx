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
import { ItemPage } from "../views/ItemPage";
import { ItemList } from "../components/item/ItemList";
import { ItemCreate } from "../components/item/ItemCreate";
import { TagPage } from "../views/Tagpage"
import { TagCreate } from "../components/tag/TagCteate"
import { TagEdit } from "../components/tag/TagEdit"
import {SignInPage} from "../views/SignInPage";
import {StatisticsPage} from "../views/StatisticsPage";
import {http} from "../shared/Http";


export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome', component: Welcome,
        beforeEnter:(_to,_from,next)=>{
            localStorage.getItem('skipFeatures')==='yes' ? next('/start') : next()
        },
        children: [
            {
                path: '',
                redirect: '/welcome/1'
            },
            { path: '1', name: 'Welcome1', components: { main: First, footer: FirstActions }, },
            { path: '2', name: 'Welcome2', components: { main: Second, footer: SecondActions }, },
            { path: '3', name: 'Welcome3', components: { main: Third, footer: ThirdActions }, },
            { path: '4', name: 'Welcome4', components: { main: Forth, footer: ForthActions }, },
        ]
    },
    { path: '/start', component: StartPage },
    {
        path: '/items', component: ItemPage,
        children: [
            { path: 'list', component: ItemList },
            { path: 'create', component: ItemCreate },
        ]
    },
    {
        path: '/tags', component: TagPage,
        children: [
            { path: 'create', component: TagCreate },
            { path: 'edit', component: TagEdit }
        ]
    },
    {
        path:'/sign_in',component:SignInPage
    },
    {
        path:'/statistics',component:StatisticsPage
    }
]

