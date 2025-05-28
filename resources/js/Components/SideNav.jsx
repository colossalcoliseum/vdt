import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import NavLink from "@/Components/NavLink.jsx";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import {usePage} from "@inertiajs/react";

export default function SideNav() {
    const user = usePage().props.auth.user;

    return (
        <div id="separator-sidebar"
             className="col-span-2"
             aria-label="Sidebar">


            <div
                className="h-full px-5 py-7 overflow-y-auto dark:bg-white/50 dark:text-[#283148] bg-[#283148] text-white/50 ">
                {/*<ApplicationLogo/>*/}
                <ul className="space-y-6 font-medium ">

                    <li>
                        <ResponsiveNavLink className="hover:bg-gray-500 ">
                            <span className="">Home</span>

                        </ResponsiveNavLink>
                    </li>
                    <li>
                        <ResponsiveNavLink className="hover:bg-gray-500 ">
                            <span className="">Subscriptions</span>

                        </ResponsiveNavLink>
                    </li>
                    <li>
                        <ResponsiveNavLink className="hover:bg-gray-500 ">
                            <span className="">Your Activity</span>

                        </ResponsiveNavLink>
                    </li>


                </ul>
                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <ResponsiveNavLink className="hover:bg-gray-500 ">
                            <span className="">Kanban</span>

                        </ResponsiveNavLink>
                    </li>
                    <li>
                        <ResponsiveNavLink className="hover:bg-gray-500 ">
                            <span className="">Kanban</span>

                        </ResponsiveNavLink>
                    </li>
                    <li>
                        <ResponsiveNavLink
                            className="hover:bg-gray-500 "
                            href={route('profile.edit')}
                        >
                            <span className="">Settings</span>

                        </ResponsiveNavLink>
                    </li>
                    

                </ul>

            </div>

        </div>
    )
}
