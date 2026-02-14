import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
 import MainLayout from "@/Layouts/MainLayout.jsx";
import Button from "@mui/material/Button";
import ContentGrid from "@/Pages/ContentGrid.jsx";
import CreatePost from "@/Pages/Posts/CreatePost.jsx";
import CreateVideo from "@/Pages/Videos/CreateVideo.jsx";

const ContentCreationDashboard = ({user:user, categories: categories}) => {


    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

         const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

    return(
        <>
            <Box sx={{
                display: 'flex', justifyContent: 'center', placeContent:'center', pb: '2rem',
            }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                             <Tab label="Create Post" {...a11yProps(0)} />
                            <Tab label="Create Video" {...a11yProps(1   )} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <CreatePost user={user} categories={categories}/>


                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <CreateVideo categories={categories} />


                    </CustomTabPanel>
                </Box>
            </Box>
        </>
    )
}
ContentCreationDashboard.layout = (page) => <MainLayout children={page} title="Home" />
export default ContentCreationDashboard;
