import AutenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SearchBox from "@/Pages/Users/SearchBox.jsx";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function UsersDashboard({users}) {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        ]
    return (
        <AutenticatedLayout>

            <div className="py-6">

                <Autocomplete

                    options={users.map((user)=>(user.name))}
                    sx={{ width: 300 }}
                    isOptionEqualToValue = {true}
                    renderInput={(params) => <TextField {...params} label="Search for Users" />}

                />

                <p className="tracking-wide text-center my-6 text-2xl">Suggested Profiles:</p>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className="relative grid my-auto mx-auto gap-1 lg:grid-cols-3 lg:grid-rows-1 lg:gap-5">
                        {users.map((user) =>
                            (
                                <div
                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <a href={route('user.show',user.id)}>

                                        <img className="w-full" src={user.avatar} alt={user.name}/>

                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the
                                            {user.description}</p>

                                    </div> </a>
                                </div>


                    ))}


                </div>

            </div>

        </div>
</AutenticatedLayout>
)
    ;
}
