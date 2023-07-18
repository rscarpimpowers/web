import {Sidebar}                                        from "flowbite-react";
import {Link}                                           from "@inertiajs/react";
import {HiOutlineCollection, HiTrendingUp, HiUserGroup, HiViewList}
    from "react-icons/hi";
import {MdOutlineViewModule}                            from "react-icons/md";
import {IoMdClipboard}                                  from "react-icons/io";


export default function SidebarLeft(userLevel = null, userPermissions = null){

    return(
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>

                    <p className="flex items-center ml-2">
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


                        <p className="ml-8 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"/>
                            </svg>
                            <Link href={route('user.create')} className="ml-2">Add a New User</Link>
                        </p>
                    </Sidebar.Collapse>


                    <div>

                        <Sidebar.Collapse icon={HiViewList} label="Modules">

                            <div className="ml-2">

                                {/* Modules Collapse */}
                                <Sidebar.Collapse icon={HiOutlineCollection} className="text-sm" label="Culture Performance">

                                    <div>

                                        <p className="ml-8 flex items-center">

                                            <svg className="w-3.5 h-3.5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"/>
                                            </svg>

                                            <Link href={route('modules.values.index')} className="text-sm">Values</Link>
                                        </p>
                                    </div>

                                    <div>

                                        <p className="ml-8 flex items-center">
                                            <svg className="w-3.5 h-3.5 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"/>
                                            </svg>


                                            <Link href={route('modules.behaviors.index')} className="text-sm">Behaviors</Link>
                                        </p>
                                    </div>
                                </Sidebar.Collapse>
                            </div>
                        </Sidebar.Collapse>
                    </div>


                    {/* Modules Collapse */}
                    {/*<Sidebar.Collapse icon={MdOutlineViewModule} label="Modules">*/}


                    {/*    <p className="ml-8 flex items-center">*/}
                    {/*        <svg className="w-6 h-6 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*/}
                    {/*             stroke="currentColor">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                  d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"/>*/}
                    {/*        </svg>*/}


                    {/*        <Link href={route('modules.show')}>View All Modules</Link>*/}
                    {/*    </p>*/}



                    {/*    <p className="ml-8 flex items-center">*/}
                    {/*        <svg className="w-6 h-6 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*/}
                    {/*             stroke="currentColor">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*                  d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"/>*/}
                    {/*        </svg>*/}


                    {/*        <Link href={route('module.create')}>Add New Module</Link>*/}
                    {/*    </p>*/}
                    {/*</Sidebar.Collapse>*/}

                    {/* Companies */}
                    <Sidebar.Collapse icon={IoMdClipboard} label="Companies">

                        <p className="ml-8 flex items-center">

                            <svg className="w-6 h-6 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                            </svg>
                            <Link href={route('companies.show')}>View All Companies</Link>
                        </p>

                        <p className="ml-8 flex items-center">
                            <svg className="w-6 h-6 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                            </svg>
                            <Link href={route('company.title.index')}>View All Titles</Link>
                        </p>
                    </Sidebar.Collapse>

                    <p className="flex items-center ml-2">
                        <svg className="w-6 h-6 flex-none mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
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
