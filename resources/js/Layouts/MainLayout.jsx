import Box from '@mui/material/Box';
import {Toolbar} from "@mui/material";
import MainDrawer from "@/Components/MainDrawer.jsx";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import * as React from "react";
import {router, useForm} from "@inertiajs/react";

export default function MainLayout({children }) {
    const {data, setData} = useForm({
        query: ''
    });

    const submit = (e) => {
        e.preventDefault()

        router.get(route('search.content', {
            content: data.query,
        }), {
            query: data.query
        }, {
            preserveScroll: true
        })
    }

    return (
        <>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <MainDrawer />

                <form onSubmit={submit}  >
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '500px' }}>
                        <Input
                            id="filled-search"
                            type="search"
                            name="query"
                            value={data.query}
                            onChange={(e) => {
                                setData('query', e.target.value);
                            }}
                            placeholder="Search Content ..."
                            sx={{ flex: 1 }}
                        />
                        <Button
                            type="submit"
                            sx={{
                                 backgroundColor: 'white',
                               m:'0.3rem'
                            }}
                        >
                            <SearchSharpIcon sx={{ color: 'black' }} />
                        </Button>
                    </Box>
                </form>
            </Toolbar>
            {children}
        </>
    );
}
