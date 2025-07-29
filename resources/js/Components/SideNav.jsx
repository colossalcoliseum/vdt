import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import NavLink from "@/Components/NavLink.jsx";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import {router, usePage} from "@inertiajs/react";
import {useTranslation} from "react-i18next";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {useState} from "react";

export default function SideNav() {
    const user = usePage().props.auth.user;
    const { t, i18n } = useTranslation();
    const props = usePage().props;
  ;


    return (
        <div id="separator-sidebar"
             className="col-span-2 py-6 px-10 bg-gradient-to-l from-indigo-100 via-red-100 to-pink-100"
             aria-label="Sidebar">
            <div className="my-10 bg-">
            <ApplicationLogo className=" w-auto fill-current text-blue-900"/>
            </div>
            <div
                className="h-full px-5 py-7 overflow-y-auto dark:bg-opacity-0 dark:text-[#283148] bg-[#283148] text-white/50 ">
                {/*<ApplicationLogo/>*/}
                <ul className="space-y-6 font-medium  ">

                    <ul className="space-y-2 font-medium border-t border-gray-700"/>

                    <li>
                        <ResponsiveNavLink className="hover:bg-opacity-0 hover:border-opacity-0"
                        href={route('dashboard')}

                        >
                            <span className="">{t("home")}</span>

                        </ResponsiveNavLink>

                    </li>
                    <li>
                        <ResponsiveNavLink className="hover:bg-opacity-0 hover:border-opacity-0"

                        >
                            <span className="">Videos</span>

                        </ResponsiveNavLink>
                    </li>
                    <li>
                        <ResponsiveNavLink className="hover:bg-opacity-0 hover:border-opacity-0" href={route('post.index')}
                                          >
                            <span className="">Posts</span>

                        </ResponsiveNavLink>
                    </li>



                </ul>
                <ul className="pt-4 mt-4 p-y-2 font-medium border-t border-gray-200 dark:border-gray-700">

                    <li>
                        <div className="hidden sm:ms-6 sm:flex sm:items-center ">
                            <div className="relative ms-3 ">
                                <Dropdown className="">
                                    <Dropdown.Trigger>
                                        <span className="inline-flex">
                                            <button
                                                type="button"
                                                className="inline-flex bg-blue-900 px-5 py-2  font-medium leading-4 text-gray-300 transition duration-150 ease-in-out hover:text-gray-100 focus:outline-none"
                                            >
                                                {t("create new")}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content >
                                        <Dropdown.Link
                                            className="bg-gray-700 "
                                            href={route('video.create')}
                                        >
                                            {t("video")}
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('post.create')}

                                        >
                                            {t("blog")}
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </li>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"/>




                </ul>

            </div>

        </div>
    )
}
