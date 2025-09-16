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
                    <h1 className="font-mono text-5xl tracking-tight select-all font-bold text-black mb-4">
                        {post.title}
                    </h1>
                    <span className="font-mono font-bold text-gray-400">
                        Written by
                    </span>
                    <HoverCard>
                        <HoverCardTrigger>{post.creator}</HoverCardTrigger>
                        <HoverCardContent className="bg-white ">
                            <div className="grid grid-cols-2">
                                <div className="col"> <img src={post.creator} alt={post.creator}
                                          className="rounded-full h-20"/> <span className="text-center">Joined <TimeAgo
                                    datetime={post.creator}
                                    locale='en_EN'
                                /></span></div>
                                <div className="col h-32 w-32 pr-2 overflow-y-auto"><span className="text-xs">Description<br/></span>
                                      {<post className="creator"></post>}</div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>

                </div>

                <div className="text-center mb-8">
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="mx-auto rounded-sm border-x-4 border-y-4 border-indigo-200 max-w-lg"
                    />
                </div>

                <div className="max-w-4xl mx-auto">
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{__html: sanitizedHTML}}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
