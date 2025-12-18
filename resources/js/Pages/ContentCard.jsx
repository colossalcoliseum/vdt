import Grid from "@mui/material/Grid";
import * as React from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import dateFormat, {masks} from "dateformat";
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import IosShareIcon from '@mui/icons-material/IosShare';
import DownloadIcon from '@mui/icons-material/Download';
import Box from "@mui/joy/Box";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Link from '@mui/joy/Link';


function ContentCard({   content: content,
                      type,
                      ratio = 1.8,
                      width = '23rem',
                      height = 'relative'
                  }) {
    return (
        <Card variant="contained" sx={{
            m: '1rem', width: width, height: {height}, backgroundColor: 'rgba(53,53,53,0.6)',
        }}>
            <CardOverflow>
                <AspectRatio ratio={ratio}>
                    <img
                        src={content.thumbnail}
                        srcSet={content.thumbnail}
                        loading="lazy"
                        alt={content.title}
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Grid container sx={{flexGrow: 1}}>
                    <Grid size={11.2}>
                        <Link
                            overlay
                            underline="none"
                            href={route(`${type}.show`, content.slug)}
                            sx={{ color: 'text.tertiary' }}
                        >


                        <Typography level="title-sm" sx={{
                            color: "rgb(255,255,255)",
                            fontSize: "1rem",
                            fontFamily: "Segoe UI Variable Display Light",
                            letterSpacing: "0.017em",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                        }}>{content.title}
                        </Typography>
                        </Link>
                    </Grid>
                    <Grid size={0.8}>
                        <Dropdown>
                            <MenuButton
                                slots={{root: IconButton}}
                                slotProps={{root: {variant: 'outlined', color: 'inherit'}}}
                            >
                                <MoreVert/>
                            </MenuButton>
                            <Menu>
                                <MenuItem><BookmarkBorderIcon/>Save</MenuItem>
                                <MenuItem><IosShareIcon/>Share</MenuItem>
                                <MenuItem><DownloadIcon/>Download</MenuItem>
                            </Menu>
                        </Dropdown>
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{flexGrow: 1}}>
                    <Grid size={8.5}>
                        <Typography level="p"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'normal',
                                        fontFamily: "Segoe UI Variable Display Light",
                                        letterSpacing: 1,
                                    }}>
                            <Grid container columns={2} sx={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                <Grid>
                                    <Box sx={{
                                        backgroundImage: `url('${content.creator.avatar}')`,
                                        height: '1.5rem',
                                        borderRadius: '10%',
                                        width: '1.5rem'
                                    }}> </Box>
                                </Grid>
                                <Grid>
                                    <p> {content.creator.name}</p>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid size={3.5}>
                        <Typography
                            level="body-xs"
                            textColor="text.secondary"
                            sx={{
                                color: "rgb(255,255,255)",
                                fontWeight: 'light',
                                fontFamily: "Segoe UI Variable Display Light",
                                letterSpacing: "0.017em",
                            }}
                        >
                            {

                                dateFormat(content.created_at, "longDate")}

                        </Typography>
                    </Grid>
                </Grid>


            </CardContent>

        </Card>
    )
}

function HorizontalContentCard({
                                content,
                                type,
                                width = '23rem',
                                height = 'relative',

                            }) {
    return (
        <Grid container columns={18} sx={{
            flexGrow: 1, borderRadius: '1rem', width: '100%', height: '15rem',
            background: 'rgba(255,255,255,0.1)',
            color: 'white', gap: '0rem',

        }}>
            <Grid size={5}>
                <Box sx={{
                    backgroundImage: `url('${content.thumbnail}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',/*TODO: направи този параметър променлив*/
                    width: '100%',
                    height: '100%',
                    borderRadius: '1rem 1rem 1rem 1rem',
                }}>


                </Box>

            </Grid>
            <Grid size={13}>


                <List aria-labelledby="decorated-list-demo">
                    <ListItem>
                        <Typography level="h3"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'normal',
                                        fontFamily: "Segoe UI Variable Display",
                                        letterSpacing: 1,
                                    }}>
                            {content.title}
                        </Typography>
                    </ListItem>
                    <ListItem  >
                        <Typography level="p"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'normal',
                                        fontFamily: "Segoe UI Variable Display Light",
                                        letterSpacing: 1,
                                    }}>
                            <Grid container columns={2} sx={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                <Grid>
                                    <Box sx={{
                                        backgroundImage: `url('${content.creator.avatar}')`,
                                        height: '1.5rem',
                                        borderRadius: '10%',
                                        width: '1.5rem'
                                    }}> </Box>
                                </Grid>
                            <Grid>
                                <p> {content.creator.name}</p>
                            </Grid>
                            </Grid>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography level="p"
                                    sx={{
                                        WebkitLineClamp: "1",
                                        fontSize: '0.85rem',
                                        WebkitBoxOrient: "vertical",
                                        color: 'white',
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        fontWeight: 'normal',
                                        fontFamily: "Segoe UI Variable Display Light",
                                        letterSpacing: 1,
                                    }}>
                            {content.description}

                        </Typography>
                    </ListItem>


                </List>
            </Grid>


        </Grid>
    )
}


export {ContentCard, HorizontalContentCard}
