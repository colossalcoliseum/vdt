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
import { useColorScheme, useTheme} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import { Link } from '@inertiajs/react';
import CreateIcon from '@mui/icons-material/Create';
import ArticleIcon from '@mui/icons-material/Article';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SettingsIcon from '@mui/icons-material/Settings';

export default function MainDrawer() {

    const [open, setOpen] = React.useState(false);
    const {mode, setMode} = useColorScheme();
    if (!mode) {
        return null;
    }
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
                       fillRule="evenodd" fontSize="9pt" stroke={theme.palette.text.secondary} strokeWidth="0mm"
                       fill={theme.palette.text.secondary}>
                        <path
                            style={{strokeColor: 'primary.light', fillColor: 'primary.light'}}
                            d="M 26.172 0 L 36.035 0 L 25.977 55.957 L 9.961 55.957 L 0 0 L 9.375 0 L 16.406 47.949 L 19.238 47.949 L 26.172 0 Z M 114.355 7.129 L 114.355 55.957 L 106.934 55.957 L 106.934 7.129 L 94.824 7.129 L 94.824 0 L 125.879 0 L 125.879 7.129 L 114.355 7.129 Z M 68.945 55.957 L 47.949 55.957 L 47.949 0 L 69.922 0 L 78.906 12.988 L 78.906 43.945 L 68.945 55.957 Z M 55.371 7.031 L 55.371 48.34 L 68.164 48.34 L 70.117 45.996 L 70.117 9.961 L 68.164 7.031 L 55.371 7.031 Z"
                            vectorEffect="non-scaling-stroke"/>
                    </g>
                </svg>
            </Box>
            <Divider/>

            <List>
                <ListItem disablePadding>
                    <ListItemButton href={'/'}>
                        <ListItemIcon>
                            <HomeFilledIcon sx={{color: 'text.secondary'}}/>
                        </ListItemIcon>
                        <ListItemText sx={{color: 'text.secondary'}}>
                            Home
                        </ListItemText>
                    </ListItemButton>
                </ListItem> <ListItem disablePadding>
                <ListItemButton href={route('videos.index')}>
                    <ListItemIcon>
                        <SlideshowIcon sx={{color: 'text.secondary'}}/>
                    </ListItemIcon>
                    <ListItemText sx={{color: 'text.secondary'}}>
                        Videos
                    </ListItemText>
                </ListItemButton>
            </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href={route('posts.index')}>
                        <ListItemIcon>
                            <ArticleIcon sx={{color: 'text.secondary'}}/>
                        </ListItemIcon>
                        <ListItemText sx={{color: 'text.secondary'}}>
                            Posts
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href={route('dashboard')}>
                        <ListItemIcon>
                            <CreateIcon sx={{color: 'text.secondary'}}/>
                        </ListItemIcon>
                        <ListItemText sx={{color: 'text.secondary'}}>
                            Create
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon sx={{color: 'text.secondary'}}/>
                        </ListItemIcon>
                        <ListItemText sx={{color: 'text.secondary'}} >
                            Settings
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <FormControl>
                        <FormLabel id="theme-toggle" sx={{margin: '0 auto', color: 'text.secondary'}}>Theme</FormLabel>
                        <RadioGroup
                            aria-labelledby="theme-toggle"
                            name="theme-toggle"
                            row
                            value={mode}
                            onChange={(event) => setMode(event.target.value)}>
                            <ol>
                                <li><FormControlLabel sx={{color: 'text.secondary'}} value="system" control={<Radio/>} label="System"/></li>
                                <li><FormControlLabel sx={{color: 'text.secondary'}} value="light" control={<Radio/>} label="Light"/></li>
                                <li><FormControlLabel sx={{color: 'text.secondary'}} value="dark" control={<Radio/>} label="Dark"/></li>
                            </ol>
                        </RadioGroup>
                    </FormControl>
                </ListItem>

                <Divider/>
                <ListItem sx={{color: 'text.secondary'}}>
                    <Link
                        method="post"
                         href={route('logout')}
                        as="button">
                        Log Out
                    </Link>
                </ListItem>
                <Divider/>
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
            <Drawer open={open} onClose={toggleDrawer(false)} slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                        backgroundColor: "primary.dark",
                    }
                }
            }}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
