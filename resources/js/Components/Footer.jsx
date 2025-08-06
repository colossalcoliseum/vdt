import ApplicationLogo from "@/Components/ApplicationLogo.jsx";

export default function Footer({
            className = '',
            children,
            ...props
}) {
    return (
        <footer className="flex">
            <div className="w-full">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
