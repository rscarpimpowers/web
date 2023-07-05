
import AuthenticatedLayout          from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from "@inertiajs/react";


export default function Show({auth}){

    return(
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Modules List" />

            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <section className="mb-6 flex items-center h-32 bg-gray-50 dark:bg-gray-900">
                        <div className="w-full px-4 lg:px-12">

                            <div
                                className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 ">
                                <div
                                    className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div>
                                        <h5 className="mr-3 font-semibold dark:text-white">Modules List</h5>
                                        <p className="text-gray-500 dark:text-gray-400">Manage all your existing
                                            modules or add a new one</p>
                                    </div>
                                    <Link
                                        href={route('module.create')}
                                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >
                                        <svg className="w-3.5 h-3.5 flex-none mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"/>
                                        </svg>
                                        Add new module
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>

        </AuthenticatedLayout>
    )
}
