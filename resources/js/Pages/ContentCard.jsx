import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


function ContentCard({
                         content: content,
                         type,
                         ratio = 1.8,
                         width = '23rem',
                         height = 'relative'
                     }) {
    return (



    <Card sx={{ maxWidth: 545, width: width, height: height, borderRadius: '1rem' }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"

                image={content.thumbnail}
                alt={content.title}
                sx={{ height: '15rem' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"
                            sx={{

                    overflow: "hidden",
                     display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                }}>
                    {content.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {content.creator.name}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
        </CardActions>
    </Card>
    )
}

export default ContentCard
