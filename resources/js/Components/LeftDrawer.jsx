import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
 import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
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
                            bgcolor: 'rgba(0,0,0,0.8)',
                            backdropFilter: "blur(10px) saturate(180%)",
                            WebkitBackdropFilter: "blur(10px) saturate(180%)",
                        },
                        backdropFilter: "blur(1px) saturate(180%)",
                    }}
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
                    <ListItemButton sx={{ fontWeight: 'light', fontFamily: "Segoe UI Variable Display Light", my:'0.25rem', lineHeight: 2.5 ,color:'white' }}>Home</ListItemButton>
                    <ListItemButton sx={{ fontWeight: 'light', fontFamily: "Segoe UI Variable Display Light", my:'0.25rem', lineHeight: 2.5 ,color:'white' }}>About</ListItemButton>
                    <ListItemButton sx={{ fontWeight: 'light', fontFamily: "Segoe UI Variable Display Light", my:'0.25rem', lineHeight: 2.5 ,color:'white' }}>Studio</ListItemButton>
                    <ListItemButton sx={{ fontWeight: 'light', fontFamily: "Segoe UI Variable Display Light", my:'0.25rem', lineHeight: 2.5 ,color:'white' }}>Contact</ListItemButton>
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
