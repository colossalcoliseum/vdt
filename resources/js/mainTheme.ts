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
                    light: 'rgba(147,203,255,0.5)',
                    main: 'rgba(96,182,255,0.5)',
                    dark: 'rgba(72,170,253,0.5)',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#ef728e',
                    main: '#ca454e',
                    dark: '#811c24',
                    contrastText: '#000',
                }
            },
        }
    },
    components: brandedComponents,
});
export default mainTheme;
