import MainLayout from '@/Layouts/MainLayout';
import {Head, usePage} from '@inertiajs/react';
import Typography from "@mui/material/Typography";
import * as React from "react";
import Divider from "@mui/material/Divider";

export default function EditContent({content:content}) {

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
