import {useState} from 'react';
import {TopNav} from "@/Components/TopNav.jsx";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import LeftDrawer from "@/Components/LeftDrawer.jsx";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {router, useForm, usePage} from "@inertiajs/react";
import {AppBar, Toolbar, useScrollTrigger} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/Components/ui/navigation-menu.jsx";
import RightDrawer from "@/Components/RightDrawer.jsx";
import Grid from "@mui/material/Grid";

export default function AuthenticatedLayout({header, children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [openAccordions, setOpenAccordions] = useState({
        users: false,
        account: false,
        projects: false
    });
    const [language, setLanguage] = useState('en');
    const languages = [
        {name: "English", code: "en"},
        {name: "Български", code: "bg"}
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleChangeLocale = (e) => setLanguage(e.target.value);

    const props = usePage().props

    function sleep(duration) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    }
    const {data, setData,processing} = useForm({
       query:''
    })
    const submit = (e) => {
        e.preventDefault()

        router.get(route('search.posts'), {
            query: data.query
        }, {
            preserveScroll: true
        })
    }



    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });
    return (
       <Container disableGutters maxWidth={false}  >


            {/* Main Content */}

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
                                    <RightDrawer/>


                                </div>



                    </AppBar>


                {header && (
                    <header>
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <Box
                    component="main"

           sx={{
                        background: 'linear-gradient(160deg,rgba(196, 242, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 224, 224, 1) 100%);',
                        position: "relative",
                        backgroundAttachment: 'fixed',
               display: "flex",
               flexDirection: 'column',
                width: '100%',

                    }}
                >

                            <Box sx={{ my:8, mx: 12 }}>
                        {children}
                            </Box>


                    </Box>


            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={toggleSidebar}></div>
            )}

        </Container>

    );
}
