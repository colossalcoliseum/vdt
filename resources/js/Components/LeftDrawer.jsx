import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import {usePage} from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";


export default function LeftDrawer({user,
                                   className}) {
    const [open, setOpen] = React.useState(false);
    const props = usePage().props
    user = usePage().props.auth.user

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Paper class="p-3 ">
            <List class="hover:bg-none">
                <ApplicationLogo
                    className=" fill-current hover:text-blue-700 transition duration-300 ease-in-out text-blue-900 h-20 m-6 relative"/>
                <ListItemButton component="a" href="/">
                    <ListItemText primary="Home"/>
                </ListItemButton>
                <ListItemButton component="a" href={route('profile.edit')}>
                    <ListItemText primary="Profile"/>
                </ListItemButton>
                <ListItemButton component="a" href={route('video.index')}>
                    <ListItemText primary="Videos"/>
                </ListItemButton>
                <ListItemButton component="a" href={route('post.index')}>
                    <ListItemText primary="Posts"/>
                </ListItemButton>
                <ListItemButton component="a" href={route('profile.edit')}>
                    <ListItemText primary="Log Out"/>
                </ListItemButton>

                <ListItemButton component="a" href={route('profile.edit')}>
                    <ListItemText primary="Log Out"/>
                </ListItemButton>
            </List>
        </Paper>
    );

    return (
        <div>
            <SecondaryButton className={"bg-opacity-0 hover:bg-opacity-0 border-none "+className} onClick={toggleDrawer(true)}>

                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
                        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
                        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
                    </g>
                </svg>


            </SecondaryButton>

            <Drawer open={open} onClose={toggleDrawer(false)}
            className="backdrop-blur-xs "
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}
