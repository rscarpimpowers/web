
import _ from 'lodash';




/**
 * Name         : FCheckPermissions.
 * Objective    : For each Screen there's a different permission, this function check's for that permissions.
 * Developer    : Ricardo Scarpim
 * Date         : Jun/20/23
 * Return       : String contain the Permissions per Screen.
 * Use          : FCheckPermissions('Screen Name', Permissions);
 * @param pScreenName
 * @param pPermissions
 * @returns {string}
 * @constructor
 */
export const FCheckPermissions = (pScreenName = '', pPermissions) => {

    let toReturn = "";

    Object.values(pPermissions).forEach(function (item){
        console.log(item)
        if(item.per_screen === pScreenName){
            toReturn =  item.per_description
        }
    })

    return toReturn;
}



/**
 * Name         : FIsEmpty.
 * Objective    : Check if the Content passed is Empty
 * Developer    : Ricardo Scarpim
 * Date         : Jun/20/23
 * Return       : Boolean
 * Use          : FIsEmpty(value)
 */
export const FIsEmpty = (e) => {

    switch (e){
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case typeof this === "undefined":
            return true;
        default:
            return false;
    }
}


/**
 *
 * @param pDomObj
 * @param pPermissions
 * @constructor
 */
export const FGetSetAllComboPermissions = (pDomObj, pPermissions) => {

    /* Checking all the Permissions */
    pPermissions.forEach(function (permission, index){

        let vScreen = permission.per_screen;

        /* Iterates All the Permission Content String */
        for(let i = 0; i < permission.per_description.length; i++){

            /* Getting the Dom Element by ID */
            const vDomElement    = document.getElementById(`ck${i}-${vScreen}`)

            /* If the Element Exists. */
            if(vDomElement !== null){

                /* Getting the DOM Element data Attributes */
                const vDomElementDevice = vDomElement.getAttribute('data-device');

                /* Comparing the Data, device type */
                if(permission.per_device.toString() === vDomElementDevice){

                    vDomElement.checked = permission.per_description[i] === '1';
                }
            }
        }
    })
}



export const FSavePermissions = (pDomObj) => {

    const vElements = pDomObj.querySelectorAll('input, combobox');

    let vScreen               = "";
    let vToContinue           = "";
    let vPermissions          = "";


    /* Iterate all the Combobox Elements to Get all the Permissions and Concatenate as a string. */
    for(let i = 0, elem; elem = vElements[i++];) {

        /* Setting the First Page  */
        vScreen = elem.getAttribute('data-screen');

        /* Selecting only */
        switch (elem.type) {

            /* Checkbox Element */
            case 'checkbox':

                if (vScreen === vToContinue) {

                    vPermissions += elem.checked ? 1 : 0;
                } else {

                    if(vPermissions === ''){
                        vPermissions += elem.checked ? 1 : 0;
                    } else vPermissions = ""

                    vToContinue = elem.getAttribute('data-screen');
                }

                console.log(vPermissions)


                break;
        }

    }
}

export const FGetAllCheckBoxesTemp = (pDomObj, pPermissions) => {

    /* Iterate all the Combobox Elements */
    for(let i = 0, elem; elem = vElements[i++];){

        switch (elem.type){

            case 'checkbox':

                /* Get the Screen Permission */
                let vScreen = elem.getAttribute('data-screen');

                /* Checking for the Screen Device. */
                let vDevice = elem.getAttribute('data-device');

                /* Get the Elem id */
                let vElemId = elem.getAttribute('id');

                pPermissions.forEach(function (screen, index){

                    /* If The Device and Screen are in the Array */
                    if( (vScreen.toLowerCase().trim() === screen.per_screen.toLowerCase().trim()) && (vDevice === screen.per_device.toString()) ){

                        /* Iterate the Permission */
                        for(let j = 0; j < screen.per_description.length; j++){

                            /* Check / Uncheck the ComboBox.  */
                            screen.per_description[j] === '1' ? elem.setAttribute('checked', 'checked'): false;
                        }
                    }
                })
                break;
        }
    }
}
