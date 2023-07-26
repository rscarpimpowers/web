
import AuthenticatedLayout          from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link}                 from "@inertiajs/react";
import {Tooltip}                    from "flowbite-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Show({ auth, modulesData }){
    return(
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Modules List" />

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The Culture Modules</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore
                            the whole collection of Culture Modules</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 ">

                        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-6">

                            { modulesData.map((module, item) => {

                                const moduleSections = JSON.parse(modulesData[item]['modulesSectionsData']) || [];
                                console.log(moduleSections)
                                return(
                                    <div key={module.mod_id}>

                                        <li key={module.mod_id} className="flex flex-col gap-10 pt-12 sm:flex-row">
                                            <img className="aspect-auto w-48 h-28 flex-none rounded-2xl object-fill" src={ module.mod_img_path } alt="" />
                                            <div className="max-w-xl flex-auto">
                                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{module.mod_name}</h3>
                                                <p className="text-base leading-7 text-gray-600">{ module.mod_description }</p>
                                                <p className="mt-6 text-base leading-7 text-gray-600"></p>
                                                <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-1 xl:gap-x-8">

                                                    {moduleSections.map(( section ) => {

                                                        return (
                                                            <div key={section.sec_id}>

                                                                <li  className="overflow-hidden rounded-xl border border-gray-200">

                                                                    <Link href={route(`modules.${section.sec_name.toLowerCase()}.index`)} className="text-gray-400 hover:text-gray-500">
                                                                        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">

                                                                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                                                 strokeWidth="1.5" stroke="currentColor" >
                                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                                      d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"/>
                                                                            </svg>
                                                                            <div className="font-medium leading-6 text-2xl text-gray-900">{section.sec_name}</div>

                                                                        </div>
                                                                    </Link>
                                                                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">

                                                                        { section.sec_description !== null ? (
                                                                            <div className="flex justify-between gap-x-4 py-3">
                                                                                <dt className="text-gray-500">{section.sec_description}</dt>
                                                                                <dd className="text-gray-700">
                                                                                    <time dateTime={""}>{""}</time>
                                                                                </dd>
                                                                            </div>
                                                                        ): (<></>) }

                                                                        <div className="flex justify-between gap-x-4 py-3">
                                                                            <dt className="text-gray-500">Total: { section.totalValues }</dt>
                                                                            <dd className="flex items-start gap-x-2">
                                                                                <div className="font-medium text-gray-900">{""}</div>
                                                                                <div
                                                                                    className={classNames(
                                                                                        "",
                                                                                        'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                                                                    )}
                                                                                >
                                                                                    {""}
                                                                                </div>
                                                                            </dd>
                                                                        </div>
                                                                    </dl>
                                                                </li>
                                                            </div>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            {/*<div className="bg-white py-24 md:py-32">*/}
            {/*    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">*/}
            {/*        <div className="max-w-2xl xl:col-span-2">*/}
            {/*            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About the Modules</h2>*/}
            {/*            <p className="mt-6 text-lg leading-8 text-gray-600">*/}
            {/*                Here Modules can be create, update and much more.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">*/}

            {/*            { modulesData.map((module, item) => {*/}

            {/*                const moduleSections = JSON.parse(modulesData[item]['modulesSectionsData']) || [];*/}
            {/*                return(*/}
            {/*                    <div key={module.mod_id}>*/}

            {/*                        <li key={module.mod_id} className="flex flex-col gap-10 pt-12 sm:flex-row">*/}
            {/*                            <img className="aspect-auto w-48 h-28 flex-none rounded-2xl object-fill" src={ module.mod_img_path } alt="" />*/}
            {/*                            <div className="max-w-xl flex-auto">*/}
            {/*                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{module.mod_name}</h3>*/}
            {/*                                <p className="text-base leading-7 text-gray-600">{ module.mod_description }</p>*/}
            {/*                                <p className="mt-6 text-base leading-7 text-gray-600"></p>*/}
            {/*                                <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-1 xl:gap-x-8">*/}

            {/*                                    {moduleSections.map(( section ) => {*/}

            {/*                                        return (*/}
            {/*                                            <div key={section.sec_id}>*/}
            {/*                                            /!*<li key={section.sec_id}>*!/*/}
            {/*                                            /!*    <Link href={route(`modules.${section.sec_name.toLowerCase()}.index`)} className="text-gray-400 hover:text-gray-500">*!/*/}
            {/*                                            /!*        <Tooltip content="Click to Explore" className="w-32">*!/*/}

            {/*                                            /!*            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*!/*/}
            {/*                                            /!*                 strokeWidth="1.5" stroke="currentColor" >*!/*/}
            {/*                                            /!*                <path strokeLinecap="round" strokeLinejoin="round"*!/*/}
            {/*                                            /!*                      d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"/>*!/*/}
            {/*                                            /!*            </svg>*!/*/}
            {/*                                            /!*            {section.sec_name}*!/*/}
            {/*                                            /!*        </Tooltip>*!/*/}
            {/*                                            /!*    </Link>*!/*/}
            {/*                                            /!*</li>*!/*/}

            {/*                                        <li  className="overflow-hidden rounded-xl border border-gray-200">*/}
            {/*                                            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">*/}
            {/*                                                <img*/}
            {/*                                                    src={""}*/}
            {/*                                                    alt={""}*/}
            {/*                                                    className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"*/}
            {/*                                                />*/}
            {/*                                                <div className="text-sm font-medium leading-6 text-gray-900">{section.sec_name}</div>*/}
            {/*                                                <Menu as="div" className="relative ml-auto">*/}
            {/*                                                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">*/}
            {/*                                                        <span className="sr-only">Open options</span>*/}
            {/*                                                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />*/}
            {/*                                                    </Menu.Button>*/}
            {/*                                                    <Transition*/}

            {/*                                                        enter="transition ease-out duration-100"*/}
            {/*                                                        enterFrom="transform opacity-0 scale-95"*/}
            {/*                                                        enterTo="transform opacity-100 scale-100"*/}
            {/*                                                        leave="transition ease-in duration-75"*/}
            {/*                                                        leaveFrom="transform opacity-100 scale-100"*/}
            {/*                                                        leaveTo="transform opacity-0 scale-95"*/}
            {/*                                                    >*/}
            {/*                                                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">*/}
            {/*                                                            <Menu.Item>*/}
            {/*                                                                {({ active }) => (*/}
            {/*                                                                    <a*/}
            {/*                                                                        href="#"*/}
            {/*                                                                        className={classNames(*/}
            {/*                                                                            active ? 'bg-gray-50' : '',*/}
            {/*                                                                            'block px-3 py-1 text-sm leading-6 text-gray-900'*/}
            {/*                                                                        )}*/}
            {/*                                                                    >*/}
            {/*                                                                        View<span className="sr-only">, {secion.sec_name}</span>*/}
            {/*                                                                    </a>*/}
            {/*                                                                )}*/}
            {/*                                                            </Menu.Item>*/}
            {/*                                                            <Menu.Item>*/}
            {/*                                                                {({ active }) => (*/}
            {/*                                                                    <a*/}
            {/*                                                                        href="#"*/}
            {/*                                                                        className={classNames(*/}
            {/*                                                                            active ? 'bg-gray-50' : '',*/}
            {/*                                                                            'block px-3 py-1 text-sm leading-6 text-gray-900'*/}
            {/*                                                                        )}*/}
            {/*                                                                    >*/}
            {/*                                                                        Edit<span className="sr-only">, {section.sec_name}</span>*/}
            {/*                                                                    </a>*/}
            {/*                                                                )}*/}
            {/*                                                            </Menu.Item>*/}
            {/*                                                        </Menu.Items>*/}
            {/*                                                    </Transition>*/}
            {/*                                                </Menu>*/}
            {/*                                            </div>*/}
            {/*                                            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">*/}
            {/*                                                <div className="flex justify-between gap-x-4 py-3">*/}
            {/*                                                    <dt className="text-gray-500">Last invoice</dt>*/}
            {/*                                                    <dd className="text-gray-700">*/}
            {/*                                                        <time dateTime={""}>{""}</time>*/}
            {/*                                                    </dd>*/}
            {/*                                                </div>*/}
            {/*                                                <div className="flex justify-between gap-x-4 py-3">*/}
            {/*                                                    <dt className="text-gray-500">Amount</dt>*/}
            {/*                                                    <dd className="flex items-start gap-x-2">*/}
            {/*                                                        <div className="font-medium text-gray-900">{""}</div>*/}
            {/*                                                        <div*/}
            {/*                                                            className={classNames(*/}
            {/*                                                                "",*/}
            {/*                                                                'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'*/}
            {/*                                                            )}*/}
            {/*                                                        >*/}
            {/*                                                            {""}*/}
            {/*                                                        </div>*/}
            {/*                                                    </dd>*/}
            {/*                                                </div>*/}
            {/*                                            </dl>*/}
            {/*                                        </li>*/}
            {/*                                        </div>*/}
            {/*                                        )*/}
            {/*                                    })}*/}
            {/*                                </ul>*/}
            {/*                            </div>*/}
            {/*                        </li>*/}




            {/*                    </div>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </AuthenticatedLayout>
    )
}
