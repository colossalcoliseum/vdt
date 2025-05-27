import { Head, Link } from '@inertiajs/react';
import Footer from "@/Components/Footer.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-[#940707] dark:text-white/50">

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-white selection:text-black">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-1 lg:justify-center">
                                <svg
                                    className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
                                    viewBox="0 0 125.879 55.957"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M 26.172 0 L 36.035 0 L 25.977 55.957 L 9.961 55.957 L 0 0 L 9.375 0 L 16.406 47.949 L 19.238 47.949 L 26.172 0 Z M 114.355 7.129 L 114.355 55.957 L 106.934 55.957 L 106.934 7.129 L 94.824 7.129 L 94.824 0 L 125.879 0 L 125.879 7.129 L 114.355 7.129 Z M 68.945 55.957 L 47.949 55.957 L 47.949 0 L 69.922 0 L 78.906 12.988 L 78.906 43.945 L 68.945 55.957 Z M 55.371 7.031 L 55.371 48.34 L 68.164 48.34 L 70.117 45.996 L 70.117 9.961 L 68.164 7.031 L 55.371 7.031 Z" vector-effect="non-scaling-stroke"/>
                                </svg>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href="https://laravel.com/docs"
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full flex-1 items-stretch"
                                    >
                                        <img
                                            src="https://laravel.com/assets/img/welcome/docs-light.svg"
                                            alt="Laravel documentation screenshot"
                                            className="aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
                                            onError={handleImageError}
                                        />
                                        <svg viewBox="0 0 1024 1024" fill="#FF2D20" className="icon" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                               stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M40.622 184.1c-4.414 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.918-7.998h0.156a7.994 7.994 0 0 1 7.998 7.998 7.99 7.99 0 0 1-7.996 7.996zM72.612 184.1c-4.414 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.918-7.998h0.156a7.994 7.994 0 0 1 7.998 7.998 7.99 7.99 0 0 1-7.996 7.996zM104.602 184.1c-4.414 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.918-7.998h0.156a7.994 7.994 0 0 1 7.998 7.998 7.99 7.99 0 0 1-7.996 7.996z"
                                                    fill=""></path>
                                                <path
                                                    d="M1015.848 200.096H8.156a7.994 7.994 0 0 1-7.998-7.998v-15.994c0-13.23 10.762-23.994 23.992-23.994h975.702c13.23 0 23.992 10.764 23.992 23.994v15.994a7.994 7.994 0 0 1-7.996 7.998zM16.152 184.1h991.696v-7.996a8.008 8.008 0 0 0-7.996-7.998H24.15a8.004 8.004 0 0 0-7.998 7.998v7.996z"
                                                    fill=""></path>
                                                <path
                                                    d="M1015.848 871.89H8.156a7.994 7.994 0 0 1-7.998-7.998V192.098a7.994 7.994 0 0 1 7.998-7.998h1007.692a7.994 7.994 0 0 1 7.996 7.998v671.794a7.994 7.994 0 0 1-7.996 7.998zM16.152 855.894h991.696V200.096H16.152v655.798z"
                                                    fill=""></path>
                                                <path
                                                    d="M631.964 631.962H56.14a7.994 7.994 0 0 1-7.998-7.998v-383.88a7.994 7.994 0 0 1 7.998-7.998h575.826a7.992 7.992 0 0 1 7.996 7.998v383.88a7.996 7.996 0 0 1-7.998 7.998z m-567.826-15.994h559.828V248.08H64.138v367.888z"
                                                    fill=""></path>
                                                <path
                                                    d="M631.964 599.972H56.14a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h575.826a7.992 7.992 0 0 1 7.996 7.998 7.996 7.996 0 0 1-7.998 7.996z"
                                                    fill=""></path>
                                                <path
                                                    d="M88.13 631.962a7.994 7.994 0 0 1-7.998-7.998v-31.988a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v31.988a7.994 7.994 0 0 1-7.998 7.998zM599.972 631.962a7.992 7.992 0 0 1-7.996-7.998v-31.988a7.992 7.992 0 0 1 7.996-7.998c4.422 0 8 3.576 8 7.998v31.988a7.994 7.994 0 0 1-8 7.998zM344.052 631.962c-13.23 0-23.992-10.762-23.992-23.992s10.762-23.992 23.992-23.992 23.992 10.762 23.992 23.992-10.762 23.992-23.992 23.992z m0-31.99c-4.412 0-7.998 3.594-7.998 7.998s3.586 7.998 7.998 7.998 7.998-3.594 7.998-7.998-3.586-7.998-7.998-7.998zM344.052 504.002c-52.922 0-95.97-43.048-95.97-95.97 0-52.92 43.048-95.97 95.97-95.97s95.97 43.05 95.97 95.97c0 52.922-43.048 95.97-95.97 95.97z m0-175.946c-44.096 0-79.976 35.878-79.976 79.974s35.88 79.976 79.976 79.976 79.976-35.88 79.976-79.976-35.88-79.974-79.976-79.974z"
                                                    fill=""></path>
                                                <path
                                                    d="M312.062 464.014a8 8 0 0 1-7.998-7.996v-95.97c0-2.882 1.546-5.538 4.054-6.958a8.016 8.016 0 0 1 8.06 0.102l79.976 47.984a8 8 0 0 1 0 13.716l-79.976 47.986a8.054 8.054 0 0 1-4.116 1.136z m7.998-89.838v67.712l56.436-33.858-56.436-33.854z"
                                                    fill=""></path>
                                                <path
                                                    d="M807.91 344.05h-127.96a7.99 7.99 0 0 1-7.996-7.996v-95.97a7.99 7.99 0 0 1 7.996-7.998h127.96a7.99 7.99 0 0 1 7.996 7.998v95.97a7.99 7.99 0 0 1-7.996 7.996z m-119.964-15.994h111.964V248.08h-111.964v79.976zM951.868 264.076H839.9c-4.418 0-7.996-3.578-7.996-7.998s3.578-7.998 7.996-7.998h111.968c4.418 0 7.996 3.578 7.996 7.998s-3.578 7.998-7.996 7.998zM951.868 296.066H839.9c-4.418 0-7.996-3.578-7.996-7.998s3.578-7.998 7.996-7.998h111.968c4.418 0 7.996 3.578 7.996 7.998s-3.578 7.998-7.996 7.998zM903.878 328.056h-63.98c-4.418 0-7.996-3.578-7.996-7.998s3.578-7.998 7.996-7.998h63.98c4.422 0 8 3.578 8 7.998s-3.578 7.998-8 7.998z"
                                                    fill=""></path>
                                                <path
                                                    d="M807.91 488.008h-127.96a7.992 7.992 0 0 1-7.996-7.998V384.04a7.992 7.992 0 0 1 7.996-7.998h127.96a7.992 7.992 0 0 1 7.996 7.998v95.97a7.992 7.992 0 0 1-7.996 7.998z m-119.964-15.996h111.964v-79.974h-111.964v79.974zM951.868 408.032H839.9a7.992 7.992 0 0 1-7.996-7.996 7.992 7.992 0 0 1 7.996-7.998h111.968a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996zM951.868 440.022H839.9a7.992 7.992 0 0 1-7.996-7.998 7.992 7.992 0 0 1 7.996-7.996h111.968a7.992 7.992 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998zM903.878 472.012h-63.98a7.992 7.992 0 0 1-7.996-7.998 7.992 7.992 0 0 1 7.996-7.996h63.98c4.422 0 8 3.576 8 7.996a7.994 7.994 0 0 1-8 7.998z"
                                                    fill=""></path>
                                                <path
                                                    d="M807.91 631.962h-127.96a7.99 7.99 0 0 1-7.996-7.998v-95.968a7.99 7.99 0 0 1 7.996-7.998h127.96a7.99 7.99 0 0 1 7.996 7.998v95.968a7.99 7.99 0 0 1-7.996 7.998z m-119.964-15.994h111.964v-79.976h-111.964v79.976zM951.868 551.988H839.9c-4.418 0-7.996-3.578-7.996-7.998s3.578-7.998 7.996-7.998h111.968c4.418 0 7.996 3.578 7.996 7.998s-3.578 7.998-7.996 7.998zM951.868 583.978H839.9c-4.418 0-7.996-3.578-7.996-7.998s3.578-7.998 7.996-7.998h111.968c4.418 0 7.996 3.578 7.996 7.998s-3.578 7.998-7.996 7.998zM903.878 615.968h-63.98c-4.418 0-7.996-3.578-7.996-7.998s3.578-7.998 7.996-7.998h63.98c4.422 0 8 3.578 8 7.998s-3.578 7.998-8 7.998z"
                                                    fill=""></path>
                                                <path
                                                    d="M807.91 775.918h-127.96a7.99 7.99 0 0 1-7.996-7.996v-95.97a7.992 7.992 0 0 1 7.996-7.998h127.96a7.992 7.992 0 0 1 7.996 7.998v95.97a7.99 7.99 0 0 1-7.996 7.996z m-119.964-15.994h111.964v-79.974h-111.964v79.974zM951.868 695.944H839.9a7.992 7.992 0 0 1-7.996-7.998 7.992 7.992 0 0 1 7.996-7.996h111.968a7.992 7.992 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998zM951.868 727.934H839.9a7.992 7.992 0 0 1-7.996-7.996 7.992 7.992 0 0 1 7.996-7.998h111.968a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996zM903.878 759.924h-63.98a7.992 7.992 0 0 1-7.996-7.998 7.992 7.992 0 0 1 7.996-7.996h63.98c4.422 0 8 3.576 8 7.996a7.994 7.994 0 0 1-8 7.998z"
                                                    fill=""></path>
                                                <path
                                                    d="M951.868 839.898H839.9a7.992 7.992 0 0 1-7.996-7.996 7.992 7.992 0 0 1 7.996-7.998h111.968a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996z"
                                                    fill=""></path>
                                                <path
                                                    d="M631.964 775.918H56.14a7.992 7.992 0 0 1-7.998-7.996v-95.97a7.994 7.994 0 0 1 7.998-7.998h575.826a7.994 7.994 0 0 1 7.996 7.998v95.97a7.996 7.996 0 0 1-7.998 7.996z m-567.826-15.994h559.828v-79.974H64.138v79.974z"
                                                    fill=""></path>
                                                <path
                                                    d="M599.972 711.94H152.11a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h447.862c4.422 0 8 3.576 8 7.998a7.994 7.994 0 0 1-8 7.998z"
                                                    fill=""></path>
                                                <path
                                                    d="M312.062 743.93H152.11c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h159.952c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998z"
                                                    fill=""></path>
                                                <path
                                                    d="M120.128 743.93H88.13a7.994 7.994 0 0 1-7.998-7.998v-31.99a7.994 7.994 0 0 1 7.998-7.998h31.998a7.994 7.994 0 0 1 7.998 7.998v31.99a7.994 7.994 0 0 1-7.998 7.998z m-24-15.996h16.002v-15.994h-16.002v15.994z"
                                                    fill=""></path>
                                                <path
                                                    d="M56.14 839.898a7.992 7.992 0 0 1-7.998-7.996v-15.996a7.992 7.992 0 0 1 7.998-7.996 7.992 7.992 0 0 1 7.998 7.996v15.996a7.992 7.992 0 0 1-7.998 7.996z"
                                                    fill=""></path>
                                                <path
                                                    d="M631.964 823.904H56.14a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h575.826a7.992 7.992 0 0 1 7.996 7.996 7.996 7.996 0 0 1-7.998 7.998z"
                                                    fill=""></path>
                                                <path
                                                    d="M631.964 839.898c-4.422 0-8-3.576-8-7.996v-15.996a7.994 7.994 0 0 1 8-7.996 7.992 7.992 0 0 1 7.996 7.996v15.996a7.992 7.992 0 0 1-7.996 7.996z"
                                                    fill=""></path>
                                                <path
                                                    d="M679.95 839.898a7.99 7.99 0 0 1-7.996-7.996v-15.996c0-4.42 3.574-7.996 7.996-7.996s7.996 3.576 7.996 7.996v15.996a7.99 7.99 0 0 1-7.996 7.996z"
                                                    fill=""></path>
                                                <path
                                                    d="M807.91 823.904h-127.96a7.99 7.99 0 0 1-7.996-7.998 7.99 7.99 0 0 1 7.996-7.996h127.96a7.99 7.99 0 0 1 7.996 7.996 7.99 7.99 0 0 1-7.996 7.998z"
                                                    fill=""></path>
                                                <path
                                                    d="M807.91 839.898c-4.422 0-8-3.576-8-7.996v-15.996c0-4.42 3.578-7.996 8-7.996s7.996 3.576 7.996 7.996v15.996a7.99 7.99 0 0 1-7.996 7.996z"
                                                    fill=""></path>
                                            </g>
                                        </svg>
                                        <div
                                            className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
                                    </div>

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div
                                            id="docs-card-content"
                                            className="flex items-start gap-6 lg:flex-col"
                                        >
                                            <div
                                                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                <svg
                                                    className="size-6 sm:size-12"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#ffffff"
                                                    viewBox="0 0 196.191 66.016"
                                                >
                                                    <path
                                                        d="M 188.379 58.691 L 172.656 58.691 L 172.656 54.98 L 165.234 54.98 L 165.234 66.016 L 195.996 65.918 L 195.996 43.359 L 173.047 37.988 L 173.047 29.297 L 188.867 29.297 L 188.867 37.988 L 196.191 37.988 L 196.191 21.973 L 165.234 21.973 L 165.234 45.02 L 188.379 50.391 L 188.379 58.691 Z M 26.172 10.059 L 36.035 10.059 L 25.977 66.016 L 9.961 66.016 L 0 10.059 L 9.375 10.059 L 16.406 58.008 L 19.238 58.008 L 26.172 10.059 Z M 71.289 21.973 L 94.922 21.973 L 94.922 0 L 102.246 0 L 102.246 66.016 L 71.289 66.016 L 71.289 21.973 Z M 149.219 66.016 L 118.262 66.016 L 118.262 21.973 L 149.219 21.973 L 149.219 66.016 Z M 55.371 21.973 L 47.949 22.07 L 47.949 66.016 L 55.371 66.016 L 55.371 21.973 Z M 79.102 58.691 L 94.922 58.789 L 94.922 29.004 L 79.102 29.004 L 79.102 58.691 Z M 141.895 58.984 L 141.895 29.199 L 126.074 29.297 L 126.074 58.984 L 141.895 58.984 Z M 55.371 0 L 47.949 0 L 47.949 12.988 L 55.371 12.988 L 55.371 0 Z"
                                                        vector-effect="non-scaling-stroke"/>
                                                </svg>
                                            </div>

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    See vdt's users videos here
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    VDT is the leading video sharing app in village Dolna Mitropolia,
                                                    with over 100 million monthly active users, vdt is the best place to
                                                    watch videos, share videos, and get the latest news.
                                                </p>
                                            </div>
                                        </div>

                                        <svg
                                            className="size-6 shrink-0 stroke-[#FF2D20]"
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
                                    </div>
                                </a>

                                <a
                                    href="https://laracasts.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path
                                                    d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z"/>
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laracasts
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laracasts offers thousands of video
                                            tutorials on Laravel, PHP, and
                                            JavaScript development. Check them
                                            out, see for yourself, and massively
                                            level up your development skills in
                                            the process.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
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

                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laravel News
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel News is a community driven
                                            portal and newsletter aggregating
                                            all of the latest and most important
                                            news in the Laravel ecosystem,
                                            including new package releases and
                                            tutorials.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
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

                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z" />
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Vibrant Ecosystem
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel's robust library of
                                            first-party tools and libraries,
                                            such as{' '}
                                            <a
                                                href="https://forge.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]"
                                            >
                                                Forge
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://vapor.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Vapor
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://nova.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Nova
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://envoyer.io"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Envoyer
                                            </a>
                                            , and{' '}
                                            <a
                                                href="https://herd.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Herd
                                            </a>{' '}
                                            help you take your projects to the
                                            next level. Pair them with powerful
                                            open source libraries like{' '}
                                            <a
                                                href="https://laravel.com/docs/billing"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Cashier
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/dusk"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Dusk
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/broadcasting"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Echo
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/horizon"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Horizon
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/sanctum"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Sanctum
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/telescope"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Telescope
                                            </a>
                                            , and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}
