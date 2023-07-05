import {Sidebar}                                        from "flowbite-react";
import {Link}                                           from "@inertiajs/react";
import {HiUserGroup}                                    from "react-icons/hi";
import { HiOutlineUserPlus}                             from "react-icons/hi2"

export default function SidebarAdministratorLeft(userLevel = null, userPermissions = null){

    return(
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>

                    <p className="flex items-center">
                        <svg className="w-6 h-6 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                        </svg>
                        <Link href={route('dashboard')}>Dashboard</Link>
                    </p>



                    {/* Users Collapse*/}
                    <Sidebar.Collapse icon={HiUserGroup} label="Users">

                        <p className="ml-8 flex items-center">
                            <svg className="w-6 h-6 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                            </svg>

                            <Link href={route('users.show')}>View All Users</Link>
                        </p>


                        <Sidebar.Item href="#" icon={HiOutlineUserPlus}>

                            <Link href={route('user.create')}>Add a New User</Link>
                        </Sidebar.Item>
                    </Sidebar.Collapse>


                    <p className="flex items-center">
                        <svg className="w-6 h-6 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
                        </svg>

                        <Link href={route('logout')} method="post" as="button">Sign out</Link>
                    </p>

                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
