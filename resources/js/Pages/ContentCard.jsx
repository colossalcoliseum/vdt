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
import Link from '@mui/joy/Link';


function ContentCard({
                         content: content,
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
                         >


                            <Typography level="title-sm" sx={{
                                color: "rgb(255,255,255)",
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
                <Grid container sx={{flexGrow: 1}}>
                    <Grid size={9.3}>
                        <Typography
                            sx={{
                                color: 'white',
                                fontWeight: 'normal',
                                fontSize: '0.85rem'
                            }}>
                            {content.creator.name}
                        </Typography>
                    </Grid>
                    <Grid size={2.7}>
                        <Typography level="body-sm"
                                    sx={{color: "rgb(255,255,255)"}}>
                            {dateFormat(content.created_at, "mm/dd/yy")}
                        </Typography>
                    </Grid>
                </Grid>


            </CardContent>

        </Card>
    )
}

export default ContentCard
