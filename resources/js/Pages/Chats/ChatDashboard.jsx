import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router, usePage} from '@inertiajs/react';
import {usePoll} from '@inertiajs/react'
import {useEcho} from "@laravel/echo-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },

]

export default function ChatDashboard() {
    const submit = (e) => {
        e.preventDefault()
        post(route('post.store'),{
            _token: props.csrf_token,
        })
    }

    return (
        <AuthenticatedLayout>

            <Head title="Chats"/>

            <div className="container grid grid-cols-12 grid-rows-12">
                <div className="col-span-6 row-span-12">
                    <span>Find who you want to chat <br/>
                    </span>
                    <form onSubmit={submit}>
                        <TextInput/><PrimaryButton> Search </PrimaryButton>
                    </form>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
                <div className="col-span-6">

                </div>
            </div>


        </AuthenticatedLayout>
    );
}
