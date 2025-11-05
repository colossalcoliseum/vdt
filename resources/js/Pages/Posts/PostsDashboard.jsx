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
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Avatar} from "@mui/material";

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
                            <Card elevation={4}
                                  sx={{
                                      maxWidth: 445,
                                      m: 1,
                                      borderRadius: 2,
                                      border: '1px solid',
                                  }}>
                                <Box sx={{position: 'relative'}}>
                                    <CardActionArea>

                                            <Link underline="none" href={route("post.show", post.id)}


                                                  >
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={post.thumbnail}
                                                    alt={post.title}
                                                    sx={{  objectFit: "scaleDown",
                                                        width: '100%',
                                                        height:"20ch",
                                                    }}
                                                />
                                                <CardContent>
                                                    <Box
                                                        sx={{
                                                            display: 'flex'
                                                        }}
                                                    >
                                                        <Box sx={{display:"flex", alignItems:"center"}}>
                                                            <Avatar alt={post.creator.name} variant="square" sx={{ width: 40, height: 'auto' }} src={post.creator.avatar} />
                                                            <Typography variant="p" sx={{color: "black",px:2}}>{post.creator.name}</Typography>
                                                        </Box>

                                                        <Typography variant="h6" sx={{
                                                            color: "black",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                            display: "-webkit-box",
                                                            WebkitLineClamp: "2",


                                                            WebkitBoxOrient: "vertical",
                                                        }}>{post.title}</Typography>
                                                    </Box>
                                                </CardContent>
                                            </Link>


                                    </CardActionArea>
                                </Box>
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
