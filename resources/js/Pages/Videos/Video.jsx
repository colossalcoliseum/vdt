import {Head} from "@inertiajs/react";
import AutenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function Video({video}) {

    return (
        <AutenticatedLayout>
            <div className="relative w-full">
                <Head title="Video"/>
                <div className="mx-auto py-12  max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-12 grid-rows-12 ">
                        <div className="col-span-6 col-start-3 px-auto row-span-full row-start-1 ">
                            <video className=" h-full w-full " controls>

                                <source
                                    src={window.location.origin + video.video_path}
                                    type={video.video_mime_type}
                                />

                                Your browser does not support the video tag.
                            </video>

                        </div>
                        <div className="col-span-6 px-auto row-span-full row-start-1 p-5 border ml-12 border-black">
                            <p>
                                {window.location.origin + video.video_path}<br/>
                                {video.video_mime_type}
                                <p>By {video.creator.name}</p>
                                <img className="w-full" src={video.creator.avatar} alt={video.title}/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 grid-rows-12 ">

                    <div className="col-span-full text-center border-b border-black py-6 ">

                        <p className="font-sans fond-semibold col-span-full mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-black">
                            {video.title}

                        </p>

                    </div>
                    <div className="col-span-7 text-center border-x border-black py-3 border-b">

                        <p className="font-mono text-center fond-semibold col-span-ful">
                            {video.description}

                        </p>
                    </div>
                    <div className="col-span-5 text-center border-x border-black py-3 border-b">

                        <p className="font-mono text-center fond-semibold col-span-ful">
                           //препоръчани клипове

                        </p>
                    </div>

                </div>
            </div>
        </AutenticatedLayout>
    )
}
