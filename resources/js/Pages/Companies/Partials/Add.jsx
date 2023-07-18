import {Head, Link, useForm}            from "@inertiajs/react";
import {Breadcrumb, Button, Label, Select, TextInput, Tooltip}
    from "flowbite-react";

import {HiOutlineListBullet}            from "react-icons/hi2";
import AuthenticatedLayout              from '@/Layouts/AuthenticatedLayout.jsx';
import {useEffect, useState}            from "react";
import InputMask                        from "react-input-mask";




export default function Add({ auth }){

    const [companyType, setCompanyType]     = useState([]);
    const [timezone, setTimezone]           = useState([]);
    const [title, setTitle]                 = useState([]);


    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        company_type        : '',
        com_name            : '',
        address             : '',
        address2            : '',
        city                : '',
        state               : '',
        zip                 : '',
        timezone            : '',
        phone               : '',
        email               : '',
    });



    useEffect(() => {

        /* Api to get all the Company Types, Headquarters, Branch, etc */
        axios({ method: "post", url: "/company-types" }).then(function (response){ setCompanyType(response.data) })

        /* Api to get All the Timezone. */
        axios({ method: "post", url: "/timezone"}).then(function (response){ setTimezone(response.data) });

        /* Api to get All the CompanyTitle */
        axios({ method: "post", url: "/title/all"}).then(function (response) { setTitle(response.data) });
    }, [])


    /**
     * Name         : submit
     * Objective    : Form Submit
     * Developer    : Ricardo Scarpim
     *
     * @param e
     */
    const submit = (e) => {

        e.preventDefault();

    }



    return(
        <AuthenticatedLayout
            user={auth.user}
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
                                                                sizing="sm"
                                                                type="text"
                                                                value={data.com_name}
                                                                onChange={(e) => setData('com_name', e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-4 mt-2">

                                                            {/* Address */}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="address"
                                                                        value="Address"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="address"
                                                                    placeholder="Enter the Company Address"
                                                                    required
                                                                    sizing="sm"
                                                                    type="text"
                                                                    value={data.address}
                                                                    onChange={(e) => setData('address', e.target.value)}
                                                                />
                                                            </div>

                                                            {/* Address 2*/}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="address2"
                                                                        value="Address 2"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="address2"
                                                                    placeholder="Apartment, suite, etc.(optional)"
                                                                    required
                                                                    sizing="sm"
                                                                    type="text"
                                                                    value={data.address2}
                                                                    onChange={(e) => setData('address2', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-3 gap-4 mt-2">

                                                            {/* City */}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="city"
                                                                        value="City"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="city"
                                                                    placeholder="City"
                                                                    required
                                                                    sizing="sm"
                                                                    type="text"
                                                                    value={data.city}
                                                                    onChange={(e) => setData('city', e.target.value)}
                                                                />
                                                            </div>

                                                            {/* State */}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="state"
                                                                        value="State"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="state"
                                                                    placeholder="State"
                                                                    required
                                                                    sizing="sm"
                                                                    type="text"
                                                                    value={data.state}
                                                                    onChange={(e) => setData('state', e.target.value)}
                                                                />
                                                            </div>

                                                            {/* ZipCode */}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="zipcode"
                                                                        value="Zip/Postal"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="zip"
                                                                    placeholder="Zip/Postal"
                                                                    required
                                                                    sizing="sm"
                                                                    type="text"
                                                                    value={data.zip}
                                                                    onChange={(e) => setData('zip', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="mb-2 mt-2">
                                                            <div
                                                                className="max-w-md"
                                                                id="select"
                                                            >
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        htmlFor="timezone"
                                                                        value="Select the Timezone"
                                                                    />
                                                                </div>
                                                                <Select
                                                                    id="timezone"
                                                                    sizing="sm"
                                                                    value={data.timezone}
                                                                    onChange={(e) => {setData('timezone', e.target.value); }}
                                                                    required
                                                                >
                                                                    <option></option>
                                                                    {/* Iterate all the Timezone */}
                                                                    {timezone.map((items, key) => {
                                                                        return <option
                                                                            id={items.tim_id}
                                                                            key={key}
                                                                        >{items.tim_description}</option>
                                                                    })}
                                                                </Select>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-4 mt-2">

                                                            {/* Phone */}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="phone"
                                                                        value="Phone Number"
                                                                    />
                                                                </div>
                                                                <InputMask
                                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 rounded-lg p-2.5 sm:text-xs"
                                                                    mask="(999)999-9999"
                                                                    id="address"
                                                                    placeholder="Phone Number"
                                                                    required
                                                                    sizing="sm"
                                                                    type="text"
                                                                    value={data.phone}
                                                                    onChange={(e) => setData('phone', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>


                                                        {/* Company Email */}
                                                        <div className="mt-2">
                                                            <div className="mb-1 block">
                                                                <Label
                                                                    htmlFor="com_email"
                                                                    value="Email"
                                                                />
                                                            </div>
                                                            <TextInput
                                                                id="com_email"
                                                                placeholder="Enter the Company Email"
                                                                sizing="sm"
                                                                type="text"
                                                                value={data.com_email}
                                                                onChange={(e) => setData('com_email', e.target.value)}
                                                            />
                                                        </div>




                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mt-2">
                                    <hr
                                        className=" h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
                                </div>


                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Company Contact Info</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        Add company contact information
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">

                                                    <div className="col-span-2">

                                                        <div className="mb-2 mt-2">
                                                            <div
                                                                className="max-w-md"
                                                                id="select"
                                                            >
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        htmlFor="com_title"
                                                                        value="Select the Title"
                                                                    />
                                                                </div>
                                                                <Select
                                                                    id="com_title"
                                                                    sizing="sm"
                                                                    value={data.com_title}
                                                                    onChange={(e) => {setData('com_title', e.target.value); }}
                                                                >
                                                                    <option></option>
                                                                    {/* Iterate all the Timezone */}
                                                                    {title.map((items, key) => {
                                                                        return <option
                                                                            id={items.tit_id}
                                                                            key={key}
                                                                        >{items.tit_description}</option>
                                                                    })}
                                                                </Select>
                                                            </div>
                                                        </div>

                                                        {/* Company Contact Name */}
                                                        <div className="mt-2">
                                                            <div className="mb-1 block">
                                                                <Label
                                                                    htmlFor="com_contact_name"
                                                                    value="Contact Name"
                                                                />
                                                            </div>
                                                            <TextInput
                                                                id="com_contact_name"
                                                                placeholder="Enter the Company Contact Name"
                                                                sizing="sm"
                                                                type="text"
                                                                value={data.com_contact_name}
                                                                onChange={(e) => setData('com_contact_name', e.target.value)}
                                                            />
                                                        </div>
                                                    </div>






                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-auto mt-2">
                                    <hr
                                        className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
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
