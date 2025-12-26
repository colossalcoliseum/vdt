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
                <Menu/>
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
                         ml: 'auto',

                    }}
                >

                    <ModalClose id="close-icon" sx={{position: 'initial'}}/>
                </Box>
                <Box sx={{mx: 'auto', my: '2rem'}}>
                    <ApplicationLogo

                    />
                </Box>

                <List
                    size="md"
                    component="nav"
                    sx={{
                        flex: 'none',
                        fontSize: 'sm',

                         '& > div': {justifyContent: 'center'},
                    }}
                >
                    <Button href={route('home')} sx={{

                        lineHeight: 2.5,
                        color: 'white'
                    }}>Home</Button>
                    <Button href={route('videos.index')} sx={{

                        lineHeight: 2.5,
                        color: 'white'
                    }}>Watch</Button>
                    <Button href={route('posts.index')} sx={{

                        lineHeight: 2.5,
                        color: 'white'
                    }}>Read</Button>
                    <Button sx={{

                        lineHeight: 2.5,
                        color: 'white'
                    }}>Create</Button>
                    <ListItem sx={{ pt: '4rem', color: 'white'}}>
                        <ThemeSwitch
                            modes={["light", "dark", "system"]}
                            icons={[
                                <Sun key="sun-icon" size={16}/>,
                                <Moon key="moon-icon" size={16}/>,
                                <Laptop key="laptop-icon" size={16}/>,
                            ]}
                            showInactiveIcons="all"
                        /></ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}
