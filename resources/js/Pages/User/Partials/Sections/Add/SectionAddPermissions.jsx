import {FSetComboDefaultPermissions}            from "@/Helpers/Utils.js";
import {Label, Tabs}
                                                from "flowbite-react";
import {HiOutlineGlobeAlt}
                                                from "react-icons/hi";
import TabGroupAdd                              from "@/Pages/User/Partials/Sections/Add/TabGroupAdd.jsx";


export default function SectionAddPermissions({ defaultPermissions }){

    return(

        <Tabs.Group aria-label="Default tabs" style="default">

            {/* Section webSite */}
            <Tabs.Item active icon={HiOutlineGlobeAlt} title="webSite">

                <Label className="ml-10 font-bold text-lg">Section Pages Setup</Label>

                {/*  Page Dashboard  */}
                <TabGroupAdd userPermissions={defaultPermissions}></TabGroupAdd>
            </Tabs.Item>



        </Tabs.Group>

    )
}
