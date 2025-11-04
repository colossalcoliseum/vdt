import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from "@mui/material/Box";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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
            <Head title="Log in"/>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <Paper sx={{
                    p: 6,
                    maxWidth: '65vh',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.35)',
                    backdropFilter: "blur(4px)",
                }}
                       elevation={3}
                >


                    <Box sx={{
                        p: 3,
                        margin: '0 auto',
                        flexDirection: 'column',
                    }}>


                        <Typography variant="h3" sx={{color: '#595959'}}>
                            Log In
                        </Typography> </Box>
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

                    <div className="mt-4 flex items-center justify-center w-full">
                        {canResetPassword && (
                            <Link href={route('password.request')} underline="none">
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                    <Box display="flex" justifyContent="center" mt={2}>


                        <Button variant="outlined" type="button" href={route('register')} sx={{mr: 4}}>
                            Create Profile
                        </Button>

                        <Button variant="contained" type="submit" disabled={processing} sx={{ml: 4}}>Log In</Button>

                    </Box>

                </Paper>
            </form>
        </GuestLayout>
    );
}
