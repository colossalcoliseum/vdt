import {Head} from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export default function Video({video: video}) {
    console.log(video);
    return (
        <MainLayout>
                 <Head title="Video"/>
                <Box sx={{display:'flex', gap:'1rem',mx:'auto', alignItems:'center', flexDirection:'row', width:'70%'}}>
                             <video className=" h-full rounded-xl " controls>

                                <source
                                    src={window.location.origin + video.video_path}
                                    type={video.video_mime_type}
                                />

                                Your browser does not support the video tag.
                            </video>

                        </Box>
                        <Box   sx={{display:'flex', py:'1rem',flexDirection:'column', gap:'1rem', alignItems:'center', justifyContent:'center', width:'100%'}}>
                            <Divider>
                                <Typography variant="h3">
                                    {video.title}
                                </Typography>
                            </Divider>
                            <a

                                href={route('user.show', 1)}
                            >{video.creator}</a>

                            <Box sx={{
                            p:'0.5rem',
                                width: '70%',

                            }}>
                                <Typography variant="p">
                                    Description
                                </Typography>
                            </Box>
                            <Divider/>
                            <Box sx={{display: 'flex', width: '70%',height:'relative', pb:'2rem'}}>
                                <Typography variant="p">
                                    {video.description}
                                </Typography>
                            </Box>
                        </Box>


         </MainLayout>
    )
}
