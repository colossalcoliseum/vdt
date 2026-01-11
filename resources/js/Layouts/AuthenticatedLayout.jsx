import * as React from 'react';
import Box from '@mui/material/Box';
import {Toolbar, useScrollTrigger} from "@mui/material";
import LeftDrawer from "@/Components/LeftDrawer";
  import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function AuthenticatedLayout({children }) {

    return (
        < >
            <Toolbar>
                <Box>
                    <LeftDrawer />
                </Box>



            </Toolbar>
            {children}
        </ >
    );
}
