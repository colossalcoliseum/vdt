import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';

export default function Post({post}) {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout

        >
            <Head title="Post"/>

            <div className="">
                <div className="mx-auto py-12  max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-12 grid-rows-12 ">
                        <div className="col-span-12 mx-auto row-span-6">
                            <h1 className="font-mono text-5xl tracking-tight select-all font-bold text-black ">{post.title}</h1>
                            <ul className="space-y-2 font-medium border-t border-gray-900"/>
                            <span
                                className="font-mono overflow-y-auto font-bold text-gray-400">Written by {post.creator.name}</span>

                        </div>
                    </div>
                    <div className="grid grid-cols-12 grid-rows-12">
                        <div className="col-span-full mx-auto row-span-10">
                            <img src={post.thumbnail} alt={post.title} width={500}
                                 className="rounded-sm border-x-4 border-y-4 border-indigo-200"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 grid-rows-12 ">
                        <div className="col-span-6 mx-auto row-span-full">
                            <p className="font-mono overflow-y-auto text-black">{post.description}</p>
                        </div>
                        <div className="col-span-6 mx-auto row-span-6">
                            <img src={post.main_image} alt={post.title}
                                 className="rounded-sm border-x-4 border-y-4 border-indigo-200"/>

                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
