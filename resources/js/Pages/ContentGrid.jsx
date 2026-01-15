import MainLayout from '@/Layouts/MainLayout.jsx';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import Pagination from "@/Components/Paginations/MainPagination.jsx";
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

    {console.log(content)}

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

                        type={item.type??type}
                        content={item}
                    />
                ))}


            </Box>


            <Pagination
                links={content.links}
                currentPage={content.currentPage}
                setCurrentPage={(page) => setData('page', page)}
            />
        </>
    );
}
ContentGrid.layout = (page)=>{
    return(
        <MainLayout
            user={page.props.auth.user}
            children={page}
        />

    )
}
export default ContentGrid;
