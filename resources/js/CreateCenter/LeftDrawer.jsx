import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {Laptop, Moon, Sun} from "lucide-react";
import {ThemeSwitch} from "../../../components/ui/theme-switch.jsx";
import ListItem from "@mui/joy/ListItem";
export default function LeftDrawer() {
    const [open, setOpen] = React.useState(false);


    return (
        <React.Fragment>
            <IconButton variant="contained" onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}
                    sx={{
                        '& .MuiDrawer-content': {
                            bgcolor: 'rgba(0,0,0)',
                        },
                        backdropFilter: "blur(0px) brightness(80%)",
                        transition: 'ease-in-out 300ms',
                        '--Drawer-transitionDuration': '0.3s',
                        '--Drawer-transitionFunction': 'cubic-bezier(0.4,0.5,0.6,0.90)',
                    }

                    }
                    size={'sm'}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        ml: 'auto',
                        mt: 2,
                        mr: 2,
                    }}
                >

                    <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                </Box>
                <Box  sx={{ml:'2rem', width:'relative', height:'relative ', mt:'1rem', mb:'1rem' }} >
                    <ApplicationLogo

                    />
                </Box>

                <List
                    size="lg"
                    component="nav"
                    sx={{
                        flex: 'none',
                        fontSize: 'md',
                        mt:'3rem',

                        '& > div': { justifyContent: 'center' },
                    }}
                >
                    <ListItemButton href={route('home')} style={{ transition: '100ms'}} sx={{ fontWeight: 'light', fontFamily: "Segoe UI Variable Display Light", my:'0.25rem', lineHeight: 2.5 ,color:'white' }} >My Videos</ListItemButton>
                    <ListItemButton href={route('video.index')} style={{ transition: '100ms'}} sx={{ fontWeight: 'light', fontFamily: "Segoe UI Variable Display Light", my:'0.25rem', lineHeight: 2.5 ,color:'white' }}>My Posts</ListItemButton>
                    <ListItemButton href={route('post.index')} style={{ transition: '100ms'}} sx={{ fontWeight: 'light', fontFamily: "Segoe UI Variable Display Light", my:'0.25rem', lineHeight: 2.5 ,color:'white' }} >Summary</ListItemButton>
                    <ListItemButton style={{ transition: '100ms'}}   sx={{ fontWeight: 'light', fontFamily: "Segoe UI Variable Display Light", my:'0.25rem', lineHeight: 2.5 ,color:'white' }}>Exit Centre</ListItemButton>
                    <ListItem  sx={{ fontWeight: 'light', lineHeight: 2.5,pt:'5rem' ,color:'white', '&hover': {color:'black'} }} >
                        <ThemeSwitch
                            modes={["light", "dark", "system"]}
                            icons={[
                                <Sun key="sun-icon" size={16} />,
                                <Moon key="moon-icon" size={16} />,
                                <Laptop key="laptop-icon" size={16} />,
                            ]}
                            showInactiveIcons="all"
                        /></ListItem >
                </List>
            </Drawer>
        </React.Fragment>
    );
}
