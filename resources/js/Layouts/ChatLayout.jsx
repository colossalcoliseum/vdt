import {usePage} from "@inertiajs/react";
import Box from "@mui/joy/Box";
import { useEcho } from "@laravel/echo-react";
import Echo from "laravel-echo";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {useEffect} from "react";

const ChatLayout = ({ children})=>{
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversations = page.props.selectedConversations;
    
    useEcho(
        'channel-name',
        'EventName',
        (e) => {
            console.log(e);
        }
    );

    console.log("conversations",conversations);
    console.log("selectedConversations",selectedConversations);
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
