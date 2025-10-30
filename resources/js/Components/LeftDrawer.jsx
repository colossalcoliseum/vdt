import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import Paper from "@mui/material/Paper";
import {usePage} from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import {Avatar, Chip} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function LeftDrawer({
                                       user,
                                       className
                                   }) {
    const [open, setOpen] = React.useState(false);
    const props = usePage().props
    user = usePage().props.auth.user

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: "blur(4px)",
            m: 1,
            mx: 1.5
        }}>
            <List sx={{
                width: '100%', maxWidth: 280, minWidth: 230,

            }}>
                <ApplicationLogo
                    className=" fill-current mx-auto hover:text-blue-700 transition duration-300 ease-in-out text-blue-900 h-16 mb-6"/>
                <ListItemButton component="a" sx={{
                    p: 2, borderRadius: 3, '&:hover': {
                        bgcolor: "#fff4c4",

                    }
                }} href="/">
                    <HomeOutlinedIcon sx={{mr: 1}}></HomeOutlinedIcon>
                    <ListItemText primary="Home"/>
                </ListItemButton>
                <ListItemButton component="a" sx={{
                    p: 2, borderRadius: 3, '&:hover': {
                        bgcolor: "#fff4c4",
                    }
                }} href={route('video.index')}>
                    <VideocamOutlinedIcon sx={{mr: 1}}></VideocamOutlinedIcon>
                    <ListItemText primary="Videos"/>
                </ListItemButton>
                <ListItemButton component="a" sx={{
                    p: 2, borderRadius: 3, '&:hover': {
                        bgcolor: "#fff4c4",

                    }
                }} href={route('post.index')}>
                    <ContentCopyOutlinedIcon sx={{mr: 1}}></ContentCopyOutlinedIcon>
                    <ListItemText primary="Posts"/>
                </ListItemButton>
                <ListItemButton component="a" sx={{
                    p: 2, borderRadius: 3, '&:hover': {
                        bgcolor: "#fff4c4",

                    }
                }} href={route('post.index')}>
                    <PersonOutlineOutlinedIcon sx={{mr: 1}}></PersonOutlineOutlinedIcon>
                    <ListItemText primary={user.name}/>
                </ListItemButton>

            </List>
        </Box>
    );

    return (
        <div>
            <Button
                onClick={toggleDrawer(true)}>

                <MenuIcon sx={{mt: 1}} aria-label="menu"/>


            </Button>

            <Drawer open={open} onClose={toggleDrawer(false)}

                    sx={{
                        backdropFilter: "blur(2px)",
                    }}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}
