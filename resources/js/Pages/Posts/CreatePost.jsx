import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useTranslation} from 'react-i18next';
import {Head, useForm, usePage} from "@inertiajs/react";
import {useState} from "react";
import VDTCreationStudioDiv from "@/Components/VDTCreationStudioDiv.jsx";
import Tiptap from "@/Pages/Posts/Tiptap";
//export default function CreateVideo() {
const CreatePost = ({user}) => {
    const {t, i18n} = useTranslation();

    const { errors } = usePage().props;
    const props = usePage().props
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
        description: '',
        visibility: 'public',
        thumbnail: null,
        main_image: null,
    })

    user = usePage().props.auth.user;

    const submit = (e) => {
        e.preventDefault()
        post(route('post.store'),{
            _token: props.csrf_token,
        })
    }

    return (
        <div className="relative w-full p-12">
            <VDTCreationStudioDiv/>
            <Head title="Create Blog" />

            <form onSubmit={submit}>
                <div className="max-w-4xl mx-auto my-auto pt-12">

                    <div className="relative grid mx-5  grid-cols-5 grid-rows-2 lg:gap-5">


                        <TextInput id="title" type="text" value={data.title}
                                   onChange={e => setData('title', e.target.value)}
                                   className=" col-start-1 col-end-4 block border-none rounded-sm px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 appearance-none dark:text-gray-900 dark:focus:border-blue-500 focus:outline-none  focus:border-blue-600 peer"
                        />
                        <label htmlFor="title"
                               className="absolute text-lg text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-4 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            {t('title')}
                            {errors.title && <div className="text-red-500">{t("important")}: {errors.title}</div>}

                        </label>
                        <div className="pt-3 sm:pt-5 text-gray-900 col-span-5">
                            <p className="text-gray-900">{t("post_thumbnail")}
                                {errors.thumbnail && <div className="text-red-500">{t("important")}: {errors.thumbnail}</div>}
                            </p>

                            <input type="file" onChange={e => setData('thumbnail', e.target.files[0])}
                                   className="col-start-3 col-end-5 flex items-start gap-4 rounded-sm bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] transition duration-300 hover:text-black/70 focus:outline-none  lg:pb-10 dark:bg-gray-100  dark:hover:text-gray-900/70 "
                            />
                        </div>


                        <div className="row-span-3 col-span-9">
                            <label htmlFor="message"
                                   className="block py-2 text-lg font-medium text-gray-900 dark:text-gray-900">
                                {t("description")}
                                {errors.description && <div className="text-red-500">{t("important")}: {errors.description}</div>}
                            </label>

                            <Tiptap></Tiptap>

                           {/* <textarea id="editor" rows="4" value={data.description}
                                      onChange={e => setData('description', e.target.value)}
                                      className="block border-none p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-sm  dark:bg-gray-100 dark:text-gray-900"
                                      placeholder="">

                            </textarea>*/}
                        </div>
                        <div>

                            <p className="block py-2  text-gray-900 dark:text-gray-900">{t("visibility")}</p>
                            <select onChange={e => setData('visibility', e.target.value)} value={data.visibility}>
                                {visibilities.map(({name, code}) =>
                                    (<option key={code} value={code} className="bg:bg-gray-100">
                                            {name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className='col-span-5'>
                            <label className="text-gray-900 text-justify">{t("main_post_image")}
                                {errors.main_image && <div className="text-red-500">{t("important")}: {errors.main_image}</div>}
                            </label>

                            <input type="file" onChange={e => setData('main_image', e.target.files[0])}
                                   className="col-start-3 col-end-5 flex items-start gap-4 rounded-sm bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)]  transition duration-300 hover:text-black/70  focus:outline-none lg:pb-10 dark:bg-gray-100 dark:hover:text-gray-900/70 dark:focus-visible:ring-[#FF2D20]"
                            />
                        </div>
                        <div className="col-span-full">
                            <PrimaryButton
                                type="submit"
                                /*    disabled={processing}*/
                               >
                                {t("post")}
                            </PrimaryButton>

                        </div>
                    </div>

                </div>
            </form>
        </div>

    )
}
CreatePost.layout = page => <AuthenticatedLayout children={page} title="hohoho"/>
export default CreatePost
