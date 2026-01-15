import MainLayout from '@/Layouts/MainLayout.jsx';
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
        <MainLayout>
            <Grid container columns={12} spacing={2}>
                <Box sx={{
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

                        py:'1rem',
                     }}>
                        <Typography level="h1" sx={{
                            color: 'white',
                            fontFamily: "Segoe UI Variable Display",
                            letterSpacing: 1,
                            height: '100%',
                            fontSize: '2.3rem',
                        }}>
                            {post.title}
                        </Typography>
                    </Grid>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    gap: '0.8rem'
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
                    <Box sx={{width: '50%', mx:'auto', borderRadius:'0.5rem',  height: '35rem', px:'0 auto',
                        backgroundImage:`url('${post.thumbnail}')`,  backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                </Box>
                <Box sx={{width: '50%', mx:'auto', borderRadius:'0.5rem',  height: 'relative', px:'0 auto',pb:'10rem'}}>
                    <Divider sx={{mb:'1rem',mt:'0.1rem'}}>
                        <Typography variant="h6" style={{color: 'white'}}>
                            More on the story
                        </Typography>
                    </Divider>
                    <p style={{color:'white', whiteSpace:'pre-wrap', fontSize:'1rem', lineHeight:'1.5rem', fontFamily: "Segoe UI Variable Display"}}>
                        <span dangerouslySetInnerHTML={{__html: sanitizedHTML}}></span>

                    </p>
                </Box>
            </Grid>
        </MainLayout>
    );
}
