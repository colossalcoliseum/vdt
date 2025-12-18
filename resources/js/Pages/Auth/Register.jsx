import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

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
                            Register
                        </Typography> </Box>
                <div>

                    <TextField
                        variant="filled"
                        id="name"
                        name="name"
                        label="Name"
                        className="mt-1 block w-full"

                        value={data.name}
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">

                    <TextField
                        variant="filled"
                        id="email"
                        type="email"
                        label="Email"
                        name="email"
                        className="mt-1 block w-full"

                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">

                    <TextField
                        variant="filled"
                        id="password"
                        type="password"
                        label="Password"
                        name="password"

                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">

                    <TextField
                        variant="filled"
                        id="password_confirmation"
                        type="password"
                        label="Confirm Password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                    <Box display="flex" justifyContent="center" mt={2}>


                        <div className="mt-4 flex items-center justify-center w-full">
                            <Link
                                href={route('login')}
                                underline="none">
                                Already registered?
                            </Link>

                        </div>
                    <Button  type="submit" variant="contained" sx={{mx:2}}  disabled={processing}>
                        Register
                    </Button>
                    </Box>

                </Paper>
            </form>
        </GuestLayout>
    );
}
