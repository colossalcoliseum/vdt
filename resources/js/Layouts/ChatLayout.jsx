import {usePage} from "@inertiajs/react";
import Box from "@mui/joy/Box";
import {useEcho} from "@laravel/echo-react";
import Echo from "laravel-echo";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {useEffect} from "react";

const ChatLayout = ({children}) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversations = page.props.selectedConversations;

    console.log("conversations", conversations);
    console.log("selectedConversations", selectedConversations);
    const {leaveChannel, leave, listen, stopListening} = useEcho(
        `online`,

        (e) => {
            console.log(e.order);
        },
    );
    stopListening( (e) => {
        console.log("stop",e);
    })

    listen("NewMessage",(e) => {
        console.log("listen",e);
    })
    leaveChannel( (e) => {
        console.log("leaving",e);
    });
    leave( (e) => {
        console.log("leave",e);
    });


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
