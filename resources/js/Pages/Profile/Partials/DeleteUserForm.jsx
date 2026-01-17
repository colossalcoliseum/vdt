import Button from '@mui/material/Button';
import InputError from '@/Components/InputError';
import InputLabel from '@mui/material/InputLabel';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import {useForm} from '@inertiajs/react';
import {useRef, useState} from 'react';

export default function DeleteUserForm({className = ''}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();
        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-600">
                    Delete Account
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>
            <Button variant="contained" type="submit"
                    color="error"
                    onClick={confirmUserDeletion}>
                Delete Account
            </Button>
            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Your account will be permanently deleted!
                    </p>
                    <div className="mt-6">
                        <InputLabel
                            sx={{color: 'grey'}}
                            htmlFor="password"
                            className="text-gray-600"
                        >
                            Enter Your Password to Continue
                        </InputLabel>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button type="contained" onClick={closeModal}>
                            Cancel
                        </Button>

                        <Button variant="contained" color="error"
                                disabled={processing}>
                            Delete Account
                        </Button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
