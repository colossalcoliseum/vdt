import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import DOMPurify from 'dompurify';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import dateFormat, {masks} from "dateformat";

import * as React from "react";
import Divider from "@mui/joy/Divider";


export default function Post({post: post}) {
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
            <Grid container columns={12} spacing={2}>
                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    height: '5rem',
                    pt: '1rem',
                    justifyContent: 'center',
                }}>
                    <Grid size={12} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Typography level="h1" sx={{
                            color: 'white',
                            fontFamily: "Segoe UI Variable Display",
                            letterSpacing: 1,

                            fontSize: '3rem',

                        }}>
                            {post.title}
                        </Typography></Grid> </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    gap: '1rem'
                }}>
                    <Box>
                        <Typography  level="h5" sx={{
                            color: 'white',
                            fontFamily: "Segoe UI Variable Display",
                            letterSpacing: 1,
                            width: '100%',
                        }}>{dateFormat(post.created_at, "longDate")}</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{height: '100%', width: '1px', bgcolor: 'white'}}/>

                    <Box>
                        <Typography level="h5" sx={{
                            color: 'white',
                            fontFamily: "Segoe UI Variable Display",
                            letterSpacing: 1,
                            width: '100%',
                        }}>{post.creator.name}</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{height: '100%', width: '1px', bgcolor: 'white'}}/>
                    <Box>
                        <Typography level="h5" sx={{
                            color: 'white',
                            fontFamily: "Segoe UI Variable Display",
                            letterSpacing: 1,
                            width: '100%',
                        }}>{post.category.name} </Typography>
                    </Box>
                </Box>
            </Grid>
        </AuthenticatedLayout>
    );
}
