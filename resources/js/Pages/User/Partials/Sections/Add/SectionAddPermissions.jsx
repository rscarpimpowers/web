import {FSetComboDefaultPermissions} from "@/Helpers/Utils.js";


export default function SectionAddPermissions({ defaultPermissions }){


    const handlePermissions = () => {

        /* If There's a Valid user Permission */
        if(defaultPermissions !== undefined){

            /* Call the Function to check / uncheck the combos. */
            FSetComboDefaultPermissions(document.getElementById('div-checkbox'), defaultPermissions);
        }

    }
    return(
        <>
            { handlePermissions()}
        </>
    )
}
