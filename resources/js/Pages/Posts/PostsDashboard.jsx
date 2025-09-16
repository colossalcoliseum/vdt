import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, usePage} from '@inertiajs/react';
import {usePoll} from '@inertiajs/react'
import { useEcho } from "@laravel/echo-react";

export default function PostsDashboard({posts}) {

    useEcho(
        `posts`,
        "PostPublished",
        (e) => {
            console.log(e.post);
        },
    );

    return (
        <AuthenticatedLayout

        >
            <Head title="Posts"/>

            <div className="py-12 ">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">

                    <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-6">
                        {posts.map((post) => (


                                <a href={route('post.show', post.id)}>
                                    <div
                                        className="h-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 rounded-xl">

                                        <div className="p-6">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                            </a>

                                        </div>
                                        <a  href={route('post.show', post.id)}>
                                            <img className="w-9/10 mx-auto rounded-xl" src={post.main_image} alt={post.title}/>
                                            <p className="p-3 text-center">{post.creator.name}</p>
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
