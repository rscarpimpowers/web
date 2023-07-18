import {Head, Link}                 from "@inertiajs/react";
import AuthenticatedLayout          from '@/Layouts/AuthenticatedLayout.jsx';

import {Breadcrumb, Tooltip}
                                    from 'flowbite-react';

import {HiOutlineListBullet}        from "react-icons/hi2";
import CustomDropDownMenu from "@/Components/CustomDropDownMenu.jsx";





/**
 * Name         : Show
 * Objective    : Show all the Values Content.
 * Location     : Modules/CulturePerformance/Show all Values.
 *
 * @constructor
 */
export default function Show({ auth, dataValues }){

    return(
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Culture Performance Values" />

            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('company.title.index')}>Dashboard</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            List all Values
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="flex items-center h-32 bg-white dark:bg-gray-900">
                        <div className="w-full px-4 lg:px-12">

                            <div
                                className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 ">
                                <div
                                    className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div>
                                        <h5 className="mr-3 font-semibold dark:text-white">Culture Performance Value's List</h5>
                                        <p className="text-gray-500 dark:text-gray-400">Manage all your existing
                                            values or add a new one</p>
                                    </div>
                                    <Link
                                        href={route('modules.values.create')}
                                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >

                                        <svg className="h-3.5 w-3.5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        Add new value
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The Culture Values</h2>
                                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore
                                    the whole collection of Culture Values</p>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                                {/* Iterate all the Values.  */}
                                {dataValues.map((item, key) => {
                                    return(
                                        <div key={key}
                                            className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                            <Link href={route('dashboard')}>
                                                <img className="p-4 w-full rounded-lg"
                                                     src={item.val_img_path}
                                                     alt="Jese Leos"/>
                                            </Link>
                                            <div className="px-5 pb-5">
                                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    <Link href="#">{item.val_name}</Link>
                                                </h3>
                                                <span className="text-gray-500">{item.val_description}</span>

                                                <ul className="flex space-x-4 sm:mt-0 float-right">

                                                    <div className="pr-2 ">

                                                        <CustomDropDownMenu
                                                            item={{
                                                                title: 'Edit', route: 'dashboard', uuid: `${item.uuid}`
                                                            }}
                                                            item1={{
                                                                title: 'Delete', route: 'behaviors.delete', uuid: `${item.uuid}`
                                                            }}
                                                        ></CustomDropDownMenu>
                                                    </div>

                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <button
                type="submit"
                title="Add Value"
                onClick={(e) => {  }}
                className="fixed z-90 bottom-10 right-20 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl"
            >
                <Tooltip content="Click to Add" className="w-28">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>

                </Tooltip>
            </button>
        </AuthenticatedLayout>
    )
}
