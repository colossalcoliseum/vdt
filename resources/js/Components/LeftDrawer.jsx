import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {router, useForm} from "@inertiajs/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export default function LeftDrawer(props) {
    const [open, setOpen] = React.useState(false);
    const {data, setData,processing} = useForm({
        query:''
    })
    const submit = (e) => {
        e.preventDefault()

        router.get(route('search.posts'), {
            query: data.query
        }, {
            preserveScroll: true
        })
    }
    return (
        <React.Fragment>
            <IconButton variant="outlined" color="neutral" sx={{
                '&:hover': {
                    bgcolor: 'inherit',
                }
            }} onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}
                    sx={{
                        '& .MuiDrawer-content': {
                            bgcolor: 'rgba(0,0,0,0.7)',
                            backdropFilter: "blur(10px) saturate(180%)",
                            WebkitBackdropFilter: "blur(10px) saturate(180%)",
                        },
                        backdropFilter: "blur(1px) saturate(180%)",
                    }}
                    size={'sm'}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        ml: 'auto',
                        mt: 1,
                        mr: 2,

                    }}
                >
                    <Typography
                        component="label"
                        htmlFor="close-icon"
                        sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer',color:'white' }}
                    >
                        Close
                    </Typography>
                    <ModalClose id="close-icon" sx={{ position: 'initial', bgcolor:"white" }} />
                </Box>
                <ApplicationLogo
                    className=" fill-current mx-auto  transition duration-300 ease-in-out text-blue-100 h-16 mb-6"/>
                <form  onSubmit={submit}>

                    <Input
                        id="filled-search"
                        label="Search"
                        type="search"
                        name="query"
                        value={data.query}
                        onChange={(e) => {
                            setData('query', e.target.value);
                        }}
                        disabled={processing}
                        size="sm"
                        placeholder="Search Content ..."
                        variant="plain"
                        endDecorator={<Button
                            type="submit"
                            onClick={() => setLoading(true)}

                            sx={{color: 'white',py:'auto'}}
                        >
                            <SearchSharpIcon />
                        </Button>}
                        slotProps={{
                            input: {
                                'aria-label': 'Search anything',
                            },
                        }}
                        sx={{
                            m: 3,
                            borderRadius: 0,
                            borderBottom: '0.15rem solid',
                            borderColor: 'neutral.outlinedBorder',
                            bgcolor: 'inherit',
                            color: 'white',
                            '&:hover': {
                                borderColor: 'neutral.outlinedHoverBorder',
                                color: 'white',
                            },
                            '&::before': {
                                border: '1px solid var(--Input-focusedHighlight)',
                                transform: 'scaleX(0)',
                                left: 0,
                                right: 0,
                                bottom: '-2px',
                                top: 'unset',
                                transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                borderRadius: 0,
                            },
                            '&:focus-within::before': {
                                transform: 'scaleX(1)',
                            },
                        }}
                    >

                    </Input>
                </form>

                <List
                    size="lg"
                    component="nav"
                    sx={{
                        flex: 'none',
                        fontSize: 'xl',
                        '& > div': { justifyContent: 'center' },
                    }}
                >
                    <ListItemButton sx={{ fontWeight: 'lg', color:'white' }}>Home</ListItemButton>
                    <ListItemButton sx={{ fontWeight: 'lg', color:'white' }}>About</ListItemButton>
                    <ListItemButton sx={{ fontWeight: 'lg', color:'white' }}>Studio</ListItemButton>
                    <ListItemButton sx={{ fontWeight: 'lg', color:'white' }}>Contact</ListItemButton>
                </List>
            </Drawer>
        </React.Fragment>
    );
}
