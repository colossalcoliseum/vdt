 import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box'
 import MainLayout from "@/Layouts/MainLayout.jsx";

const Dashboard = () => {
return(
    <>
    <Box sx={{
        display: 'flex', justifyContent: 'center',  pb: '2rem',
    }}>
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            placeItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            mx: 'auto',
        }}>
         <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
         </Box>
</Box>
    </>
)
}
Dashboard.layout = (page) => <MainLayout children={page} title="Home" />
export default Dashboard;
