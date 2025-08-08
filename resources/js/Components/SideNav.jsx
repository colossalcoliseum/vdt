import { useState, useRef, useEffect } from 'react';

export default function SideNav() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // New state for desktop collapse
    const [openAccordions, setOpenAccordions] = useState({
        users: false,
        account: false,
        projects: false
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSidebarCollapse = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const toggleAccordion = (accordion) => {
        setOpenAccordions(prev => ({
            ...prev,
            [accordion]: !prev[accordion]
        }));
    };

    return (
        <div className="relative">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 bottom-0 z-60 h-full bg-white border-r border-gray-200 transform transition-all duration-300 ${
                isSidebarCollapsed ? 'w-16' : 'w-64'
            } ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}>
                <div className="relative flex flex-col h-full max-h-full">
                    {/* Header */}
                    <header className="p-4 flex justify-between items-center gap-x-2">
                        {!isSidebarCollapsed && (
                            <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
                                Brand
                            </a>
                        )}

                        <div className="flex items-center gap-2">
                            {/* Desktop collapse button */}
                            <button
                                type="button"
                                onClick={toggleSidebarCollapse}
                                className="hidden lg:flex justify-center items-center w-6 h-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                                title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                            >
                                <svg className={`shrink-0 w-4 h-4 transition-transform duration-200 ${isSidebarCollapsed ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                                    <path d="m10 15-3-3 3-3"/>
                                </svg>
                                <span className="sr-only">{isSidebarCollapsed ? "Expand" : "Collapse"}</span>
                            </button>

                            {/* Mobile close button */}
                            <button
                                type="button"
                                onClick={toggleSidebar}
                                className="lg:hidden flex justify-center items-center w-6 h-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                            >
                                <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18"/>
                                    <path d="m6 6 12 12"/>
                                </svg>
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                    </header>

                    {/* Navigation */}
                    <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <div className="pb-0 px-2 w-full flex flex-col flex-wrap">
                            <ul className="space-y-1">
                                {/* Dashboard */}
                                <li>
                                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#" title="Dashboard">
                                        <svg className="w-4 h-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <polyline points="9 22 9 12 15 12 15 22"/>
                                        </svg>
                                        {!isSidebarCollapsed && <span>Dashboard</span>}
                                    </a>
                                </li>

                                {/* Users Accordion */}
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion('users')}
                                        className="w-full text-left flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    >
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                            <circle cx="9" cy="7" r="4"/>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                        </svg>
                                        Users

                                        <svg className={`ml-auto w-4 h-4 text-gray-600 transition-transform duration-200 ${openAccordions.users ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6"/>
                                        </svg>
                                    </button>

                                    {/* Users Submenu */}
                                    <div className={`overflow-hidden transition-all duration-300 ${openAccordions.users ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <ul className="pt-1 pl-7 space-y-1">
                                            <li>
                                                <button
                                                    onClick={() => toggleAccordion('usersSub1')}
                                                    className="w-full text-left flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                >
                                                    Sub Menu 1
                                                    <svg className={`ml-auto w-4 h-4 text-gray-600 transition-transform duration-200 ${openAccordions.usersSub1 ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 9 6 6 6-6"/>
                                                    </svg>
                                                </button>

                                                <div className={`overflow-hidden transition-all duration-300 ${openAccordions.usersSub1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <ul className="pt-1 pl-2 space-y-1">
                                                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 1</a></li>
                                                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 2</a></li>
                                                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 3</a></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li>
                                                <button
                                                    onClick={() => toggleAccordion('usersSub2')}
                                                    className="w-full text-left flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                >
                                                    Sub Menu 2
                                                    <svg className={`ml-auto w-4 h-4 text-gray-600 transition-transform duration-200 ${openAccordions.usersSub2 ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m6 9 6 6 6-6"/>
                                                    </svg>
                                                </button>

                                                <div className={`overflow-hidden transition-all duration-300 ${openAccordions.usersSub2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <ul className="pt-1 pl-2 space-y-1">
                                                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 1</a></li>
                                                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 2</a></li>
                                                        <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 3</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                {/* Account Accordion */}
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion('account')}
                                        className="w-full text-left flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    >
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="18" cy="15" r="3"/>
                                            <circle cx="9" cy="7" r="4"/>
                                            <path d="M10 15H6a4 4 0 0 0-4 4v2"/>
                                            <path d="m21.7 16.4-.9-.3"/>
                                            <path d="m15.2 13.9-.9-.3"/>
                                            <path d="m16.6 18.7.3-.9"/>
                                            <path d="m19.1 12.2.3-.9"/>
                                            <path d="m19.6 18.7-.4-1"/>
                                            <path d="m16.8 12.3-.4-1"/>
                                            <path d="m14.3 16.6 1-.4"/>
                                            <path d="m20.7 13.8 1-.4"/>
                                        </svg>
                                        Account

                                        <svg className={`ml-auto w-4 h-4 text-gray-600 transition-transform duration-200 ${openAccordions.account ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6"/>
                                        </svg>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${openAccordions.account ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <ul className="pt-1 pl-7 space-y-1">
                                            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 1</a></li>
                                            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 2</a></li>
                                            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 3</a></li>
                                        </ul>
                                    </div>
                                </li>

                                {/* Projects Accordion */}
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion('projects')}
                                        className="w-full text-left flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    >
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/>
                                            <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/>
                                            <path d="M15 2v5h5"/>
                                        </svg>
                                        Projects

                                        <svg className={`ml-auto w-4 h-4 text-gray-600 transition-transform duration-200 ${openAccordions.projects ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6"/>
                                        </svg>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${openAccordions.projects ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <ul className="pt-1 pl-7 space-y-1">
                                            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 1</a></li>
                                            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 2</a></li>
                                            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">Link 3</a></li>
                                        </ul>
                                    </div>
                                </li>

                                {/* Calendar */}
                                <li>
                                    <a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                            <line x1="16" x2="16" y1="2" y2="6"/>
                                            <line x1="8" x2="8" y1="2" y2="6"/>
                                            <line x1="3" x2="21" y1="10" y2="10"/>
                                            <path d="M8 14h.01"/>
                                            <path d="M12 14h.01"/>
                                            <path d="M16 14h.01"/>
                                            <path d="M8 18h.01"/>
                                            <path d="M12 18h.01"/>
                                            <path d="M16 18h.01"/>
                                        </svg>
                                        Calendar
                                        <span className="ml-auto py-0.5 px-1.5 inline-flex items-center gap-x-1.5 text-xs bg-gray-200 text-gray-800 rounded-full">New</span>
                                    </a>
                                </li>

                                {/* Documentation */}
                                <li>
                                    <a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                        </svg>
                                        Documentation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content Area */}
            <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'} min-h-screen bg-gray-50`}>
                {/* Toggle Button - visible on all screen sizes */}
                <div className="p-2">
                    <button
                        type="button"
                        onClick={toggleSidebar}
                        className="flex justify-center items-center gap-x-3 w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 lg:hidden"
                        title="Toggle Navigation"
                    >
                        <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6"/>
                            <line x1="3" x2="21" y1="12" y2="12"/>
                            <line x1="3" x2="21" y1="18" y2="18"/>
                        </svg>
                        <span className="sr-only">Toggle Navigation</span>
                    </button>
                </div>

                {/* Page Content */}
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Content</h1>
                    <p className="text-gray-600">Това е основното съдържание на страницата. Страничната навигация вече работи правилно!</p>
                </div>
            </div>

            {/* Backdrop for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}
