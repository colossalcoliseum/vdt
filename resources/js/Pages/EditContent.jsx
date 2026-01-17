import MainLayout from '@/Layouts/MainLayout';
import {Head, usePage} from '@inertiajs/react';

import UpdateAvatar from "@/Pages/Profile/Partials/Avatar/UpdateAvatar.jsx";

import Typography from "@mui/material/Typography";
import * as React from "react";
import Divider from "@mui/material/Divider";

export default function EditContent({content:content}) {


    const props = usePage().props

    console.log(permissions)

    const asset = () => {
        //TODO: добави валидиране
        return `${user.avatar}`;
    }
    return (
        <MainLayout

        >
            <Head title="Edit Profile"/>


            <Divider>
                <Typography level="h1" variant="h4" >
                    Edit
                </Typography>
            </Divider>









        </MainLayout>
    );
}
