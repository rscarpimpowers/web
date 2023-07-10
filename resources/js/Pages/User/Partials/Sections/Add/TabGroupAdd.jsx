import {Checkbox, Label, Tabs}
                                        from "flowbite-react";
import {HiOutlineGlobeAlt}              from "react-icons/hi";

export default function TabGroupAdd({userPermissions}){

    return(
        <Tabs.Group  className="ml-5 mt-2" aria-label="Tab-Group-Menus" style="default">

            <Tabs.Item active icon={HiOutlineGlobeAlt} title="Menus">

                <Label className="ml-5 font-bold text-lg">Left Side Menu</Label>

                <div className="flex items-center gap-2 mb-2 mt-2">
                    <Checkbox id="ck0-left-menu"
                              data-device="1"
                              data-screen="left-menu"
                              data={` ${Object.keys(userPermissions).length !== 0 && userPermissions.constructor === Object  ? (
                                  `${1},${userPermissions[0].per_sequence},${'dashboard'},${userPermissions[0].user_id},${userPermissions[0].per_id},${userPermissions[0].level_id},${2}`
                              ):(``)}`}/>
                    <Label htmlFor="ck0-left-menu" className="font-extrabold">Grant Access to the Menu Item Dashboard</Label>
                </div>

            </Tabs.Item>
        </Tabs.Group>
    )
}
