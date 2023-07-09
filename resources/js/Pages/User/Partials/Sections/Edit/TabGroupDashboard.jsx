import {Checkbox, Label, Tabs}
                                                from "flowbite-react";
import {HiOutlineGlobeAlt, HiOutlineUsers}
                                                from "react-icons/hi";


export default function TabGroupDashboard({userPermissions}){
console.log(userPermissions)
    return(
        <Tabs.Group  className="ml-5 mt-2" aria-label="Tab-Group-Dashboard" style="default">

            <Tabs.Item active icon={HiOutlineGlobeAlt} title="Dashboard">

                <Label className="ml-5 font-bold text-lg">Left Side Menu</Label>
                <div className="ml-5 mt-2">

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck0-dashboard"
                                  data-device="1"
                                  data-screen="dashboard"
                                  data={`${1},${userPermissions[0].per_sequence},${'dashboard'},${userPermissions[0].user_id},${userPermissions[0].per_id},${userPermissions[0].level_id},${2}`}/>
                        <Label htmlFor="ck0-dashboard" className="font-extrabold">Grant Access to the Menu Item Dashboard</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck1-dashboard" data-device="1" data-screen="dashboard"/>
                        <Label htmlFor="ck1-dashboard" className="font-extrabold">Grant Access to the Menu Item Users</Label>
                    </div>

                        <div className="flex items-center gap-2 mb-2 ml-4">
                            <Checkbox id="ck2-dashboard" data-device="1" data-screen="dashboard"/>
                            <Label htmlFor="ck2-dashboard" className="font-light">Grant Access to the Menu Item View All Users</Label>
                        </div>

                        <div className="flex items-center gap-2 ml-4">
                            <Checkbox id="ck3-dashboard" data-device="1" data-screen="dashboard"/>
                            <Label htmlFor="ck3-dashboard" className="font-light">Grant Access to the Menu Item <span className="text-red-500">Add New User</span></Label>
                        </div>

                    <div className="flex items-center gap-2 mb-2 mt-2">
                        <Checkbox id="ck4-dashboard" data-device="1" data-screen="dashboard"/>
                        <Label htmlFor="ck4-dashboard" className="font-extrabold">Grant Access to the Menu Item Modules</Label>
                    </div>

                        <div className="flex items-center gap-2 mb-2 ml-4">
                            <Checkbox id="ck5-dashboard" data-device="1" data-screen="dashboard"/>
                            <Label htmlFor="ck5-dashboard" className="font-light">Grant Access to the Menu Item View All Modules</Label>
                        </div>

                        <div className="flex items-center gap-2 ml-4">
                            <Checkbox id="ck6-dashboard" data-device="1" data-screen="dashboard"/>
                            <Label htmlFor="ck6-dashboard" className="font-light">Grant Access to the Menu Item <span className="text-red-500">Add New Module</span></Label>
                        </div>

                    <div className="flex items-center gap-2 mb-2 mt-2">
                        <Checkbox id="ck7-dashboard" data-device="1" data-screen="dashboard"/>
                        <Label htmlFor="ck7-dashboard" className="font-extrabold">Grant Access to the Menu Item Companies</Label>
                    </div>

                        <div className="flex items-center gap-2 mb-2 ml-4">
                            <Checkbox id="ck8-dashboard" data-device="1" data-screen="dashboard"/>
                            <Label htmlFor="ck8-dashboard" className="font-light">Grant Access to the Menu Item View All Companies</Label>
                        </div>

                        <div className="flex items-center gap-2 ml-4">
                            <Checkbox id="ck9-dashboard" data-device="1" data-screen="dashboard"/>
                            <Label htmlFor="ck9-dashboard" className="font-light">Grant Access to the Menu Item <span className="text-red-500">Add New Company</span></Label>
                        </div>






                </div>
            </Tabs.Item>


            <Tabs.Item active icon={HiOutlineUsers} title="Users">

                <Label className="ml-5 font-bold text-lg">Users / View All Users</Label>

                {/* Page = users-show */}
                <div className="ml-5 mt-2">

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck0-users_show"
                                  data-device="1"
                                  data-screen="users_show"
                                  data={`${1},${userPermissions[1].per_sequence},${'users_show'},${userPermissions[1].user_id},${userPermissions[1].per_id},${userPermissions[1].level_id},${2}`}/>
                        <Label htmlFor="ck0-users_show" className="font-extrabold">Grant Access to the Button Add new user</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck1-users_show" data-device="1" data-screen="users_show"/>
                        <Label htmlFor="ck1-users_show" className="font-light">View Table Column Status</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck2-users_show" data-device="1" data-screen="users_show"/>
                        <Label htmlFor="ck2-users_show" className="font-light">View Table Column Name</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck3-users_show" data-device="1" data-screen="users_show"/>
                        <Label htmlFor="ck3-users_show" className="font-light">View Table Column Email</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck4-users_show" data-device="1" data-screen="users_show"/>
                        <Label htmlFor="ck4-users_show" className="font-light">View Table Column User Level</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck5-users_show" data-device="1" data-screen="users_show"/>
                        <Label htmlFor="ck5-users_show" className="font-light">View Table Column Company Name</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck6-users_show" data-device="1" data-screen="users_show"/>
                        <Label htmlFor="ck6-users_show" className="font-extrabold">Grant Access to the Button Edit user</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck7-users_show" data-device="1" data-screen="users_show"/>
                        <Label htmlFor="ck7-users_show" className="font-extrabold">Grant Access to the Button Delete user</Label>
                    </div>
                </div>
            </Tabs.Item>




        </Tabs.Group>
    )
}
