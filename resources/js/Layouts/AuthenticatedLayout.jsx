import ApplicationLogo from '@/Components/ApplicationLogo';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, usePage} from '@inertiajs/react';
import {useState} from 'react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SideNav from "@/Components/SideNav.jsx";
import TextInput from "@/Components/TextInput.jsx";
import { useTranslation } from 'react-i18next';
import Cookies from "js-cookie";


export default function AuthenticatedLayout({header, children}) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const { t, i18n } = useTranslation();
    const languages = [
        { name: "English", code: "en" },
        { name: "Български", code: "bg" }
    ];
    const currentLocale = Cookies.get("i18next") || "en";
    const [language, setLanguage] = useState(currentLocale);
    const handleChangeLocale = (e) => {
        const lang = e.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div className="grid grid-cols-12  bg-[#283148] ">
             <SideNav/>
            <div className="min-h-screen  col-span-10 ">

                    <nav className="border-b  bg-[#283148] text-white/50">

                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                            <div className="flex h-20 ">
                                <ApplicationLogo className="block mt-auto mb-auto h-9 w-auto fill-current text-gray-90"/>

                                <div className="flex ml-auto mr-auto space-x-2">

                                    <TextInput
                                    className="mt-auto mb-auto"
                                    placeholder=""

                                    >
                                    </TextInput>
                                    <PrimaryButton
                                    className="mb-auto mt-auto">
                                        {t("search")}
                                    </PrimaryButton>

                            </div>
                                <div className="switcher text-[#283148] ">
                                    {/* Language switch dropdown here */}
                                    <span className="text-white/50">{t('languages')}</span>
                                    <select onChange={handleChangeLocale} value={language}>
                                        {languages.map(({ name, code }) => (
                                            <option key={code} value={code} className="bg:bg-gray-700">
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? 'block' : 'hidden') +
                            ' sm:hidden'
                        }
                    >
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink
                                href={route('dashboard')}
                                active={route().current('dashboard')}
                            >
                                {t("welcome text")}
                            </ResponsiveNavLink>


                        </div>

                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('profile.edit')}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route('logout')}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route('logout')}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>

                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </div>
    );
}
