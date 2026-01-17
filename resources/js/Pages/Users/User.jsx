import MainLayout from '@/Layouts/MainLayout.jsx';
import * as React from "react";
import Typography from '@mui/material/Typography';
 import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import dateFormat from "dateformat";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Divider from '@mui/material/Divider';
import ContentCard from "@/Pages/ContentCard.jsx";

function User({user: user, content: content}) {
    return (
        <>
            <Box sx={{
                flexGrow: 1, my: '1rem', borderRadius: '1rem', width: '80%', height: '100%', mx: 'auto',
            }}>
                <Box
                    sx={{
                        height: "13rem",
                        width: "100%",
                        borderRadius: "0.5rem",
                        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364);'
                    }}
                >
                </Box>
                <Box sx={{py: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'row'}}>
                    <img style={{width: '10rem', borderRadius: '1rem'}} src={user.avatar}
                         alt="Click here to change your profile avatar"/><Typography
                    variant="h2"
                    sx={{p: 1}}>
                    <span>{user.name} ({user.handle})</span>
                </Typography></Box>
                <Box sx={{display: 'sticky', gap: '1rem', alignItems: 'center', flexDirection: 'row'}}>
                    <Box sx={{display: 'flex', gap: '1rem', alignItems: 'top', flexDirection: 'row', pb: '4rem'}}>
                        <Box sx={{
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'top',
                            flexDirection: 'column',
                            p: 1,
                            borderRadius: '0.5rem',
                            width: '35%',
                            height: '25rem',
                            border: '0.25rem solid grey'
                        }}>

                            <List>
                                <Divider>
                                    <Typography variant="h3">
                                        About
                                    </Typography>
                                </Divider>
                                <ListItem>
                                    <p><LocationPinIcon/> {user.city}, {user.country}</p>
                                </ListItem>
                                <ListItem>
                                    <p><AlternateEmailIcon/> {user.email} </p>
                                </ListItem>
                                <ListItem>
                                    <p>Joined: {dateFormat(user.created_at, "longDate")} </p>
                                </ListItem>

                            </List>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'top',
                            flexDirection: 'column',
                            p: 1,
                            borderRadius: '0.5rem',
                            width: '65%',
                            height: '25rem',
                            border: '0.25rem solid grey'
                        }}>
                            <List>
                                <Divider>
                                    <Typography variant="h3">
                                        Bio
                                    </Typography>
                                </Divider>
                                <ListItem>
                                    <p>{user.description}</p>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
                        <Typography variant="h5">

                            <List>
                                <Divider>
                                    <Typography variant="h5">
                                        Content by {user.name}
                                    </Typography>
                                </Divider>
                            </List>
                        </Typography>

                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1.5rem',
                            mx: '5%',
                            pl: '2rem'
                        }}>
                            {content.data.map((item) => (
                                <ContentCard content={item} type={item.type} headerText="Content by {user.name}"/>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

User.layout = (page) => {
    return (
        <MainLayout
            user={page.props.auth.user}
            children={page}
        />
    )
}
export default User;
