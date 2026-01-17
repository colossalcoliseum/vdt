import MainLayout from '@/Layouts/MainLayout.jsx';
import Pagination from "@/Components/MainPagination.jsx";
import * as React from "react";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import ContentCard from "@/Pages/ContentCard.jsx";
import Typography from '@mui/material/Typography';

function ContentGrid({content: content, headerText: headerText}) {

    return (
        <>
            <Grid container columns={18} sx={{
                flexGrow: 1, my: '2rem', width: '80%', height: '100%', mx: 'auto',
            }}>
                <Grid size={15} sx={{display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'row'}}>
                    <Typography variant="h1" color='primary.main' sx={{}}>
                        {headerText}
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                mx: '5%',
                pl: '2rem'
            }}>
                {content.data.map((item) => (
                    <ContentCard
                        key={item.id}
                        type={item.type.slug}
                        content={item}
                    >
                    </ContentCard>
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

ContentGrid.layout = (page) => {
    return (
        <MainLayout
            user={page.props.auth.user}
            children={page}
        />

    )
}
export default ContentGrid;
