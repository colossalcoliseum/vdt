import MainLayout from "@/Layouts/MainLayout.jsx";
import {useTranslation} from 'react-i18next';
import {Head, useForm, usePage} from "@inertiajs/react";
import {useState} from "react";
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material';
import * as React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
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

const CreatePost = ({user: user, categories: categories}) => {
    const {t, i18n} = useTranslation();
    const FormGrid = styled(Grid)(() => ({
        display: 'flex',
        flexDirection: 'column',
    }));
    const {errors} = usePage().props;
    const props = usePage().props
    const [visibility, setVisibility] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [thumbnailPreview, setThumbnailPreview] = useState(null);



    const visibilities = [
        {name: t('public'), code: "public"},
        {name: t('private'), code: "private"}
    ];
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    categories = Array.from(categories);
    console.log(categories.name);
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    };
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);

            const imageUrl = URL.createObjectURL(file);
            setThumbnailPreview(imageUrl);
        } else {
            console.log("No Thumbnail Provided!")
        }
    };
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
    const theme = useTheme();


    user = usePage().props.auth.user;
    const submit = (e) => {
        e.preventDefault()
        post(route('post.store'), {
            _token: props.csrf_token,
        })
    }
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
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
    return (
        <Box sx={{
            width: '80%', margin: '0 auto', color: 'text.primary',
            '& *': {color: 'inherit'},
            border:'0.2rem solid',
            p:'5rem',
            borderRadius:'2rem',
            borderColor:'primary.dark'
        }}>
            <Head title="Create Content"/>
            <Typography variant="h3" sx={{color: 'primary.main', pb:2}}>
                Create Post
            </Typography>
            <Grid container spacing={3}>
                <FormGrid size={{xs: 12, md: 6}}>

                    <TextField
                        variant="outlined"
                        id="title"
                        name="title"
                        label="Title"
                        type="name"
                        placeholder="My first post"
                        autoComplete="title"
                        required
                        size={"medium"}
                     />
                </FormGrid>
                <FormGrid size={{xs: 12, md: 6}}>
                    <FormLabel htmlFor="last-name" required>
                        Thumbnail
                    </FormLabel>

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
                    <TextareaAutosize
                        id="description"
                        name="description"
                        type="description"
                        placeholder="Describe your Post"
                        autoComplete="description"
                        required
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
                            value={selectedCategory}
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
                                    <MenuItem value={category.slug}>{category.name}</MenuItem>
                                )
                            })}
                         </Select>
                    </FormControl>
                    <FormControl sx={{m: 1, width: 300, mt: 3}}>

                    </FormControl>
                </FormGrid>
                <FormGrid size={{xs: 6}}>
                    <FormLabel htmlFor="zip" required>
                       Main Image
                    </FormLabel>

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
                            onChange={handleThumbnailChange}
                            multiple
                        />
                    </Button>
                </FormGrid>
                <FormGrid size={{xs: 6}}>

                <Button variant='outlined' sx={{my:'0 auto'}}>
                    Upload
                </Button>
                </FormGrid>

            </Grid>
        </Box>
    )
}
CreatePost.layout = page => <MainLayout children={page} title="hohoho"/>
export default CreatePost
