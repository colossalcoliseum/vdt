import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useTranslation} from 'react-i18next';
import {Head, useForm, usePage} from "@inertiajs/react";
import {useState} from "react";
import Checkbox from "@/Components/Checkbox.jsx";
import VDTCreationStudioDiv from "@/Components/VDTCreationStudioDiv.jsx";
import {ChangeEvent} from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
//export default function CreateVideo() {
const CreateVideo = ({user}) => {
    const {t, i18n} = useTranslation();

    const { errors } = usePage().props;
    const { flash } = usePage().props;
    const props = usePage().props
    const [visibility, setVisibility] = useState();
    const [videoPreview, setVideoPreview] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);

    const visibilities = [
        {name: t('public'), code: "2"},
        {name: t('private'), code: "1"}
    ];
    const handleChangeVisibility = (e) => {
        e.visibility = e.target.value();
        setVisibility(e);

    }
    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('video', file);

            const videoUrl = URL.createObjectURL(file);
            setVideoPreview(videoUrl);
        }else{
            console.log("No Video Provided!")
        }
    };
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);

            // Създаваме preview URL за thumbnail-а
            const imageUrl = URL.createObjectURL(file);
            setThumbnailPreview(imageUrl);
        }else{
            console.log("No Thumbnail Provided!")
        }
    };

    const {data, setData, post, progress, processing} = useForm({
        title: null,
        description: '',
        visibility: 'public',
        thumbnail: '',
        video: null,
    })

    user = usePage().props.auth.user;

    const submit = (e) => {
        e.preventDefault()
        if (!data.title || !data.video) {
            alert(t('Моля попълнете всички задължителни полета'));
            return;
        }

        post(route('moderate.videos.store'),{
            _token: props.csrf_token,
            onSuccess: () => {
                if (videoPreview) URL.revokeObjectURL(videoPreview);
                if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview);
            },
            onError: (errors) => {
                console.log('Грешки при качването:', errors);
            }
        })

    }

    return (
        <Paper elevation={3} >
        <div className="relative w-full p-12">
            <Head title="Create Video" />

            <Typography variant="h4" gutterBottom
            sx={{ color: 'text.secondary',
        }}
            >
            Create New Video
        </Typography>
            {flash?.success && (
                <div className="max-w-4xl mx-auto mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    {flash.success}
                </div>
            )}

            {errors?.error && (
                <div className="max-w-4xl mx-auto mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {errors.error}
                </div>
            )}
            <Box component="form" onSubmit={submit}>

                <div className="max-w-4xl mx-auto my-auto pt-12">

                    <div className="relative grid mx-5 grid-cols-5 grid-rows-2 lg:gap-5">


                        <TextInput id="title" type="text" value={data.title}
                                   onChange={e => setData('title', e.target.value)}
                                   className=" col-start-1 col-end-4 block rounded-sm px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label htmlFor="title"
                               className="absolute text-lg text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-4 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            {t('video title')}
                            {errors.title && <div className="text-red-500">{t("important")}: {errors.title}</div>}

                        </label>
                        <div className="pt-3 sm:pt-5 text-gray-900 col-span-5">
                            <p className="text-gray-900">{t("thumbnail")}
                                {errors.thumbnail && <div className="text-red-500">{t("important")}: {errors.thumbnail}</div>}
                            </p>

                            <input type="file" onChange={handleThumbnailChange}
                                   className="col-start-3 col-end-5 flex items-start gap-4 rounded-sm bg-gray-100 p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] transition text-gray-900 duration-300 hover:text-gray-300  focus-visible:ring-[#FF2D20] lg:py-10 dark:bg-gray-100 dark:hover:text-gray-900"
                            />
                            {thumbnailPreview && (
                                <div className="mt-4">
                                    <img
                                        src={thumbnailPreview}
                                        alt="Thumbnail preview"
                                        className="max-w-xs max-h-48 rounded-lg border"
                                    />
                                </div>
                            )}
                        </div>


                        <div className="row-span-3 col-span-9">
                            <label htmlFor="message"
                                   className="block py-2 text-lg font-medium text-gray-900 dark:text-gray-900">
                                {t("description")}
                                {errors.description && <div className="text-red-500">{t("important")}: {errors.description}</div>}
                            </label>
                            <textarea id="description" rows="4" value={data.description}
                                      onChange={e => setData('description', e.target.value)}
                                      className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-100 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="">

                            </textarea>
                        </div>
                        <div>

                            <p className="block py-2  text-gray-900 dark:text-gray-900">{t("visibility")}</p>
                            <select onChange={e => setData('visibility_id', e.target.value)} value={data.visibility}>
                                {visibilities.map(({name, code}) =>
                                    (<option key={code} value={code} className="bg:bg-gray-700">
                                            {name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className='col-span-5'>

                            <label className="text-gray-900 text-justify block mb-2">
                                {t("upload video")} *
                                {errors.video && (
                                    <span className="text-red-500 ml-2">
                                        {t("important")}: {errors.video}
                                    </span>
                                )}
                            </label>
                            <input type="file" accept="video/*"
                                   onChange={handleVideoChange}
                                   className="col-start-3 col-end-5 flex items-start gap-4 rounded-sm bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-gray-100 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                            />
                            {videoPreview && (
                                <div className="mt-4">
                                    <video
                                        src={videoPreview}
                                        controls
                                        className="max-w-md max-h-64 rounded-lg"
                                    />
                                </div>
                            )}
                            {progress && (
                                <div className="mt-4">
                                    <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                                            style={{width: `${progress.percentage}%`}}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {t("Качване")}: {progress.percentage}%
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="col-span-full">

                            <Button variant="contained" color="success"
                                disabled={processing}
                                    type={'submit'}
                            >
                                Post
                            </Button>                        </div>
                    </div>

                </div>
            </Box>
        </div>
        </Paper>
    )
}
CreateVideo.layout = page => <AuthenticatedLayout children={page} active={true} title="hohoho"/>
export default CreateVideo
