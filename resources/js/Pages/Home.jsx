import ChatLayout from "@/Layouts/ChatLayout.jsx";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import {Layout} from "lucide-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Grid from "@mui/joy/Grid";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import IconButton from "@mui/joy/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import DownloadIcon from "@mui/icons-material/Download";
import PostCard from "@/Pages/Posts/PostCard.jsx";
import * as React from "react";
import HorizontalChunck from "@/LandingPage/HorizontalChunck.jsx";

function Home() {


    return (
        <>
            <Box component="container"
                 sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Grid container columns={18} sx={{
                    flexGrow: 1, width: '100%', height: '100%',


                }}>

                        <Typography level="h6" sx={{
                            py:'2.5rem',
                            width: '100%',
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: 'bold',
                            fontFamily: "Alumni Sans Pinstripe",
                            fontSize: '5rem',

                        }}>
                            Welcome to the world of VDT!
                        </Typography>
                    <Box sx={{height: '80rem', width: '100rem', justifyContent: 'center', bgcolor: 'rgba(255,0,0,0.18)',
                         mx:5,
                        }}>

                        <Grid columns={5} sx={{display: 'flex', justifyContent: 'space-between',gap:0, alignItems: 'center',}}>

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
                                    <img src="https://picsum.photos/700/700" alt="hello"/>

                            </Grid>

                        </Grid>

                    </Box>


                </Grid>

                <HorizontalChunck/>

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
