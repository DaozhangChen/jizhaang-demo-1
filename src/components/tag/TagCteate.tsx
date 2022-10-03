import { defineComponent, reactive } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import comeback from '../../assets/icons/comeback.svg';
import {TagForm} from "./TagForm";

export const TagCreate = defineComponent({
    setup: () => {
        return () =>
            <MainLayout>{{
                title: () => '新建标签',
                icon: () => <img src={comeback} onClick={() => { }} />,
                default: () => (
                   <TagForm />
                )
            }}</MainLayout>
    }
})