import MainLayout from "@/Layouts/MainLayout.jsx";
import {Head, useForm, usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {router} from '@inertiajs/react'
import DangerButton from "@/Components/DangerButton.jsx";
import {useState} from 'react'
import InputError from "@/Components/InputError.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import Modal from "@/Components/Modal.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";

const UpdateAvatar = ({user}) => {

    const props = usePage().props
    user = usePage().props.auth.user;

    const {data, setData, post, reset, errors, progress, onSuccess, processing, clearErrors} = useForm(

    )
    const submit = (e) => {
        e.preventDefault();
        document.getElementById('avatar').value = null;

        router.post(route('profile.avatar.update'), {
            onSuccess: () => closeModal(),
            onFinish: () => closeModal(),
            _method: 'put',
            _token: props.csrf_token,
            avatar: data.avatar,

        })

    }
    const removeAvatar = (e) => {
        e.preventDefault();
        document.getElementById('avatar').value = null;

        router.post(route('profile.avatar.update'), {
            onSuccess: () => closeModal(),
            onFinish: () => closeModal(),
            _method: 'put',
            _token: props.csrf_token,
            avatar: '',

        })
    }
    const asset = () => {
        //TODO: добави валидиране
        return `${user.avatar}`;
    }
    return (
        <div className="relative w-full">
            <div className="relative inline-block">
                <a

                ><img className="h-auto max-w-full rounded-sm" src={asset()}
                      alt="Click here to change your profile avatar"/>
                    <input
                        type="file"
                        id='avatar'

                    className="opacity-0 "
                        onChange={e =>
                            setData('avatar', e.target.files[0])
                        }>

                    </input>
                </a>
            </div>


            <div className="my-12">
                <form onSubmit={submit} className="grid ">
                    <div className="max-w-4xl mb-12 mx-auto ">
                        <label
                            className=" text-lg text-gray-900 duration-300 transform -translate-y-4 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">

                        </label><br/>
                        <input
                            type="file"
                            id='avatar'

                            className=" flex items-start gap-4 rounded-sm text-gray-900 p-6 ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-gray-900 lg:pb-10 dark:bg-opacity-0 dark:ring-zinc-800 dark:hover:text-gray-900 dark:hover:ring-zinc-700 dark"

                            onChange={e =>
                                setData('avatar', e.target.files[0])
                            }/>
                    </div>
                    <InputError message={errors.avatar} className="mt-2"/>
                    <div className="grid grid-cols-2">
                        <PrimaryButton
                            type="submit"
                            className="mx-auto"
                        >
                            Update Avatar
                        </PrimaryButton>
                        <form onSubmit={removeAvatar}>
                            <PrimaryButton
                                className="border-none text-gray-900 rounded-sm bg-red-400 hover:bg-red-600"
                                type="submit"
                            >
                                Delete Avatar
                            </PrimaryButton>
                        </form>

                    </div>
                </form>

            </div>

        </div>
    );

}
UpdateAvatar.layout = page => <MainLayout children={page} title="Update User Avatar"/>

export default UpdateAvatar
