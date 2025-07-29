import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdateAvatar from "@/Pages/Profile/Partials/Avatar/UpdateAvatar.jsx";

export default function Edit({mustVerifyEmail, status, user}) {


    const props = usePage().props
    user = usePage().props.auth.user

    const asset = () => {
        //TODO: добави валидиране
        return `${user.avatar}`;
    }
    return (
        <AuthenticatedLayout

        >
            <Head title="Profile"/>
            <div className="grid">
            <h1 className="text-2xl col-span-full mx-auto mt-10 font-sans leading-tight text-gray-700">
                Your Profile
            </h1>
            </div>
            <div className="grid grid-cols-12 my-12">
                <div className="col-span-6 row-span-12">
                    <div className="grid grid-cols-12 grid-rows-12">
                        <div className="col-span-12 row-span-12 mx-auto my-auto">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl pb-12"
                            />
                            <UpdatePasswordForm className="max-w-xl pb-12"/>
                            <DeleteUserForm className="max-w-xl "/>


                        </div>
                    </div>
                </div>
                <div className="col-span-6 mx-auto">
                    <figure className="max-w-lg">
                        <img className="h-auto max-w-full rounded-sm" src={asset()}
                             alt="Avatar not found"/>
                        <figcaption className="mt-2 text-sm text-center text-black dark:text-black">Your Avatar
                        </figcaption>
                    </figure>
                    <UpdateAvatar
                    />
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
