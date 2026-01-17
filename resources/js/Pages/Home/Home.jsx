import MainLayout from "@/Layouts/MainLayout.jsx";
import Grid from "@mui/material/Grid";
import React from "react";
 import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
 import NewspaperIcon from "@mui/icons-material/Newspaper";
import Button from "@mui/joy/Box";


function Home({user:user}) {

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


                            <Grid container columns={18} sx={{flexGrow: 0,mt:'5rem', borderRadius:'1rem', width: '100%', height: '100%',
                                background: 'linear-gradient(to left, #C4D9FF, #E8F9FF)'

                            }}>
                                <Grid size={16} sx={{ minWidth: '60rem',


                                }}>
                                    <Typography level="h1" sx={{
                                        p: 2, my: '5rem', width: '100%',

                                        color: 'black',
                                        flexDirection: "row",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontWeight: 'normal',
                                         letterSpacing: 2,

                                        fontSize: '6rem',
                                    }}>
                                        Newsletter
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '7.5rem' }}>
                                            <NewspaperIcon sx={{ fontSize: '3rem',mx:'1rem'}} />
                                        </Box>
                                    </Typography>

                                </Grid>
                                <Grid size={2} >
                                    <Grid container columns={6} sx={{flexGrow: 1,  }}>

                                        <Grid size={6} sx={{p: 1, }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '7.5rem' }}>

                                                <Button
                                                    type="submit"
                                                    sx={{ borderRadius: '1rem', ml:'2rem', height:'3rem', width:'10rem', backgroundColor:'#eafbff',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',   }}
                                                    href="#"
                                                >

                                                        Join now

                                                </Button>
                                            </Box>


                                        </Grid>
                                    </Grid>
                                </Grid>


                            </Grid>


                        </Grid>
                    </Box>
                    <Grid size={18} sx={{pb: '3rem', margin: '0 auto'}}>
                        <Typography level="h6" sx={{
                            pt: '2.5rem',
                            width: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'normal',
                             fontSize: '4rem',

                        }}>
                            Or Want to Browse our Gallery of Videos and Images?


                        </Typography>
                        <Typography level="h6" sx={{

                            width: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'normal',
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

    <MainLayout children={page}/>


    )
};
export default Home;
