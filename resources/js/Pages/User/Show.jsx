import {useEffect, useState} from "react";

import {Head, Link}                 from "@inertiajs/react";
import AuthenticatedLayout          from '@/Layouts/AuthenticatedLayout.jsx';


import CustomTable                  from "@/Components/CustomTable.jsx";

import {FCheckPermissions}          from "@/Helpers/Utils.js";






export default function Show({auth, userData, permissions }){

    const [screenPermissions, setScreenPermissions] = useState('');

    /* Get all the Permissions per Page. */
    useEffect(() => {

        /* Get the Permissions for the Page USERS_SHOW */
        setScreenPermissions( FCheckPermissions('USERS_SHOW', permissions.permissions) )
    }, [])




    return(
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="User List" />


            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <section className="mb-6 flex items-center h-32 bg-gray-50 dark:bg-gray-900">
                        <div className="w-full px-4 lg:px-12">

                            <div
                                className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 ">
                                <div
                                    className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div>
                                        <h5 className="mr-3 font-semibold dark:text-white">User List</h5>
                                        <p className="text-gray-500 dark:text-gray-400">Manage all your existing
                                            users or add a new one</p>
                                    </div>
                                    <Link
                                        href={route('user.create')}
                                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2 -ml-1"
                                             viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                            <path
                                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                                        </svg>
                                        Add new user
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <CustomTable
                        auth={ auth }
                        data={ userData.data }
                        permissions={ screenPermissions }
                        headerconfig ={{
                            headerItems: {
                                item0: {
                                    title: 'Status',
                                    class: 'flex items-center text-center justify-center'
                                },
                                item1: {
                                    title: 'Name',
                                },
                                item2: {
                                    title: 'E-mail',
                                },
                                item3: {
                                    title: 'User Level',
                                },
                                item4:{
                                    title: 'Company'
                                },
                                item5: {
                                    title: ''
                                },
                                item6:{
                                    title:''
                                },
                            },
                        }}
                        rowconfig={{
                            item0:{
                                field: 'is_active',
                                type: 'chk',
                                class: 'flex items-center text-center justify-center'
                            },
                            item1:{
                                field: 'name',
                                type: 'r'
                            },
                            item2:{
                                field: 'email',
                                type: 'r'
                            },
                            item3:{
                                field: 'lev_description',
                                type: 'r'
                            },
                            item4:{
                                field: 'com_name',
                                type: 'r'
                            },
                            item5:{
                                type: 'btn',
                                typeBtn: 'edit',
                                route: 'user.update'
                            },
                            item6:{
                                type: 'btn',
                                typeBtn: 'delete',
                                route: 'user.update',
                                textConfirm: "You won't be able to revert this process.<br/>The User will be Permanently Deleted!",
                                textBtnConfirmation: 'Proceed',
                                fieldToDelete: 'uuid'
                            },
                        }}
                    >

                    </CustomTable>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
