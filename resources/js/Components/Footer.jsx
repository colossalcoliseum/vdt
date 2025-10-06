import ApplicationLogo from "@/Components/ApplicationLogo.jsx";

export default function Footer({
                                   className = '',
                                   children,
                                   ...props
                               }) {
    return (
        <footer
            className=" px-12 py-6">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 items-center">
                <div className="col-span-1">

                    <ApplicationLogo height={60} className="fill-current text-blue-900" alt="VDT"/>
                </div>
                    <div className="col-span-2">

                        <ul className="flex justify-between items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Cookies</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Legal</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                            <li>
                                <span>© 2025 VDT </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}
