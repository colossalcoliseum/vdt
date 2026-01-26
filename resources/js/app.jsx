import './bootstrap';
import '../css/app.css';
import "../i18n";
import mainTheme from './mainTheme';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import MainLayout from "@/Layouts/MainLayout.jsx";
import GuestLayout from "@/Layouts/GuestLayout.jsx";

const appName = import.meta.env.VITE_APP_NAME || 'VDT';

createInertiaApp({
    title: (title) => `${title} ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || (page => <GuestLayout children={page} />)
        return page
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <InitColorSchemeScript attribute="data" />
                <ThemeProvider theme={mainTheme}>
                     <CssBaseline />
                    <App {...props}  />
             </ThemeProvider>
            </>
                );
    },
    progress: {
        color: '#283148',
    },

});
