import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import DOMPurify from 'dompurify';

import Paper from "@mui/material/Paper";
import CardMedia from '@mui/material/CardMedia';
import Card from "@mui/material/Card";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dateFormat, { masks } from "dateformat";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import IconButton from "@mui/joy/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import DownloadIcon from "@mui/icons-material/Download";
import * as React from "react";


export default function Post({post}) {
    const user = usePage().props.auth.user;

    const sanitizedHTML = DOMPurify.sanitize(post.description, {
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
        <AuthenticatedLayout>
            <Head title="Post"/>

            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                sx={{pt:6}}
            >

                    <Paper elevation={3} centered sx={{p: 10}}>

                        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                            <Grid size={7}>
                                <h1 className="text-4xl tracking font-thin text-black mb-4">
                            {post.title}
                        </h1>
                            </Grid>
                            <Grid size={3}>
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    {

                                        dateFormat(post.created_at, "longDate")}

                                </Typography>
                            </Grid>
                            <Grid size={2}>

                            <Dropdown>
                            <MenuButton
                                slots={{ root: IconButton }}
                                slotProps={{ root: { variant: 'outlined', color: 'inherit' } }}
                            >
                                <MoreVert />
                            </MenuButton>
                            <Menu>
                                <MenuItem><BookmarkBorderIcon/>Save</MenuItem>
                                <MenuItem><IosShareIcon/>Share</MenuItem>
                                <MenuItem><DownloadIcon/>Download</MenuItem>
                            </Menu>
                            </Dropdown>
                            </Grid>
                        </Grid>
                            <Link href={route('user.show',post.creator.handle)} underline="none"
                              sx={{ color: 'text.primary' }}
                        >
                            {post.creator.name}

                        </Link>


                        <CardMedia
                            component="img"
                            alt={post.title}
                            image={post.main_image}
                        />

                        <div className="p-12 m-12 ">
                            <Typography variant="body1" gutterBottom
                                        className="prose prose-lg max-w-none"

                            >
                                <span dangerouslySetInnerHTML={{__html: sanitizedHTML}}></span>

                            </Typography>
                        </div>
                    </Paper>

            </Grid>
        </AuthenticatedLayout>
    );
}
