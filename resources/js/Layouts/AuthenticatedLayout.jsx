import {useEffect, useState} from 'react';
import {TopNav} from "@/Components/TopNav.jsx";
import * as React from 'react';
import Box from '@mui/joy/Box';
 import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
 import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import HomeRounded from '@mui/icons-material/HomeRounded';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Person from '@mui/icons-material/Person';
import Apps from '@mui/icons-material/Apps';
import FactCheck from '@mui/icons-material/FactCheck';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import {router, useForm, usePage} from "@inertiajs/react";
import {AppBar, Toolbar, useScrollTrigger} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { Sun, Moon, Laptop } from "lucide-react";

import LeftDrawer from "@/Components/LeftDrawer.jsx";
 export default function AuthenticatedLayout({user, children,logoStartColor,logoStopColor }) {

   /* const [logoStartColor, setLogoStartColor] = useState('rgb(196, 242, 255)');
    const [logoStopColor, setLogoStopColor] = useState('rgb(255, 224, 224)');*/
    logoStartColor = logoStartColor || 'rgb(196, 242, 255)';
    const useRovingIndex = (options) => {
        const {
            initialActiveIndex = 0,
            vertical = false,
            handlers = {
                onKeyDown: () => {},
            },
        } = options || {};
        const [activeIndex, setActiveIndex] = React.useState(initialActiveIndex);
        const targetRefs = React.useRef([]);
        const targets = targetRefs.current;
        const focusNext = () => {
            let newIndex = activeIndex + 1;
            if (newIndex >= targets.length) {
                newIndex = 0;
            }
            targets[newIndex]?.focus();
            setActiveIndex(newIndex);
        };
        const focusPrevious = () => {
            let newIndex = activeIndex - 1;
            if (newIndex < 0) {
                newIndex = targets.length - 1;
            }
            targets[newIndex]?.focus();
            setActiveIndex(newIndex);
        };
        const getTargetProps = (index) => ({
            ref: (ref) => {
                if (ref) {
                    targets[index] = ref;
                }
            },
            tabIndex: activeIndex === index ? 0 : -1,
            onKeyDown: (event) => {
                if (Number.isInteger(activeIndex)) {
                    if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
                        focusNext();
                    }
                    if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
                        focusPrevious();
                    }
                    handlers.onKeyDown?.(event, { setActiveIndex });
                }
            },
            onClick: () => {
                setActiveIndex(index);
            },
        });
        return {
            activeIndex,
            setActiveIndex,
            targets,
            getTargetProps,
            focusNext,
            focusPrevious,
        };
    };

    const AboutMenu = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
            initialActiveIndex: null,
            vertical: true,
            handlers: {
                onKeyDown: (event, fns) => {
                    if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
                        event.preventDefault();
                    }
                    if (event.key === 'Tab') {
                        setAnchorEl(null);
                        fns.setActiveIndex(null);
                    }
                    if (event.key === 'ArrowLeft') {
                        setAnchorEl(null);
                        focusPrevious();
                    }
                    if (event.key === 'ArrowRight') {
                        setAnchorEl(null);
                        focusNext();
                    }
                },
            },
        });

        const open = Boolean(anchorEl);
        const id = open ? 'about-popper' : undefined;
        return (
            <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                <div onMouseLeave={() => setAnchorEl(null)}>
                    <ListItemButton
                        aria-haspopup
                        aria-expanded={open ? 'true' : 'false'}
                        ref={ref}
                        {...props}
                        role="menuitem"
                        onKeyDown={(event) => {
                            props.onKeyDown?.(event);
                            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                                setAnchorEl(null);
                            }
                            if (event.key === 'ArrowDown') {
                                event.preventDefault();
                                targets[0]?.focus();
                                setActiveIndex(0);
                            }
                        }}
                        onFocus={(event) => setAnchorEl(event.currentTarget)}
                        onMouseEnter={(event) => {
                            props.onMouseEnter?.(event);
                            setAnchorEl(event.currentTarget);
                        }}
                        sx={[open && ((theme) => theme.variants.plainHover.neutral)]}
                    >
                        Watch <KeyboardArrowDown />
                    </ListItemButton>
                    <Popper id={id} open={open} anchorEl={anchorEl} disablePortal={true}
                            slotProps={{
                                root: {
                                    onMouseEnter: () => setAnchorEl(anchorEl),
                                    onMouseLeave: () => setAnchorEl(null),
                                }
                            }}>
                        <List
                            role="menu"
                            aria-label="Watch"
                            variant="outlined"
                            sx={{
                                my: 2,
                                backgroundColor: 'white',
                                boxShadow: 'md',

                                borderRadius: 'sm',
                                minWidth: '10rem',
                                '--List-radius': '8px',
                                '--List-padding': '4px',
                                '--ListDivider-gap': '4px',
                            }}
                        >
                            <ListItem role="none">
                                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                                    <ListItemContent>Newest</ListItemContent>
                                    {/* <Chip size="sm" variant="soft" color="danger">
                                            Last 2 days!
                                        </Chip>*/}
                                </ListItemButton>
                            </ListItem>
                            <ListDivider />
                            <ListItem role="none">
                                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                                    Most Popular
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                role="none"

                            >
                                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                                    By Category
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Popper>
                </div>
            </ClickAwayListener>
        );
    });

    const AdmissionsMenu = React.forwardRef(
        ({ focusNext, focusPrevious, ...props }, ref) => {
            const [anchorEl, setAnchorEl] = useState(null);
            const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
                initialActiveIndex: null,
                vertical: true,
                handlers: {
                    onKeyDown: (event, fns) => {
                        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
                            event.preventDefault();
                        }
                        if (event.key === 'Tab') {
                            setAnchorEl(null);
                            fns.setActiveIndex(null);
                        }
                        if (event.key === 'ArrowLeft') {
                            setAnchorEl(null);
                            focusPrevious();
                        }
                        if (event.key === 'ArrowRight') {
                            setAnchorEl(null);
                            focusNext();
                        }
                    },
                },
            });

            const open = Boolean(anchorEl);
            const id = open ? 'admissions-popper' : undefined;
            return (
                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                    <div onMouseLeave={() => setAnchorEl(null)}>
                        <ListItemButton
                            aria-haspopup
                            aria-expanded={open ? 'true' : 'false'}
                            ref={ref}
                            {...props}
                            role="menuitem"
                            onKeyDown={(event) => {
                                props.onKeyDown?.(event);
                                if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                                    setAnchorEl(null);
                                }
                                if (event.key === 'ArrowDown') {
                                    event.preventDefault();
                                    targets[0]?.focus();
                                    setActiveIndex(0);
                                }
                            }}
                            onFocus={(event) => setAnchorEl(event.currentTarget)}
                            onMouseEnter={(event) => {
                                props.onMouseEnter?.(event);
                                setAnchorEl(event.currentTarget);
                            }}
                            sx={[open && ((theme) => theme.variants.plainHover.neutral)]}
                        >
                            Read
                            <KeyboardArrowDown />
                        </ListItemButton>
                        <Popper id={id} open={open} anchorEl={anchorEl} disablePortal={true}    slotProps={{
                            root: {
                                onMouseEnter: () => setAnchorEl(anchorEl),
                                onMouseLeave: () => setAnchorEl(null),
                            }
                        }}>
                            <List
                                role="menu"
                                aria-label="Watch"
                                variant="outlined"
                                sx={{
                                    my: 2,
                                    backgroundColor: 'white',
                                    boxShadow: 'md',

                                    borderRadius: 'sm',
                                    minWidth: '10rem',
                                    '--List-radius': '8px',
                                    '--List-padding': '4px',
                                    '--ListDivider-gap': '4px',
                                }}
                            >
                                <ListItem role="none">
                                    <ListItemButton role="menuitem" {...getTargetProps(0)}>
                                        <ListItemContent>Newest</ListItemContent>
                                       {/* <Chip size="sm" variant="soft" color="danger">
                                            Last 2 days!
                                        </Chip>*/}
                                    </ListItemButton>
                                </ListItem>
                                <ListDivider />
                                <ListItem role="none">
                                    <ListItemButton role="menuitem" {...getTargetProps(1)}>
                                        Most Popular
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    role="none"

                                >
                                    <ListItemButton role="menuitem" {...getTargetProps(2)}>
                                        By Category
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Popper>
                    </div>
                </ClickAwayListener>
            );
        },
    );
    const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
        useRovingIndex();
    const page = usePage();
    user = page.props.auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [openAccordions, setOpenAccordions] = useState({
        users: false,
        account: false,
        projects: false
    });
    const [language, setLanguage] = useState('en');
    const languages = [
        {name: "English", code: "en"},
        {name: "Български", code: "bg"}
    ];
    useEffect(() => {
        console.log("AuthenticatedLayout mounted");
    },[])
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleChangeLocale = (e) => setLanguage(e.target.value);

    const props = usePage().props

    return (
       <Container disableGutters maxWidth={false}  >




                    <AppBar sx={{bgcolor: 'white',
                                background: 'rgb(187,222,251,0.5)',
                        backdropFilter: "blur(10px)",
                        py:0.5,
                        px:'5rem'


                    }}
                            >

                        <Box sx={{ minHeight: '3rem' }}>
                            <List
                                role="menubar"
                                orientation="horizontal"
                                sx={{
                                    '--List-radius': '1rem',
                                    '--List-padding': '4px',
                                    '--List-gap': '2rem',
                                    '--ListItem-gap': '1rem',
                                }}
                            >


                                        <LeftDrawer
                                            logoStartColor={logoStartColor}
                                            logoEndColor={logoStopColor}
                                        />


                                <ListItem role="none">
                                    <AboutMenu

                                    />
                                </ListItem>
                                <ListItem role="none">
                                    <AdmissionsMenu


                                    />
                                </ListItem>


                            </List>
                        </Box>


                    </AppBar>


                <Box
                    component="main"

           sx={{
                        background: 'black',
                        position: "relative",
                display: "flex",
               flexDirection: 'column',
                width: '100%',
                    }}
                >

                            <Box sx={{ mx: '0.5rem' }}>
                        {children}
                            </Box>


                    </Box>


        </Container>

    );
}
