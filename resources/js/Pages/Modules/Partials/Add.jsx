
import AuthenticatedLayout              from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, useForm, usePage}
                                        from "@inertiajs/react";
import {Breadcrumb, Button, Checkbox, Label, Textarea, TextInput, Tooltip}
    from "flowbite-react";

import {HiOutlineListBullet}            from "react-icons/hi2";
import InputError                       from "@/Components/InputError.jsx";
import {useState}                       from "react";

/**
 * SECTION      : Modules/Partials/Add
 * Objective    : Add a New Module and Module Sections.
 * Developer    : Ricardo Scarpim
 * @param auth
 * @returns {JSX.Element}
 * @constructor
 */
export default function Add({ auth }){

    const { flash } = usePage().props;

    const [moduleSectionList, setModuleSectionList]     = useState([]);
    const [count, setCount]                           = useState(1)

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
        mod_name                : '',
        mod_description         : ''

    });

    /**
     *
     * @param e
     */
    const submit = (e) => {

        e.preventDefault();

        clearErrors();



    }


    /**
     *
     * @param e
     */
    const handleOnBlur = (e) => {

    }


    /**
     *  Name        : handleModuleSection
     *  Objective   : Add Dynamical Div with the Module Section Content.
     *  Developer   : Ricardo Scarpim
     *  Date        : Jul/12/23
     */
    const handleModuleSection = () => {

        setCount(count + 1)
        setModuleSectionList(moduleSectionList.concat(<ModuleSection
            data_id={count}
            inputName={'sec_name'}
            key={moduleSectionList.length} />))
    }


    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="Add Module" />


            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('modules.show')}>Modules List</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Creating Model
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto divide-y mt-2">

                            <div className="grid grid-cols-4 gap-4">

                                <div className="col-span-4">
                                    <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-gray-900 float-right"><span className="text-blue-500">Creating</span> a New Module</h2>
                                </div>
                            </div>


                            <form onSubmit={submit}>

                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Module Information</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        Set, Describe the Module Information.
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                    <div className="col-span-2">

                                                        <div className="grid grid-cols-1 gap-4 mt-2">

                                                            {/* Module Description */}
                                                            <div className="mt-2">
                                                                <div className="mb-1 block">
                                                                    <Label
                                                                        htmlFor="tit_description"
                                                                        value="Module Name"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="tit_description"
                                                                    value={data.mod_name}
                                                                    type="text"
                                                                    sizing="sm"
                                                                    autoFocus
                                                                    color={ `${errors.mod_name || flash.message ? 'failure': ''}`}
                                                                    onChange={(e) => { setData('mod_name', e.target.value)} }
                                                                    onBlur={ handleOnBlur }
                                                                />
                                                                <InputError  message={ errors.tit_description } className="mt-2 float-right" />

                                                                {flash.message && (
                                                                    <div className="text-sm text-red-600 dark:text-red-400 mt-2 float-right">{flash.message}</div>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* Module Description*/}
                                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                                            <div className="mt-2">

                                                                <div
                                                                    id="textarea"
                                                                >
                                                                    <div className="mb-2 block">
                                                                        <Label
                                                                            htmlFor="mod_description"
                                                                            value="Module Description"
                                                                        />
                                                                    </div>
                                                                    <Textarea
                                                                        id="mod_description"
                                                                        placeholder="Module Description"
                                                                        value={data.mod_description}
                                                                        onChange={(e) => { setData('mod_description', e.target.value)} }
                                                                        required
                                                                        rows={4}
                                                                    />
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
                                                                        Module is Active
                                                                    </Label>
                                                                </div>
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

                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Module Sections</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        Create Modules Sections.
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                                    <div className="col-span-2">

                                                        <section className="mb-6 flex items-center h-32  dark:bg-gray-900">
                                                            <div className="w-full px-4 lg:px-12">

                                                                <div className="relative overflow-hidden bg-white dark:bg-gray-800 ">
                                                                    <div className="flex-row items-center justify-end p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">

                                                                        <Button
                                                                            onClick={handleModuleSection}
                                                                            size="xs"
                                                                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                                                        >
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 fill="none" viewBox="0 0 24 24"
                                                                                 strokeWidth="1.5"
                                                                                 stroke="currentColor"
                                                                                 className="h-3.5 w-3.5 mr-2 -ml-1">
                                                                                <path strokeLinecap="round"
                                                                                      strokeLinejoin="round"
                                                                                      d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"/>
                                                                            </svg>
                                                                            Add new Module Section
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>


                                                        <div>

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
