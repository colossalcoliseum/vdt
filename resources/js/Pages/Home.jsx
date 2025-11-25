import ChatLayout from "@/Layouts/ChatLayout.jsx";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import {Layout} from "lucide-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

function Home() {


    return (

        <>
            <Typography>
                You're logged in
            </Typography>

        </>
    );
}

Home.layout = (page) => {
    return (
        <AuthenticatedLayout
            user={page.props.auth.user}

        >
            <ChatLayout  children={page}/>

                   </AuthenticatedLayout>
    )
};
export default Home;
