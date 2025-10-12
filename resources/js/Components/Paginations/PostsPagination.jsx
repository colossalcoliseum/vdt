import * as React from 'react';
import {router, useForm, usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

const PostsPagination = ({links,
                        currentPage,
                        setCurrentPage,
                        posts,
                    className}) => {
    const handlePageChange = (url) => {
        const pageParam = new URL(url).searchParams.get("page");
        router.get(url,{preserveState:true});
    }

console.log("all posts:"+ {posts});


    function sleep(duration) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    }
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        (async () => {
            const postsArray = posts.map(post => ({
                id: post.id,
                title: post.title,

            }));

            setOptions(postsArray);
        })();

    }
    const props = usePage().props

    const {data, setData, post, progress, processing} = useForm({

       query:''
    })
    const findMatches = (query) => {
        query.preventDefault()
        post(route('search.posts'),{
            _token: props.csrf_token

        })
    }
    const handleClose = () => {
        setOpen(false);
        setOptions([]);
    };
    return (
        <div className={"flex justify-center items-center gap-3 bg-blue-200 rounded-full py-4 max-w-7xl mx-auto "+className}>


            {links.map((link) => (
                <li className="list-none" >
                    <PrimaryButton key={link.id}
                        className={link.active ? "bg-amber-200 hover:bg-amber-300 shadow-none" : "hover:bg-amber-300 shadow-none"}
                        href={link.url}

                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(link.url);
                        }}>
                        {link.label}
                    </PrimaryButton>

                </li>
            ))}
            {/*TODO: добави форма , както и страница за резултатие*/}
            <TextField
                id="filled-search"
                label="Search for posts..."
                type="search"
                variant="filled"
            />
        </div>
    )

}
export default PostsPagination;
