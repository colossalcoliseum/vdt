import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdateAvatar from "@/Pages/Profile/Partials/Avatar/UpdateAvatar.jsx";
import Dropdown from "@/Components/Dropdown.jsx";

export default function Edit({mustVerifyEmail, status, user, permissions}) {


    const props = usePage().props
    user = usePage().props.auth.user
    console.log(permissions)

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


                    <UpdateAvatar/>
                    <span className="text-xl tracking-wide">Your Permissions:</span>
                    <div className="h-52 border border-black overflow-auto">
                        <p className=" px-6 py-6">  {permissions.map(({name, id}) => (

                            <ul className="list-disc list-none   py-2">
                                <li><p> - to {name.replace("_", " ")}</p></li>

                            </ul>
                        ))
                        }</p></div>
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
