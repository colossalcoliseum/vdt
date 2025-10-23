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
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
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
        <Paper class="p-5">
            <List sx={{ width: '100%', maxWidth: 280,minWidth: 230, bgcolor: 'background.paper' }}>
                <ApplicationLogo
                    className=" fill-current mx-auto hover:text-blue-700 transition duration-300 ease-in-out text-blue-900 h-16 mb-6"/>
                <ListItemButton component="a" sx={{p:2}} href="/">
                   <HomeOutlinedIcon sx={{mr:1}}></HomeOutlinedIcon>
                    <ListItemText primary="Home"/>
                </ListItemButton>
                <ListItemButton component="a" sx={{p:2}} href={route('video.index')}>
                    <VideocamOutlinedIcon sx={{mr:1}}></VideocamOutlinedIcon>
                    <ListItemText primary="Videos"/>
                </ListItemButton>
                <ListItemButton component="a" sx={{p:2}} href={route('post.index')}>
                    <ContentCopyOutlinedIcon sx={{mr:1}}></ContentCopyOutlinedIcon>
                    <ListItemText primary="Posts"/>
                </ListItemButton>
                <ListItemButton component="a" sx={{p:2}} href={route('profile.edit')}>
                    <LogoutOutlinedIcon sx={{mr:1}}></LogoutOutlinedIcon>
                    <ListItemText primary="Log Out"/>
                </ListItemButton>
            </List>
        </Paper>
    );

    return (
        <div>
            <SecondaryButton className={"bg-opacity-0 hover:bg-opacity-0 border-none " + className}
                             onClick={toggleDrawer(true)}>

              <MenuIcon sx={{mt:1.5}} aria-label="menu" />


            </SecondaryButton>

            <Drawer open={open} onClose={toggleDrawer(false)}
                    className="backdrop-blur-xs "
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}
