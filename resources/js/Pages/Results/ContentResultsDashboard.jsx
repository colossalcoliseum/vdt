import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import Paper from '@mui/material/Paper';
import {useEcho} from "@laravel/echo-react";
import PostsPagination from "@/Components/Paginations/PostsPagination.jsx";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as React from "react";
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import {shadows} from '@mui/system';
import Grid from "@mui/material/Grid";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Avatar} from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

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

                {content.data.map((item) => (
                    <Card variant="outlined" sx={{ m:2, }}>
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src={item.thumbnail}
                                    srcSet={item.thumbnail}
                                    loading="lazy"
                                    alt={item.title}
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
                            }}>{item.title}</Typography>
                            <Typography level="body-sm">{item.creator.name}</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    6.3k views
                                </Typography>
                                <Divider orientation="vertical" />
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >

                                    {item.created_at}
                                </Typography>
                            </CardContent>
                        </CardOverflow>
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
