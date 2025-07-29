import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, useForm, usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {router} from '@inertiajs/react'
import DangerButton from "@/Components/DangerButton.jsx";
import {useState} from 'react'
import InputError from "@/Components/InputError.jsx";

const UpdateAvatar = ({user}) => {

    const props = usePage().props
    user = usePage().props.auth.user;

    const {data, setData, post, reset, errors, progress} = useForm(

    )

    const submit = (e) => {
        e.preventDefault()
        document.getElementById('avatar').value = null;
        router.post(route('profile.avatar.update'), {
            _method: 'put',
            _token: props.csrf_token,
            avatar: data.avatar,
        })
    }
    const [hidden, setHidden] = useState(false);
    const removeAvatar = (e) => {
        e.preventDefault()
        //setData('avatar','')
        document.getElementById('avatar').value = null;
        router.post(route('profile.avatar.update'), {
            _method: 'put',
            _token: props.csrf_token,
            //TODO: добави функционалност за изтриване на аватара
        })
    }
    return (
        <div className="relative w-full">

            <div className="grid drid-rows-12 grid-cols-12">
                <div className="col-span-6 p-5">
                    <div className="">
                        <form onSubmit={submit}>
                            <div className="max-w-4xl my-6 mx-3">
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

                            <PrimaryButton
                                type="submit"
                                className="my-6"
                            >
                                Update Avatar
                            </PrimaryButton>
                        </form>


                    </div>
                </div>
                <div className="col-span-6 ">
                    <form onSubmit={removeAvatar}>
                        <DangerButton
                            type="submit"

                        >

                            Remove Avatar
                        </DangerButton>
                    </form>
                </div>
            </div>
        </div>
    );

}
UpdateAvatar.layout = page => <AuthenticatedLayout children={page} title="Update User Avatar"/>

export default UpdateAvatar
