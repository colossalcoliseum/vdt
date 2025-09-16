import {Head} from "@inertiajs/react";
import AutenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function Video({video}) {
console.log(video);
    return (
        <AutenticatedLayout>
            <div className="relative w-full">
                <Head title="Video"/>
                <div className="mx-auto py-12  max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-12 grid-rows-12 ">
                        <div className="col-span-full px-auto row-span-full">
                            <video className=" h-full rounded-xl " controls>

                                <source
                                    src={window.location.origin + video.video_path}
                                    type={video.video_mime_type}
                                />

                                Your browser does not support the video tag.
                            </video>

                        </div>
                        <div className="col-span-full py-6 ">

                            <p className="font-sans text-left fond-semibold col-span-full m-4 text-2xl leading-none tracking-normal text-gray-900 md:text-5xl lg:text-2xl dark:text-black">
                                {video.title}

                            </p>
                            <a
                                className="text-base font-sans text-left fond-semibold m-4 text-gray-900 dark:text-black"
                                href={route('user.show', video.creator.id)}
                            >{video.creator.name}</a>


                        </div>
                    </div>
                    <div className=" row-span-full p-12 shadow-md bg-white rounded-lg lg:rounded-xl dark:bg-gray-800">
                    <p>
                        {window.location.origin + video.video_path}<br/>
                        {video.video_mime_type}

                        <img className="w-full" src={video.creator} alt={video.title}/>
                    </p>
                </div>
                </div>

            </div>
        </AutenticatedLayout>
    )
}
