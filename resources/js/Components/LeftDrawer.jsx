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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {ThemeProvider, createTheme, useColorScheme} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
export default function LeftDrawer() {
    const [open, setOpen] = React.useState(false);
    const {mode, setMode} = useColorScheme();
    if (!mode) {
        return null;
    }
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
            <Box sx={{display: 'flex', justifyContent: 'center', padding: '10px 0px'}}>
            <svg width="125.879" height="55.957" viewBox="0 0 125.879 55.957" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#ffffff" strokeWidth="0.25mm" fill="#000"  ><path d="M 26.172 0 L 36.035 0 L 25.977 55.957 L 9.961 55.957 L 0 0 L 9.375 0 L 16.406 47.949 L 19.238 47.949 L 26.172 0 Z M 114.355 7.129 L 114.355 55.957 L 106.934 55.957 L 106.934 7.129 L 94.824 7.129 L 94.824 0 L 125.879 0 L 125.879 7.129 L 114.355 7.129 Z M 68.945 55.957 L 47.949 55.957 L 47.949 0 L 69.922 0 L 78.906 12.988 L 78.906 43.945 L 68.945 55.957 Z M 55.371 7.031 L 55.371 48.34 L 68.164 48.34 L 70.117 45.996 L 70.117 9.961 L 68.164 7.031 L 55.371 7.031 Z" vectorEffect="non-scaling-stroke"/></g></svg>
            </Box>
            <Divider/>

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>

                ))}
                <Divider/>

                <ListItem>
                    <FormControl>
                        <FormLabel id="theme-toggle" sx={{margin:'0 auto'}}>Theme</FormLabel>
                        <RadioGroup
                            aria-labelledby="theme-toggle"
                            name="theme-toggle"
                            row
                            value={mode}
                            onChange={(event) => setMode(event.target.value)}
                        >
                            <ol>
                                <li><FormControlLabel value="system" control={<Radio/>} label="System"/></li>
                                <li><FormControlLabel value="light" control={<Radio/>} label="Light"/></li>
                                <li><FormControlLabel value="dark" control={<Radio/>} label="Dark"/></li>
                            </ol>
                        </RadioGroup>
                    </FormControl>
                </ListItem>
                <Divider/>
                <ListItem>
                    <Button variant="contained" sx={{display:'flex', margin:'0 auto'}} >Settings</Button>
                </ListItem>
                <Divider/>

            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
