import AutenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
//import SearchBox from "@/Pages/Users/SearchBox.jsx";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {InstantSearch, SearchBox, InfiniteHits} from 'react-instantsearch';
import {instantMeiliSearch} from '@meilisearch/instant-meilisearch';
import 'instantsearch.css/themes/satellite.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function UsersDashboard({users}) {


console.log(users);
    const Hit = ({hit}) => (


        <div className="result-card">

            <a href={route('user.show', hit.id)}>

                <img className="w-full" src={hit.avatar} alt={hit.name}/>

                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{hit.name}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the
                        {hit.description}</p>

                </div>
            </a>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, md: 8 }}>
                        <Item>
                        <span className="font-mono font-bold ml-2 flex-1 block overflow-y overflow-x-hidden break-words">About</span>
                            {hit.description}
                        </Item>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Item>{hit.id}</Item>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid size={{ xs: 6, md: 8 }}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
    return (
        <AutenticatedLayout>

            <div className="grid">


                <InstantSearch
                    indexName="users"
                    searchClient={searchClient}

                >
                    <SearchBox/>


                    <InfiniteHits className=" card my-auto mx-auto "
                                  hitComponent={Hit}/>

                </InstantSearch>


            </div>
        </AutenticatedLayout>
    )
        ;
}
