import {Layout} from "lucide-react";
import ContentCreationLayout from "@/Layouts/ContentCreatonLayout.jsx";

const Dashboard = () => {
return(
    <div>Welcome</div>
)
}
Dashboard.layout = (page) => <ContentCreationLayout children={page} title="Home" />
export default Dashboard;
