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
import ListMenu from "@/Components/ListMenu.jsx";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {Chip} from "@mui/material";
import {CloudUploadIcon} from "lucide-react";
import {styled} from '@mui/material/styles';
import MultipleSelectChip from "@/Components/MultipleSelectChip.jsx";
import CustomizedDialog from "@/Components/CustomizedDialog.jsx";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import * as React from "react";


//export default function CreateVideo() {
const CreateVideo = ({categories, subCategories}) => {
    const {t, i18n} = useTranslation();

    const {errors} = usePage().props;
    const {flash} = usePage().props;
    const props = usePage().props
    const [visibility, setVisibility] = useState();
    const [videoPreview, setVideoPreview] = useState('');
    const [titlePreview, setTitlePreview] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);

    const visibilities = [
        {name: t('public'), code: 2},
        {name: t('private'), code: 1}
    ];
    const handleChangeVisibility = (e) => {
        e.visibility = e.target.value();
        setVisibility(e);

    }
    const user = usePage().props.auth.user
    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('video', file);

            const videoUrl = URL.createObjectURL(file);
            setVideoPreview(videoUrl);
        } else {
            console.log("No Video Provided!")
        }
    };
    const previewTitle = (e) => {
        const title = e.target.value;
        setTitlePreview(title);
    };
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);

            // Създаваме preview URL за thumbnail-а
            const imageUrl = URL.createObjectURL(file);
            setThumbnailPreview(imageUrl);
        } else {
            console.log("No Thumbnail Provided!")
        }
    };

    const {data, setData, post, progress, processing} = useForm({
        title: '',
        description: '',
        visibility_id: 1,
        thumbnail: '',
        video: null,
        user_id: usePage().props.auth.user
    })


    const submit = (e) => {
        e.preventDefault()
        if (!data.title || !data.video) {
            alert(t('Моля попълнете всички задължителни полета'));
            return;
        }

        post(route('moderate.videos.store'), {
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
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <Paper elevation={3} sx={{m: 5, p: 5}}
        >
            <Grid size={12}
                  justifyContent="right"
                  display="flex"

            >

                <Button variant="contained" color="warning"
                        disabled={processing}
                        type={'submit'}
                >
                    X
                </Button>

            </Grid>

            <Box component="form" onSubmit={submit} sx={{mx: 3, px: 3}}
                 alignItems="center"
            >
                <Head title="Create Video"/>
                <Typography variant="h4" gutterBottom
                            sx={{
                                color: 'text.secondary',

                                mb: 4,
                                ml: 5,
                            }}

                >
                    Create New Video
                </Typography>



                <Grid container spacing={4} columns={12}

                >

                    <Grid size={12} sx={{}}>
                        <TextField
                            id="title"
                            name="title"
                            label="Title"
                            placeholder="Title"
                            multiline
                            fullWidth
                            variant="filled"
                            value={data.title}
                            onChange={(e)=>
                            {setData('title', e.target.value);}}
                        />

                    </Grid>
                    <Grid size={6} sx={{p: '1ch'}}
                    display="flex"
                          alignItems="center"
                    >


                        <Button
                            component="label"
                            role='button'
                            variant="outlined"
                            tabIndex={-1}
                            fullWidth
                            loadingPosition="end"
                            startIcon={<CloudUploadIcon/>}
                        >
                            Video Thumbnail
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleThumbnailChange}
                                multiple
                            />
                        </Button>
                    </Grid>
                    <Grid size={6} sx={{p: '1ch'}}>

                        <Button
                            component="label"
                            role='button'
                            variant="outlined"
                            tabIndex={-1}
                            fullWidth
                            loadingPosition="end"
                            startIcon={<CloudUploadIcon/>}
                        >
                            Video File
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleVideoChange}
                                multiple
                            />
                        </Button>
                    </Grid>
                    <Grid size={6} sx={{p: '1ch'}}

                          justifyContent="center"
                          display="flex">

                        <MultipleSelectChip
                            label="Category"
                            categories={categories.map((category) => {
                                return (
                                    <a>
                                        {category.name}
                                    </a>
                                )
                            })}
                        />
                    </Grid>
                    <Grid size={6} sx={{p: '1ch'}}
                          justifyContent="center"
                          display="flex">


                        <MultipleSelectChip
                            label="Sub Category"
                            categories={subCategories.map((category) => {
                                return (
                                    <a>
                                        {category.name}
                                    </a>
                                )
                            })}
                        />
                    </Grid>
                    <Grid size={12} sx={{p: '1ch'}}>

                        <TextField
                            id="filled-textarea"
                            label="Description"
                            placeholder="Describe your video"
                            multiline
                            fullWidth
                            variant="filled"
                        />
                    </Grid>

                        <Grid size={6} sx={{p: '1ch'}}
                              justifyContent="center"
                              display="flex"

                        >

                            {/*<Button variant="contained" color="info"
                                    disabled={processing}
                                    type={'submit'}
                            >
                                See Preview
                            </Button>*/}
                            <CustomizedDialog
                            title={"Preview"}
                            toggleButtonLabel={"See Preview"}
                            closeButtonLabel={"Close Preview"}

                            >
                                <Paper elevation={4}
                                       sx={{ maxWidth: 445,
                                           m:6,
                                       }}>
                                    <CardActionArea>
                                        <Paper  underline="none"
                                              sx={{ color: 'text.primary' }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                src={thumbnailPreview}

                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div"
                                                            sx={{
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis",
                                                                display: "-webkit-box",
                                                                WebkitLineClamp: "2",
                                                                WebkitBoxOrient: "vertical",
                                                            }}>

                                                    {data.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {user.name}
                                                </Typography>
                                            </CardContent>
                                        </Paper>
                                    </CardActionArea>
                                </Paper>
                            </CustomizedDialog>

                        </Grid>
                        <Grid size={6} justifyContent="center"
                              sx={{p: '1ch'}}
                              display="flex"
                        >


                            <Button variant="contained" color="success"
                                    disabled={processing}
                                    type={'submit'}
                            >
                                Post
                            </Button>
                        </Grid>
                    </Grid>

            </Box>

        </Paper>


    )
}
CreateVideo.layout = page => <AuthenticatedLayout children={page} active={true} title="hohoho"/>
export default CreateVideo
