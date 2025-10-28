import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {useTranslation} from 'react-i18next';
import {Head, useForm, usePage} from "@inertiajs/react";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {CloudUploadIcon} from "lucide-react";
import {styled} from '@mui/material/styles';
import MultipleSelectChip from "@/Components/MultipleSelectChip.jsx";
import CustomizedDialog from "@/Components/CustomizedDialog.jsx";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import {red} from "@mui/material/colors";
import {lightBlue} from "@mui/material/colors";

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
        <Box>
            <Typography variant="h4" gutterBottom
                        sx={{
                            color: 'text.secondary',
                            py: 8
                        }}
            >
                Create Video
            </Typography>
            <Grid
                borderRadius={3}
                elevation={1}
                spacing={2}
                sx={{p: 4, border: 3, bgcolor: 'white', borderColor: lightBlue['100']}}>
                <Grid
                    justifyContent={"flex"}
                    display="flex"
                    spacing={2}
                >


                    <Grid size={"grow"}
                          justifyContent="right"
                          display="flex"


                    >

                        <CustomizedDialog
                            title={"Preview"}
                            toggleButtonLabel={"Preview"}
                            closeButtonLabel={"Close Preview"}

                        >
                            <Paper elevation={4}
                                   sx={{
                                       maxWidth: 445,
                                       m: 6,
                                   }}>
                                <CardActionArea>
                                    <Paper underline="none"
                                           sx={{color: 'text.primary'}}>
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
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                {user.name}
                                            </Typography>
                                        </CardContent>
                                    </Paper>
                                </CardActionArea>
                            </Paper>
                        </CustomizedDialog>
                        <Button variant="contained" color="error"
                                disabled={processing}

                                sx={{
                                    ml: 2,
                                }}
                        >
                            X
                        </Button>

                    </Grid>
                </Grid>

                <Box component="form" onSubmit={submit}
                     alignItems="center"
                >
                    <Head title="Create New Video"/>


                    <Grid container columns={12} spacing={2}

                    >

                        <Grid size={12}

                        >
                            <TextField
                                id="title"
                                name="title"
                                label="Type Your Title"
                                placeholder="Describe Your Title"

                                fullWidth

                                variant="standard"
                                value={data.title}
                                onChange={(e) => {
                                    setData('title', e.target.value);
                                }}
                            />

                        </Grid>
                        <Grid size={6}

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
                                Add Video Thumbnail
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={handleThumbnailChange}
                                    multiple
                                />
                            </Button>
                        </Grid>
                        <Grid size={6}>

                            <Button
                                component="button"
                                role='button'
                                variant="outlined"
                                tabIndex={-1}
                                fullWidth
                                loadingPosition="end"
                                startIcon={<CloudUploadIcon/>}
                            >
                                Add Video File
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={handleVideoChange}
                                    multiple
                                />
                            </Button>
                        </Grid>
                        <Grid size={6}

                              justifyContent="center"
                              display="flex">

                            <MultipleSelectChip

                                label="Add Category"
                                categories={categories.map((category) => {
                                    return (
                                        <a>
                                            {category.name}
                                        </a>
                                    )
                                })}
                            />
                        </Grid>
                        <Grid size={6}
                              justifyContent="center"
                              display="flex">


                            <MultipleSelectChip
                                label="Add Sub Category (optional)"
                                categories={subCategories.map((category) => {
                                    return (
                                        <a>
                                            {category.name}
                                        </a>
                                    )
                                })}
                            />
                        </Grid>
                        <Grid size={12}>

                            <TextField

                                id="filled-textarea"
                                label="Type Your Description"
                                placeholder="Describe your video"
                                multiline
                                fullWidth

                                variant="standard"
                            />
                        </Grid>

                        <Grid size={12}
                              justifyContent="right"
                              display="flex"
                        >
                            <Button variant="contained" color="info"
                                    disabled={processing}
                                    type={'submit'}
                            >
                                Post
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </Grid>
        </Box>

    )
}
CreateVideo.layout = page => <AuthenticatedLayout children={page} active={true}/>
export default CreateVideo
