import ApplicationLogo from '@/Components/ApplicationLogo';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import * as React from "react";

export default function GuestLayout({children}) {
    return (
        <Container disableGutters maxWidth={false}>
            <Box sx={{py: '1rem'}}>
                <ApplicationLogo height={32} className={"my-4 pl-12 ml-12 flex absolute"}></ApplicationLogo>
            </Box>
            <Box
                component="main"
                sx={{
                    background: 'linear-gradient(160deg,rgba(158, 234, 255) 0%, rgba(250, 230, 230) 50%, rgb(255,255,255) 100%);',
                    display: "flex",
                    flexDirection: 'column',
                    width: '100%',
                }}>
                <Box>
                    {children}
                </Box>
            </Box>
        </Container>
    );
}
