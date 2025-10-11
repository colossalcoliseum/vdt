import * as React from 'react';
import {router} from "@inertiajs/react";
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

            <Autocomplete
                sx={{width: 300}}
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search..."
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ?
                                            <CircularProgress color="inherit" size={20}/> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            },
                        }}
                    />
                )}
            />
        </div>
    )

}
export default PostsPagination;
