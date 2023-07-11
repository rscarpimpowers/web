import {Head, Link}                     from "@inertiajs/react";
import AuthenticatedLayout              from '@/Layouts/AuthenticatedLayout.jsx';
import CustomTable                      from "@/Components/CustomTable.jsx";


export default function Show({ auth, titlesData }){

    return(
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Company Titles List" />

            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <section className="mb-6 flex items-center h-32 bg-gray-50 dark:bg-gray-900">
                        <div className="w-full px-4 lg:px-12">

                            <div
                                className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 ">
                                <div
                                    className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div>
                                        <h5 className="mr-3 font-semibold dark:text-white">Company Titles List</h5>
                                        <p className="text-gray-500 dark:text-gray-400">Manage all your existing
                                            company titles or add a new one</p>
                                    </div>
                                    <Link
                                        href={route('company.create')}
                                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >
                                        <svg className="w-3.5 h-3.5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                                        </svg>
                                        Add new title
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CustomTable
                        auth={ auth }
                        data={ titlesData }
                        permissions={ [] }
                        headerconfig ={{
                            headerItems: {
                                item0: {
                                    title: 'Title',
                                },
                                item2: {
                                    title: 'Abbreviation'
                                },
                                item3: {
                                    title: ''
                                },
                                item4:{
                                    title:''
                                },
                            },
                        }}
                        rowconfig={{
                            item0:{
                                field: 'tit_description',
                                type: 'r'
                            },

                            items1: {
                                field: 'tit_abbreviation',
                                type: 'r'
                            },

                            item2:{
                                type: 'btn',
                                typeBtn: 'edit',
                                route: `title.update`
                            },
                            item3:{
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
