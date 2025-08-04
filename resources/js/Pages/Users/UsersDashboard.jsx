import AutenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function UsersDashboard({users, admins}) {

    return (
        <AutenticatedLayout>
            <div className="py-6">
                <div className="grid grid-cols-6 mx-auto">
                    <TextInput
                        className="my-auto mx-7 col-span-5 rounded-none bg-indigo-100 border   shadow-none"
                        placeholder="Search users"

                    >{/*TODO: добави списък с предложения*/}
                    </TextInput>
                    <PrimaryButton
                        className="mb-auto col-span-1 rounded-none mt-auto border-none bg-opacity-0 hover:bg-opacity-0"
                    >
                        <svg width="1.5rem" height="auto" viewBox="0 0 15 15" fill="none"
                             xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier"></g>
                            <g id="SVGRepo_tracerCarrier"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                                      fill="#000000"></path>
                            </g>
                        </svg>
                    </PrimaryButton>
                </div>

                <p className="tracking-wide text-center my-6 text-2xl">Suggested Profiles:</p>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">

                    <div className="relative grid my-auto mx-auto gap-1 lg:grid-cols-6 lg:grid-rows-3 lg:gap-3">
                        {users.map((user) =>
                            (
                                <a

                                    href={route('user.show',user.id)}
                                    className="flex p-6 lg:pb-10 dark:bg-white    "
                                >


                                    <div className={`mx-auto my-auto px-3 ]`}>{/*bg-[url("+post.thumbnail+")]*/}
                                        <h2 className="text-xl font-sans text-black dark:text-black">
                                            {user.name}
                                        </h2>
                                        <ul className="mt-6 font-medium border-t border-gray-700"/>
                                        <img className="w-full" src={user.avatar} alt={user.name}/>


                                    </div>


                                </a>

                            ))}


                    </div>

                </div>

            </div>
        </AutenticatedLayout>
    );
}
