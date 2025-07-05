import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const { t, i18n } = useTranslation();
    const CurrentDate = new Date();

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white/50">
                    {t("welcome text")}<br/>
                    {t("formatDate",{ today: CurrentDate })}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-[#283148] shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white/50">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
