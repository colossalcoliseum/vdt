import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import Paper from '@mui/material/Paper';
import {useEcho} from "@laravel/echo-react";
import PostsPagination from "@/Components/Paginations/PostsPagination.jsx";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {shadows} from '@mui/system';
import Grid from "@mui/material/Grid";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function ContentResultsDashboard({content, query, type}) {

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
                        borderRadius: 2,
                        fontSize: '1rem',
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
            {console.log(type)}
            <Head title="Posts"/>
            <Grid><Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Item><SearchOutlinedIcon/> Search | {type}  </Item><Item>{query}</Item>
            </Box>

            </Grid>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                alignItems: 'center',
                justifyContent: 'start'
            }}>

                {content.data.map((item) => (
                    <Card elevation={4}
                          sx={{
                              maxWidth: 445,
                              m: 3,
                              p: 0.5,
                              bgcolor: 'rgba(207,207,207,0.6)',
                          }}>
                        <Box sx={{position: 'relative'}}>
                            <CardActionArea sx={{bgcolor: 'rgba(0, 0, 0, 0.6)',}}>
                                {type === "posts" &&
                                    <Link href={route("post.show", item.id)}


                                          sx={{
                                              color: 'black',
                                          }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.thumbnail}
                                            alt={item.title}

                                        />
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    bgcolor: '#ffffff',
                                                    color: 'white',
                                                    padding: '10px',
                                                }}
                                            >
                                                <Typography variant="h5" sx={{
                                                    color: "black", overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: "2",
                                                    WebkitBoxOrient: "vertical",
                                                }}>{item.title}</Typography>
                                                <Typography variant="body2" sx={{color: "black",}}>{item.creator.name}</Typography>
                                            </Box>>
                                        </CardContent>
                                    </Link>}
                                {type === "videos" && <Link href={route("video.show", item.id)}

                                                            underline="none"
                                                            sx={{
                                                                color: 'text.primary',
                                                            }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.thumbnail}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                                color: 'white',
                                                padding: '10px',
                                            }}
                                        >
                                            <Typography variant="h5">Lizard</Typography>
                                            <Typography variant="body2">Subtitle</Typography>
                                        </Box>>
                                    </CardContent>
                                </Link>}

                            </CardActionArea>
                        </Box>
                    </Card>
                ))}
            </Box>


            <PostsPagination
                links={content.links}
                currentPage={content.currentPage}
                setCurrentPage={(page) => setData('page', page)}
            />
        </AuthenticatedLayout>
    );
}
