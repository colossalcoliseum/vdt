import * as React from 'react';
import {router, useForm, usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

const PostsPagination = ({
                             links,
                             currentPage,
                             setCurrentPage,
                         }) => {

    return (
        <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{mt:3}}
        >            {links.map((link) => (

                <Button variant={'contained'}
                        sx={{
                            bgcolor: link.active ? '#fff4c4' : '#ffffff',
                            color: '#616161', fontWeight: 'bold',m:2
                        }}
                        size="medium" href={link.url}>
                        <span
                            dangerouslySetInnerHTML={{__html: link.label}}></span>
                </Button>
            ))}
        </Stack>
    )

}
export default PostsPagination;
