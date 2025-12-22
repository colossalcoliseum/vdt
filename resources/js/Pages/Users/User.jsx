import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import * as React from "react";
import ImageGrid from "@/Pages/Profile/ImageGrid.jsx"
import Typography from '@mui/material/Typography';
import dateFormat, {masks} from "dateformat";
import Box from "@mui/material/Box";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Grid from "@mui/joy/Grid";

function User({user: user}) {


    return (
        <Box sx={{width: "100%", height: "100%", bgcolor: "#000", p: "1rem"}}>

            <Box sx={{display: "flex", gap: "2rem"}}>


                {/* Ляво - Зеленият квадрат с avatar в горния десен ъгъл */}
                <Box
                    sx={{
                        position: "relative",
                        height: "relative",
                        maxHeight: "30rem",
                        width: "100%",

                        borderRadius: "1rem",
                        backgroundImage: `url('${user.cover}')`,
                        backgroundSize: "cover",
                        p: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "top",
                        alignItems: "start",
                    }}
                > <Box sx={{display: "flex",top:0, gap: "2rem", mb: "2rem"}}> <Box
                    sx={{
                        position: "flex",


                        width: "10rem",
                        height: "10rem",
                        borderRadius: "0.5rem",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={user.avatar}
                        alt="profile"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />

                </Box>
                    <Box>   <Typography
                        variant="h1"
                        sx={{
                            color: "white", backgroundColor: 'rgba(0,0,0,0.5)', p: 1, borderRadius: '1rem',
                            fontFamily: "Segoe UI Variable Display Light",
                            fontSize: "3rem",
                        }}
                    >
                        {user.name}
                    </Typography></Box>
                </Box>
                    <Box sx={{display: "flex", gap: "1rem", pt: '2rem', flexDirection: "column"}}>

                        <Box sx={{
                            display: "flex",
                            gap: "1rem",
                            height: "relative",
                            maxHeight: "10rem",
                            overflow: "hidden"
                        }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "white",
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    p: 1,
                                    borderRadius: '1rem',
                                    fontFamily: "Segoe UI Variable Display Light",
                                    textOverflow: 'scroll',
                                    overflow: 'auto'

                                }}
                            >
                                {user.description}
                            </Typography>
                        </Box>
                    </Box>
                    {/* Avatar в горния десен ъгъл */}

                </Box>

                {/* Дясно - Сините квадрати един в/у друг */}
                <Box sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                    <Box sx={{bgcolor: "blue", height: "240px", width: "20rem", borderRadius: "1rem"}}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: "white",
                                fontFamily: "Segoe UI Variable Display Light",
                                p: "1rem",
                            }}
                        >
                            Posts
                        </Typography>
                    </Box>

                    <Box sx={{bgcolor: "blue", height: "240px", width: "rem", borderRadius: "1rem"}}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: "white",
                                fontFamily: "Segoe UI Variable Display Light",
                                p: "1rem",
                            }}
                        >
                            Videos
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

User.layout = (page) => {
    return (
        <AuthenticatedLayout
            user={page.props.auth.user}
            children={page}
        />

    )
}
export default User;
