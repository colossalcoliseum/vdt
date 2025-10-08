import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import {usePoll} from '@inertiajs/react'
import {useEcho} from "@laravel/echo-react";
import Pagination from "@/Components/Paginations/Pagination.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";
import {InstantSearch, SearchBox, InfiniteHits} from 'react-instantsearch';

export default function PostsDashboard({posts}) {
    const topFilms = [
        {title: 'The Shawshank Redemption', year: 1994},
        {title: 'The Godfather', year: 1972},
        {title: 'The Godfather: Part II', year: 1974},
        {title: 'The Dark Knight', year: 2008},
        {title: '12 Angry Men', year: 1957},
        {title: "Schindler's List", year: 1993},
        {title: 'Pulp Fiction', year: 1994}]/*TODO: довърши с резултати за публикации , видеа и потребители*/
    const handleOpen = () => {
        setOpen(true);
        (async () => {
            setLoading(true);
            await sleep(1e3); // For demo purposes.
            setLoading(false);

            setOptions([...topFilms]);
        })();

    }
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const {searchClient} = instantMeiliSearch(
        'http://127.0.0.1:7700',
        'masterKey',
        {
            placeholderSearch: false
        }
    );
    const handleClose = () => {
        setOpen(false);
        setOptions([]);
    };
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

    const Hit = ({hit}) => (/*TODO: трябва да се довърши и имплементира*/

        <li className="list-none">

                <a className="p-6" href={hit.path}>


                    <p className="mb-2 text-xl text-center font-bold tracking-tight text-gray-800 dark:text-white line-clamp-2">{hit.title}</p>


                </a>
                <a href={route('post.show', hit.id)}>

                </a>

        </li>
    );

    return (
        <AuthenticatedLayout

        >
            <Head title="Posts"/>

            <Pagination
                links={posts.links}
                currentPage={posts.currentPage}
                setCurrentPage={(page) => setData('page', page)}/>

            <div className="py-12">

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


                                            <p className="mb-2 text-xl text-center font-bold tracking-tight text-gray-800 dark:text-white line-clamp-2">{post.title}</p>


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
                    <div className="col-span-1">
                        <div className="">
                           {/* <InstantSearch
                                indexName="posts"
                                searchClient={searchClient}

                            >
                                <SearchBox/>


                                <InfiniteHits className=" card my-auto mx-auto "
                                              hitComponent={Hit}/>

                            </InstantSearch>*/}
                        </div>
                </div>

                </div>

            </div>
            <Pagination
                links={posts.links}
                currentPage={posts.currentPage}
                setCurrentPage={(page) => setData('page', page)}
                className=""
            />
        </AuthenticatedLayout>
    );
}
