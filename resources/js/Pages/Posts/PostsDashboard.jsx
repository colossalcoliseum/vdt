import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, usePage} from '@inertiajs/react';
import {usePoll} from '@inertiajs/react'

export default function PostsDashboard({posts}) {
    usePoll(12000)


    return (
        <AuthenticatedLayout

        >
            <Head title="Dashboard"/>

            <div className="py-12 ">
                <div className="grid grid-cols-12">
                    <div className="col-span-full mb-12 mx-auto border">
                        <div className="inline-flex shadow-xs" role="group">
                            <button type="button"
                                    className="mx-12 px-12 py-2  text-sm font-medium text-gray-900 border-gray-900  bg-indigo-100 border  dark:text-black ">
                                Your Posts
                            </button>
                            <button type="button"
                                    className="mx-12 px-12 py-2 text-sm font-medium text-gray-900 border-gray-900  bg-indigo-100 border  dark:text-black ">
                                Trending Posts
                            </button>
                            <button type="button"
                                    className="mx-12 px-12 py-2 text-sm font-medium text-gray-900 border-gray-900  bg-indigo-100 border  dark:text-black ">
                                Saved
                            </button>
                        </div>


                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">

                    <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5">
                        {posts.map((post) => (


                                <a
                                    href={route('post.show', post.id)}
                                    /*TODO: refresh при отваряне на линк? */

                                    className="flex p-6 lg:pb-10 dark:bg-white border border-gray-900  "
                                >


                                    <div className={`mx-auto my-auto px-3 bg-[url(${post.thumbnail})]`}>{/*bg-[url("+post.thumbnail+")]*/}
                                        <h2 className="text-xl font-sans text-black dark:text-black">
                                            {post.title}
                                        </h2>
                                        <ul className="mt-6 font-medium border-t border-gray-700"/>
                                        <p>By {post.creator.name}</p>
                                        <img className="w-full" src={post.thumbnail} alt={post.title}/>



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
