import ChatLayout from "@/Layouts/ChatLayout.jsx";
  import {Layout} from "lucide-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Grid from "@mui/joy/Grid";



import * as React from "react";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {Carousel, CarouselContent, CarouselItem} from "../../../../components/ui/carousel.jsx";


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

                <Grid container columns={18} sx={{flexGrow: 1, zIndex:1}}>

                        <Typography level="h6" sx={{
                            py:'2.5rem',
                            mt:'2.5rem',
                            width: '100%',
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: 'bold',
                            fontFamily: "Alumni Sans Pinstripe",
                            fontSize: '5rem'}}

                        >
                            Welcome to the world of VDT!

                        </Typography>
                    <Box  sx={{height: 'relative', width: '100%', justifyContent: 'center',
                            margin: '0 auto',
                        }}>

                    <Grid size={18} sx={{display: 'flex', justifyContent: 'center', gap:3, alignItems: 'center',}}>
                            <Grid size={8}
                                  sx={{
                                      height: '60rem',
                                      backgroundSize: 'cover',
                                      borderRadius: '1rem',
                                    backgroundImage:'url("/storage/cosmos_red.jpg")',
                                      width: '50%',

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



                        </Grid> <Grid size={8}
                                  sx={{
                                      height: '60rem',
                                      backgroundSize: 'cover',
                                      borderRadius: '1rem',
                                    backgroundImage:'url("/storage/cosmos.jpg")',
                                      width: '50%',

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
                            Create your favorite content here!
                        </Typography>


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
