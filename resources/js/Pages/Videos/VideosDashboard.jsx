import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, usePage} from '@inertiajs/react';
import {usePoll} from '@inertiajs/react'

export default function VideosDashboard({videos}) {
    usePoll(12000)


    return (
        <AuthenticatedLayout

        >
            <Head title="Videos"/>

            <div className="py-12 ">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">

                    <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-6">
                        {videos.map((video) => (

<a href={route('video.show', video.id)}>
                            <div
                                className="h-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 rounded-xl">

                                <div className="p-6">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{video.title}</h5>
                                    </a>

                                </div>
                                <a  href={route('video.show', video.id)}>
                                <img className="w-9/10 rounded-xl" src={video.thumbnail_path} alt={video.title}/>
                                    <p className="p-3 text-center">{video.creator.name}</p>
                            </a>
                            </div>
</a>

                    )
                    )}

                </div>

            </div>
            </div>
        </AuthenticatedLayout>
    );
}
