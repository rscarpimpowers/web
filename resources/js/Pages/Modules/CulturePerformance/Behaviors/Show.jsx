import {Head, Link}                 from "@inertiajs/react";
import AuthenticatedLayout          from '@/Layouts/AuthenticatedLayout.jsx';

import {Breadcrumb, Tooltip}
                                    from 'flowbite-react';

import {HiOutlineListBullet}        from "react-icons/hi2";
import CustomDropDownMenu           from "@/Components/CustomDropDownMenu.jsx";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

/**
 * Name         : Show
 * Objective    : Show all the Behaviors Content.
 * Location     : Modules/CulturePerformance/Behaviors/Show -> Show all the Behaviors.
 *
 * @constructor
 */
export default function Show({ auth, dataBehaviors }){

    return(
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Culture Performance Behaviors" />


            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('dashboard')}>Dashboard</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            List all Behaviors
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="flex items-center h-32 bg-white dark:bg-gray-900">
                        <div className="w-full px-4 lg:px-12">

                            <div
                                className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 ">
                                <div
                                    className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div>
                                        <h5 className="mr-3 font-semibold dark:text-white">Culture Performance Behavior's List</h5>
                                        <p className="text-gray-500 dark:text-gray-400">Manage all your existing
                                            behaviors or add a new one</p>
                                    </div>
                                    <Link
                                        href={route('modules.behaviors.create')}
                                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >

                                        <svg className="h-3.5 w-3.5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        Add new behavior
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The Culture Behaviors</h2>
                                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore
                                    the whole collection of Culture Behaviors</p>
                            </div>


                            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                                {dataBehaviors.map((item, key) => {
                                    return (
                                        <li key={key} className="col-span-1 flex rounded-md shadow-sm">
                                            <div
                                                className={classNames(
                                                    `${item.gro_color !== null ? item.gro_color: 'bg-blue-600'}`,
                                                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                                                )}
                                            >
                                                {item.beh_sequence}
                                            </div>
                                            <div className="flex flex-1 items-center justify-between  rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                                    <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                                                        {item.name}
                                                    </a>
                                                    <p className="text-gray-500">{item.beh_name}</p>
                                                </div>
                                                <div className="flex-shrink-0 pr-2">

                                                    <CustomDropDownMenu
                                                        item={{
                                                            title: 'Edit', route: 'modules.behaviors.edit', uuid: `${item.uuid}`
                                                        }}
                                                        item1={{
                                                            title: 'Delete', route: 'modules.behaviors.destroy', uuid: `${item.uuid}`
                                                        }}
                                                    ></CustomDropDownMenu>
                                                </div>
                                            </div>
                                        </li>
                                    )})}
                            </ul>
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

