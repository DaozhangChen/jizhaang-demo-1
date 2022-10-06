import { defineComponent, reactive } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import comeback from '../../assets/icons/comeback.svg';
import {TagForm} from "./TagForm";
import {BackIcon} from "../../shared/BackIcon";

export const TagCreate = defineComponent({
    setup: () => {
        return () =>
            <MainLayout>{{
                title: () => '新建标签',
                icon: () => <BackIcon />,
                default: () => (
                   <TagForm />
                )
            }}</MainLayout>
    }
})