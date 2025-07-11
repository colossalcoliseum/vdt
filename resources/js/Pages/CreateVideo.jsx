import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useTranslation} from 'react-i18next';
import {useForm, usePage} from "@inertiajs/react";
import {useState} from "react";
import Checkbox from "@/Components/Checkbox.jsx";

//export default function CreateVideo() {
const CreateVideo = ({user}) => {
    const {t, i18n} = useTranslation();

    const [visibility, setVisibility] = useState();

    const visibilities = [
        {name: t('public'), code: "public"},
        {name: t('private'), code: "private"}
    ];
    const handleChangeVisibility = (e) => {
        e.visibility = e.target.value();
        setVisibility(e);

    }

    const {data, setData, post, progress} = useForm({
        title: null,
        description: null,
        visibility: null,
        thumbnail: null,
        video: null,
    })

    user = usePage().props.auth.user;

    const submit = (e) => {
        e.preventDefault()
        post(route('video.store'))
    }

    return (
        //  <AuthenticatedLayout>
        <div className="relative w-full">
            <div className="grid grid-cols-6 text-xl my-5 font-mono leading-auto text-white/50">
                <p className="col-span-4 col-start-3 inline-flex items-center"><ApplicationLogo
                    className="h-7 fill-current"/>'s {t("video creation studio")}
                </p>
            </div>

            <form onSubmit={submit}>

                <div className="max-w-4xl mx-auto my-auto">

                    <div className="relative grid mx-5  grid-cols-5 grid-rows-2 lg:gap-5">


                        <TextInput id="title" type="text" value={data.name}
                                   onChange={e => setData('title', e.target.value)}
                                   className=" col-start-1 col-end-4 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />

                        <label htmlFor="title"
                               className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            {t('video title')}
                        </label>
                        <div className="pt-3 sm:pt-5 text-white">
                            <p className="text-white">{t("thumbnail")}</p>

                            <input type="file" onChange={e => setData('thumbnail', e.target.files[0])}
                                   className="col-start-3 col-end-5 flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                            />
                        </div>


                        <div className="row-span-3 col-span-9">
                            <label htmlFor="message"
                                   className="block py-2 text-lg font-medium text-gray-900 dark:text-white">
                                {t("description")}
                            </label>
                            <textarea id="description" rows="4" value={data.description}
                                      onChange={e => setData('description', e.target.value)}
                                      className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="">

                            </textarea>
                        </div>
                        <div>

                            <p className="block py-2  text-gray-900 dark:text-white">{t("visibility")}</p>
                            <select onChange={e => setData('visibility', e.target.value)} value={data.visibility}>
                                {visibilities.map(({name, code}) =>
                                    (<option key={code} value={code} className="bg:bg-gray-700">
                                            {name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className='relative'>
                            <label className="text-white text-justify">{t("upload video")}</label>

                            <input type="file" onChange={e => setData('video', e.target.files[0])}
                                   className="col-start-3 col-end-5 flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                            />
                        </div>
                        <div className="col-span-full">
                            <PrimaryButton
                                type="submit"
                                /*    disabled={processing}*/
                                className="dark:bg-gray-300 dark:text-gray-600 hover:bg-gray-400 hover:text-gray-50 ">
                                {t("post")}
                            </PrimaryButton>

                        </div>
                    </div>

                </div>
            </form>
        </div>

    )
}
CreateVideo.layout = page => <AuthenticatedLayout children={page} title="hohoho"/>
export default CreateVideo
