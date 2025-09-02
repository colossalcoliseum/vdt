import AutenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
//import SearchBox from "@/Pages/Users/SearchBox.jsx";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Meilisearch } from "meilisearch";
import { InstantSearch, SearchBox, InfiniteHits } from 'react-instantsearch';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import 'instantsearch.css/themes/satellite.css';
export default function UsersDashboard({users}) {


    const { searchClient } = instantMeiliSearch(
        'http://127.0.0.1:7700',
        'masterKey'
    );
    const Hit = ({ hit }) => (


            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href={route('user.show',hit.id)}>

                    <img className="w-full" src={hit.avatar} alt={hit.name}/>

                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{hit.name}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the
                            {hit.description}</p>

                    </div> </a>
            </div>
    );
    return (
        <AutenticatedLayout>

            <div className="py-6">


                <InstantSearch
                    indexName="users"
                    searchClient={searchClient}

                >
                    <SearchBox />


                        <InfiniteHits hitComponent={Hit} />
                    
                </InstantSearch>



        </div>
</AutenticatedLayout>
)
    ;
}
