import {Head, Link, useForm}            from "@inertiajs/react";
import {Breadcrumb, Button, Label, TextInput, Tooltip}
                                        from "flowbite-react";

import {HiOutlineListBullet}            from "react-icons/hi2";
import AuthenticatedLayout              from '@/Layouts/AuthenticatedLayout.jsx';
import {useEffect, useState}            from "react";



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


export default function Add({ auth }){

    const [companyType, setCompanyType] = useState([]);

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        company_type        : '',
        com_name            : ''
    });



    useEffect(() => {

        /* Api to get all the Company Types, Headquarters, Branch, etc */
        axios({ method: "post", url: "/company-types" }).then(function (response){ setCompanyType(response.data) })


    }, [])



    const submit = (e) => {

        e.preventDefault();



    }



    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Company</h2>}
        >
            <Head title="Add Company" />


            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('companies.show')}>Companies List</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Creating Company
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto divide-y mt-2">

                            <div className="grid grid-cols-4 gap-4">

                                <div className="col-span-4">
                                    <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-gray-900 float-right"><span className="text-blue-500">Creating</span> a New Company</h2>
                                </div>
                            </div>


                            <form onSubmit={submit}>
                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">

                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Company Headquarter</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        The company headquarter information.
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                    <div className="col-span-2">

                                                        {/* Company Name */}
                                                        <div className="mt-2">
                                                            <div className="mb-1 block">
                                                                <Label
                                                                    htmlFor="com_name"
                                                                    value="Company"
                                                                />
                                                            </div>
                                                            <TextInput
                                                                id="com_name"
                                                                placeholder="Enter the Company Name"
                                                                required
                                                                autoFocus
                                                                type="text"
                                                                value={data.com_name}
                                                                onChange={(e) => setData('com_name', e.target.value)}
                                                            />
                                                        </div>









                                                        {/*<div className="grid grid-cols-2 gap-4">*/}

                                                        {/*    /!* First Name*!/*/}
                                                        {/*    <div>*/}
                                                        {/*        <div className="mb-1 block">*/}
                                                        {/*            <Label*/}
                                                        {/*                htmlFor="first_name"*/}
                                                        {/*                value="First Name"*/}
                                                        {/*            />*/}
                                                        {/*        </div>*/}
                                                        {/*        <TextInput*/}
                                                        {/*            id="first_name"*/}
                                                        {/*            placeholder="Enter the First Name"*/}
                                                        {/*            required*/}
                                                        {/*            type="text"*/}
                                                        {/*            value={data.first_name}*/}
                                                        {/*            onChange={(e) => setData('first_name', e.target.value)}*/}
                                                        {/*        />*/}
                                                        {/*    </div>*/}


                                                        {/*    /!* Last Name*!/*/}
                                                        {/*    <div>*/}
                                                        {/*        <div className="mb-1 block">*/}
                                                        {/*            <Label*/}
                                                        {/*                htmlFor="last_name"*/}
                                                        {/*                value="Last Name"*/}
                                                        {/*            />*/}
                                                        {/*        </div>*/}
                                                        {/*        <TextInput*/}
                                                        {/*            id="last_name"*/}
                                                        {/*            placeholder="Enter the Last Name"*/}
                                                        {/*            required*/}
                                                        {/*            type="text"*/}
                                                        {/*            value={data.last_name}*/}
                                                        {/*            onChange={(e) => setData('last_name', e.target.value)}*/}
                                                        {/*        />*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}

                                                        {/*/!* Email *!/*/}
                                                        {/*<div className="mt-2">*/}
                                                        {/*    <div className="mb-1 block">*/}
                                                        {/*        <Label*/}
                                                        {/*            htmlFor="email1"*/}
                                                        {/*            value="E-mail"*/}
                                                        {/*        />*/}
                                                        {/*    </div>*/}
                                                        {/*    <TextInput*/}
                                                        {/*        id="email1"*/}
                                                        {/*        placeholder="name@flowbite.com"*/}
                                                        {/*        required*/}
                                                        {/*        type="email"*/}
                                                        {/*        value={data.email}*/}
                                                        {/*        onChange={(e) => setData('email', e.target.value)}*/}
                                                        {/*        onKeyDown={(e) => { setEmailDirty({email: data.email, dirty: true})}}*/}
                                                        {/*        onBlur={ handleOnBlur }*/}
                                                        {/*    />*/}
                                                        {/*</div>*/}

                                                        {/*<div className="grid grid-cols-2 gap-4 mt-2">*/}

                                                        {/*    /!*  Select Language   *!/*/}
                                                        {/*    <div className="">*/}
                                                        {/*        <div*/}
                                                        {/*            className="max-w-md"*/}
                                                        {/*            id="select"*/}
                                                        {/*        >*/}
                                                        {/*            <div className="mb-2 block">*/}
                                                        {/*                <Label*/}
                                                        {/*                    htmlFor="languages"*/}
                                                        {/*                    value="Select the User Language"*/}
                                                        {/*                />*/}
                                                        {/*            </div>*/}
                                                        {/*            <Select*/}
                                                        {/*                id="languages"*/}
                                                        {/*                value={data.language}*/}
                                                        {/*                onChange={(e) => setData('language', e.target.value)}*/}
                                                        {/*                required*/}
                                                        {/*            >*/}
                                                        {/*                <option></option>*/}
                                                        {/*                /!* Iterate all the Languages *!/*/}
                                                        {/*                {languages.map((items, key) => {*/}
                                                        {/*                    return <option*/}
                                                        {/*                        id={items.lan_id}*/}
                                                        {/*                        key={key}*/}
                                                        {/*                    >{items.lan_description}</option>*/}
                                                        {/*                })}*/}
                                                        {/*            </Select>*/}
                                                        {/*        </div>*/}
                                                        {/*    </div>*/}

                                                        {/*    /!* Setting the Status   *!/*/}
                                                        {/*    <div className="mt-4">*/}
                                                        {/*        <div className="flex items-center gap-2 mt-2">*/}
                                                        {/*            <Checkbox*/}
                                                        {/*                value={ data.isActive }*/}
                                                        {/*                defaultChecked={ data.isActive === 1 }*/}
                                                        {/*                onChange={(e) => setData('isActive', e.target.value)}*/}
                                                        {/*                id="is_active"*/}
                                                        {/*            />*/}
                                                        {/*            <Label htmlFor="promotion">*/}
                                                        {/*                Is Active*/}
                                                        {/*            </Label>*/}
                                                        {/*        </div>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto divide-y mt-2">
                                    <hr
                                        className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
                                </div>

                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Company Branch(s)</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        Add company branch(s) information
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </section>
                </div>
            </div>


            <div data-dial-init className="fixed flex right-20 bottom-6 group">
                <div id="speed-dial-menu-horizontal" className="flex items-center mr-4 space-x-2">

                    <Tooltip content="Save the new Data">
                        <Button
                            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"/>
                            </svg>
                        </Button>
                    </Tooltip>
                </div>
                <button type="button" data-dial-toggle="speed-dial-menu-horizontal"
                        aria-controls="speed-dial-menu-horizontal" aria-expanded="false"
                        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 1v16M1 9h16"/>
                    </svg>
                    <span className="sr-only">Open actions menu</span>
                </button>
            </div>


        </AuthenticatedLayout>
    )
}
