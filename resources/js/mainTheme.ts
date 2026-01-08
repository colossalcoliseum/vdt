import {createTheme} from '@mui/material/styles';
import type {ThemeOptions} from '@mui/material/styles';

export const brandedTokens: ThemeOptions = {
        palette: {
            primary: {
                light: '#8c7db5',
                main: '#2a2d67',
                dark: '#0d0e3c',
                contrastText: '#fff',
            },
            secondary: {
                light: '#b6465f',
                main: '#ad2831',
                dark: '#640d14',
                contrastText: '#000',
        },
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily:
            'var(--font-primary, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display Light", Roboto, "Helvetica Neue", Arial, sans-serif)',
        fontSize: 14,
        h3: {
            fontSize: '2.5rem',
            heading: {
                fontSize: '3rem',
            }
        },
        h2: {
            fontSize: '3.5rem',

            heading: {
                fontSize: '4rem',
            }
        },
        h1: {
            fontSize: '4.5rem',
            heading: {
                fontSize: '5rem',
            }
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
    colorSchemes: {
        dark: true,
    },
    components: brandedComponents,
});
export default mainTheme;
