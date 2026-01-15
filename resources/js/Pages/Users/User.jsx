import MainLayout from '@/Layouts/MainLayout.jsx';

import * as React from "react";
import ImageGrid from "@/Pages/Profile/ImageGrid.jsx"
import Typography from '@mui/material/Typography';
import {Head, router, useForm, usePage} from '@inertiajs/react';
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import dateFormat from "dateformat";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Divider from '@mui/material/Divider';
 import Input from '@mui/material/Input';
import Button from "@mui/material/Button";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ContentGrid from "@/Pages/ContentGrid.jsx";
import ContentCard from "@/Pages/ContentCard.jsx";

function User({user: user, content:content}) {
    const {data, setData} = useForm({});
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
            <Box sx={{
                flexGrow: 1, my: '1rem', borderRadius: '1rem', width: '80%', height: '100%', mx: 'auto',


            }}>

                <Box sx={{
                    display: 'flex',
                    alignContent: 'end',
                    gap: '1rem',
                    pb: '4rem',
                    justifyContent: 'flex-end', /*mx:'4rem'*/
                }}>

                    <form onSubmit={submit}>
                        <Input
                            id="filled-search"
                            label="Search"
                            type="search"
                            name="query"

                            value={data.query}
                            onChange={(e) => {
                                setData('query', e.target.value);
                            }}

                            /*
                                                               disabled={processing}
                            */

                            size="md"
                            placeholder="Search Content ..."
                            variant="solid"
                            endDecorator={<Button

                                type="submit"
                                /* onClick={() => setLoading(true)}*/

                                sx={{
                                    color: 'white', py: 'auto', backgroundColor: 'white',
                                    '&:hover': {backgroundColor: 'white'},
                                }}
                            >
                                <SearchSharpIcon sx={{color: 'black'}}/>
                            </Button>}


                            sx={{
                                '--Input-focusedInset': 'var(--any, )',
                                '--Input-focusedThickness': '0px',
                                fontFamily: "Segoe UI Variable Display Light",

                            }}
                        >

                        </Input>


                    </form>
                </Box>


                <Box
                    sx={{

                        height: "13rem",

                        width: "100%",

                        borderRadius: "0.5rem",
                        backgroundImage: `url('${user.cover}')`,
                        backgroundSize: "cover",
                        p: "1rem",
                    }}
                >


                </Box>
                <Box sx={{py: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'row'}}>
                    <Box
                        sx={{
                            position: "flex",

                            backgroundImage: `url('${user.avatar}')`,
                            width: "10rem",
                            height: "10rem",
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                        }}
                    /> <Typography
                    variant="h2"
                    sx={{
                        color: "white", p: 1,
                        fontFamily: "Segoe UI Variable Display",

                    }}
                >
                    <span>{user.name} ({user.handle})</span>
                </Typography></Box>
                <Box sx={{display: 'sticky', gap: '1rem', alignItems: 'center', flexDirection: 'row'}}>
                    <Box sx={{display: 'flex', gap: '1rem', alignItems: 'top', flexDirection: 'row', pb: '4rem'}}>
                        <Box sx={{
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'top',
                            flexDirection: 'column',
                            p: 1,
                            borderRadius: '0.5rem',
                            width: '35%',
                            height: '25rem',
                            border: '0.25rem solid grey'
                        }}>

                            <List>
                                <Divider>
                                    <Typography variant="h3" style={{color: 'white  '}}>
                                        About
                                    </Typography>
                                </Divider>
                                <ListItem>
                                    <p style={{color: 'white'}}><LocationPinIcon/> {user.city}, {user.country}</p>
                                </ListItem>
                                <ListItem>
                                    <p style={{color: 'white'}}><AlternateEmailIcon/> {user.email} </p>
                                </ListItem>
                                <ListItem>
                                  <p style={{color: 'white'}}>Joined: {dateFormat(user.created_at, "longDate")} </p>
                                </ListItem>

                            </List>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'top',
                            flexDirection: 'column',
                            p: 1,
                            borderRadius: '0.5rem',
                            width: '65%',
                            height: '25rem',
                            border: '0.25rem solid grey'
                        }}>
                            <List>
                                <Divider>
                                    <Typography variant="h3" style={{color: 'white  '}}>
                                        Bio
                                    </Typography>
                                </Divider>
                                <ListItem>
                                    <p style={{color: 'white'}}>{user.description}</p>
                                </ListItem>

                            </List>


                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
                        <Typography variant="h5" style={{color: 'white'}}>

                            <List>
                                <Divider>
                                    <Typography variant="h5" style={{color: 'white  '}}>
                                        Content by {user.name}
                                    </Typography>
                                </Divider>


                            </List>
                        </Typography>

                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1.5rem',
                            mx: '5%',
                            pl: '2rem'
                        }}>
                            {content.data.map((item) => (
                                <ContentCard content={item} type={item.type} headerText="Content by {user.name}"/>

                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

User.layout = (page) => {
    return (
        <MainLayout
            user={page.props.auth.user}
            children={page}
        />

    )
}
export default User;
