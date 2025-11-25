import {useEffect, useState} from 'react';
import {TopNav} from "@/Components/TopNav.jsx";
import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import {router, useForm, usePage} from "@inertiajs/react";
import {AppBar, Toolbar, useScrollTrigger} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import RightDrawer from "@/Components/RightDrawer.jsx";
import Grid from "@mui/material/Grid";
import LeftDrawer from "@/Components/LeftDrawer.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";

export default function AuthenticatedLayout({user, children}) {
    const page = usePage();
    user = page.props.auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [openAccordions, setOpenAccordions] = useState({
        users: false,
        account: false,
        projects: false
    });
    const [language, setLanguage] = useState('en');
    const languages = [
        {name: "English", code: "en"},
        {name: "Български", code: "bg"}
    ];
    useEffect(() => {
        console.log("AuthenticatedLayout mounted");
    },[])
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleChangeLocale = (e) => setLanguage(e.target.value);

    const props = usePage().props

    return (
       <Container disableGutters maxWidth={false}  >


            {/* Main Content */}

                    <AppBar sx={{bgcolor: 'white',
                                background: 'rgb(187,222,251,0.5)',
                        backdropFilter: "blur(10px)",
                        py:0.5


                    }}
                            >
                        <List role="menubar" orientation="horizontal">
                            <ListItem role="none">
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    px:6,
                                    justifyContent: 'space-between',
                                }}>
                                    <Box sx={{display:'flex', flexDirection:"row"}}>
                                        <LeftDrawer/>
                                    </Box>

                                </Box>
                            </ListItem>
                            <ListDivider />
                            <ListItem role="none">
                                <ListItemButton role="menuitem" component="a" href={route('home')}>
                                    Home
                                </ListItemButton>
                            </ListItem>
                            <ListDivider />
                            <ListItem role="none">
                                <ListItemButton role="menuitem" component="a" href={route('video.index')}>
                                Videos
                                </ListItemButton>
                            </ListItem>
                            <ListDivider />

                            <ListItem role="none">
                                <ListItemButton role="menuitem" component="a" href={route('post.index')}>
                                    Posts
                                </ListItemButton>
                            </ListItem>
                            <ListDivider />

                            <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
                                <RightDrawer/>
                            </ListItem>

                        </List>
                    </AppBar>


                <Box
                    component="main"

           sx={{
                        background: 'linear-gradient(160deg,rgba(196, 242, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 224, 224, 1) 100%);',
                        position: "relative",
                        backgroundAttachment: 'fixed',
               display: "flex",
               flexDirection: 'column',
                width: '100%',

                    }}
                >

                            <Box sx={{ my:8, mx: 12 }}>
                        {children}
                            </Box>


                    </Box>


            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={toggleSidebar}></div>
            )}

        </Container>

    );
}
