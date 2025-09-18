import {useState} from 'react';
import Footer from "@/Components/Footer.jsx";
import {TopNav} from "@/Components/TopNav.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import LeftDrawer from "@/Components/LeftDrawer.jsx";


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


    function sleep(duration) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    }

    const topFilms = [
        {title: 'The Shawshank Redemption', year: 1994},
        {title: 'The Godfather', year: 1972},
        {title: 'The Godfather: Part II', year: 1974},
        {title: 'The Dark Knight', year: 2008},
        {title: '12 Angry Men', year: 1957},
        {title: "Schindler's List", year: 1993},
        {title: 'Pulp Fiction', year: 1994}]/*TODO: довърши с резултати за публикации , видеа и потребители*/

    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        (async () => {
            setLoading(true);
            await sleep(1e3); // For demo purposes.
            setLoading(false);

            setOptions([...topFilms]);
        })();

    }
    const handleClose = () => {
        setOpen(false);
        setOptions([]);
    };

    return (
        <div className="grid grid-cols-12 grid-rows-12 min-h-screen">
            {/* Main Content */}
            <div
                className={`${isSidebarCollapsed ? 'col-span-12' : 'col-span-12'} row-span-full transition-all duration-300`}>
                <nav className="border-b pt-6 bg-gradient-to-r from-indigo-100 via-indigo-100 via-50% to-pink-100">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex h-24 items-center">
                            <button onClick={toggleSidebar}
                                    className="lg:hidden flex justify-center items-center w-8 h-8 text-gray-600 hover:bg-white/20 rounded-full mr-4 backdrop-blur-sm transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <line x1="3" x2="21" y1="6" y2="6"/>
                                    <line x1="3" x2="21" y1="12" y2="12"/>
                                    <line x1="3" x2="21" y1="18" y2="18"/>
                                </svg>
                            </button>
                            <LeftDrawer></LeftDrawer>

                            <div className="flex ml-auto mr-auto">


                                <Autocomplete
                                    sx={{width: 300}}
                                    open={open}
                                    onOpen={handleOpen}
                                    onClose={handleClose}
                                    isOptionEqualToValue={(option, value) => option.title === value.title}
                                    getOptionLabel={(option) => option.title}
                                    options={options}
                                    loading={loading}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Asynchronous"
                                            slotProps={{
                                                input: {
                                                    ...params.InputProps,
                                                    endAdornment: (
                                                        <React.Fragment>
                                                            {loading ?
                                                                <CircularProgress color="inherit" size={20}/> : null}
                                                            {params.InputProps.endAdornment}
                                                        </React.Fragment>
                                                    ),
                                                },
                                            }}
                                        />
                                    )}
                                />


                            </div>

                            <TopNav/>
{/*TODO: добави списък с езици*/}

                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="bg-gradient-to-r from-indigo-100 via-indigo-100 via-50% to-pink-100">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main
                    className="bg-gradient-to-r from-indigo-100 via-indigo-100 via-50% to-pink-100 min-h-[calc(100vh-6rem)]">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
               {/*TODO: footer ?*/}
            </div>

            {/* Right Sidebar */}





            {/* Mobile Backdrop */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={toggleSidebar}></div>
            )}
        </div>
    );
}
