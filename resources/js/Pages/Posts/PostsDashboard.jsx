import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import Paper from '@mui/material/Paper';
import {useEcho} from "@laravel/echo-react";
import PostsPagination from "@/Components/Paginations/PostsPagination.jsx";
import Link from '@mui/material/Link';

import * as React from "react";
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Avatar} from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function PostsDashboard({posts}) {

    const {data, setData} = useForm({
        page: posts.currentPage,
    });
    function Item(props) {
        const {sx, ...other} = props;
        return (
            <Box
                sx={[
                    (theme) => ({
                        bgcolor: '#fff',
                        color: 'grey.800',
                        border: '1px solid',
                        borderColor: 'grey.300',
                        p: 1,
                        m: 1,

                        background: 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: "blur(4px)",
                        py:0.5,
                        display: 'flex',

                        borderRadius: 2,
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        ...theme.applyStyles('dark', {
                            bgcolor: '#101010',
                            color: 'grey.300',
                            borderColor: 'grey.800',
                        }),
                    }),
                    ...(Array.isArray(sx) ? sx : [sx]),
                ]}
                {...other}
            />
        );
    }

    return (
        <AuthenticatedLayout

        >
            <Head title="Posts"/>


            <Grid><Box sx={{display: 'flex',m:1, flexDirection: 'row'}}>
                <Item> Latest Posts </Item>
            </Box>
            </Grid>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',

            }}>


                        {posts.data.map((post) => (
                            <Card variant="outlined" sx={{ m:2, }}>
                                <CardOverflow>
                                    <AspectRatio ratio="2">
                                        <img
                                            src={post.thumbnail}
                                            srcSet={post.thumbnail}
                                            loading="lazy"
                                            alt={post.title}
                                        />
                                    </AspectRatio>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="title-md" sx={{
                                        color: "black",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: "2",


                                        WebkitBoxOrient: "vertical",
                                    }}>{post.title}</Typography>
                                    <Typography level="body-sm">{post.creator.name}</Typography>
                                </CardContent>
                                <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                                    <Divider inset="context" />
                                    <CardContent orientation="horizontal">
                                        <Typography
                                            level="body-xs"
                                            textColor="text.secondary"
                                            sx={{ fontWeight: 'md' }}
                                        >

                                            </Typography>
                                        <Divider orientation="vertical" />
                                        <Typography
                                            level="body-xs"
                                            textColor="text.secondary"
                                            sx={{ fontWeight: 'md' }}
                                        >

                                         </Typography>
                                    </CardContent>
                                </CardOverflow>
                            </Card>
                        ))}


            </Box>


            <PostsPagination
                links={posts.links}
                currentPage={posts.currentPage}
                setCurrentPage={(page) => setData('page', page)}
            />
        </AuthenticatedLayout>
    );
}
