import react from 'react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {router} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const Pagination = ({links,
                        currentPage,
                        setCurrentPage,
                        className}) => {
    const handlePageChange = (url) => {
        const pageParam = new URL(url).searchParams.get("page");
        router.get(url,{preserveState:true});
    }
    return (
        <div className={"flex justify-center items-center gap-3 bg-blue-200 rounded-full py-4 max-w-4xl mx-auto "+className}>


            {links.map((link) => (
                <li className="list-none" key={link.id}>
                    <PrimaryButton
                        className={link.active ? "bg-amber-200 hover:bg-amber-300 shadow-none" : "hover:bg-amber-300 shadow-none"}
                        href={link.url}

                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(link.url);
                        }}>
                        {link.label}
                    </PrimaryButton>

                </li>
            ))}


        </div>
    )

}
export default Pagination;
