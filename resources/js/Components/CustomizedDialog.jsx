import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialog({
                                             children,
                                             title="",
                                             toggleButtonLabel="",
                                             closeButtonLabel="",
                                             disableCloseButton= false
}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}

            >
                {toggleButtonLabel}
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title"
                             justifyContent="center"
                             display="flex"
                >
                    {title}
                </DialogTitle>

                <DialogContent dividers>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}
                            disabled={disableCloseButton}
                    >
                        {closeButtonLabel}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
