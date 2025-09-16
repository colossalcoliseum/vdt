"use client"

import * as React from "react"
import {Link, usePage} from '@inertiajs/react'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import RightDrawer from "@/Components/RightDrawer.jsx";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components= [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    }
]
export function TopNav() {
    const user = usePage().props.auth.user;

    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList >
                <NavigationMenuItem >
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid bg-white p-3 gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="from-muted/50 to-muted  flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                    <img src={user.avatar} alt={user.name} width="150rem">

                                        </img>
                                        <div className="mt-4 mb-2 text-lg font-medium">
                                            {user.name}
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            See Your Profile
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Chat">
                                Your Conversations
                            </ListItem>
                            <ListItem href="/docs/installation" title="Explore">
                                See the Posts and Videos on VDT
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Create">
                                Post or Video{/*dropdown тук*/}
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>

                    <NavigationMenuLink>
                        <RightDrawer></RightDrawer>
                    </NavigationMenuLink>
                </NavigationMenuItem>



            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
                      title,
                      children,
                      href,
                      ...props
                  }){
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
