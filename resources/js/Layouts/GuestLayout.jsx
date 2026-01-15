import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, router, useForm, usePage} from '@inertiajs/react';
import SideNav from "@/Components/SideNav.jsx";
import Footer from "@/Components/Footer.jsx";
import Container from '@mui/material/Container';
import {AppBar} from "@mui/material";
import {MainDrawer} from "@/Components/MainDrawer.jsx";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import RightDrawer from "@/Components/RightDrawer.jsx";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
export default function GuestLayout({ children }) {
    const submit = (e) => {
        e.preventDefault()

        router.get(route('search.posts'), {
            query: data.query
        }, {
            preserveScroll: true
        })
    }

    const {data, setData,processing} = useForm({
        query:''
    })
    const user = usePage().props.auth.user

    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });
    return (
        <Container disableGutters maxWidth={false}  >
            <AppBar sx={{bgcolor: 'white',
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: "blur(4px)",
                py:0.5


            }}
            >
                <div className="flex  sm:px-6 lg:px-8">



                    <Button href='/' variant="outlined" sx={{hover:'none', color:'black', border:'none', background:'none',}}>
                        <ApplicationLogo height={32} className={"my-4 pl-12 ml-12 flex absolute"}></ApplicationLogo>
                    </Button>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mx: 'auto',
                    }}>



                    </Box>
                {/*    <Box>
                        <List sx={{display:'flex',px:3}}>
                            <ListItem sx={{ color:'black', borderRadius:1}}><Button  variant="outlined" href={route('register')} type="button">Register</Button></ListItem>
                            <Typography sx={{color:"black", my:'auto'}}>or</Typography>
                            <ListItem sx={{ color:'black', borderRadius:1}}><Button  variant="contained" href={route('login')} type="button">Log In</Button></ListItem>
                        </List>
                    </Box>*/}
                </div>



            </AppBar>


            <Box
                component="main"

                sx={{
                    background: 'linear-gradient(160deg,rgba(158, 234, 255) 0%, rgba(250, 230, 230) 50%, rgb(255,255,255) 100%);',
                    position: "relative",
                    backgroundAttachment: 'fixed',
                    display: "flex",
                    flexDirection: 'column',
                    width: '100%',
                    minHeight: '100vh',
                    justifyContent: 'center'
                }}
            >

                <Box sx={{ my:8, mx: 12 }}>
                    {children}
                </Box>


            </Box>
        </Container>

    );
}
