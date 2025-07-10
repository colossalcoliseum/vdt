import ApplicationLogo from '@/Components/ApplicationLogo';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, usePage} from '@inertiajs/react';
import {useState} from 'react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SideNav from "@/Components/SideNav.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {useTranslation} from 'react-i18next';
import Cookies from "js-cookie";


//export default function AuthenticatedLayout({header, children}) {
const AutenticatedLayout = ({header, children}) => {


    const {t, i18n} = useTranslation();
    const languages = [
        {name: "English", code: "en"},
        {name: "Български", code: "bg"}
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
                                    className="mb-auto mt-auto"
                                    >
                                    {t("search")}
                                </PrimaryButton>

                            </div>
                            <div className="switcher text-[#283148] ">
                                {/* Language switch dropdown here */}
                                <span className="text-white/50">{t('languages')}</span>
                                <select onChange={handleChangeLocale} value={language}>
                                    {languages.map(({name, code}) => (
                                        <option key={code} value={code} className="bg:bg-gray-700">
                                            {name}
                                        </option>
                                    ))}
                                </select>
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
export default AutenticatedLayout
