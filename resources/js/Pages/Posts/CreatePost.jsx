import MainLayout from "@/Layouts/MainLayout.jsx";
import {useTranslation} from 'react-i18next';
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import {useState} from "react";
import Grid from '@mui/material/Grid';
import {Modal, styled} from '@mui/material';
import * as React from "react";
import Checkbox from '@mui/material/Checkbox';
import { router } from '@inertiajs/react';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {useTheme} from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import {CloudUploadIcon} from "lucide-react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import ContentCard from "@/Pages/ContentCard.jsx";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";


const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
const CreatePost = ({user: user, categories: categories}) => {
    const {t, i18n} = useTranslation();

    const {errors} = usePage().props;
    const props = usePage().props
    const [visibility, setVisibility] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [mainImagePreview, setMainImagePreview] = useState(null);

    categories = Array.from(categories);
    console.log(categories.name);
    const [personName, setPersonName] = React.useState([]);
    const VisuallyHiddenInput = styled('input')`
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        white-space: nowrap;
        width: 1px;
    `;
    const handleChange = (event) => {
        setData('category', event.target.value);
    };
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);

            const imageUrl = URL.createObjectURL(file);
            setThumbnailPreview(imageUrl);
        }
    };
    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('main_image', file);

            const imageUrl = URL.createObjectURL(file);
            setMainImagePreview(imageUrl);
        }
    };
    const handleChangeVisibility = (e) => {
        e.visibility = e.target.value();
        setVisibility(e);

    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
          boxShadow: 24,
        borderRadius: theme => theme.shape.borderRadius

    };

    const {data, setData, post, progress} = useForm({
        title: '',
        description: '',
        visibility: 'public',
        thumbnail: '',
        main_image: '',
        category: '',
    })


    user = usePage().props.auth.user;
    const submit = (e) => {
        e.preventDefault()
        post(route('posts.store'), {
            _token: props.csrf_token,
        })
    }


    return (
        <Box sx={{
            margin: '0 auto', color: '#120202',
            '& *': {color: 'inherit'},
         }}>
            <Head title="Create Content"/>
            <Grid container sx={{ justifyContent: 'flex-end', pr:'12rem', pb:'0.3rem' }}>
                <Grid size="auto">

                    <Button variant="contained" color="error"
                            onClick={() => window.history.back()}>
                        X
                    </Button>
                </Grid>
            </Grid>
            <form onSubmit={submit}>
            <Box sx={{
                width: '80%', margin: '0 auto',
                '& *': {color: 'inherit'},
                border:'0.2rem solid',
                p:'5rem',
                backgroundColor:'primary.light',
                borderRadius: theme => theme.shape.borderRadius,
                borderColor:'primary.main'}}>
            <Typography variant="h3" sx={{color: 'primary.main', pb:2}}>
                Create Post
            </Typography>
            <Grid container spacing={3}>
                <FormGrid size={{xs: 12, md: 6}}>


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
                </FormGrid>
                <FormGrid size={{xs: 12, md: 6}}>

                    <Button
                        component="label"
                        role='button'
                        variant="outlined"
                        tabIndex={-1}
                        fullWidth
                        loadingPosition="end"
                        startIcon={<CloudUploadIcon/>}
                    >
                        Add Post Thumbnail
                        <VisuallyHiddenInput
                            type="file"
                            onChange={handleThumbnailChange}
                            multiple
                        />
                    </Button>
                </FormGrid>
                <FormGrid size={{xs: 12}}>
                    <FormLabel htmlFor="address1" required>
                        Description
                    </FormLabel>
                    <TextField
                        onChange={(e)=>setData('description', e.target.value)}
                        id="description"
                        name="description"
                        placeholder="Describe your Post"
                        required
                        value={data.description}
                        multiline
                        rows={4}
                        size="medium"
                        color='text.primary'
                     />
                </FormGrid>


                <FormGrid size={{xs: 12}}>
                    <FormControl sx={{ m: 1, minWidth: 80}}>
                        <InputLabel id="demo-simple-select-autowidth-label" required>Choose Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={data.category}
                            onChange={handleChange}
                            autoWidth
                            label="Category"
                            variant='standard'

                        >
                            <MenuItem value="">
                                <em>Category</em>
                            </MenuItem>
                            {categories.map((category)=>{
                                return(
                                    <MenuItem key={category.id} value={category.slug}>{category.name}</MenuItem>
                                )
                            })}
                         </Select>
                    </FormControl>
                    <FormControl sx={{m: 1, width: 300, mt: 3}}>

                    </FormControl>
                </FormGrid>
                <FormGrid size={{xs: 6}}>


                    <Button
                        component="label"
                        role='button'
                        variant="outlined"
                        tabIndex={-1}
                        fullWidth
                        loadingPosition="end"
                        startIcon={<CloudUploadIcon/>}
                    >
                        Add Post Main Image
                        <VisuallyHiddenInput
                            type="file"
                            onChange={handleMainImageChange}
                            required
                        />
                    </Button>
                </FormGrid>
                <FormGrid size={{xs: 3}}>

                    <Button onClick={handleOpen} variant='outlined' sx={{backgroundColor:'info.light', color: 'black'}}>
                        See Preview</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Card sx={{ maxWidth: 345, borderRadius: theme => theme.shape.borderRadius  }} elevation={3}>

                                    <CardActionArea>
                                        {thumbnailPreview&& <CardMedia
                                            component="img"
                                            height="140"

                                            image={thumbnailPreview}
                                            alt={data.title}
                                            sx={{ height: '15rem' }}
                                        />}
                                        <CardContent  >
                                            <Typography gutterBottom variant="h5" component="div"
                                                        sx={{
                                                            color:'text.primary',
                                                            overflow: "hidden",
                                                            display: "-webkit-box",
                                                            WebkitLineClamp: "2",
                                                            WebkitBoxOrient: "vertical",
                                                        }}>
                                                {data.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                                {user.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                            </Card>
                         </Box>
                    </Modal>
                </FormGrid>
                <FormGrid size={{xs: 3}}>

                <Button variant='outlined' type='submit' sx={{my:'0 auto',color:'black', backgroundColor:'success.light'}}>
                    Upload
                </Button>
                </FormGrid>

            </Grid>
            </Box>
            </form>
        </Box>
    )
}
CreatePost.layout = page => <MainLayout children={page} title="hohoho"/>
export default CreatePost
