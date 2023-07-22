
import { Menu, Transition }         from '@headlessui/react'
import { EllipsisVerticalIcon }     from '@heroicons/react/20/solid'
import {Link, useForm}              from "@inertiajs/react";
import Swal                         from "sweetalert2";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CustomDropDownMenu({ item, item1 }) {


    const {
        post,
        processing,
        recentlySuccessful } = useForm({

    });


    /**
     * Name         : handleDelete
     * Objective    : Delete a item
     * Developer    : Ricardo Scarpim
     * Date         : Jul/18/23
     * @param e
     */
    const handleDelete = (e) => {
        Swal.fire({
            title: 'Are you sure?',
            html: item1.textHtml,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: item1.textBtnConfirm
        }).then((result) => {

            if (result.isConfirmed) {

                /* Posting the data to be deleted. */
                post(route(`${item1.route}`, {uuid: `${item1.uuid}`}))
            }
        })
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition

                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-8 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">

                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={route(item.route, item.uuid)}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={''}
                                    onClick={handleDelete}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {item1.title}
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
