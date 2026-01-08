import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import {useTranslation} from 'react-i18next';
import Button from "@mui/material/Button";

function Dashboard({user: user}) {

    return (
     <>
            <Head title="Dashboard"/>

            <div className="py-12 ">
                <div className="grid grid-cols-12">
                    <div className="col-span-full ml-auto mr-auto">
                        <div className="inline-flex rounded-md shadow-xs" role="group">
                            <button type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                Your Posts
                            </button>
                            <button type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                Trending Posts
                            </button>
                            <button type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                Saved
                            </button>
                        </div>


                        <Button variant="contained">Тест на MUI</Button>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden bg-[#283148] shadow-sm sm:rounded-sm">
                        <div className="p-6 text-white/50">

                            <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5">


                                <a
                                    href=""
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/50 sm:size-16">

                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            title here
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            ...

                                        </p>

                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
Dashboard.layout = (page) => <AuthenticatedLayout children={page} title="Dashboard"/>;

export default Dashboard;
