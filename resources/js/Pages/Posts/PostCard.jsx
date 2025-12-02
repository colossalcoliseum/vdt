import Grid from "@mui/material/Grid";
import * as React from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import dateFormat, { masks } from "dateformat";
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import IosShareIcon from '@mui/icons-material/IosShare';
import DownloadIcon from '@mui/icons-material/Download';
function PostCard ({title, creator, thumbnail, createdAt, ratio=1.8}) {
    return(
        <Card variant="outlined" sx={{ m:2,width:'23rem' }}>
            <CardOverflow>
                <AspectRatio ratio={ratio}>
                    <img
                        src={thumbnail}
                        srcSet={thumbnail}
                        loading="lazy"
                        alt={title}
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid size={10}>
                        <Typography level="title-sm" sx={{
                            color: "black",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",


                            WebkitBoxOrient: "vertical",
                        }}>{title}
                        </Typography>
                    </Grid>
                    <Grid size={2}>
                        <Dropdown>
                            <MenuButton
                                slots={{ root: IconButton }}
                                slotProps={{ root: { variant: 'outlined', color: 'inherit' } }}
                            >
                                <MoreVert />
                            </MenuButton>
                            <Menu>
                                <MenuItem><BookmarkBorderIcon/>Save</MenuItem>
                                <MenuItem><IosShareIcon/>Share</MenuItem>
                                <MenuItem><DownloadIcon/>Download</MenuItem>
                            </Menu>
                        </Dropdown>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid size={7.75}>
                        <Typography level="body-sm">{creator}
                        </Typography>
                    </Grid>
                    <Grid size={4.25}>
                        <Typography
                            level="body-xs"
                            textColor="text.secondary"
                            sx={{ fontWeight: 'md' }}
                        >
                            {

                                dateFormat(createdAt, "longDate")}

                        </Typography>
                    </Grid>
                </Grid>




            </CardContent>

        </Card>
    )
}

export default PostCard
