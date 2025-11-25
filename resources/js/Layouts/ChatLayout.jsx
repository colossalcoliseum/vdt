import {usePage} from "@inertiajs/react";
import Box from "@mui/joy/Box";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

const ChatLayout = ({ children})=>{
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversations = page.props.selectedConversations;

    console.log("conversations",conversations);
    console.log("selectedoCnversations",selectedConversations);
    return (
        <>
        <Box>
                Chat Layout
                <div>{children}</div>
            </Box>
        </>
    )
}
export default ChatLayout
