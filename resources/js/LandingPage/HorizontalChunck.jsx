import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import * as React from "react";

function HorizontalChunck(){
    return(
        <Grid container columns={18} sx={{flexGrow: 0, width: '100%', height: '100%',
            bgcolor: 'rgba(142,121,121,0.18)',

        }}>
            <Grid size={16} sx={{ minWidth: '60rem',

                WebkitBackdropFilter: "blur(10px) saturate(100%)",

                backdropFilter: "blur(1px) saturate(380%)",
            }}>
                <Typography level="h1" sx={{
                    p: 2, mt: 12, width: '100%',

                    color: 'black',
                    flexDirection: "row",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontFamily: "Alumni Sans Pinstripe",
                    letterSpacing: 2,

                    fontSize: '6rem',
                }}>
                    Editor's Pick
                </Typography>

            </Grid>
            <Grid size={2} >
                <Grid container columns={6} sx={{flexGrow: 1}}>

                    <Grid size={4} >
                        <img src="https://picsum.photos/400/" alt="hello"/>
                    </Grid>
                    <Grid size={2} sx={{p: 1}}>
                        <Typography level="h1" sx={{ mt:2, width: '100%', flexDirection:"row",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            fontFamily: "Alumni Sans Pinstripe",
                            fontSize: '3rem',
                            letterSpacing: 1,

                            my:5,
                            mx:1
                        }}>
                            Editor's Pick
                        </Typography>
                        <Typography level="title-sm" sx={{
                            color: "black",

                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "4",
                            maxWidth: "15rem",
                            fontWeight: 'bold',
                            fontFamily: "Alumni Sans Pinstripe",
                            fontSize: '2rem',
                            letterSpacing: 1,
                            my:2,
                            px:1,


                            WebkitBoxOrient: "vertical",
                        }}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Donec enim elit,
                            pretium eget augue ac, dignissim viverra nisi.
                            Sed et diam dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Donec pellentesque ac eros sed egestas. Aenean ligula tortor, rutrum in facilisis et, scelerisque et mauris.
                            Morbi id elit hendrerit velit elementum malesuada nec in tortor. Etiam scelerisque eleifend orci. Etiam eu leo tellus.
                            Pellentesque sapien leo, bibendum a interdum nec, consectetur a ligula. Suspendisse egestas enim nunc. Vivamus diam magna,
                            posuere eget efficitur et, mattis quis urna. Suspendisse sem turpis, ornare ut rutrum non, feugiat ut odio. Sed eget dignissim est.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sed sollicitudin nisl. Curabitur eget
                            tincidunt urna, sit amet semper urna.
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}
export default HorizontalChunck;
