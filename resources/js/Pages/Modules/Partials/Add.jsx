
import AuthenticatedLayout              from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link}                     from "@inertiajs/react";
import {Breadcrumb}                     from "flowbite-react";

import {HiOutlineListBullet}            from "react-icons/hi2";


export default function Add({ auth }){


    const submit = (e) => {

        e.preventDefault();



    }

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="Add User" />


            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('modules.show')}>Modules List</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Creating Model
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto divide-y mt-2">

                            <div className="grid grid-cols-4 gap-4">

                                <div className="col-span-2">
                                    <h2 className="mb-4 mt-4 text-xl font-bold text-gray-900 dark:text-white"><span className="text-blue-500">Creating</span> a New Module</h2>
                                </div>
                            </div>


                            <form onSubmit={submit}>


                            </form>


                        </div>

                    </section>

                </div>
            </div>
        </AuthenticatedLayout>
    )
}
