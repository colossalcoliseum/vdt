import {createTheme} from '@mui/material/styles';
import type {ThemeOptions} from '@mui/material/styles';

export const brandedTokens: ThemeOptions = {
    palette: {
        primary: {
            light: '#433D8B',
            main: '#2E236C',
            dark: '#17153B',
            contrastText: '#fff',
        },
        secondary: {
            light: '#910A67',
            main: '#720455',
            dark: '#3C0753',
            contrastText: '#000',
        },
        text:{
            primary: '#000',
            secondary: '#fff',
        }
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily:
            'var(--font-primary, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", Roboto, "Helvetica Neue", Arial, sans-serif)',
        fontSize: 14,
        fontWeightLight: 'normal',
        h4: {
            fontSize: '2rem',
            margin: '0.25rem',
        },
        h3: {
            fontSize: '2.5rem',
            margin: '0.5rem',
        },
        h2: {
            fontSize: '3.5rem',
            margin: '0.75rem',
        },
        h1: {
            fontSize: '4.5rem',
            margin: '1rem',
         },
    },
};

export const brandedComponents: ThemeOptions['components'] = {
    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                minWidth: 'unset',
                textTransform: 'capitalize',
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        },
    },
};


const mainTheme = createTheme({
    ...brandedTokens,
    cssVariables: {
        colorSchemeSelector: 'data',
    },
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    light: '#EFECE3',
                    main: '#8FABD4',
                    dark: '#4A70A9',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#624E88',
                    main: '#8967B3',
                    dark: '#CB80AB',
                    contrastText: '#000',
                },
                text:{
                    primary: '#fff',
                    secondary: '#000',
                 }
            },
        }
    },
    components: brandedComponents,
});
export default mainTheme;
