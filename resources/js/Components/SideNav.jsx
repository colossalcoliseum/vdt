import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";

export default function SideNav(){
    return (
        <aside id="separator-sidebar"
               className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
               aria-label="Sidebar">


            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-500 dark:bg-gray-90">
                {/*<ApplicationLogo/>*/}
                <ul className="space-y-6 font-medium ">

                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                                           </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                            <span
                                className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                            <span
                                className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                        </a>
                    </li>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">

                            <span className="ms-3">Upgrade to Pro</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">

                            <span className="ms-3">Documentation</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">

                            <span className="ms-3">Components</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">

                            <span className="ms-3">Help</span>
                        </a>
                    </li>

                </ul>

            </div>

        </aside>
    )
}
