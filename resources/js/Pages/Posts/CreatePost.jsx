import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useTranslation} from 'react-i18next';
import {Head, useForm, usePage} from "@inertiajs/react";
import {useState} from "react";
import VDTCreationStudioDiv from "@/Components/VDTCreationStudioDiv.jsx";
import Tiptap from "@/Pages/Posts/Tiptap";
import Box from '@mui/material/Box';
import Input from '@mui/joy/Input';
import Grid from '@mui/material/Grid';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import {Sheet, Textarea} from "@mui/joy";
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import {styled} from '@mui/joy';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

const CreatePost = ({user}) => {
    const {t, i18n} = useTranslation();

    const {errors} = usePage().props;
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
        post(route('post.store'), {
            _token: props.csrf_token,
        })
    }
    const Item = styled(Sheet)(({theme}) => ({
        backgroundColor: 'rgb(205,235,255,0.2)',
        border: '0.2rem solid rgb(0,138,255,0.1)',

        ...theme.typography['body-sm'],
        padding: theme.spacing(1),
        textAlign: 'center',
        borderRadius: 6,

    }));
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

        <Grid container spacing={2} sx={{flexGrow: 1, mt:12}}>
            <Grid size={8}>
                <Item>
                    <Typography variant="h6" sx={{p: 4}}>
                        First Seen
                    </Typography>
                    <form onSubmit={submit}>
                        <Grid container spacing={1} sx={{mx: 12}}>
                            <Grid size={8}>

                                <Input id="title" type="text" value={data.title}
                                       onChange={e => setData('title', e.target.value)}
                                       size="lg" name="Size" placeholder="Title"/>
                            </Grid>
                            <Grid size={4} sx={{}}>

                                <Button
                                    component="label"
                                    role={undefined}
                                    tabIndex={-1}
                                    variant="outlined"
                                    color="neutral"
                                    startDecorator={
                                        <SvgIcon>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                />
                                            </svg>
                                        </SvgIcon>
                                    }
                                >
                                    Upload Main Image
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                                <Button
                                    sx={{mt:1}}
                                    component="label"
                                    role={undefined}
                                    tabIndex={-1}
                                    variant="outlined"
                                    color="neutral"
                                    startDecorator={
                                        <SvgIcon>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                />
                                            </svg>
                                        </SvgIcon>
                                    }
                                >
                                    Upload Thumbnail Image
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </Grid>
                        </Grid>

                        <Typography variant="h6" sx={{p: 4}}>
                            Description
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Tiptap></Tiptap>
                        </Box>
                        {/* <textarea id="editor" rows="4" value={data.description}
                                      onChange={e => setData('description', e.target.value)}
                                      className="block border-none p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-sm  dark:bg-gray-100 dark:text-gray-900"
                                      placeholder="">

                            </textarea>*/}
                        <div>

                            {/*    <p className="block py-2  text-gray-900 dark:text-gray-900">{t("visibility")}</p>
                            <select onChange={e => setData('visibility', e.target.value)} value={data.visibility}>
                                {visibilities.map(({name, code}) =>
                                    (<option key={code} value={code} className="bg:bg-gray-100">
                                            {name}
                                        </option>
                                    ))}
                            </select>*/}
                            <Typography variant="h6" sx={{pt: 4}}>
                                Categories
                            </Typography>
                            <Grid container spacing={2} sx={{flexGrow: 1, p:6}}>
                                <Grid size={6}>
                                    <Dropdown>
                                        <MenuButton>Category...</MenuButton>
                                        <Menu>
                                            <MenuItem>Profile</MenuItem>
                                            <MenuItem>My account</MenuItem>
                                            <MenuItem>Logout</MenuItem>
                                        </Menu>
                                    </Dropdown>
                                </Grid>
                                <Grid size={6}>

                                    <Dropdown>
                                        <MenuButton>Sub Category...</MenuButton>
                                        <Menu>
                                            <MenuItem>Profile</MenuItem>
                                            <MenuItem>My account</MenuItem>
                                            <MenuItem>Logout</MenuItem>
                                        </Menu>
                                    </Dropdown>
                                </Grid>
                            </Grid>
                        </div>
               {/*         <div className='col-span-5'>
                            <label className="text-gray-900 text-justify">{t("main_post_image")}
                                {errors.main_image &&
                                    <div className="text-red-500">{t("important")}: {errors.main_image}</div>}
                            </label>

                            <input type="file" onChange={e => setData('main_image', e.target.files[0])}
                                   className="col-start-3 col-end-5 flex items-start gap-4 rounded-sm bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)]  transition duration-300 hover:text-black/70  focus:outline-none lg:pb-10 dark:bg-gray-100 dark:hover:text-gray-900/70 dark:focus-visible:ring-[#FF2D20]"
                            />
                        </div>

                        <div className="col-span-full">
                            <PrimaryButton
                                type="submit"

                            >
                                {t("post")}
                            </PrimaryButton>

                        </div>
                   */}

                    </form>

                </Item>
            </Grid>
            <Grid size={4}>
                <Item>
                    <Typography variant="h6" sx={{p: 6}}>
                        Preview
                    </Typography>
                    <Card variant="outlined" sx={{width: '30rem', justifyItems: 'center', mb: 12}}>
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                                    srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">Yosemite National Park</Typography>
                            <Typography level="body-sm">California</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{bgcolor: 'background.level1'}}>
                            <Divider inset="context"/>
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{fontWeight: 'md'}}
                                >
                                    6.3k views
                                </Typography>
                                <Divider orientation="vertical"/>
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{fontWeight: 'md'}}
                                >
                                    1 hour ago
                                </Typography>
                            </CardContent>
                        </CardOverflow>
                    </Card>

                </Item>
            </Grid>
        </Grid>

    )
}
CreatePost.layout = page => <AuthenticatedLayout children={page} title="hohoho"/>
export default CreatePost
