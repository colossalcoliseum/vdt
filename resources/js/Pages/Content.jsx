import MainLayout from '@/Layouts/MainLayout.jsx';
import {usePage} from '@inertiajs/react';
import DOMPurify from 'dompurify';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import dateFormat, {masks} from "dateformat";
import * as React from "react";
import Divider from "@mui/joy/Divider";
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import Button from "@mui/material/Button";
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import Chip from "@mui/material/Chip";
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';

const Content = ({content: content}) => {
    const user = usePage().props.auth.user;
    const getImageUrl = (image) => {
        if (image.startsWith('http') || image.startsWith('https')) {
            return image;
        }
        if (!image) {
            return ''
        }
        return `/storage/${image}`;
    }
    const sanitizedHTML = DOMPurify.sanitize(content.description, {
        WHOLE_DOCUMENT: false,
        RETURN_DOM: false,
        RETURN_DOM_FRAGMENT: false,
        RETURN_DOM_IMPORT: false,
        SANITIZE_DOM: false,
        KEEP_CONTENT: true,
        ADD_ATTR: ['*'],
        ALLOW_DATA_ATTR: true,
        ALLOW_UNKNOWN_PROTOCOLS: true
    });

    return (
        < >
            <Grid container columns={12} spacing={2}>



                <Box sx={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'end'
                }}>
                    {content.creator_id === user.id &&
                        <>
                    <Button variant='contained' startIcon={<CreateSharpIcon/>} color="info" sx={{ borderRadius:'0.5rem'}}>Edit</Button>
                    <Button variant='contained' startIcon={<DeleteOutlineSharpIcon/>} color="error" sx={{mx:1, borderRadius:'0.5rem'}}>Delete</Button>
                </>
                }
                    <Button variant="outlined" onClick={() => window.history.back()}
                            sx={{":hover": {bgcolor: 'red', color: 'white'}}}>X</Button>
                </Box><Box sx={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                height: 'relative',
                pt: '1rem',
                overflow: 'none',
                justifyContent: 'center',

            }}>

                <Grid size={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '50%',

                    py: '1rem',
                }}>

                    <Typography level="h1" sx={{

                        letterSpacing: 1,
                        height: '100%',
                        fontSize: '2.3rem',
                    }}>
                        {content.title}
                    </Typography>
                </Grid>
            </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    gap: '0.8rem',

                }}>
                    <Box>
                        <Typography level="h5" sx={{
                            letterSpacing: 1,
                            width: '100%',
                        }}>{dateFormat(content.created_at, "longDate")}</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{height: '100%', width: '1px',}}/>

                    <Box>
                        <Typography level="h5" sx={{
                            letterSpacing: 1,
                            width: '100%',
                        }}>
                            <Chip icon={<PermIdentitySharpIcon/>} label={content.creator.name} variant="outlined"/>
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{height: '100%', width: '1px',}}/>
                    <Box>
                        <Typography level="h5" sx={{
                            letterSpacing: 1,
                            width: '100%',
                        }}>{content.category.name} </Typography>
                    </Box>
                </Box>
                {content.type.slug === "posts" &&
                    <>
                        <Box sx={{
                            width: '50%',
                            mx: 'auto',

                        }}>
                            <img src={getImageUrl(content.main_image)} alt={content.title}
                                 style={{
                                     borderRadius: '0.5rem',
                                     height: '35rem',
                                     minHeight: '25rem',
                                     maxHeight: '45rem',
                                     maxWidth: '80rem',
                                     minWidth: '10rem',
                                 }}

                            />
                        </Box>
                    </>
                }
                {content.type.slug === "videos" &&
                    <Box sx={{
                        display: 'flex',
                        gap: '1rem',
                        mx: 'auto',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '50%'
                    }}>

                        <video className=" h-full rounded-xl " controls>
                            <source
                                src={window.location.origin + content.video_path}
                                type={content.video_mime_type}
                            />

                            Your browser does not support the video tag.
                        </video>
                    </Box>
                }
                <Box sx={{
                    width: '50%',
                    mx: 'auto',
                    height: 'relative',
                    pb: '10rem',
                    my: '1rem',
                    px: '5rem',
                    border: '0.1rem solid',
                    borderColor: 'primary.main',
                    borderTop:'none',
                    borderBottom:'none',
                 }}>
                    <Divider sx={{mb: '1rem', mt: '0.1rem', color: 'primary.main'}}>
                        {content.type.slug === "posts" &&
                            <Typography variant="h6">
                                More on the story
                            </Typography>}
                        {content.type.slug === "videos" &&
                            <Typography variant="h6">
                                Description
                            </Typography>}
                    </Divider>
                    <p style={{whiteSpace: 'pre-wrap', fontSize: '1rem', lineHeight: '1.5rem'}}>
                        <span dangerouslySetInnerHTML={{__html: sanitizedHTML}}></span>
                    </p>
                </Box>
            </Grid>
        </ >
    );
}
Content.layout = page => <MainLayout user={page.props.auth.user} children={page}/>;

export default Content;
