import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import PostsPagination from "@/Components/Paginations/PostsPagination.jsx";
import * as React from "react";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import ContentCard from "@/Pages/ContentCard.jsx";
import Input from '@mui/material/Input';
import Button from "@mui/material/Button";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Typography from '@mui/material/Typography';
function ContentGrid({content: content,type:type, headerText:headerText}) {
    const now = new Date();
    const {data, setData} = useForm({
        page: content.currentPage,
    });


    const submit = (e) => {
        e.preventDefault()

        router.get(route('search.content', {
            content: data.query,
        }), {
            query: data.query
        }, {
            preserveScroll: true
        })
    }
    return (
        <>

            <Grid container columns={18} sx={{flexGrow: 1,my:'2rem', width: '80%', height: '100%', mx: 'auto',


            }}>
                <Grid size={15} sx={{display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'row'}}>
                    <Typography variant="h1" color='primary.main' sx={{}} >
                        {headerText}
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
                    <ContentCard
                        key={item.id}
                        width='70%'
                        type={item.type??type}
                        content={item}
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
ContentGrid.layout = (page)=>{
    return(
        <AuthenticatedLayout
            user={page.props.auth.user}
            children={page}
        />

    )
}
export default ContentGrid;
