import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import DOMPurify from 'dompurify';
import TimeAgo from 'timeago-react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Post({post}) {
    const user = usePage().props.auth.user;

    const sanitizedHTML = DOMPurify.sanitize(post.description, {
        WHOLE_DOCUMENT: false,
        RETURN_DOM: false,
        RETURN_DOM_FRAGMENT: false,
        RETURN_DOM_IMPORT: false,
        SANITIZE_DOM: false,
        KEEP_CONTENT: true,
        ADD_ATTR: ['*'],
        ALLOW_DATA_ATTR: true,
        ALLOW_UNKNOWN_PROTOCOLS: true
    });

    return (
        <AuthenticatedLayout>
            <Head title="Post"/>

            <div className="mx-auto py-12 max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl tracking font-thin text-black mb-4">
                        {post.title}
                    </h1>
                    <HoverCard
                    >
                        <HoverCardTrigger className="tracking-wide">{post.creator.name}</HoverCardTrigger>
                        <HoverCardContent className="bg-white ">
                           <a href={route('user.show',post.creator.id)}>
                            <div className="grid grid-cols-2">
                                <div className="col "> <img src={post.creator.avatar} alt={post.creator.name}
                                          className="rounded-full h-20"/> <span className="text-center">Joined <TimeAgo
                                    datetime={post.creator.created_at}
                                    locale='en_EN'
                                /></span></div>
                                <div className="col m-3 bg-gray-100 p-2 line-clamp-3"><span className="text-xs text-center">Description<br/></span>
                                    {post.creator.description}</div>
                            </div></a>
                        </HoverCardContent>
                    </HoverCard>

                </div>

                <div className="text-center mb-8">
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="mx-auto rounded-sm max-w-lg"
                    />
                </div>

                <div className="max-w-4xl bg-white p-12 m-12 rounded-xl shadow-xl mx-auto">
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{__html: sanitizedHTML}}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
