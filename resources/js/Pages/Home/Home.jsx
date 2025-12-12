import ChatLayout from "@/Layouts/ChatLayout.jsx";
  import {Layout} from "lucide-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Grid from "@mui/joy/Grid";

import { Particles } from "/components/ui/particles";



import React from "react";
import { LayeredText } from "/components/ui/layered-text";
import { MotionGrid } from "/components/ui/motion-grid";



import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {Carousel, CarouselContent, CarouselItem} from "../../../../components/ui/carousel.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import HorizontalChunck from "@/LandingPage/HorizontalChunck.jsx";


function Home() {

    const images = [
        {
            imgURL:
                "https://picsum.photos/300/300",
            imgAlt: "img-1"
        },
        {
            imgURL:
                "https://picsum.photos/300/300",
            imgAlt: "img-2"
        },
        {
            imgURL:
                "https://picsum.photos/300/300",
            imgAlt: "img-3"
        },
        {
            imgURL:
                "https://picsum.photos/300/300",
            imgAlt: "img-4"
        }
    ];

    return (
        <>
            <Box component="container" sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                 }}>

                <Grid container columns={18} sx={{flexGrow: 1, zIndex:1, my:'4.5rem'}}>

                    <Box sx={{height: '30rem', width: '100%', justifyContent: 'center',
                        borderRadius: '2rem', py: '1rem',
                        backgroundImage: 'linear-gradient(-90deg, rgba(255, 255, 255, 1) 5%, rgba(0, 77, 108, 1) 50%, rgba(0, 54, 83, 1) 60%, rgba(0, 33, 60, 1) 75%, rgba(0, 3, 38, 1) 87%, rgba(0, 1, 16, 1) 95%, rgba(0, 0, 0, 1) 100%);',

                         margin: '0 auto',}}>


                            <ApplicationLogo
                             className="mx-auto"


                             width={381}
                             height={171}

                            />





                    </Box>

                    <Box  sx={{height: 'relative', width: '100%', justifyContent: 'center',
                            margin: '0 auto', pt:'5rem',
                        }}>

                    <Grid size={18} sx={{display: 'flex', justifyContent: 'center', gap:'4rem', alignItems: 'center',}}>
                            <Grid size={8}
                                  sx={{
                                      height: '45rem',
                                      backgroundSize: 'cover',
                                      borderRadius: '1rem',
                                      backgroundImage: 'linear-gradient(-100deg, rgba(7, 101, 133, 1) 15%, rgba(0, 77, 108, 1) 30%, rgba(0, 54, 83, 1) 45%, rgba(0, 33, 60, 1) 55%, rgba(0, 3, 38, 1) 70%, rgba(0, 1, 16, 1) 85%, rgba(0, 0, 0, 1) 100%);',
                                      width: '45%',

                                  }}>

                                <Typography  sx={{
                                    pt:'3rem',
                                    textAlign: 'center',
                                    color: 'white',
                                    height: 'relative',
                                    fontWeight: 'bold',
                                    fontFamily: "Alumni Sans Pinstripe",
                                    fontSize: '9rem',
                                    margin: '0 auto',
                                    letterSpacing: '1rem',

                                }}>
                                    Create
                                </Typography>
                                <Typography  sx={{
                                    pt:'3rem',
                                    px:'1rem',
                                    textAlign: 'center',
                                    color: 'white',
                                    height: 'relative',
                                    fontWeight: 'bold',
                                    fontFamily: "Alumni Sans Pinstripe",
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


                            <Typography  sx={{
                                pt:'3rem',
                                textAlign: 'center',
                                color: 'black',
                                height: 'relative',
                                fontWeight: 'bold',
                                fontFamily: "Alumni Sans Pinstripe",
                                fontSize: '9rem',
                                margin: '0 auto',
                                letterSpacing: '1rem',

                            }}>
                                Explore
                            </Typography>
                            <Typography  sx={{
                                pt:'3rem',
                                px:'1rem',
                                textAlign: 'center',
                                color: 'white',
                                height: 'relative',
                                fontWeight: 'bold',
                                fontFamily: "Alumni Sans Pinstripe",
                                fontSize: '3rem',
                                margin: '0 auto',
                                letterSpacing: '0.4rem',

                            }}>
                                Search for your favorite content here!
                            </Typography>

                     </Grid>
                      </Grid>



                    <Grid columns={12} sx={{display: 'flex', justifyContent: 'center',gap:0, alignItems: 'center',}}>



                    <HorizontalChunck/>




                        </Grid>
                    </Box>
                    <Grid size={18} sx={{pb:'3rem',margin: '0 auto'}}>
                    <Typography level="h6" sx={{
                        pt:'2.5rem',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontFamily: "Alumni Sans Pinstripe",
                        fontSize: '4rem',

                    }}>
                        Or Want to Browse our Gallery of Videos and Images?


                    </Typography>
                    <Typography level="h6" sx={{

                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontFamily: "Alumni Sans Pinstripe",
                        fontSize: '2rem',

                    }}>
                        We have amazing collection of content from all over the world.


                    </Typography>
                    </Grid>
                    <Grid size={18} sx={{display:'flex', justifyContent: 'center', alignItems: 'center',margin: '0 auto', gap:'10rem'}}>
                    <Box sx={{ display:'flex',height: '30rem', width: '23rem', justifyContent: 'center', margin: '0 auto',    }}>
                        <Carousel className="w-full">

                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                                                <CardCover>
                                                    <img
                                                        src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                                                        srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                </CardCover>
                                                <CardContent>
                                                    <Typography
                                                        level="body-lg"
                                                        textColor="#fff"
                                                        sx={{   fontFamily: "Alumni Sans Pinstripe",fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                                                    >
                                                        Image
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                    </Box>
                    <Box sx={{ display:'flex',height: '30rem', width: '23rem', justifyContent: 'center', margin: '0 auto',    }}>
                        <Carousel className="w-full">

                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                                                <CardCover>
                                                    <img
                                                        src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                                                        srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                </CardCover>
                                                <CardContent>
                                                    <Typography
                                                        level="body-lg"
                                                        textColor="#fff"


                                                    sx={{   fontFamily: "Alumni Sans Pinstripe",fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                                                    >
                                                        Image
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                    </Box>
                    <Box sx={{ display:'flex',height: '30rem', width: '23rem', justifyContent: 'center', margin: '0 auto',    }}>
                        <Carousel className="w-full">

                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-0">
                                            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                                                <CardCover>
                                                    <img
                                                        src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                                                        srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                </CardCover>
                                                <CardContent>
                                                    <Typography
                                                        level="body-lg"
                                                        textColor="#fff"
                                                        sx={{   fontFamily: "Alumni Sans Pinstripe",fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                                                        >
                                                        Image
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                    </Box>

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
