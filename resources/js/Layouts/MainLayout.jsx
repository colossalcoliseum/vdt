import Box from '@mui/material/Box';
import {Toolbar} from "@mui/material";
import MainDrawer from "@/Components/MainDrawer.jsx";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import * as React from "react";
import {router, useForm} from "@inertiajs/react";
import InputLabel from '@mui/material/InputLabel';

export default function MainLayout({children}) {

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
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between',}}>
                <MainDrawer/>
                <form onSubmit={submit}>
                    <Box sx={{display: 'flex', alignItems: 'center', width: '100%', maxWidth: '500px'}}>

                        <Input
                            id="filled-search"
                            multiline={true}
                            maxRows={2}
                            type="search"
                            disableUnderline={false}
                            autoFocus={true}

                            color='primary.light'
                            name="query"
                            value={data.query}
                            onChange={(e) => {
                                setData('query', e.target.value);
                            }}
                            placeholder="Search Content ..."
                            sx={{flex: 1}}
                        />
                        <Button type="submit">
                            <SearchIcon/>
                        </Button>
                    </Box>
                </form>
            </Toolbar>
            {children}
        </>
    );
}
