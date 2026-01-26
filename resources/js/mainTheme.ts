import {createTheme} from '@mui/material/styles';
import type {ThemeOptions} from '@mui/material/styles';

export const brandedTokens: ThemeOptions = {
    palette: {
        primary: {
            light: '#E5E3D6',
            main: '#8e7759',
            dark: '#83543b'
        },
        secondary: {
            light: '#9FB3BF',
            main: '#6F8CA6',
            dark: '#1D3D59'
        },
        text: {
            primary: '#4c5053',
            secondary: '#8d8d8d'
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
                    light: '#E5E3D6',
                    main: '#8e7759',
                    dark: '#83543b'
                },
                secondary: {
                    light: '#9FB3BF',
                    main: '#6F8CA6',
                    dark: '#1D3D59'
                },
                text: {
                    primary: '#A5A5A5',
                    secondary: '#62676B'
                },

            },

        }
    },
    components: {

    }
});
export default mainTheme;
