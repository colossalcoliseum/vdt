import { useState } from 'react';
import Footer from "@/Components/Footer.jsx";
import {TopNav} from "@/Components/TopNav.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
export default function AuthenticatedLayout({ header, children }) {
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
    const toggleSidebarCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);
    const toggleAccordion = (accordion) => {
        setOpenAccordions(prev => ({
            ...prev,
            [accordion]: !prev[accordion]
        }));
    };
    const handleChangeLocale = (e) => setLanguage(e.target.value);


    function sleep(duration) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    }

    const topFilms = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 }]/*TODO: довърши с резултати за публикации , видеа и потребители*/

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
            {/* Sidebar Navigation */}
            <div className={`${isSidebarCollapsed ? 'col-span-2' : 'col-span-2'} row-span-full py-6 px-4 bg-gradient-to-l from-indigo-100 via-red-100 to-pink-100 transition-all duration-300 relative`}>

                <div className={`fixed top-0 left-0 bottom-0 z-60 h-full border-r border-white/20 transform transition-all duration-300 ${
                    isSidebarCollapsed ? 'w-20' : 'w-64'
                } ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                    <div className="relative flex flex-col h-full">
                        {/* Header */}
                        <ApplicationLogo className="fill-current text-blue-900 h-20 m-6 relative"/>

                        <header className="p-4 flex justify-between items-center">
                            {!isSidebarCollapsed && (
                                <a className="font-semibold text-xl text-gray-800" href="#">Brand</a>
                            )}

                            <div className="flex items-center gap-2 my-6">
                                <button onClick={toggleSidebarCollapse} className="hidden lg:flex justify-center items-center w-6 h-6 bg-white/80 border border-white/30 text-gray-700 hover:bg-white/90 rounded-full backdrop-blur-sm">
                                    <svg className={`w-4 h-4 transition-transform ${isSidebarCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                                        <path d="m10 15-3-3 3-3"/>
                                    </svg>
                                </button>

                                <button onClick={toggleSidebar} className="lg:hidden flex justify-center items-center w-6 h-6 bg-white/80 border border-white/30 text-gray-700 hover:bg-white/90 rounded-full backdrop-blur-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </header>

                        {/* Navigation */}
                        <nav className="h-full overflow-y-auto px-2">
                            <ul className="space-y-6">
                                <li>
                                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-white/20 text-sm text-gray-800 rounded-lg hover:bg-white/30 backdrop-blur-sm transition-all" href="#" title="Dashboard">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <polyline points="9 22 9 12 15 12 15 22"/>
                                        </svg>
                                        {!isSidebarCollapsed && <span>Dashboard</span>}
                                    </a>
                                </li>

                                <li>
                                    <button onClick={() => !isSidebarCollapsed && toggleAccordion('users')} className="w-full text-left flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all" title="Users">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                            <circle cx="9" cy="7" r="4"/>
                                        </svg>
                                        {!isSidebarCollapsed && (
                                            <>
                                                <span>Users</span>
                                                <svg className={`ml-auto w-4 h-4 transition-transform ${openAccordions.users ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path d="m6 9 6 6 6-6"/>
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                    {!isSidebarCollapsed && (
                                        <div className={`overflow-hidden transition-all duration-300 ${openAccordions.users ? 'max-h-96' : 'max-h-0'}`}>
                                            <ul className="pl-7 space-y-1">
                                                <li><a className="block py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all" href="#">Sub Menu 1</a></li>
                                                <li><a className="block py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all" href="#">Sub Menu 2</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <button onClick={() => !isSidebarCollapsed && toggleAccordion('account')} className="w-full text-left flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all" title="Account">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="18" cy="15" r="3"/>
                                            <circle cx="9" cy="7" r="4"/>
                                            <path d="M10 15H6a4 4 0 0 0-4 4v2"/>
                                        </svg>
                                        {!isSidebarCollapsed && (
                                            <>
                                                <span>Account</span>
                                                <svg className={`ml-auto w-4 h-4 transition-transform ${openAccordions.account ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path d="m6 9 6 6 6-6"/>
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                    {!isSidebarCollapsed && (
                                        <div className={`overflow-hidden transition-all duration-300 ${openAccordions.account ? 'max-h-96' : 'max-h-0'}`}>
                                            <ul className="pl-7 space-y-1">
                                                <li><a className="block py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all" href="#">Link 1</a></li>
                                                <li><a className="block py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all" href="#">Link 2</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all" href="#" title="Calendar">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                            <line x1="16" x2="16" y1="2" y2="6"/>
                                            <line x1="8" x2="8" y1="2" y2="6"/>
                                        </svg>
                                        {!isSidebarCollapsed && (
                                            <>
                                                <span>Calendar</span>
                                                <span className="ml-auto py-0.5 px-1.5 text-xs bg-white/30 text-gray-800 rounded-full">New</span>
                                            </>
                                        )}
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all" href="#" title="Documentation">
                                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                        </svg>
                                        {!isSidebarCollapsed && <span>Documentation</span>}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className={`${isSidebarCollapsed ? 'col-span-8' : 'col-span-8'} row-span-full transition-all duration-300`}>
                <nav className="border-b pt-6 bg-gradient-to-r from-indigo-100 via-indigo-100 via-50% to-pink-100">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex h-24 items-center">
                            <button onClick={toggleSidebar} className="lg:hidden flex justify-center items-center w-8 h-8 text-gray-600 hover:bg-white/20 rounded-full mr-4 backdrop-blur-sm transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <line x1="3" x2="21" y1="6" y2="6"/>
                                    <line x1="3" x2="21" y1="12" y2="12"/>
                                    <line x1="3" x2="21" y1="18" y2="18"/>
                                </svg>
                            </button>

                            <div className="flex ml-auto mr-auto">



                                <Autocomplete
                                sx={{ width: 300 }}
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
                                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                        {params.InputProps.endAdornment}
                                                    </React.Fragment>
                                                ),
                                            },
                                        }}
                                    />
                                )}
                            />



                        </div>

                           <TopNav></TopNav>

                            <div className="switcher grid grid-cols-12 text-gray-800 mt-auto mb-auto ml-4">
                                <div className="col-span-3 flex items-center">
                                    <svg width="20" height="auto" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <div className="col-span-8">
                                    <select onChange={handleChangeLocale} value={language} className="bg-indigo-100 border-none rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900">
                                        {languages.map(({name, code}) => (
                                            <option key={code} value={code}>{name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="bg-gradient-to-r from-indigo-100 via-indigo-100 via-50% to-pink-100">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main className="bg-gradient-to-r from-indigo-100 via-indigo-100 via-50% to-pink-100 min-h-[calc(100vh-6rem)]">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
<Footer/>
            </div>

            {/* Right Sidebar */}
            <div className={`${isSidebarCollapsed ? 'col-span-3' : 'col-span-2'} row-span-full bg-pink-100 transition-all duration-300`}>
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all">
                            <div className="font-medium text-gray-800">Create New Post</div>
                            <div className="text-sm text-gray-600">Share your thoughts</div>
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all">
                            <div className="font-medium text-gray-800">View Analytics</div>
                            <div className="text-sm text-gray-600">Check your stats</div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Backdrop */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={toggleSidebar}></div>
            )}
        </div>
    );
}
