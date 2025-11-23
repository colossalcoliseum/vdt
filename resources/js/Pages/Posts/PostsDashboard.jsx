import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import Paper from '@mui/material/Paper';
import {useEcho} from "@laravel/echo-react";
import PostsPagination from "@/Components/Paginations/PostsPagination.jsx";

import * as React from "react";
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';
import Grid from "@mui/material/Grid";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Avatar} from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import dateFormat, { masks } from "dateformat";
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import IosShareIcon from '@mui/icons-material/IosShare';
import DownloadIcon from '@mui/icons-material/Download';

export default function PostsDashboard({posts}) {
    const now = new Date();
    const {data, setData} = useForm({
        page: posts.currentPage,
    });

    return (
        <AuthenticatedLayout

        >
            <Head title="Posts"/>

            {console.log(posts)}
            <Grid>
                <Typography level="h2" sx={{pt: 4 , fontWeight:'sm'}}>
                    Latest Posts
                </Typography>

            </Grid>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',

            }}>


                        {posts.data.map((post) => (
                            <Card variant="outlined" sx={{ m:2,width:'23rem' }}>
                                <CardOverflow>
                                    <AspectRatio ratio="1.8">
                                        <img
                                            src={post.thumbnail}
                                            srcSet={post.thumbnail}
                                            loading="lazy"
                                            alt={post.title}
                                        />
                                    </AspectRatio>
                                </CardOverflow>
                                <CardContent>
                                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                                    <Grid size={10}>
                                        <Typography level="title-sm" sx={{
                                            color: "black",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: "2",


                                            WebkitBoxOrient: "vertical",
                                        }}>{post.title}
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
                                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                                    <Grid size={7.75}>
                                        <Typography level="body-sm">{post.creator.name}
                                        </Typography>
                                     </Grid>
                                    <Grid size={4.25}>
                                        <Typography
                                            level="body-xs"
                                            textColor="text.secondary"
                                            sx={{ fontWeight: 'md' }}
                                        >
                                            {

                                                dateFormat(post.created_at, "longDate")}

                                        </Typography>
                                    </Grid>
                                    </Grid>




                                </CardContent>

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
