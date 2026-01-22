import MainLayout from '@/Layouts/MainLayout.jsx';
import {Head, usePage} from '@inertiajs/react';
import {useTranslation} from 'react-i18next';
import Button from "@mui/material/Button";

const Dashboard = ({user: user})=> {

    return (
     <>
            <Head title="Dashboard"/>

        </>
    );
}
Dashboard.layout = (page) => <MainLayout children={page} title="Dashboard"/>;

export default Dashboard;
