import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdateAvatar from "@/Pages/Profile/Partials/Avatar/UpdateAvatar.jsx";
import AdminLayout from "@/Layouts/AdminLayout.jsx";

export default function Edit({mustVerifyEmail, status, user}) {


    const props = usePage().props
    user = usePage().props.auth.user

    const asset = () => {
        //TODO: добави валидиране
        return `${user.avatar}`;
    }
    return (
        <AdminLayout
            header={
                <div className="grid">
                    <h1 className="text-xl col-span-full mx-auto font-mono leading-tight text-gray-50">
                        Your Profile
                    </h1>
                </div>
            }
        >
            <Head title="Profile"/>

            <div className="grid grid-cols-12 my-12">
                <div className="col-span-6 row-span-12">
                    <div className="grid grid-cols-12 grid-rows-12">
                        <div className="col-span-12 row-span-12 mx-auto">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl pb-5"
                            />
                            <UpdatePasswordForm className="max-w-xl pb-5"/>
                            <DeleteUserForm className="max-w-xl "/>


                        </div>
                    </div>
                </div>
                <div className="col-span-6 mx-auto">
                    <figure className="max-w-lg">
                        <img className="h-auto max-w-full rounded-lg" src={asset()}
                             alt=" :( we couldnt find it . try uploading it again"/>
                        <figcaption className="mt-2 text-sm text-center text-gray-300 dark:text-gray-400">Profile
                            Picture
                        </figcaption>
                    </figure>
                    <UpdateAvatar
                    />
                </div>
            </div>


        </AdminLayout>
    );
}
