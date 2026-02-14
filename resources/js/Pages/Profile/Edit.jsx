import MainLayout from '@/Layouts/MainLayout';
import {Head, usePage} from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Typography from "@mui/material/Typography";
import * as React from "react";
import Divider from "@mui/material/Divider";
import ImageUploadForm from "@/Pages/Profile/Partials/ImageUploadForm.jsx";
import ContentGrid from "@/Pages/ContentGrid.jsx";
import ContentCard from "@/Pages/ContentCard.jsx";
import Box from "@mui/material/Box";
import Pagination from "@/Components/MainPagination.jsx";

 function Edit({mustVerifyEmail, status, user:user, permissions, posts:posts, videos:videos, content:content}) {


    const props = usePage().props
    user = usePage().props.auth.user
    console.log(posts)
    console.log(videos)
    console.log(content)
    const asset = () => {
        //TODO: добави валидиране
        return `${user.avatar}`;
    }
    return (
        <>
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

            </div>  <>
            <Box sx={{
                display: 'flex', justifyContent: 'center',  pb: '2rem',
            }}>
                <Divider variant="fullWidth" sx={{width: '80%'}}>
                    <Typography variant="h4" color='text.primary' >
                        Your Content
                    </Typography>
                </Divider>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                placeItems: 'center',
                justifyContent: 'center',
                gap: '4rem',
                mx: 'auto',
            }}>
                {content.data.map((item)=>{
                    return(
                        <ContentCard content={item} type={item.type.slug}/>
                    )}
                )}
            </Box>
            <Divider sx={{mt: '3rem', width: '80%', mx: 'auto'}}/>

        </>

        </>

     );
}
Edit.layout = (page) => <MainLayout children={page} title="Edit Profile"/>

export default Edit
