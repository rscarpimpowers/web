import {Head, Link, useForm, usePage}           from "@inertiajs/react";
import React, {useEffect}                       from "react";
import AuthenticatedLayout                      from '@/Layouts/AuthenticatedLayout.jsx';
import {Breadcrumb, FileInput, Label, Select, TextInput} from "flowbite-react";
import {HiOutlineListBullet}                    from "react-icons/hi2";
import InputError from "@/Components/InputError.jsx";
import {PhotoIcon} from "@heroicons/react/20/solid/index.js";



/**
 * SECTION      : Modules/CulturePerformance/Lessons/Add
 * Objective    : Add a New Lesson
 * Developer    : Ricardo Scarpim
 * @param auth
 * @param dataDifficulty
 * @returns {JSX.Element}
 * @constructor
 */
export default function Add({ auth, dataDifficulty, dataValues, dataBehaviors }){

    const { flash }                                     = usePage().props;

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
        les_id                  : 0,
        les_title               : '',
        dif_description         : '',
        val_name                : '',
        time                    : 0

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


    const handleOnChangeFile = (e) => {
        console.log(e.target.files[0])
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
        >
            <Head title="Add Lesson" />

            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                    <Breadcrumb.Item
                        icon={HiOutlineListBullet}
                    >
                        <p>
                            <Link href={route('modules.lessons.index')}>Lessons List</Link>
                        </p>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Creating Lesson
                    </Breadcrumb.Item>
                </Breadcrumb>

                <section className="bg-white dark:bg-gray-900">
                    <div className="mx-auto divide-y mt-2">

                        <div className="grid grid-cols-4 gap-4">

                            <div className="col-span-4">
                                <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-gray-900 float-right"><span className="text-blue-500">Creating</span> a New Lesson</h2>
                            </div>
                            <div className="col-span-4">
                                <h3 className="text-red-700 float-right text-4xl -mt-6">Draft Mode</h3>
                            </div>
                        </div>

                        <form onSubmit={onSubmit} noValidate>

                            <div className="py-24 sm:py-8 divide-y">
                                <div className=" max-w-7xl px-6 lg:px-1">
                                    <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                            <div>
                                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Lesson Information</h2>
                                                <p className="mt-4 leading-7 text-gray-600">
                                                    Set, Describe the New Lesson Information.
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                <div className="col-span-2">

                                                    <div className="grid grid-cols-1 gap-4 mt-2">

                                                        {/* Lesson Title */}
                                                        <div className="mt-2">
                                                            <div className="mb-1 block">
                                                                <Label
                                                                    htmlFor="les_title"
                                                                    value="Lesson Title"
                                                                />
                                                            </div>
                                                            <TextInput
                                                                id="les_title"
                                                                value={data.les_title}
                                                                type="text"
                                                                sizing="sm"
                                                                autoFocus
                                                                color={ `${errors.val_name || flash.message ? 'failure': ''}`}
                                                                onChange={(e) => { setData('les_title', e.target.value)} }
                                                                onBlur={ handleOnBlur }
                                                            />
                                                            <InputError  message={ errors.les_title } className="mt-2 float-right" />

                                                            {flash.message && (
                                                                <div className="text-sm text-red-600 dark:text-red-400 mt-2 float-right">{flash.message}</div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">

                                                        {/*  Select the Difficulty   */}
                                                        <div className="mt-2">
                                                            <div
                                                                className="max-w-md"
                                                                id="selectDifficulty"
                                                            >
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        htmlFor="difficulty"
                                                                        value="Select the Lesson Difficulty"
                                                                    />
                                                                    <span className="float-right mt-3 text-xs text-red-500">Suggested: </span>
                                                                </div>
                                                                <Select
                                                                    id="difficulty"
                                                                    value={data.dif_description}
                                                                    onChange={(e) => setData('dif_description', e.target.value)}
                                                                    required
                                                                >
                                                                    <option></option>
                                                                    {/* Iterate all the Difficulties */}
                                                                    {dataDifficulty.map((items, key) => {
                                                                        return <option
                                                                            id={items.dif_id}
                                                                            key={key}
                                                                        >{items.dif_description}</option>
                                                                    })}
                                                                </Select>
                                                            </div>
                                                        </div>

                                                        {/*  Select the Value   */}
                                                        <div className="mt-2">
                                                            <div
                                                                className="max-w-md"
                                                                id="selectValue"
                                                            >
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        htmlFor="value"
                                                                        value="Select the Lesson Value"
                                                                    />
                                                                </div>
                                                                <Select
                                                                    id="value"
                                                                    value={data.val_name}
                                                                    onChange={(e) => setData('val_name', e.target.value)}
                                                                    required
                                                                >
                                                                    <option></option>
                                                                    {/* Iterate all the Values */}
                                                                    {dataValues.map((items, key) => {
                                                                        return <option
                                                                            id={items.val_id}
                                                                            key={key}
                                                                        >{items.val_name}</option>
                                                                    })}
                                                                </Select>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="grid grid-cols-2 gap-4">

                                                        {/*  Select the Time to Complete   */}
                                                        <div className="mt-2">
                                                            <div
                                                                className="max-w-md"
                                                                id="selectTime"
                                                            >
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        htmlFor="time"
                                                                        value="Select the Lesson Time Completion"
                                                                    />
                                                                    <span className="float-right mt-3 text-red-500 text-xs">Suggested: 0</span>
                                                                </div>
                                                                <Select
                                                                    id="time"
                                                                    value={data.time}
                                                                    onChange={(e) => setData('time', e.target.value)}
                                                                    required
                                                                >
                                                                    <option></option>
                                                                    <option>1 Minute</option>
                                                                </Select>
                                                            </div>
                                                        </div>

                                                        {/*  Select the Behavior   */}
                                                        <div className="mt-2">
                                                            <div
                                                                className="max-w-md"
                                                                id="selectBehavior"
                                                            >
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        htmlFor="behavior"
                                                                        value="Select the Lesson Behavior"
                                                                    />
                                                                </div>
                                                                <Select
                                                                    id="behavior"
                                                                    value={data.beh_name}
                                                                    onChange={(e) => setData('beh_name', e.target.value)}
                                                                    required
                                                                >
                                                                    <option></option>
                                                                    {/* Iterate all the Values */}
                                                                    {dataBehaviors.map((items, key) => {
                                                                        return <option
                                                                            id={items.beh_id}
                                                                            key={key}
                                                                        >{items.beh_name}</option>
                                                                    })}
                                                                </Select>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="grid grid-cols-1 gap-4 mt-2">

                                                        <div className="block">
                                                            <Label
                                                                htmlFor="file"
                                                                value="Lesson Feature Image"
                                                            />
                                                        </div>

                                                        <div className="mt-2 sm:col-span-1 sm:mt-0">
                                                            <div className="flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                                <div className="text-center">
                                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                                        <label
                                                                            htmlFor="file-upload"
                                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                                        >
                                                                        </label>
                                                                    </div>
                                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, JPEG up to 1MB</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Lesson Image */}
                                                        <div className="mt-2">
                                                            <div className="max-w-md" id="fileUpload">

                                                                <FileInput
                                                                    helperText="A Lesson picture is useful to explain about the Lesson"
                                                                    id="file"
                                                                    accept="image/png, image/jpeg, image/jpg"
                                                                    onChange={handleOnChangeFile}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>





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
        </AuthenticatedLayout>
    )
}
