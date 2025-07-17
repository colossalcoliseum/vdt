//import ApplicationLogo from '@/Components/ApplicationLogo';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, usePage} from '@inertiajs/react';
import {useState} from 'react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SideNav from "@/Admin/Components/SideNav.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {useTranslation} from 'react-i18next';
import Cookies from "js-cookie";
import ApplicationLogo from "@/Admin/Components/ApplicationLogo.jsx";


//export default function AuthenticatedLayout({header, children}) {
const AdminLayout = ({header, children}) => {

    const {t, i18n} = useTranslation();
    const languages = [
        {name: "English", code: "en"},
        {name: "Български", code: "bg"}
    ];
    const actions = [
        {name: "Manage Users", route: ""},
        {name: "Manage Posts", route: ""},
        {name: "Manage Videos", route: ""},

    ];

    const currentLocale = Cookies.get("i18next") || "en";
    const [language, setLanguage] = useState(currentLocale);
    const handleChangeLocale = (e) => {
        const lang = e.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };
    const handleChangeActions = (e) => {

    }
    const {flash} = usePage().props

    return (
        <div className="grid grid-cols-12  bg-[#283148] ">
            <SideNav/>
            <div className="min-h-screen  col-span-10 ">

                <nav className="border-b  bg-[#283148] text-white/50">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 my-auto mx-auto">
                            <ApplicationLogo className="block mt-auto mb-auto h-12 w-auto fill-current text-gray-90"/>
                        </div>
                        <div className="col-span-9">
                            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                                <div className="flex h-24 ">

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
                                    <div className="switcher grid grid-cols-12  text-[#283148] my-auto">
                                        <div className="col-span-2">
                                            <svg width="20" height="auto" viewBox="0 0 73.768 73.768"
                                                 xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                                <g id="SVGRepo_bgCarrier"
                                                ></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke="#CCCCCC"></g>
                                                <g
                                                    id="SVGRepo_iconCarrier">
                                                    <path id="Path_10" data-name="Path 10"
                                                          d="M117.606,385.2a36.884,36.884,0,1,0,36.884,36.884A36.926,36.926,0,0,0,117.606,385.2Zm33.846,35.383H136.366a48.681,48.681,0,0,0-3.047-16.068,36.786,36.786,0,0,0,8.781-5.808A33.752,33.752,0,0,1,151.452,420.586Zm-32.346-31.072a36.534,36.534,0,0,1,6.069,6.387,39.467,39.467,0,0,1,4.176,7.028,33.843,33.843,0,0,1-10.245,2.061Zm3.534-.935a33.762,33.762,0,0,1,17.292,8.051,33.809,33.809,0,0,1-7.772,5.116A41.252,41.252,0,0,0,122.64,388.579ZM110.19,395.9a36.615,36.615,0,0,1,5.916-6.261v15.35a33.789,33.789,0,0,1-10.116-2.013A39.5,39.5,0,0,1,110.19,395.9Zm-7.013,5.906a33.8,33.8,0,0,1-7.9-5.177,33.757,33.757,0,0,1,17.469-8.074A41.244,41.244,0,0,0,103.177,401.807Zm12.929,6.183v12.6H102a45.607,45.607,0,0,1,2.835-14.838A36.83,36.83,0,0,0,116.106,407.99Zm0,15.6v12.386a36.8,36.8,0,0,0-11.018,2.146A42.373,42.373,0,0,1,102,423.587Zm0,15.386v15.252a47.106,47.106,0,0,1-9.792-13.361A33.819,33.819,0,0,1,116.106,438.973Zm-2.86,16.708a33.755,33.755,0,0,1-18.084-8.24,33.786,33.786,0,0,1,8.306-5.426A48.955,48.955,0,0,0,113.246,455.681Zm5.86-1.313v-15.4a33.8,33.8,0,0,1,9.922,1.94A47.081,47.081,0,0,1,119.106,454.368Zm12.762-12.294a33.846,33.846,0,0,1,8.182,5.367,33.759,33.759,0,0,1-17.909,8.217A48.888,48.888,0,0,0,131.868,442.074Zm-12.762-6.1V423.587h14.257a42.352,42.352,0,0,1-3.106,14.582A36.818,36.818,0,0,0,119.106,435.973Zm0-15.386v-12.6a36.806,36.806,0,0,0,11.4-2.291,45.562,45.562,0,0,1,2.854,14.888ZM93.112,398.711a36.8,36.8,0,0,0,8.91,5.871A48.7,48.7,0,0,0,99,420.587H83.76A33.757,33.757,0,0,1,93.112,398.711ZM83.76,423.587H99a45.675,45.675,0,0,0,3.256,15.683A36.807,36.807,0,0,0,93,445.35,33.755,33.755,0,0,1,83.76,423.587Zm58.447,21.764a36.8,36.8,0,0,0-9.122-6.022,45.69,45.69,0,0,0,3.279-15.742h15.088A33.759,33.759,0,0,1,142.207,445.351Z"
                                                          transform="translate(-80.722 -385.203)"
                                                          fill="#ffffff"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="col-span-10">
                                            {/* Language switch dropdown here */}
                                            <span className="text-white/50 ">

                                </span>
                                            <select onChange={handleChangeLocale} value={language}
                                                    className="rounded-md bg-white/50">
                                                {languages.map(({name, code}) => (
                                                    <option key={code} value={code}
                                                            className="bg-gray-500/75 text-white rounded-md">
                                                        {name}
                                                    </option>
                                                ))}
                                            </select>
                                            <select onChange={handleChangeActions} value={actions}
                                                    className="rounded-md ml-3 bg-white">
                                                {actions.map(({name, code}) => (
                                                    <option key={route} value={route}
                                                            className="bg-white text-gray-900 rounded-md">
                                                        {name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
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

                <main>
                    {flash.message && (
                        <div className="alert">{flash.message}</div>
                    )}
                    {children}
                </main>
            </div>

        </div>
    );
}
export default AdminLayout
