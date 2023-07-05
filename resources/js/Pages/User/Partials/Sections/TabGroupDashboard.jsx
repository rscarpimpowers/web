import {Checkbox, Label, Tabs} from "flowbite-react";
import {HiOutlineGlobeAlt, HiOutlineUsers} from "react-icons/hi";


export default function TabGroupDashboard(){

    return(
        <Tabs.Group  className="ml-5 mt-2" aria-label="Tab-Group-Dashboard" style="default">

            <Tabs.Item active icon={HiOutlineGlobeAlt} title="Dashboard">

                <div className="ml-5">

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck0-dashboard" data-device="1" data-screen="dashboard"/>
                        <Label htmlFor="ck0">Grant Access to the Menu Item Dashboard</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox id="ck1-dashboard" data-device="1" data-screen="dashboard"/>
                        <Label htmlFor="ck1-dashboard">Grant Access to the Menu Item Users</Label>
                    </div>

                    <div className="flex items-center gap-2 mb-2 ml-4">
                        <Checkbox id="ck2-dashboard" data-device="1" data-screen="dashboard"/>
                        <Label htmlFor="ck2">Grant Access to the Menu Item View All Users</Label>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                        <Checkbox id="ck3-dashboard" data-device="1" data-screen="dashboard"/>
                        <Label htmlFor="ck3">Grant Access to the Menu Item <span className="text-red-500">Add New User</span></Label>
                    </div>
                </div>
            </Tabs.Item>


            <Tabs.Item active icon={HiOutlineUsers} title="Users">

                <Label className="ml-10 font-bold text-lg">Page Name</Label>

                {/* TAB = Pages  */}
                <Tabs.Group  className="ml-5 mt-2" aria-label="Tab-Group-Users-Show" style="default">

                    {/* Page = users-show */}
                    <Tabs.Item active icon={HiOutlineUsers} title="View All Users">
                        <div className="ml-5">

                            <div className="flex items-center gap-2 mb-2">
                                <Checkbox id="ck0-users_show" data-device="1" data-screen="users_show"/>
                                <Label htmlFor="ck0-users_show">Grant Access to the Button Add new user</Label>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <Checkbox id="ck1-users_show" data-device="1" data-screen="users_show"/>
                                <Label htmlFor="ck1-users_show">View Table Column Status</Label>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <Checkbox id="ck2-users_show" data-device="1" data-screen="users_show"/>
                                <Label htmlFor="ck2-users_show">View Table Column Name</Label>
                            </div>

                        </div>
                    </Tabs.Item>
                </Tabs.Group>
            </Tabs.Item>
        </Tabs.Group>
    )
}
