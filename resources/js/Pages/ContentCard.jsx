import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';

function ContentCard({content: content, type:type}) {

    return (
    <Card sx={{ maxWidth: 345, borderRadius: theme => theme.shape.borderRadius  }}>
        <Link
            overlay
            underline="none"
            href={route(`${type}.show`, content.slug)}
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
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {content.creator.name}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Link>
    </Card>
    )
}
export default ContentCard
