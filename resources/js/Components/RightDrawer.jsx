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
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import { Icon } from "@iconify/react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {blue} from "@mui/material/colors";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MessageIcon from '@mui/icons-material/Message';

export default function RightDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };
    function Item(props) {
        const {sx, ...other} = props;
        return (
            <Box
                sx={[
                    (theme) => ({
                        bgcolor: '#fff',
                        color: 'grey.100',

                        borderColor: 'grey.900',
                        p: 1,
                        m: 1,

                        background: 'rgba(0,0,0,0.1)',
                        justifyContent: 'center',
                        backdropFilter: "blur(4px)",
                        py:0.5,
                        display: 'flex',

                        borderRadius: 2,
                        fontSize: '1.3rem',
                        fontWeight: '200',

                    }),
                    ...(Array.isArray(sx) ? sx : [sx]),
                ]}
                {...other}
            />
        );
    }

    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{
                width: '100%', maxWidth: 280, minWidth: 230,
                alignItems: 'left',

            }}>
               <Box sx={{display: 'flex',m:1, flexDirection: 'row'}}>
                    <Item>Messages</Item>
                </Box>

                <ListItemButton component="a" sx={{
                    my: 2,p: 1.5, borderRadius: 2, '&:hover': {
                        bgcolor: blue[100],
                        color: '#000000'
                    },color: '#ffffff',

                }} href="/">
                    <MessageIcon sx={{mr:3}}></MessageIcon>
                    <ListItemText primary="All Messages" />
                </ListItemButton>
                <ListItemButton component="a" sx={{
                    my: 2,p: 1.5, borderRadius: 2, '&:hover': {
                        bgcolor: blue[100],
                        color: '#000000'
                    },color: '#ffffff',

                }} href={route('video.index')}>
                    <ReplyIcon sx={{mr: 3}}></ReplyIcon>
                    <ListItemText primary="Latest"/>
                </ListItemButton>




            </List>
        </Box>
    );

    return (
        <div className="">
                <React.Fragment key={"right"}>
                    <Button variant="outlined" color="info"
                            onClick={toggleDrawer("right", true)}
                            sx={{
                                my:1,

                                boxShadow:'none',
                                '&:hover': {
                                    boxShadow:'none'
                                },
                                color: 'black', border: '1px solid',}}
                    >
                        <SendIcon/>
                    </Button>
                    <Button

                        onClick={toggleDrawer("right", true)}>


                    </Button>
                    <Drawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                bgcolor: 'rgba(0,0,0,0.7)',
                                backdropFilter: "blur(10px) saturate(180%)",
                                WebkitBackdropFilter: "blur(10px) saturate(180%)",
                                color: 'white',
                            },
                        }}
                    >
                        {list("right")}
                    </Drawer>
                </React.Fragment>

        </div>
    );
}
