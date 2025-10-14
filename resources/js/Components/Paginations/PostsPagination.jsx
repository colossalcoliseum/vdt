import * as React from 'react';
import {router, useForm, usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const PostsPagination = ({links,
                        currentPage,
                        setCurrentPage,
                        posts,
                    className}) => {


    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });

    return (
        <div className={"flex justify-center items-center gap-5  py-4  max-w-7xl mx-auto "+className}>

            {links.map((link) => (

                <Button variant={link.active?"contained": "outlined"}
                        sx={{ color: link.active?'text.secondary ':'text.primary',
                             borderRadius:2
                }}
                        size="large" href={link.url} key={link.url} >
                    <span dangerouslySetInnerHTML={{__html:link.label}}></span>
                </Button>
            ))}

            {/*TODO: добави форма , както и страница за резултатие*/}

            <TextField
                id="filled-search"
                label="Search"
                type="search"
                variant="filled"
            />
            <Tooltip title="Search for any post !">
                <IconButton onClick={() => setLoading(true)} loading={loading}>
                    <SearchSharpIcon />
                </IconButton>
            </Tooltip>
        </div>
    )

}
export default PostsPagination;
