
import {useState}                               from "react";
import {Head, Link, useForm}
                                                from "@inertiajs/react";
import AuthenticatedLayout                      from '@/Layouts/AuthenticatedLayout.jsx';


import {Badge, Breadcrumb, Checkbox, Label, Select, TextInput}
                                                from "flowbite-react";

import {HiBan, HiCheck}
                                                from "react-icons/hi";
import {HiOutlineListBullet}                    from "react-icons/hi2";

import { FIsEmpty, FSavePermissions }
                                                from "@/Helpers/Utils.js";

import SectionPermissions                       from "@/Pages/User/Partials/Sections/Edit/SectionPermissions.jsx";






export default function Edit({auth, userData, permissions, userPermissions }){

    const [languages, setLanguages]     = useState([]);
    const [levels, setLevels]           = useState([]);
    const [companies, setCompanies]     = useState([]);
    const [emailDirty, setEmailDirty]       = useState({email: '', dirty: false})


    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        first_name      : userData[0].first_name,
        last_name       : userData[0].last_name,
        email           : userData[0].email,
        language        : userData[0].lan_description,
        isActive        : userData[0].is_active,
        level           : userData[0].lev_description,
        company         : userData[0].com_name
    });

    useState(() => {

        /* Getting all the Languages. */
        axios({ method: "post", url: '/languages' }).then(function (response){ setLanguages(response.data) })

        /* Getting all the User Levels. */
        axios({method: "post", url: '/levels'}).then((response) => { setLevels(response.data) });

        /* Getting all Companies */
        axios({method: "post", url: "/companies"} ).then((response) => { setCompanies(response.data) })
    }, [])



    /**
     * Name         : handleOnBlur
     * Objective    : On Blue event for the User Email, to check if the email is available
     * Developer    : Ricardo Scarpim
     * Date         : Jun/20/23
     * Use          : handleOnBlur(e)
     * @param e
     */
    const handleOnBlur = (e) => {

        e.preventDefault();

        /* Checking for a Value */
        if(!FIsEmpty(e.target.value)){

            /* Check if the Original Email has been changed */
            if(emailDirty.dirty){

                /* Calling the Api to check if the email is available */
                axios.post('/user-verify', { email: e.target.value})
                    .then((response) => {

                        /* If the Email has been took  */

                        console.log(response.data);

                    });
            }
        }
    }


    const submit = (e) => {

        e.preventDefault();

        /* Saving the User Permissions. */
        FSavePermissions();

    }




    return(

        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Edit User" />

            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('users.show')}>Users List</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Updating User
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto divide-y mt-2">

                            <div className="grid grid-cols-4 gap-4">

                                <div className="col-span-4">
                                    <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-gray-900 float-right"><span className="text-red-500">Updating</span> an Existing User</h2>
                                </div>
                            </div>

                            <form onSubmit={submit}>

                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">User Information</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">

                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                    <div className="col-span-2">

                                                        <div className="grid grid-cols-2 gap-4 mt-2">

                                                            {/*  Select Company   */}
                                                            <div className="mb-2">
                                                                <div
                                                                    className="max-w-md"
                                                                    id="select"
                                                                >
                                                                    <div className="mb-2 block">
                                                                        <Label
                                                                            htmlFor="companies"
                                                                            value="Select the User the Company"
                                                                        />
                                                                    </div>
                                                                    <Select
                                                                        id="companies"
                                                                        value={data.company}
                                                                        onChange={(e) => setData('company', e.target.value)}
                                                                        required
                                                                    >
                                                                        {/* Iterate all the Languages */}
                                                                        {companies.map((items, key) => {
                                                                            return <option
                                                                                id={items.com_id}
                                                                                key={key}
                                                                            >{items.com_name}</option>
                                                                        })}
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-4">

                                                            {/* First Name*/}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="first_name"
                                                                        value="First Name"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="first_name"
                                                                    placeholder="Enter the First Name"
                                                                    required
                                                                    type="text"
                                                                    value={data.first_name}
                                                                    onChange={(e) => setData('first_name', e.target.value)}
                                                                    autoFocus
                                                                />
                                                            </div>


                                                            {/* Last Name*/}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="last_name"
                                                                        value="Last Name"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="last_name"
                                                                    placeholder="Enter the Last Name"
                                                                    required
                                                                    type="text"
                                                                    value={data.last_name}
                                                                    onChange={(e) => setData('last_name', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Email */}
                                                        <div className="mt-2">
                                                            <div className="mb-1 block">
                                                                <Label
                                                                    htmlFor="email1"
                                                                    value="E-mail"
                                                                />
                                                            </div>
                                                            <TextInput
                                                                id="email1"
                                                                placeholder="name@flowbite.com"
                                                                required
                                                                type="email"
                                                                value={data.email}
                                                                onChange={(e) => setData('email', e.target.value)}
                                                                onKeyDown={(e) => { setEmailDirty({email: data.email, dirty: true})}}
                                                                onBlur={ handleOnBlur }
                                                            />
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-4 mt-2">

                                                            {/*  Select Language   */}
                                                            <div className="">
                                                                <div
                                                                    className="max-w-md"
                                                                    id="select"
                                                                >
                                                                    <div className="mb-2 block">
                                                                        <Label
                                                                            htmlFor="languages"
                                                                            value="Select the User Language"
                                                                        />
                                                                    </div>
                                                                    <Select
                                                                        id="languages"
                                                                        value={data.language}
                                                                        onChange={(e) => setData('language', e.target.value)}
                                                                        required
                                                                    >
                                                                        {/* Iterate all the Languages */}
                                                                        {languages.map((items, key) => {
                                                                            return <option
                                                                                id={items.lan_id}
                                                                                key={key}
                                                                            >{items.lan_description}</option>
                                                                        })}
                                                                    </Select>
                                                                </div>
                                                            </div>

                                                            {/* Setting the Status   */}
                                                            <div className="mt-4">
                                                                <div className="flex items-center gap-2 mt-2">
                                                                    <Checkbox
                                                                        value={ data.isActive }
                                                                        defaultChecked={ data.isActive === 1 }
                                                                        onChange={(e) => setData('isActive', e.target.value)}
                                                                        id="is_active"
                                                                    />
                                                                    <Label htmlFor="promotion">
                                                                        { userData[0].is_active === 1 ? (
                                                                            <Badge className="w-48" icon={HiCheck} color="info">This User is Currently Active</Badge>
                                                                        ):(
                                                                            <Badge className="w-48" icon={HiBan} color="failure">This User is Currently Inactive</Badge>
                                                                        ) }
                                                                    </Label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <label
                                                            htmlFor="members"
                                                            className="block mb-2 mt-4 text-md font-bold text-gray-900 dark:text-white"
                                                        >
                                                            Members
                                                        </label>
                                                        <div className="items-center md:flex md:space-x-4">

                                                            <div className="flex flex-shrink-0 mb-4 -space-x-4 md:mb-0">
                                                                <img
                                                                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                                                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                                                                    alt="Helene Engels"/>
                                                                <img
                                                                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                                                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                                                                    alt="Robert Brown"/>
                                                                <img
                                                                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                                                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                                                    alt="Bonnie Green"/>
                                                                <a className="flex justify-center items-center w-8 h-8 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
                                                                   href="#">+9</a>
                                                            </div>
                                                            <button type="button"
                                                                    className="inline-flex items-center py-2 px-3 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                                                <svg aria-hidden="true" className="mr-1 -ml-1 w-4 h-4"
                                                                     fill="currentColor" viewBox="0 0 20 20"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd"
                                                                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                                          clipRule="evenodd"></path>
                                                                </svg>
                                                                Add member
                                                            </button>
                                                        </div>
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
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">User Permissions</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        Configure the user permissions, roles
                                                    </p>
                                                    <div className="flex gap-x-4 mt-4">
                                                        <dt className="flex-none">
                                                            <span className="sr-only">User Name</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                                                 stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                            </svg>
                                                        </dt>
                                                        <dd>
                                                            <h4 className="hover:text-gray-900">
                                                                {data.first_name} {data.last_name}
                                                            </h4>

                                                        </dd>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                    <div className="col-span-2">

                                                        <div className="max-w-md" id="select">
                                                            <div className="mb-1 block">
                                                                <Label
                                                                    htmlFor="levels"
                                                                    value="Select the User Level/Role"
                                                                />
                                                            </div>
                                                            <Select
                                                                id="levels"
                                                                value={data.levels}
                                                                onChange={(e) => setData('levels', e.target.value)}
                                                                required
                                                            >
                                                                {/* Iterate all the Languages */}
                                                                {levels.map((items, key) => {
                                                                    return <option
                                                                        id={items.lev_id}
                                                                        key={key}
                                                                    >{items.lev_description}</option>
                                                                })}
                                                            </Select>
                                                        </div>

                                                        <section className="bg-white dark:bg-gray-900">
                                                            <div className="mx-auto divide-y mt-2">
                                                                <div className="grid grid-cols-4 gap-4">

                                                                    <div className="col-span-4">
                                                                        <label htmlFor="members"
                                                                               className="block mt-4 mb-4 text-md font-bold text-gray-900 dark:text-white"
                                                                        >
                                                                            User Permissions Per Device
                                                                        </label>

                                                                        <div id={'div-checkbox'}>
                                                                            <SectionPermissions userPermissions={userPermissions}></SectionPermissions>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    title="Save Data"
                                    onClick={(e) => { }}
                                    className="fixed z-90 bottom-10 right-20 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl"
                                >
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
