import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import SideNav from "@/Components/SideNav.jsx";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-r from-indigo-100 via-red-100 to-blue-100 text-black dark:bg-indigo-100 dark:text-black pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-blue-900" />
                </Link>
                </div>

            <div className="mt-6 w-full overflow-hidden px-6 py-4 sm:max-w-md sm:rounded-sm ">

                {children}
            </div>
        </div>
    );
}
