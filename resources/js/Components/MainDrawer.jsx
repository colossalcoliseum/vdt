import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {useColorScheme, useTheme} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import {Link, usePage} from '@inertiajs/react';
import CreateIcon from '@mui/icons-material/Create';
import ArticleIcon from '@mui/icons-material/Article';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from "@mui/material/Typography";
import user from "@/Pages/Users/User.jsx";

export default function MainDrawer() {
    const {url, component} = usePage()

    const [open, setOpen] = React.useState(false);
    const {mode, setMode} = useColorScheme();
    if (!mode) {
        return null;
    }
    console.log(user.role)
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const theme = useTheme();

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
            <Box sx={{display: 'flex', justifyContent: 'center', padding: '10px 0px'}}>
                <svg width="125.879" height="55.957" viewBox="0 0 126.879 56.957"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="svgGroup" strokeLinecap="round"
                       fillRule="evenodd" fontSize="9pt" stroke={theme.palette.primary.main} strokeWidth="0mm"
                       fill={theme.palette.primary.main}>
                        <path

                            d="M 26.172 0 L 36.035 0 L 25.977 55.957 L 9.961 55.957 L 0 0 L 9.375 0 L 16.406 47.949 L 19.238 47.949 L 26.172 0 Z M 114.355 7.129 L 114.355 55.957 L 106.934 55.957 L 106.934 7.129 L 94.824 7.129 L 94.824 0 L 125.879 0 L 125.879 7.129 L 114.355 7.129 Z M 68.945 55.957 L 47.949 55.957 L 47.949 0 L 69.922 0 L 78.906 12.988 L 78.906 43.945 L 68.945 55.957 Z M 55.371 7.031 L 55.371 48.34 L 68.164 48.34 L 70.117 45.996 L 70.117 9.961 L 68.164 7.031 L 55.371 7.031 Z"
                            vectorEffect="non-scaling-stroke"/>
                    </g>
                </svg>
            </Box>
            <Divider sx={{bgcolor: 'primary.main'}}/>

            <List>
                <ListItem disablePadding>
                    <Link href='/' className="w-full">
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeFilledIcon sx={{color: 'primary.main', mx:'auto'}}/>

                                               </ListItemIcon>

                            <ListItemText sx={{color: 'primary.main'}}>

                                Home
                            </ListItemText>

                    </ListItemButton>
                    </Link>

            </ListItem>
                <ListItem disablePadding>
                    <Link href={route('videos.index')} className="w-full">
                    <ListItemButton>
                        <ListItemIcon>
                            <SlideshowIcon sx={{color: 'primary.main', mx:'auto'}}/>
                        </ListItemIcon>

                            <ListItemText sx={{color: 'primary.main', mx:'auto'}}>
                                Videos
                            </ListItemText>

                    </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href={route('posts.index')} className="w-full">
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleIcon sx={{color: 'primary.main', mx:'auto'}}/>
                        </ListItemIcon>

                            <ListItemText sx={{color: 'primary.main'}}>
                                Posts
                            </ListItemText>

                    </ListItemButton>  </Link>

                </ListItem>
                <ListItem disablePadding>
                    <Link href={route('dashboard')} as="button" className="w-full">

                <ListItemButton>
                        <ListItemIcon>
                            <CreateIcon sx={{color: 'primary.main', mx:'auto'}}/>
                        </ListItemIcon>
                            <Typography sx={{color: 'primary.main'}}>
                                Create
                            </Typography>
                        </ListItemButton> </Link>

                </ListItem>
            </List>
            <Divider sx={{bgcolor: 'primary.main'}}/>
            <List>
                <ListItem>
                    <FormControl>
                        <FormLabel id="theme-toggle" sx={{margin: '0 auto', color: 'primary.main'}}>Theme</FormLabel>
                        <RadioGroup
                            aria-labelledby="theme-toggle"
                            name="theme-toggle"
                            row
                            value={mode}
                            onChange={(event) => setMode(event.target.value)}>
                            <ol>
                                <li><FormControlLabel sx={{color: 'primary.main', mx:'auto'}} value="system" control={<Radio />}
                                                      label="System"/></li>
                                <li><FormControlLabel sx={{color: 'primary.main', mx:'auto'}} value="light" control={<Radio/>}
                                                      label="Light"/></li>
                                <li><FormControlLabel sx={{color: 'primary.main', mx:'auto'}} value="dark" control={<Radio/>}
                                                      label="Dark"/></li>
                            </ol>
                        </RadioGroup>
                    </FormControl>
                </ListItem>

                <Divider sx={{bgcolor: 'primary.main'}}/>
                <ListItem disablePadding>
                    <Link href={route('profile.edit')} as="button" className="w-full">

                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon sx={{color: 'primary.main', mx:'auto'}}/>
                            </ListItemIcon>
                            <Typography sx={{color: 'primary.main'}}>
                                Settings
                            </Typography>
                        </ListItemButton> </Link>

                </ListItem>
                <Divider sx={{bgcolor: 'primary.main'}}/>
                <ListItem disablePadding>
                    <Link
                        method="post"
                        href={route('logout')}
                        as="button"
                        className="w-full">

                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon sx={{color: 'primary.main', mx:'auto'}}/>
                            </ListItemIcon>
                            <Typography sx={{color: 'primary.main'}}>
                                Log Out
                            </Typography>
                        </ListItemButton> </Link>

                </ListItem>

                <Divider sx={{bgcolor: 'primary.main'}}/>

                <Box sx={{display: 'flex', placeItems: 'center', color: 'white'}}>



                    <ListItem disablePadding>
                        <Link  href={route('faq')} as="button" className="w-full">

                            <ListItemButton>

                                <Typography sx={{color: 'primary.main'}}>
                                    FAQ
                                </Typography>
                            </ListItemButton> </Link>

                    </ListItem>

                    <Divider orientation="vertical"  flexItem sx={{bgcolor: 'primary.main'}}/>
                    <ListItem disablePadding>
                        <Link  href={route('about')} as="button" className="w-full">

                            <ListItemButton>
                               
                                <Typography sx={{color: 'primary.main'}}>
                                    About
                                </Typography>
                            </ListItemButton> </Link>

                    </ListItem>

                </Box>
                <Divider sx={{bgcolor: 'primary.main'}}/>

            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} variant='outlined'><MenuIcon/></Button>
            <Drawer open={open} onClose={toggleDrawer(false)} slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                        backgroundColor: "dark",
                    }
                }
            }}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
