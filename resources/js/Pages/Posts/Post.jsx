import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import DOMPurify from 'dompurify';

import Paper from "@mui/material/Paper";
import CardMedia from '@mui/material/CardMedia';
import Card from "@mui/material/Card";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NormalSpeedDial from "@/Components/SpeedDial/SpeedDial.jsx";

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
            >

                <Card sx={{maxWidth: '90%'}} alignItems="center">
                    <Paper elevation={3} centered sx={{p: 10}}>
                        <h1 className="text-4xl tracking font-thin text-black mb-4">
                            {post.title}
                        </h1>
                        <NormalSpeedDial pointed={"left"}/>
                        <Link href={route('user.show',post.creator.id)} underline="none"
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
                </Card>

            </Grid>
        </AuthenticatedLayout>
    );
}
