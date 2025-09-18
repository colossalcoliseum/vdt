import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import * as React from "react";

export default function User({user}) {

    const timeAgo = (createdAt) => {
        const now = new Date();
        const date = new Date(createdAt);
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) {
            return 'a moment ago';
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes ago`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return ` ${diffInHours} hour${diffInHours > 1 ? 's ago' : ' ago'}`;
        }

        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 7) {
            return ` ${diffInDays} day${diffInDays > 1 ? 's ago' : ' ago'}`;
        }

        const diffInWeeks = Math.floor(diffInDays / 7);
        if (diffInWeeks < 4) {
            return ` ${diffInWeeks} week${diffInWeeks > 1 ? 's ago' : ' ago'}`;
        }

        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) {
            return ` ${diffInMonths} month${diffInMonths > 1 ? 's ago' : ' ago'}`;
        }

        const diffInYears = Math.floor(diffInDays / 365);
        return ` ${diffInYears} year${diffInYears > 1 ? 's ago' : ' ago'}`;
    };

    const formatDate = (createdAt, locale = 'bg-BG') => {
        const date = new Date(createdAt);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString(locale, options);
    };
    return (
        <AuthenticatedLayout

        >
            <Head title="user"/>

            <div className="">
                <div className="mx-auto py-12  max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="text-center">
                    <h1 className=" text-3xl font-thin">{user.name}</h1>


                </div>
                    <div className="relative grid grid-cols-12 ">
                        <div className="col-span-2">


                            <img src={user.avatar} alt={user.name}
                                 className="rounded-full col-span-2 object-fill border-x-4 border-y-4 border-indigo-200"/>
                        </div>


                            <div className=" col-span-10 bg-white rounded-3xl p-6 m-6 shadow-xl ">
                                <span className=" font-bold flex-1 overflow-y overflow-x-hidden break-words">About</span>


                                <p className="text-black leading-relaxed">{user.description}</p>
                            </div>
                    </div>

                    <div className="grid grid-cols-12 grid-rows-12 ">

                        <div className="col-span-2 col-start-11 row-span-6">
                            <PrimaryButton >
                                Send Messege
                            </PrimaryButton>
                        </div>
                    </div>


                </div>
            </div>
            <div className="grid grid-cols-12 mb-6 ">
                <div className="col-span-full ml-auto mr-auto">


                </div>
            </div>

        </AuthenticatedLayout>
    );
}
