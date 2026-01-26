import MainLayout from '@/Layouts/MainLayout.jsx';
import Pagination from "@/Components/MainPagination.jsx";
import * as React from "react";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import ContentCard from "@/Pages/ContentCard.jsx";
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";

const ContentGrid = ({content: content, headerText: headerText}) => {

    return (
        <>
            <Box sx={{
               display: 'flex', justifyContent: 'center',  pb: '2rem',
            }}>
                <Divider variant="fullWidth" sx={{width: '80%'}}>
                     <Typography variant="h4" color='text.primary' >
                        {headerText}
                    </Typography>
                </Divider>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                placeItems: 'center',
                justifyContent: 'center',
                gap: '4rem',
                mx: 'auto',
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
            <Divider sx={{mt: '3rem', width: '80%', mx: 'auto'}}/>
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
