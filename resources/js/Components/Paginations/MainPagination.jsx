import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MainPagination({links}) {
    return (
        <Stack
            direction="row"
            spacing={5}
            justifyContent="center"
            alignItems="center"
            sx={{mt: '3rem', mb: '3rem'}} >
            {links.map((link) => (

            <Button variant="contained" href={link.url}>
                <span dangerouslySetInnerHTML={{__html: link.label}}></span>
            </Button>
        ))}
        </Stack>
    )
}
