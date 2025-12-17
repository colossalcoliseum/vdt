import * as React from 'react';
import Box from '@mui/joy/Box';
import {AppBar} from "@mui/material";
import LeftDrawer from "@/CreateCenter/LeftDrawer.jsx";

export default function ContentCreationLayout({children}) {

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
