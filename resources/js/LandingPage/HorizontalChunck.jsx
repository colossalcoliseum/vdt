import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Box";
function HorizontalChunck(){
    return(
        <Grid container columns={18} sx={{flexGrow: 0,mt:'5rem', borderRadius:'1rem', width: '100%', height: '100%',
            background: 'linear-gradient(to left, #C4D9FF, #E8F9FF)'

        }}>
            <Grid size={16} sx={{ minWidth: '60rem',


            }}>
                 <Typography level="h1" sx={{
                    p: 2, my: '10%', width: '100%',

                    color: 'black',
                    flexDirection: "row",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'normal',
                    fontFamily: "Segoe UI Variable Display Light",
                    letterSpacing: 2,

                    fontSize: '6rem',
                }}>
                    Newsletter
                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '7.5rem' }}>
                         <NewspaperIcon sx={{ fontSize: '3rem',mx:'1rem'}} />
                     </Box>
                </Typography>

            </Grid>
            <Grid size={2} >
                <Grid container columns={6} sx={{flexGrow: 1, height:'15rem'}}>

                    <Grid size={6} sx={{p: 1,pt:'7.5rem',}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '7.5rem' }}>
                            <Typography   sx={{
                                color: 'black',
                                fontWeight: 'light',
                                fontFamily: "Segoe UI Variable Display Light",
                                letterSpacing: 2,
                                fontSize: '1.6rem',
                            }}>
                                Stay up to date with the latest news and trends
                            </Typography>
                            <Button
                                type="submit"
                            sx={{ borderRadius: '1rem', ml:'2rem', height:'3rem', width:'10rem', backgroundColor:'#eafbff', color:'white',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',   }}
                            href="#"
                            >
                                <Typography   sx={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontFamily: "Alumni Sans Pinstripe",
                                    letterSpacing: 2,
                                    fontSize: '2rem',
                                }}>
                                   Join now
                                </Typography>
                            </Button>
                        </Box>


                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}
export default HorizontalChunck;
