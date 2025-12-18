import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import * as React from "react";
import ImageGrid from "@/Pages/Profile/ImageGrid.jsx"
import Typography from '@mui/material/Typography';
import NormalSpeedDial from "@/Components/SpeedDial/SpeedDial.jsx"
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function User({user: user}) {



    return (
        <AuthenticatedLayout

        >
            <Head title="user"/>

                <div className="mx-auto py-12  max-w-7xl sm:px-6 lg:px-8 ">

                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{p:2}}>


                            <img src={user.avatar} alt={user.name}
                                 className="rounded-3xl col-span-2 object-fill shadow-lg"/><Typography sx={{fontSize:'2.2rem'}}>{user.name}</Typography>
                            <Button variant="contained" sx={{borderRadius:2,mt:2,
                                backgroundColor:'#bbdefb ',
                                color:"black",

                            }}>
                              <SendIcon sx={{mr:1}}/>  Send Messege
                            </Button>

                        </Box>




                        <Box
                            sx={{
                                bgcolor: 'rgba(0,138,255,0.1)',
                                backdropFilter: "blur(10px) ",
                                WebkitBackdropFilter: "blur(10px)",
                                color:'black',
                                borderRadius:3,
                                p:3
                            }}
                           >
                            <Typography sx={{fontSize:'1.5rem'}}>About</Typography>


                            <Typography variant="body1"

                                        gutterBottom noWrap={true}
                            >
                                {user.description}
                            </Typography>
                        </Box>
                    </Box>





            </div>
            <Box display="flex" flexDirection="row" justifyContent="space-between" >
                <div className="col-span-full ml-auto mr-auto">
                    <Typography variant="h5" gutterBottom>
                        {user.name}'s Posts
                    </Typography>
                    <ImageGrid></ImageGrid>
                </div>
            </Box>

        </AuthenticatedLayout>
    );
}
