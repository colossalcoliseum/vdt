import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, usePage} from '@inertiajs/react';
import {usePoll} from '@inertiajs/react'

export default function VideosDashboard({videos}) {
    usePoll(12000)


    return (
        <AuthenticatedLayout

        >
            <Head title="Dashboard"/>

            <div className="py-12 ">
                <div className="grid grid-cols-12">
                    <div className="col-span-full  mb-12 mx-auto ">
                        <div className="inline-flex shadow-xs" role="group">
                            <button type="button"
                                    className="mx-12 px-12 py-2 text-sm font-medium text-gray-900  border bg-gradient-to-l from-pink-100 via-purple-100 to-pink-100 border-blue-900 rounded-sm dark:text-black ">
                                Your videos
                            </button>
                            <button type="button"
                                    className="mx-12 px-12 py-2 text-sm font-medium text-gray-900  border bg-gradient-to-l from-pink-100 via-purple-100 to-pink-100 border-blue-900 rounded-sm dark:text-black ">
                                Trending videos
                            </button>
                            <button type="button"
                                    className="mx-12 px-12 py-2 text-sm font-medium text-gray-900  border bg-gradient-to-l from-pink-100 via-purple-100 to-pink-100 border-blue-900 rounded-sm dark:text-black ">
                                Saved
                            </button>
                        </div>


                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">

                    <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5">
                        {videos.map((video) => (


                                <a
                                    href={route('video.show', video.id)}
                                    /*TODO: refresh при отваряне на линк? */

                                    className="flex p-6 lg:pb-10 dark:bg-white    "
                                >


                                    <div className={`mx-auto my-auto px-3 bg-[url(${video.thumbnail_path})]`}>{/*bg-[url("+video.thumbnail+")]*/}
                                        <h2 className="text-xl font-sans text-black dark:text-black">
                                            {video.title}
                                        </h2>
                                        <ul className="mt-6 font-medium border-t border-gray-700"/>
                                        <p>By {video.creator.name}</p>
                                        <img className="w-full" src={video.thumbnail_path} alt={video.title}/>



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
