import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import {usePoll} from '@inertiajs/react'
import {useEcho} from "@laravel/echo-react";
import PostsPagination from "@/Components/Paginations/PostsPagination.jsx";

import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function PostsDashboard({posts}) {


    const handleOpen = () => {
        setOpen(true);
        (async () => {
            setLoading(true);
            await sleep(1e3); // For demo purposes.
            setLoading(false);

            setOptions([...postsArray]);
        })();

    }
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        setOptions([]);
    };
    useEcho(
        `posts`,
        "PostPublished",
        (e) => {
            console.log(e.post);
        },
    );
    const {data, setData} = useForm({
        page: posts.currentPage,
    });



    return (
        <AuthenticatedLayout

        >
            <Head title="Posts"/>

            <PostsPagination
                links={posts.links}
                currentPage={posts.currentPage}
                setCurrentPage={(page) => setData('page', page)}
                posts={posts}
            >

            </PostsPagination>

            <div className="py-12 grid ">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">

                    <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-12">



                        {posts.data.map((post, id) => (
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={post.main_image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div"
                                                    sx={{
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: "2",
                                                        WebkitBoxOrient: "vertical",
                                                    }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {post.creator.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}


                    </div>


                </div>



            </div>
            <PostsPagination
                links={posts.links}
                currentPage={posts.currentPage}
                setCurrentPage={(page) => setData('page', page)}
                className=""
            />
        </AuthenticatedLayout>
    );
}
