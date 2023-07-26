import {Head, Link, useForm, usePage}           from "@inertiajs/react";
import React, {useEffect, useState}             from "react";


import { FilePond, registerPlugin }             from "react-filepond";
import FilePondPluginImageResize                from 'filepond-plugin-image-resize';
import FilePondPluginImagePreview               from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType           from 'filepond-plugin-file-validate-type';



import AuthenticatedLayout                      from '@/Layouts/AuthenticatedLayout.jsx';


import {Breadcrumb, FileInput, Label, TextInput, Tooltip}
                                                from "flowbite-react";
import {HiOutlineListBullet}                    from "react-icons/hi2";
import InputError                               from "@/Components/InputError.jsx";
import {PhotoIcon}                              from "@heroicons/react/20/solid/index.js";

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(
    FilePondPluginImageResize,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType
);


/**
 * SECTION      : Modules/CulturePerformance/Values/Crud/Add
 * Objective    : Add a New Value
 * Developer    : Ricardo Scarpim
 * @param auth
 * @returns {JSX.Element}
 * @constructor
 */
export default function Add({ auth }){

    const { flash }                                     = usePage().props;
    const [sectionImg, setSectionImg]         = useState();


    //const [selectedPeople, setSelectedPeople]   = useState([people[0], people[1]])

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
        val_name                : '',
        val_description         : '',

        val_technical           : ''

    });


    /**
     *
     * @param e
     */
    const onSubmit = (e) => {

        e.preventDefault();

        console.log('called')

        clearErrors();

        /* Validating. */


    }


    /**
     *
     * @param e
     */
    const handleOnBlur = (e) => {

    }



    const handleImgSelection = (e) => {

        console.log(URL.createObjectURL(e.target.files[0]), e.target.files[0])
    }


    /**
     *  useEffect : Bring all the Behaviors Information
     */
    useEffect(() => {

        /* Api Call to retrieve all the Behaviors  */


    }, [])

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="Add Value" />

            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                    <Breadcrumb.Item
                        icon={HiOutlineListBullet}
                    >
                        <p>
                            <Link href={route('modules.values.index')}>Values List</Link>
                        </p>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Creating Value
                    </Breadcrumb.Item>
                </Breadcrumb>


                <section className="bg-white dark:bg-gray-900">
                    <div className="mx-auto divide-y mt-2">

                        <div className="grid grid-cols-4 gap-4">

                            <div className="col-span-4">
                                <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-gray-900 float-right"><span className="text-blue-500">Creating</span> a New Value</h2>
                            </div>
                        </div>


                        <form onSubmit={onSubmit}>

                            <div className="py-24 sm:py-8 divide-y">
                                <div className=" max-w-7xl px-6 lg:px-1">
                                    <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                            <div>
                                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Value Information</h2>
                                                <p className="mt-4 leading-7 text-gray-600">
                                                    Set, Describe the New Value Information.
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                <div className="col-span-2">

                                                    <div className="grid grid-cols-1 gap-4 mt-2">

                                                        {/* Value Name */}
                                                        <div className="mt-2">
                                                            <div className="mb-1 block">
                                                                <Label
                                                                    htmlFor="val_name"
                                                                    value="The Value"
                                                                />
                                                            </div>
                                                            <TextInput
                                                                id="val_name"
                                                                value={data.val_name}
                                                                type="text"
                                                                sizing="sm"
                                                                autoFocus
                                                                color={ `${errors.val_name || flash.message ? 'failure': ''}`}
                                                                onChange={(e) => { setData('val_name', e.target.value)} }
                                                                onBlur={ handleOnBlur }
                                                            />
                                                            <InputError  message={ errors.val_name } className="mt-2 float-right" />

                                                            {flash.message && (
                                                                <div className="text-sm text-red-600 dark:text-red-400 mt-2 float-right">{flash.message}</div>
                                                            )}
                                                        </div>
                                                    </div>


                                                    <div className="grid grid-cols-1 gap-4 mt-2">

                                                        {/* Value Name */}
                                                        <div className="mt-2">
                                                            <div className="mb-1 block">
                                                                <Label
                                                                    htmlFor="val_description"
                                                                    value="Value Description"
                                                                />
                                                            </div>
                                                            <TextInput
                                                                id="val_description"
                                                                value={data.val_description}
                                                                placeholder="Describe the Value"
                                                                type="text"
                                                                sizing="sm"
                                                                onChange={(e) => { setData('val_description', e.target.value)} }
                                                            />
                                                            <InputError  message={ errors.val_description } className="mt-2 float-right" />
                                                        </div>
                                                    </div>


                                                    <div className="col-span-full mt-10 mb-10">
                                                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Cover image
                                                        </label>


                                                        <FilePond
                                                            credits={false}
                                                            allowMultiple={false}
                                                            maxFiles={1}
                                                            acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg']}
                                                            server={{
                                                                url: '/upload',
                                                                headers: {
                                                                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                                                                }
                                                            }}

                                                            instantUpload={true}
                                                            name={"imgValues"}
                                                        ></FilePond>
                                                    </div>







                                                    <div className="mt-8">
                                                        <div className="mb-2 block">
                                                            <Label
                                                                htmlFor="file"
                                                                value="Technical Value Description"
                                                            />
                                                        </div>

                                                    </div>

                                                    <div className="mb-2 block">
                                                        <Label
                                                            htmlFor="file"
                                                            value="References Section"
                                                        />
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
                                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Related Behaviors</h2>
                                                <p className="mt-4 leading-7 text-gray-600">
                                                    Set, Describe the Company Value Behaviors Information.
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                <div className="col-span-2">

                                                    {/*<Combobox value={selectedPeople} onChange={setSelectedPeople} multiple>*/}
                                                    {/*    {selectedPeople.length > 0 && (*/}
                                                    {/*        <ul>*/}
                                                    {/*            {selectedPeople.map((person) => (*/}
                                                    {/*                <li key={person.id}>{person.name}</li>*/}
                                                    {/*            ))}*/}
                                                    {/*        </ul>*/}
                                                    {/*    )}*/}
                                                    {/*    <Combobox.Input />*/}
                                                    {/*    <Combobox.Options>*/}
                                                    {/*        {people.map((person) => (*/}
                                                    {/*            <Combobox.Option key={person.id} value={person}>*/}
                                                    {/*                {person.name}*/}
                                                    {/*            </Combobox.Option>*/}
                                                    {/*        ))}*/}
                                                    {/*    </Combobox.Options>*/}
                                                    {/*</Combobox>*/}

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
                                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
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


        </AuthenticatedLayout>
    )
}
