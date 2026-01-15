import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';


function ContentCard({
                         content: content,
                         type:type,
                         ratio = 1.8,
                         width = '23rem',
                         height = 'relative'
                     }) {
    return (


    <Card sx={{ maxWidth: 345, borderRadius: theme => theme.shape.borderRadius  }}>
        <Link
            overlay
            underline="none"
            href={route(`${type}.show`, content.slug)}
            sx={{ color: 'text.tertiary' }}
        >
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
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {content.creator.name}

                </Typography>
            </CardContent>
        </CardActionArea>
        </Link>
    </Card>
    )
}

export default ContentCard
