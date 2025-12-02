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
                <Grid container columns={18} sx={{flexGrow: 0, width: '100%', height: '100%',
                    bgcolor: 'rgba(142,121,121,0.18)',

                }}>
                    <Grid size={16} sx={{ minWidth: '60rem',

                        WebkitBackdropFilter: "blur(10px) saturate(100%)",

                        backdropFilter: "blur(1px) saturate(380%)",
                    }}>
                        <Typography level="h1" sx={{
                            p: 2, mt: 12, width: '100%',

                            color: 'black',
                            flexDirection: "row",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'lighter',
                            fontFamily: "manrope",
                            fontSize: '6rem',
                        }}>
                            Editor's Pick
                        </Typography>

                    </Grid>
                    <Grid size={2} >
                        <Grid container columns={6} sx={{flexGrow: 1}}>

                            <Grid size={4} >
                                <img src="https://picsum.photos/400/" alt="hello"/>
                            </Grid>
                            <Grid size={2} sx={{p: 1}}>


                            </Grid>
                        </Grid>
                    </Grid>


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
