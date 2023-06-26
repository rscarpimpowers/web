import {Head}                   from "@inertiajs/react";
import AuthenticatedLayout      from '@/Layouts/AuthenticatedLayout';

export default function Show({auth }){

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="User List" />






        </AuthenticatedLayout>
    )
}
