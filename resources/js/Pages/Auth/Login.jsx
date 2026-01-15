import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {styled} from '@mui/material/styles';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {useForm} from "@inertiajs/react";
import InputError from "@/Components/InputError.jsx";

const Card = styled(MuiCard)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInContainer = styled(Stack)(({theme}) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <CssBaseline enableColorScheme/>
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
                    >
                        <Divider>Log In</Divider>

                    </Typography>
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}
                    <form onSubmit={submit}>


                        <Box sx={{
                            p: 3,
                            margin: '0 auto',
                            flexDirection: 'column',
                        }}>


                            <TextField label="Email" variant="filled"
                                       id="email"
                                       type="email"
                                       name="email"
                                       value={data.email}
                                       className="mt-1 block w-full"
                                       autoComplete="username"
                                       isFocused={true}
                                       onChange={(e) => setData('email', e.target.value)}/>

                            <InputError message={errors.email} className="mt-2"/>


                            <div className="mt-4">
                                <TextField label="Password" variant="filled" id="password"
                                           type="password"
                                           name="password"
                                           value={data.password}
                                           className="mt-1 block w-full"
                                           autoComplete="current-password"
                                           onChange={(e) => setData('password', e.target.value)}/>


                                <InputError message={errors.password} className="mt-2"/>
                            </div>

                            <div className="mt-4 block">
                                <label className="flex items-center">
                                    <FormControlLabel control={<Checkbox
                                        defaultChecked
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData('remember', e.target.checked)
                                        }
                                    />} label="Remember me"/>
                                </label>
                            </div>

                                 {canResetPassword && (
                                    <Link href={route('password.request')} underline="none">
                                        Forgot your password?
                                    </Link>
                                )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={processing}>
                                Sign In
                            </Button>
                        </Box>
                    </form>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>

                        <Typography sx={{textAlign: 'center'}}>
                            Don&apos;t have an account?{' '}
                            <Link
                                href={route('register')}
                                variant="body1"
                                underline="none"
                                sx={{alignSelf: 'center'}}
                            >
                                Sign up
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </SignInContainer>
        </GuestLayout>
    );
}
