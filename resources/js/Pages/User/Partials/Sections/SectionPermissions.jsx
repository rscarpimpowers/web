import { Label, Tabs }              from "flowbite-react";
import {HiOutlineGlobeAlt, HiOutlinePhone}
                                    from "react-icons/hi";
import TabGroupDashboard            from "@/Pages/User/Partials/Sections/TabGroupDashboard.jsx";
import {FGetSetAllComboPermissions} from "@/Helpers/Utils.js";
import {useEffect}                  from "react";

export default function SectionPermissions({ userPermissions }){

    useEffect(() => {

        /* Setting the ComboBoxes with the Permissions */
        FGetSetAllComboPermissions(document.getElementById('div-checkbox'), userPermissions)
    }, [])



    return(


        <Tabs.Group aria-label="Default tabs" style="default">

            {/* Section webSite */}
            <Tabs.Item active icon={HiOutlineGlobeAlt} title="webSite">

                <Label className="ml-10 font-bold text-lg">Section Pages Setup</Label>

                {/*  Page Dashboard  */}
                <TabGroupDashboard userPermissions={userPermissions}></TabGroupDashboard>
            </Tabs.Item>


            {/* Section  Phone */}
            <Tabs.Item icon={HiOutlinePhone} title="Phone Devices">

                {/* Page Users   */}

            </Tabs.Item>
        </Tabs.Group>
    )
}
