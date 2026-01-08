import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Grid from "@mui/material/Grid";
import React from "react";
import {motion} from "motion/react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Carousel, CarouselContent, CarouselItem} from "../../../../components/ui/carousel.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import HorizontalChunck from "@/LandingPage/HorizontalChunck.jsx";


function Home() {

    return (
        <>
            <Box component="container" sx={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: 'linear-gradient(to right, #076585, #fff);',
            }}>

                <Grid container columns={18} sx={{flexGrow: 1,  zIndex: 1, py: '4.5rem'}}>

                    <Box sx={{
                        height: '60rem',
                        width: '100%',
                        borderBottomRightRadius: '20rem',
                        borderTopRightRadius: '20rem',
                        backgroundSize: 'cover',
                        py: '1rem',

                    }}>
                        <ApplicationLogo className=" "/>


                    </Box>
                    <Box sx={{
                        height: 'relative', width: '100%', justifyContent: 'center',
                        margin: '0 auto', pt: '5rem',
                    }}>

                        <Grid size={18}
                              sx={{display: 'flex', justifyContent: 'center', gap: '4rem', alignItems: 'center',}}>
                            <Grid size={8}
                                  sx={{
                                      height: '45rem',
                                      backgroundSize: 'cover',
                                      borderRadius: '1rem',
                                      backgroundImage: 'linear-gradient(-100deg, rgba(7, 101, 133, 1) 15%, rgba(0, 77, 108, 1) 30%, rgba(0, 54, 83, 1) 45%, rgba(0, 33, 60, 1) 55%, rgba(0, 3, 38, 1) 70%, rgba(0, 1, 16, 1) 85%, rgba(0, 0, 0, 1) 100%);',
                                      width: '45%',

                                  }}>

                                <Typography sx={{
                                    pt: '3rem',
                                    textAlign: 'center',
                                    color: 'white',
                                    height: 'relative',
                                    fontWeight: 'light',
                                    fontFamily: "Segoe UI Variable Display Light",
                                    fontSize: '9rem',
                                    margin: '0 auto',
                                    letterSpacing: '1rem',

                                }}>
                                    Create
                                </Typography>
                                <Typography sx={{
                                    pt: '3rem',
                                    px: '1rem',
                                    textAlign: 'center',
                                    color: 'white',
                                    height: 'relative',
                                    fontWeight: 'light',
                                    fontFamily: "Segoe UI Variable Display Light",
                                    fontSize: '3rem',
                                    margin: '0 auto',
                                    letterSpacing: '0.4rem',

                                }}>
                                    Create your own content here!
                                </Typography>


                            </Grid>


                            <Grid size={8}
                                  sx={{
                                      height: '45rem',
                                      backgroundSize: 'cover',
                                      borderRadius: '1rem',
                                      background: 'linear-gradient(to right, #076585, #fff);',
                                      width: '45%',

                                  }}>


                                <Typography sx={{
                                    pt: '3rem',
                                    color: '#000000',
                                    textAlign: 'center',
                                     height: 'relative',
                                    fontWeight: 'normal',
                                    fontFamily: "Segoe UI Variable Display Light",
                                    fontSize: '9rem',
                                    margin: '0 auto',
                                    letterSpacing: '1rem',


                                }}>
                                    Explore
                                </Typography>
                                <Typography sx={{
                                    pt: '3rem',
                                    px: '1rem',
                                    textAlign: 'center',
                                    color: 'white',
                                    height: 'relative',
                                    fontWeight: 'normal',
                                    fontFamily: "Segoe UI Variable Display Light",
                                    fontSize: '3rem',
                                    margin: '0 auto',
                                    letterSpacing: '0.4rem',

                                }}>
                                    Search for your favorite content here!
                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid sx={{display: 'flex', justifyContent: 'center', gap: '1rem',py:'15rem', alignItems: 'center',}}>
                            <Grid
                                  sx={{
                                      height: '45rem',
                                      backgroundSize: 'cover',
                                      borderRadius: '1rem',
                                       backgroundImage:
                                          "linear-gradient(rgba(0, 0, 0, 0.1) 5%, rgba(0, 0, 0, 1)), url('/storage/VDTCanva.png')",
                                       width: '100%',
                                  }}
                            >
                                <Grid sx={{ width: '40%', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center',}}>
                                    <Typography sx={{
                                        pt: '3rem',
                                        px: '1rem',
                                        textAlign: 'center',
                                        color: 'white',
                                        height: 'relative',
                                        fontWeight: 'normal',
                                        fontFamily: "Segoe UI Variable Display Light",
                                        fontSize: '3rem',
                                        margin: '0 auto',
                                        letterSpacing: '0.4rem',
                                    }}>
                                        Tested on Mobile Devices
                                    </Typography>
                                </Grid>
                                <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center',}}>

                                </Grid>
                            </Grid>

                        </Grid>


                        <Grid columns={12}
                              sx={{display: 'flex', justifyContent: 'center', gap: 0, alignItems: 'center',}}>


                            <HorizontalChunck/>


                        </Grid>
                    </Box>
                    <Grid size={18} sx={{pb: '3rem', margin: '0 auto'}}>
                        <Typography level="h6" sx={{
                            pt: '2.5rem',
                            width: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'normal',
                            fontFamily: "Segoe UI Variable Display Light",
                            fontSize: '4rem',

                        }}>
                            Or Want to Browse our Gallery of Videos and Images?


                        </Typography>
                        <Typography level="h6" sx={{

                            width: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'normal',
                            fontFamily: "Segoe UI Variable Display Light",
                            fontSize: '2rem',

                        }}>
                            We have amazing collection of content from all over the world.


                        </Typography>
                    </Grid>
                </Grid>


            </Box>
        </>
    );
}

Home.layout = (page) => {
    return (

        <AuthenticatedLayout children={page}/>


    )
};
export default Home;
