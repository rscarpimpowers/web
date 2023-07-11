/**
 * Name         : Show - Titles List
 */



import {Head, Link, useForm}            from "@inertiajs/react";
import AuthenticatedLayout              from '@/Layouts/AuthenticatedLayout.jsx';

import {HiOutlineListBullet}            from "react-icons/hi2";

import {Breadcrumb, Label, TextInput, Tooltip}
                                        from "flowbite-react";
import {FIsEmpty}                       from "@/Helpers/Utils.js";
import InputError                       from "@/Components/InputError.jsx";
import intus                            from "intus";
import {isRequired} from "intus/rules";




export default function Edit({ auth, titleData }){

    const {
        data,
        setData,
        isDirty,
        setDefaults,
        clearErrors,
        setError,
        errors,
        post,
        processing,
        recentlySuccessful } = useForm({
            tit_description         : titleData[0].tit_description,
            tit_abbreviation        : titleData[0].tit_abbreviation,
            uuid                    : titleData[0].uuid,
    });





    /**
     * Saving the Data.
     * Conclusion : Using the data passed as an parameter to send to the Api
     * @param e
     */
    const onSubmitForm = (e) => {

        e.preventDefault();

        clearErrors();

        let validation = intus.validate(data, {
            tit_description: [isRequired()]
        },{
            "tit_description.isRequired": "Title Name is required."
        });


        /* Calling the Api to save the Data. */
        if(validation.passes()){

            post(route('title.update.data'));
        }else {
            setError(validation.errors())
        }
    }


    /**
     * Name         : handleOnBlurTitle
     * Objective    : Call the Api to verify if Title is available
     * Developer    : Ricardo Scarpim
     * Date         : Jul/10/23.
     *
     * @param e
     */
    const handleOnBlurTitle = (e) => {

        e.preventDefault();

        /* Checking for a Valid Content. */
        if(!FIsEmpty(e.target.value) && isDirty){

            /* Calling the Api to check the availability of the Title Name. */

        }
    }











    return(
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Company Titles List" />


            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('titles.show')}>Titles List</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Updating Title
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto divide-y mt-2">

                            <div className="grid grid-cols-4 gap-4">

                                <div className="col-span-4">
                                    <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-gray-900 float-right"><span className="text-red-500">Updating</span> an Existing Title</h2>
                                </div>
                            </div>

                            <form onSubmit={onSubmitForm} noValidate>

                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Title Information</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        Update an existing company title and title abbreviation.
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                    <div className="col-span-2">

                                                        <div className="grid grid-cols-1 gap-4 mt-2">

                                                            {/* CompanyTitle Description */}
                                                            <div className="mt-2">
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="tit_description"
                                                                        value="Title Name"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="tit_description"
                                                                    value={data.tit_description}
                                                                    type="text"
                                                                    color={`${errors.tit_description ? 'failure': ''}`}
                                                                    onChange={(e) => { setData('tit_description', e.target.value)} }
                                                                    onBlur={ handleOnBlurTitle }
                                                                />
                                                                <InputError message={ errors.tit_description } className="mt-2" />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-4 mt-2">

                                                            {/* CompanyTitle Abbreviation */}
                                                            <div>
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="tit_abbreviation"
                                                                        value="Title Abbreviation"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="tit_abbreviation"
                                                                    value={data.tit_abbreviation}
                                                                    type="text"
                                                                    onChange={(e) => { setData('tit_abbreviation', e.target.value) }}
                                                                    placeholder="Enter the Title Abbreviation"
                                                                />

                                                            </div>
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


                                    <button
                                        disabled={processing}
                                        type="submit"
                                        title="Save Data"
                                        onClick={(e) => {  }}
                                        className="fixed z-90 bottom-10 right-20 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl"
                                    >
                                        <Tooltip content="Click to Save" className="w-28">
                                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                 stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"/>
                                            </svg>
                                        </Tooltip>
                                    </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
