import ChatLayout from "@/Layouts/ChatLayout.jsx";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import {Layout} from "lucide-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Grid from "@mui/joy/Grid";

import { Card, CardContent } from "/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "/components/ui/carousel";

import * as React from "react";
import HorizontalChunck from "@/LandingPage/HorizontalChunck.jsx";
import ImageSlider from "@/Pages/Home/ImageSlider.jsx";

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
            <Box component="container" sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Grid container columns={18} sx={{flexGrow: 1}}>

                        <Typography level="h6" sx={{
                            py:'2.5rem',
                            width: '100%',
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: 'bold',
                            fontFamily: "Alumni Sans Pinstripe",
                            fontSize: '5rem'}}>
                            Welcome to the world of VDT!

                        </Typography>
                    <Box sx={{height: 'relative', width: 'relative', justifyContent: 'center',

                        }}>

                        <Grid columns={5} sx={{display: 'flex', justifyContent: 'space-between',gap:0,bgcolor: 'rgba(72,170,253,0.5)',alignItems: 'center' ,border:'.5px solid black'}}>

                            <Grid size={2}>
                                <Typography  sx={{
                                    mx:'1.5rem',
                                    maxWidth: '80rem',
                                    textAlign: 'center',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontFamily: "Alumni Sans Pinstripe",
                                    fontSize: '7rem',

                                }}>
                                    Watch Videos, Read Blogs, and Discuss with your Friends.
                                </Typography>
                            </Grid>
                                <Grid size={3} sx={{  bgcolor: 'rgba(0,0,0,0.18)'}}>
                                    <img src="https://picsum.photos/700/460" alt="hello"/>

                            </Grid>

                        </Grid>
                        <Grid columns={12} sx={{display: 'flex', justifyContent: 'center',gap:0, alignItems: 'center',}}>






                        </Grid>
                    </Box>
                    <Grid size={18} sx={{pb:'3rem',margin: '0 auto'}}>
                    <Typography level="h6" sx={{
                        pt:'2.5rem',
                        width: '100%',
                        textAlign: 'center',
                        color: 'black',
                        fontWeight: 'bold',
                        fontFamily: "Alumni Sans Pinstripe",
                        fontSize: '4rem',

                    }}>
                        Or Want to Browse our Gallery of Videos and Images?


                    </Typography>
                    <Typography level="h6" sx={{

                        width: '100%',
                        textAlign: 'center',
                        color: 'black',
                        fontWeight: 'bold',
                        fontFamily: "Alumni Sans Pinstripe",
                        fontSize: '2rem',

                    }}>
                        We have amazing collection of content from all over the world.


                    </Typography>
                    </Grid>
                    <Grid size={18} sx={{display:'flex', justifyContent: 'center', alignItems: 'center',margin: '0 auto', gap:'10rem'}}>
                    <Box sx={{ display:'flex',height: '30rem', width: '20rem', justifyContent: 'center', margin: '0 auto',    }}>
                        <Carousel className="w-full">

                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="bg-white">

                                                <CardContent className="flex aspect-square items-center justify-center">
                                                    <img src="https://picsum.photos/700/700" alt="hello"/>
                                                </CardContent>
                                                <Typography level="h6" sx={{


                                                    textAlign: 'center',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                    fontFamily: "Alumni Sans Pinstripe",
                                                    fontSize: '1rem',

                                                }}>
                                                    We have amazing collection of content from all over the world.


                                                </Typography>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                    </Box>
                    <Box sx={{ display:'flex',height: '30rem', width: '20rem', justifyContent: 'center', margin: '0 auto',    }}>
                        <Carousel className="w-full">

                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="bg-white">

                                                <CardContent className="flex aspect-square items-center justify-center">
                                                    <img src="https://picsum.photos/700/700" alt="hello"/>
                                                </CardContent>
                                                <Typography level="h6" sx={{


                                                    textAlign: 'center',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                    fontFamily: "Alumni Sans Pinstripe",
                                                    fontSize: '1rem',

                                                }}>
                                                    We have amazing collection of content from all over the world.


                                                </Typography>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                    </Box>
                    <Box sx={{ display:'flex',height: '30rem', width: '20rem', justifyContent: 'center', margin: '0 auto',    }}>
                        <Carousel className="w-full">

                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="bg-white">

                                                <CardContent className="flex aspect-square items-center justify-center">
                                                    <img src="https://picsum.photos/700/700" alt="hello"/>
                                                </CardContent>
                                                <Typography level="h6" sx={{


                                                    textAlign: 'center',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                    fontFamily: "Alumni Sans Pinstripe",
                                                    fontSize: '1rem',

                                                }}>
                                                    We have amazing collection of content from all over the world.


                                                </Typography>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                    </Box>

                    </Grid>
{/*
                    <HorizontalChunck/>
*/}
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
