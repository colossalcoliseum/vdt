import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Link} from '@inertiajs/react'

function ContentCard({content: content, type:type}) {
    const getImageUrl = (image) => {
        if (image.startsWith('http')||image.startsWith('https')) {
            return image;
        }
        if (!image){return''}
        return `/storage/${image}`;
    }
    return (
    <Card sx={{ maxWidth: 345, borderRadius: theme => theme.shape.borderRadius  }} elevation={3}>
        <Link
            overlay
            underline="none"
            href={route(`${type}.show`, content.slug)}
         >
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"

                image={getImageUrl(content.thumbnail)}
                alt={content.title}
                sx={{ height: '15rem' }}
            />
            <CardContent  >
                <Typography gutterBottom variant="h5" component="div"
                            sx={{
                                color:'text.primary',
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: "2",
                                WebkitBoxOrient: "vertical",
                            }}>
                    {content.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    {content.creator.name}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Link>
    </Card>
    )
}
export default ContentCard
