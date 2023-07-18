import React                                    from "react";
import {Head, Link, useForm, usePage}           from "@inertiajs/react";
import {Badge, Breadcrumb, Label, TextInput}    from "flowbite-react";

import AuthenticatedLayout                      from '@/Layouts/AuthenticatedLayout.jsx';


import {HiOutlineListBullet}                    from "react-icons/hi2";
import InputError                               from "@/Components/InputError.jsx";

import {FCustomToast, FIsEmpty}
                                                from "@/Helpers/Utils.js";
import {CKEditor}                               from "@ckeditor/ckeditor5-react";
import ClassicEditor                            from "@ckeditor/ckeditor5-build-classic";
import intus                                    from "intus";
import {isRequired}                             from "intus/rules";






export default function Edit({ auth, dataBehavior, dataColorGroup  }){

    const { flash }                                     = usePage().props;

    const {
        data,
        setData,
        isDirty,
        setDefaults,
        clearErrors,
        setError,
        errors,
        put,
        post,
        processing,
        recentlySuccessful } = useForm({
        uuid                    : dataBehavior[0].uuid,
        beh_name                : dataBehavior[0].beh_name,
        beh_sequence            : dataBehavior[0].beh_sequence,
        color_group_id          : dataBehavior[0].color_group_id,
        beh_did_you             : dataBehavior[0].beh_did_you,
        beh_did_supervisor      : dataBehavior[0].beh_did_supervisor,
        beh_takeaways           : dataBehavior[0].beh_takeaways,
        beh_definition          : dataBehavior[0].beh_definition,
        updated_by              : auth.user.id
    });




    /**
     *
     * @param e
     */
    const onSubmit = (e) => {

        e.preventDefault();

        clearErrors();

        /* Validating. */
        let validation = intus.validate(data, {
            beh_name     : [isRequired()],
        },{
            "beh_name.isRequired"    : "Behavior Name is required."
        });

        /* Calling the Api to save the Data. */
        if(validation.passes()){
            put(route('modules.behaviors.update', data.uuid), {
                onSuccess: () => {

                    /* Show Custom Toast. */
                    FCustomToast('Behavior Saved Successfully')
                }
            });
        }else {
            setError(validation.errors())
        }

    }


    /**
     *
     * @param e
     */
    const handleOnBlur = (e) => {

        /* Checking for Changes */
        if(isDirty){

            /* Not empty content */
            if(!FIsEmpty(e.target.value)){

                console.log('called')
            }
        }
    }

    const handleOnChangeCombobox = (e) => {


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
                                <Link href={route('modules.behaviors.index')}>Behaviors List</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Updating Behavior
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto divide-y mt-2">

                            <div className="grid grid-cols-4 gap-4">

                                <div className="col-span-4">
                                    <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-gray-900 float-right"><span className="text-red-500">Updating</span> an Existing Behavior</h2>
                                </div>
                            </div>


                            <form onSubmit={onSubmit}>

                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Behavior Information</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        Update the data information of the Behavior
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                    <div className="col-span-2">

                                                        <div className="grid grid-cols-2 gap-4 mt-2">

                                                            <div className="col-start-1 col-span-3">

                                                                {/* Behavior Name */}
                                                                <div className="mt-2">
                                                                    <div className="mb-1 block">
                                                                        <Label
                                                                            htmlFor="beh_name"
                                                                            value="Behavior Name"
                                                                        />
                                                                    </div>
                                                                    <TextInput
                                                                        id="beh_name"
                                                                        value={data.beh_name}
                                                                        type="text"
                                                                        sizing="sm"
                                                                        autoFocus
                                                                        color={ `${errors.beh_name || flash.message ? 'failure': ''}`}
                                                                        onChange={(e) => { setData('beh_name', e.target.value)} }
                                                                        onBlur={ handleOnBlur }
                                                                    />
                                                                    <InputError  message={ errors.beh_name } className="mt-2 float-right" />

                                                                    {flash.message && (
                                                                        <div className="text-sm text-red-600 dark:text-red-400 mt-2 float-right">{flash.message}</div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <div className="col-start-5 col-end-10">

                                                                {/* Behavior Sequence */}
                                                                <div className="mt-2">
                                                                    <div className="mb-1 block">
                                                                        <Label
                                                                            htmlFor="beh_sequence"
                                                                            value="Sequence"
                                                                        />
                                                                    </div>
                                                                    <TextInput
                                                                        id="beh_sequence"
                                                                        value={data.beh_sequence}
                                                                        type="text"
                                                                        sizing="sm"
                                                                        onChange={(e) => { setData('beh_sequence', e.target.value)} }
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        {/* Behavior Color Group */}
                                                        <div className="mt-2">
                                                            <div className="mb-1 block">
                                                                <Label

                                                                    htmlFor="val_name"
                                                                    value="Behavior Colour Group"
                                                                />
                                                            </div>

                                                            <div className="grid grid-cols-8 gap-4 mt-2">

                                                                { dataColorGroup.map((item, key) => {
                                                                    return (
                                                                        <div className="flex flex-wrap"  key={key}>
                                                                            <div className="flex items-center mr-4">
                                                                                <input
                                                                                    id={`${item.gro_id}`}
                                                                                    data-id={ data.color_group_id}
                                                                                    type="radio"
                                                                                    checked={ item.gro_id === data.color_group_id }
                                                                                    name="colored-radio"
                                                                                    onChange={(e) => { setData('color_group_id', e.target.getAttribute('id')) }}
                                                                                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                                                                                <Badge
                                                                                    className={`ml-3 text-xs text-center font-medium text-white dark:text-gray-300 ${item.gro_color} w-16`}
                                                                                >
                                                                                    {item.gro_color_description}
                                                                                </Badge>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-1 gap-4 mt-2">

                                                            {/* Behavior Did you */}
                                                            <div className="mt-2">
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="beh_did_you"
                                                                        value="Did you..."
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="beh_name"
                                                                    value={data.beh_did_you}
                                                                    type="text"
                                                                    sizing="sm"
                                                                    onChange={(e) => { setData('beh_did_you', e.target.value)} }
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-1 gap-4 mt-2">

                                                            {/* Behavior How Well the supervisor... */}
                                                            <div className="mt-2">
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="beh_did_supervisor"
                                                                        value="How well did the supervisor..."
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="beh_did_supervisor"
                                                                    value={data.beh_did_supervisor}
                                                                    type="text"
                                                                    sizing="sm"
                                                                    onChange={(e) => { setData('beh_did_supervisor', e.target.value)} }
                                                                />
                                                            </div>
                                                        </div>


                                                        <div className="grid grid-cols-1 gap-4 mt-2">

                                                            {/* Behavior Takeaways */}
                                                            <div className="mt-2">
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="beh_takeaways"
                                                                        value="Key Takeaways"
                                                                    />
                                                                </div>

                                                                <CKEditor
                                                                    id={'beh_takeaways'}
                                                                    editor={ ClassicEditor }
                                                                    data={`${data.beh_takeaways !== null ? data.beh_takeaways: ''}`}
                                                                    onReady={ editor                => {} }
                                                                    onChange={ ( event, editor )    => {
                                                                        setData('beh_takeaways', editor.getData())
                                                                    } }
                                                                    onBlur={ ( event, editor )      => {} }
                                                                    onFocus={ ( event, editor )     => {} }
                                                                />
                                                            </div>
                                                        </div>


                                                        <div className="grid grid-cols-1 gap-4 mt-2">

                                                            {/* Behavior Definitions... */}
                                                            <div className="mt-2">
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="beh_definition"
                                                                        value="Behavior Definition"
                                                                    />
                                                                </div>
                                                                <CKEditor
                                                                    id={"beh_definitions"}
                                                                    editor={ ClassicEditor }
                                                                    data={`${data.beh_definition !== null? data.beh_definition: ''}`}
                                                                    onReady={ editor                => {} }
                                                                    onChange={ ( event, editor )    => {
                                                                        setData('beh_definition', editor.getData())
                                                                    } }
                                                                    onBlur={ ( event, editor )      => {} }
                                                                    onFocus={ ( event, editor )     => {} }
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