import {useState} from 'react';
import {TopNav} from "@/Components/TopNav.jsx";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import LeftDrawer from "@/Components/LeftDrawer.jsx";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

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


    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });
    return (
        <div className="grid grid-cols-12 grid-rows-12 min-h-screen">
            {/* Main Content */}
            <div
                className={`col-span-12 row-span-full transition-all  duration-300`}>
                <nav className="py-1 bg-white ">
                    <div className="flex mx-12 sm:px-6 lg:px-8">
                        <div className="flex h-24 items-center">
                            <button onClick={toggleSidebar}
                                    className="lg:hidden flex justify-center items-center w-8 h-8 text-gray-600 hover:bg-white/20 rounded-full mr-4 backdrop-blur-sm transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <line x1="3" x2="21" y1="6" y2="6"/>
                                    <line x1="3" x2="21" y1="12" y2="12"/>
                                    <line x1="3" x2="21" y1="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                            <LeftDrawer
                                className="m-3 p-12 "
                            />


                            <div className={"flex justify-between m-auto"}>

                                {/*TODO: добави форма , както и страница за резултатие*/}
                                <TextField
                                    id="filled-search"
                                    label="Search"
                                    type="search"
                                    variant="filled"
                                />

                                <Tooltip title="Search for everything !">
                                    <IconButton onClick={() => setLoading(true)} loading={loading}>
                                    <SearchSharpIcon />
                                    </IconButton>
                                </Tooltip>


                            </div>

                            <TopNav/>

                        </div>

                </nav>

                {header && (
                    <header>
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main
                    className="bg-gradient-to-br from-blue-100 from-1% via-blue-200 via-600% to-red-50 bg-fixed min-h-[calc(100vh-6rem)]">
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
