import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function CreateVideo() {
    return (
        <AuthenticatedLayout>
            <div className="relative w-full">
                <div className="grid grid-cols-6 text-xl my-5 font-mono leading-auto text-white/50">
                    <p className="col-span-4 col-start-3 inline-flex items-center"><ApplicationLogo
                        className="h-7 fill-current"/>'s video creation studio</p>
                </div>
                <div className="max-w-4xl mx-auto my-auto">
                    <div className="relative grid mx-5 gap-6  grid-cols-3 grid-rows-3 lg:gap-5">

                        <TextInput type="text" id="floating_filled"
                                   className=" col-start-1 col-end-3 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=""/>
                        <label htmlFor="floating_filled"
                               className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Video Title</label>


                        <a
                            href=""/*input за thumbnail*/
                            className=" col-start-3 col-end-9 flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                        >


                            <div className="pt-3 sm:pt-5">
                                <h2 className="text-md mx-5 font-semibold text-black dark:text-white">
                                    Choose thumbnail
                                </h2>
                            </div>


                        </a>

                        <div className="row-span-3 col-span-9">
                            <label htmlFor="message"
                                   className="block py-2 text-lg font-medium text-gray-900 dark:text-white">
                                Description</label>
                            <textarea id="message" rows="4"
                                      className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Write your thoughts here..."></textarea></div>
                        <div>
                            <p className="block py-2  text-gray-900 dark:text-white">Visibility</p>
                            <div className="flex items-center mb-4">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
                            </div>
                            <div className="flex items-center">
                                <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-2"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Public</label>
                            </div>
                        </div>
                        <PrimaryButton
                            className="dark:bg-gray-300 dark:text-gray-600 hover:bg-gray-400 hover:text-gray-50 ">
                            Post
                        </PrimaryButton>

                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    )
}
