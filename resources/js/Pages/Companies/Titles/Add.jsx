import {Head, Link, useForm, usePage}   from "@inertiajs/react";
import {Breadcrumb, Label, TextInput, Tooltip}
                                        from "flowbite-react";
import {HiOutlineListBullet}            from "react-icons/hi2";
import AuthenticatedLayout              from '@/Layouts/AuthenticatedLayout.jsx';
import InputError                       from "@/Components/InputError.jsx";
import intus                            from "intus";
import {isRequired}                     from "intus/rules";
import {FIsEmpty}                       from "@/Helpers/Utils.js";
import {useState} from "react";



export default function Add({ auth }){

    const { flash } = usePage().props;
    const [isEnable, setIsEnable]   = useState(false);


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
        tit_description         : '',
        tit_abbreviation        : ''
    });


    /**
     * Name         : onSubmit
     * Objective    : Save the new Data.
     * Developer    : Ricardo Scarpim
     * Date         : Jun/9/23
     * @param e
     */
    const onSubmit = (e) => {

        e.preventDefault();

        clearErrors();

        let validation = intus.validate(data, {
            tit_description     : [isRequired()],
            tit_abbreviation    : [isRequired()],
        },{
            "tit_description.isRequired"    : "Title Name is required.",
            "tit_abbreviation.isRequired"   : "Tittle Abbreviation is required."
        });


        /* Calling the Api to save the Data. */
        if(validation.passes()){
            post(route('company.title.store'));
        }else {
            setError(validation.errors())
        }


    }


    /**
     * Name         : handleBlur
     * Objective    : Check the availability of the Title.
     * Developer    : Ricardo Scarpim
     * Date         : Jun/11/23
     * @param e
     */
    const handleOnBlur = (e) => {

        e.preventDefault();

        /* Checking for the Value entered */
        if(!FIsEmpty(e.target.value)){

            /* Checking if the Title is Available */
            post(route('company.title.verify'), {

                /* When Finalizing, work with the return variable. */
                onSuccess: (res) => {

                    /* Title has been taken already */
                    if(!FIsEmpty(res.props.flash)){

                        /* Disable the Save Button */
                        setIsEnable(false)
                    }else{
                        setIsEnable(true)
                    }
                },
            });
        }
    }

    return(
        <AuthenticatedLayout
            user={auth.user}

        >
            <Head title="Add Company Title" />

            <div className="space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800">

                    <Breadcrumb className="mt-4" aria-label="Default breadcrumb example">
                        <Breadcrumb.Item
                            icon={HiOutlineListBullet}
                        >
                            <p>
                                <Link href={route('company.title.index')}>Company Titles List</Link>
                            </p>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Creating Title
                        </Breadcrumb.Item>
                    </Breadcrumb>


                    <section className="bg-white dark:bg-gray-900">
                        <div className="mx-auto divide-y mt-2">

                            <div className="grid grid-cols-4 gap-4">

                                <div className="col-span-4">
                                    <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight text-gray-900 float-right"><span className="text-blue-500">Creating</span> a New Company Title</h2>
                                </div>
                            </div>

                            <form onSubmit={onSubmit} noValidate>

                                <div className="py-24 sm:py-8 divide-y">
                                    <div className=" max-w-7xl px-6 lg:px-1">
                                        <div className="mx-auto max-w-2xl space-y-16 divide-y lg:mx-0 lg:max-w-none">
                                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Title Information</h2>
                                                    <p className="mt-4 leading-7 text-gray-600">
                                                        Set, Describe the Company Title Information.
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
                                                                    autoFocus
                                                                    color={ `${errors.tit_description || flash.message ? 'failure': ''}`}
                                                                    onChange={(e) => { setData('tit_description', e.target.value)} }
                                                                    onBlur={ handleOnBlur}
                                                                />
                                                                <InputError  message={ errors.tit_description } className="mt-2 float-right" />

                                                                {flash.message && (
                                                                    <div className="text-sm text-red-600 dark:text-red-400 mt-2 float-right">{flash.message}</div>
                                                                )}
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
                                                                    color={`${errors.tit_abbreviation ? 'failure': ''}`}
                                                                    onChange={(e) => { setData('tit_abbreviation', e.target.value) }}
                                                                    onInput={(e) => e.target.value = ("" + e.target.value).toUpperCase()}
                                                                    placeholder="Enter the Title Abbreviation"
                                                                />
                                                                <InputError message={ errors.tit_abbreviation } className="mt-2 float-right" />
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
                                    disabled={processing || isEnable}
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
