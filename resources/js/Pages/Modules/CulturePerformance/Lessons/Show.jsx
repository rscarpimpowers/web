import {Head, Link}                         from "@inertiajs/react";
import AuthenticatedLayout                  from '@/Layouts/AuthenticatedLayout.jsx';

import {Breadcrumb, Checkbox, Label, Tooltip}
                                            from "flowbite-react";


import {HiOutlineListBullet}                from "react-icons/hi2";

import {TrashIcon, Cog6ToothIcon, PencilIcon}
                                            from "@heroicons/react/20/solid/index.js";

import vDefaultLogo                         from "../../../../../../public/images/powers/powers-brand.svg";





export default function Show({ auth, dataLessons }){
    console.log(dataLessons)
    return(
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Culture Performance Lessons" />

            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('modules.index')}>Modules</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            List all Lessons
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="flex items-center h-32 bg-white dark:bg-gray-900">
                        <div className="w-full px-4 lg:px-12">

                            <div
                                className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 ">
                                <div
                                    className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div>
                                        <h5 className="mr-3 text-4xl font-semibold dark:text-white">Culture Performance Lessons List</h5>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Explore the whole collection of Culture Lessons, Manage all your existing lessons or add a new one
                                        </p>
                                    </div>
                                    <Link
                                        href={route('modules.lessons.create')}
                                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >

                                        <svg className="h-3.5 w-3.5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        Add new lesson
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">

                            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">

                                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    {dataLessons.map((lesson, key) => (
                                        <li
                                            key={lesson.les_id}
                                            className="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center shadow-2xl"
                                        >
                                            <div className="flex flex-1 flex-col p-8">
                                                <div className="w-full" id="checkbox">
                                                    <div className="flex items-center mb-2 gap-2 float-right">
                                                        <Checkbox id="accept" defaultChecked={ lesson.les_is_visible ? vDefaultLogo: false }/>
                                                        <Label className="flex" htmlFor="agree">
                                                            <p>
                                                                Show Lesson
                                                            </p>
                                                        </Label>
                                                    </div>
                                                </div>
                                                <Link>
                                                    <img className="mx-auto  object-fill" src={lesson.les_img_path !== null ? lesson.les_img_path: vDefaultLogo } alt="" />
                                                </Link>
                                                <h3 className="mt-6 text-sm font-medium text-gray-900">{lesson.les_title}</h3>
                                            </div>

                                            <div>
                                                <div className="-mt-px flex divide-x divide-gray-200">
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={""}
                                                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-xs font-semibold text-gray-900"
                                                        >
                                                            <PencilIcon className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                                                            Update
                                                        </a>
                                                    </div>
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={""}
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-xs font-semibold text-gray-900"
                                                        >
                                                            <Cog6ToothIcon className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                                                            Resources
                                                        </a>
                                                    </div>
                                                    <div className="-ml-px flex w-0 flex-1">
                                                        <a
                                                            href={""}
                                                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-xs font-semibold text-gray-900"
                                                        >
                                                            <TrashIcon className="h-3.5 w-3.5 text-red-500" aria-hidden="true" />
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
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
