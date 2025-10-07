import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import {usePoll} from '@inertiajs/react'
import {useEcho} from "@laravel/echo-react";
import Pagination from "@/Components/Paginations/Pagination.jsx";

export default function PostsDashboard({posts}) {

    useEcho(
        `posts`,
        "PostPublished",
        (e) => {
            console.log(e.post);
        },
    );
    const {data, setData} = useForm({
        page: posts.currentPage,
    });
    return (
        <AuthenticatedLayout

        >
            <Head title="Posts"/>
            <Pagination
                links={posts.links}
                currentPage={posts.currentPage}
                setCurrentPage={(page) => setData('page', page)}/>
            <div className="py-12 ">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">

                    <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-12">

                        {posts.data.map((post, id) => (
                            <a href={route('post.show', post.id)}>
                                <div

                                    className={(id) % 3 === 0 ?
                                        "h-full bg-amber-50 shadow-xl hover:shadow-2xl hover:bg-amber-100 hover:transition delay-75 duration-100 ease-in-out  m-2 p-3 dark:bg-gray-800 dark:border-gray-700 rounded-bl-3xl rounded-tr-3xl" :
                                        (id) % 3 === 2 ?
                                            "h-full bg-amber-50 shadow-xl hover:shadow-2xl hover:bg-amber-100 hover:transition delay-75 duration-100 ease-in-out  m-2 p-3 dark:bg-gray-800 dark:border-gray-700 rounded-tl-3xl rounded-br-3xl" :
                                            "h-full bg-amber-50 shadow-xl hover:shadow-2xl hover:bg-amber-100 hover:transition delay-75 duration-100 ease-in-out  m-2 p-3 dark:bg-gray-800 dark:border-gray-700 rounded-3xl"}

                                >
                                    <div className="p-6">
                                        <a href="#">

                                            <p className="mb-2 text-xl text-center font-bold tracking-tight text-gray-800 dark:text-white">{post.title}</p>
                                        </a>

                                    </div>
                                    <a href={route('post.show', post.id)}>
                                        <img className="w-9/10 mx-auto rounded-xl" src={post.main_image}
                                             alt={post.title}/>
                                    </a>                                        <p
                                    className="mt-6 text-center">{post.creator.name}</p>

                                </div>
                            </a>
                        ))}

                    </div>

                </div>
            </div>
            <Pagination
                links={posts.links}
                currentPage={posts.currentPage}
                setCurrentPage={(page) => setData('page', page)}
                className="py-12"
            />
        </AuthenticatedLayout>
    );
}
