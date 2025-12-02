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
import {Layout} from "lucide-react";
import PostCard from "@/Pages/Posts/PostCard.jsx";

function PostsDashboard({posts}) {
    const now = new Date();
    const {data, setData} = useForm({
        page: posts.currentPage,
    });

    return (
      <>
            <Head title="Posts"/>
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
                           <PostCard
                            creator={post.creator.name}
                            thumbnail={post.thumbnail}
                            title={post.title}
                            createdAt={post.created_at}
                           />

                        ))}


            </Box>


            <PostsPagination
                links={posts.links}
                currentPage={posts.currentPage}
                setCurrentPage={(page) => setData('page', page)}
            />
      </>
    );
}
PostsDashboard.layout = (page)=>{
    return(
        <AuthenticatedLayout
        user={page.props.auth.user}
            children={page}
        >

        </AuthenticatedLayout>
    )
}
export default PostsDashboard;
