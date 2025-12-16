import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import PostsPagination from "@/Components/Paginations/PostsPagination.jsx";
import * as React from "react";
import Box from '@mui/joy/Box';
import Grid from "@mui/material/Grid";
import Typography from '@mui/joy/Typography';
import PostCard from "@/Pages/Posts/PostCard.jsx";
import Input from '@mui/joy/Input';
import Button from "@mui/joy/Button";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
function ContentResultsDashboard({content: content}) {
    const now = new Date();
    const {data, setData} = useForm({
        page: content.currentPage,
    });


    const submit = (e) => {
        e.preventDefault()

        router.get(route('search.posts'), {
            query: data.query
        }, {
            preserveScroll: true
        })
    }
    return (
        <>
            <Head title="Posts"/>

            <Grid container columns={18} sx={{flexGrow: 1,my:'1rem', borderRadius:'1rem', width: '80%', height: '100%', mx: 'auto',


            }}>
                <Grid size={15}>
                    <Typography level="h1" sx={{
                        color: 'white',
                        fontFamily: "Segoe UI Variable Display Light",
                        letterSpacing: 1,
                        fontSize: '3rem',

                    }}>
                        Search
                    </Typography>
                </Grid>
                <Grid size={3} sx={{display: 'flex', gap: '1rem', justifyContent: 'flex-end'}}>
                    <form  onSubmit={submit}>
                        <Input
                            id="filled-search"
                            label="Search"
                            type="search"
                            name="query"

                            value={data.query}
                            onChange={(e) => {
                                setData('query', e.target.value);
                            }}

                            /*
                                                               disabled={processing}
                            */

                            size="md"
                            placeholder="Search Content ..."
                            variant="solid"
                            endDecorator={<Button

                                type="submit"
                                /* onClick={() => setLoading(true)}*/

                                sx={{color: 'white',py:'auto', backgroundColor:'white',
                                    '&:hover': {backgroundColor: 'white'},
                                }}
                            >
                                <SearchSharpIcon sx={{color:'black'}} />
                            </Button>}


                            sx={{
                                '--Input-focusedInset': 'var(--any, )',
                                '--Input-focusedThickness': '0px',
                                fontFamily: "Segoe UI Variable Display Light",

                            }}
                        >

                        </Input>


                    </form>
                </Grid>



            </Grid>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                mx: '5%',
                pl:'2rem'


            }}>


                {content.data.map((item) => (
                    <PostCard
                        width='80%'
                        creator={item.creator.name}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        createdAt={item.created_at}
                    />

                ))}


            </Box>


            <PostsPagination
                links={content.links}
                currentPage={content.currentPage}
                setCurrentPage={(page) => setData('page', page)}
            />
        </>
    );
}
ContentResultsDashboard.layout = (page)=>{
    return(
        <AuthenticatedLayout
            user={page.props.auth.user}
            children={page}
        >

        </AuthenticatedLayout>
    )
}
export default ContentResultsDashboard;
