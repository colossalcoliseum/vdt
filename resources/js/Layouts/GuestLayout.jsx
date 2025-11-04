import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, router, useForm, usePage} from '@inertiajs/react';
import SideNav from "@/Components/SideNav.jsx";
import Footer from "@/Components/Footer.jsx";
import Container from '@mui/material/Container';
import {AppBar} from "@mui/material";
import LeftDrawer from "@/Components/LeftDrawer.jsx";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import RightDrawer from "@/Components/RightDrawer.jsx";
import * as React from "react";


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


                    <LeftDrawer/>
                    <Button href='/'>
                        <ApplicationLogo height={32} className={"my-4 pl-12 ml-12 flex absolute"}></ApplicationLogo>
                    </Button>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mx: 'auto',
                    }}>

                        <form  onSubmit={submit}>
                            <TextField
                                id="filled-search"
                                label="Search"
                                type="search"
                                name="query"
                                variant="filled"
                                value={data.query}
                                onChange={(e) => {
                                    setData('query', e.target.value);
                                }}
                                disabled={processing}
                            />

                            <Button
                                type="submit"
                                onClick={() => setLoading(true)}

                                sx={{color: 'black',py:'auto'}}
                            >
                                <SearchSharpIcon />
                            </Button>
                        </form>

                    </Box>
                    {user&&
                    <RightDrawer/>
                    }

                </div>



            </AppBar>


            <Box
                component="main"

                sx={{
                    background: 'linear-gradient(160deg,rgba(196, 242, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 224, 224, 1) 100%);',
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
