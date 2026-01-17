import MainLayout from '@/Layouts/MainLayout';
import {Head, usePage} from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Typography from "@mui/material/Typography";
import * as React from "react";
import Divider from "@mui/material/Divider";
import ImageUploadForm from "@/Pages/Profile/Partials/ImageUploadForm.jsx";

export default function Edit({mustVerifyEmail, status, user, permissions}) {


    const props = usePage().props
    user = usePage().props.auth.user
    console.log(permissions)

    const asset = () => {
        //TODO: добави валидиране
        return `${user.avatar}`;
    }
    return (
        <MainLayout>
            <Head title="Edit Profile"/>
            <Divider>
                <Typography level="h1" variant="h4">
                    Your Profile
                </Typography>
            </Divider>
            <div className="grid grid-cols-12 my-12">
                <div className="col-span-6 row-span-12">
                    <div className="grid grid-cols-12 grid-rows-12">
                        <div className="col-span-12 row-span-12 mx-auto my-auto">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl pb-12"/>
                            <UpdatePasswordForm className="max-w-xl pb-12"/>
                            <DeleteUserForm className="max-w-xl "/>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 mx-auto">
                    <ImageUploadForm/>
                    <img style={{width: '15rem', borderRadius: '1rem'}} src={user.avatar}
                         alt="Click here to change your profile avatar"/>
                    <Typography variant="p">
                        Your Permissions:
                    </Typography>
                    <div className="h-52 border border-black overflow-auto">
                        <p className=" px-6 py-6">  {permissions.map(({name, id}) => (
                            <ul className="list-disc list-none   py-2">
                                <li><p> - to {name.replace("_", " ")}</p></li>
                            </ul>
                        ))
                        }</p></div>
                </div>

            </div>


        </MainLayout>
    );
}
