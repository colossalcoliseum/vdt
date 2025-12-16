import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import {AppBar, Toolbar, useScrollTrigger} from "@mui/material";
import LeftDrawer from "@/Components/LeftDrawer.jsx";

export default function AuthenticatedLayout({user, children, logoStartColor, logoStopColor}) {

    return (
        <Box
            sx={{
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                position: 'relative'
            }}
        >
            <AppBar sx={{
                backgroundColor: 'inherit',
                backdropFilter: "blur(10px)",
                p: 0, m: 0,
                pl: '5rem',
                position: 'relative'
            }}
            >
                <Box sx={{margin: 0, padding: 0}}>


                        <LeftDrawer

                        />


                </Box>
            </AppBar>
            <Box component="main" sx={{
                flex: 1,
                background: 'black',
                margin: 0,
                padding: 0
            }}>
                {children}
            </Box>
        </Box>
    );
}
