import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import Paper from '@mui/material/Paper';
import {useEcho} from "@laravel/echo-react";
import PostsPagination from "@/Components/Paginations/PostsPagination.jsx";
import Link from '@mui/material/Link';

import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function PostsDashboard({posts}) {

    const {data, setData} = useForm({
        page: posts.currentPage,
    });


    return (
        <AuthenticatedLayout

        >
            <Head title="Posts"/>

            <Typography variant="h4" gutterBottom
                        sx={{ color: 'text.secondary',
                            pt:8
                        }}
            >
                Latest Posts
            </Typography>

            <div className="py-6 my-6">

                <div className="sm:px-6 ">



                    <div className="grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-10 sm:my-6">



                        {posts.data.map((post, id) => (
                            <Paper elevation={4}
                                   sx={{ maxWidth: 445
                            }}>
                                <CardActionArea>
                                    <Link href={route('post.show',post.id)} underline="none"
                                          sx={{ color: 'text.primary' }}>
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
                                    </Link>
                                </CardActionArea>
                            </Paper>
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
