import Swal from "sweetalert2";


/**
 * Name         : FUncheckCheckAllComboBoxes.
 * Objective    : Check / UnCheck All ComboBoxes inside Specific Div.
 * Developer    : Ricardo Scarpim
 * Date         : Jul/6/23
 *
 * @param pType
 * @param pDomDivObj
 * @constructor
 */
export const FUncheckCheckAllComboBoxes = (pType, pDomDivObj) => {

    /* Getting the Specific DOM Element to Search for the Combos*/
    const vElements = pDomDivObj.querySelectorAll('input, combobox');

    /* Iterates the DOM Element */
    for(let i = 0, elem; elem = vElements[i++];) {

        /* Selecting only */
        switch (elem.type) {

            /* Checkbox Element */
            case 'checkbox':

                /* Check / Uncheck based on the param pType */
                elem.checked = pType === 0;
                break;
        }
    }
}



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



export const FSetComboDefaultPermissions = (pDomObj, pPermissions) => {

    /* If there's a Valid Permission  */
    if(!FIsEmpty(pPermissions)){

        /* Checking all the Permissions */
        pPermissions.forEach(function (permission, index){

            /* Getting the Screen Name Information */
            let vScreen = permission.def_screen;

            console.log(vScreen)
        });
    }
}


/**
 *
 * @param pDomObj
 * @param pPermissions
 * @constructor
 */
export const FGetSetAllComboPermissions = (pDomObj, pPermissions) => {
console.log(pPermissions)
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



export const FSavePermissions = () => {

    document.querySelectorAll('[role="tabpanel"]').forEach(function (el, i){

        /* Getting all Tabs to Check if is a Tab CompanyTitle Such Website, etc */
        let vDOMTabElement = el.getAttribute('id').substring(1, 3)

        /* Avoiding the Tabs Website, Phone Devices, etc. */
        if(vDOMTabElement !== 'r3') {

            /* Get all the Selected Elements. */
            const vElements = el.querySelectorAll('input, combobox')

            /* Function to Sum all the Permissions */
            FSumPermissions(vElements);
        }
    });
}


/**
 * Name         : FSumPermissions
 * Objective    : Create a string with all the Permissions 0 = No Allowed 1 = Allowed, concatenated
 * Developer    : Ricardo Scarpim
 * Date         : Jun/20/23
 * Return       : String with all the Permissions
 * Use          : FCheckPermissions(DOM Element that contains all the checkboxes);
 * @param pDomElements
 * @constructor
 */
export const FSumPermissions = (pDomElements) => {

    let toSum                   = "";
    let vElementData            = ""

    for(let i = 0, elem; elem = pDomElements[i++];) {

        /* Only Checkbox and Inputs */
        switch (elem.type){

            case 'checkbox':
            case 'input':

                /* Create a string with 0 and 1 according to the element check */
                toSum += elem.checked ? 1: 0;
                break;
        }

        /* Valid Element */
        if(elem.getAttribute('data') !== null){

            /* First Checkbox contains the data*/
            if(i <= 1){
                vElementData = elem.getAttribute('data').split(',')
            }
        }
    }

    /* Function to Return an Object with all the Permissions Data. */
    FReturnPermissionsObject(toSum, pDomElements, vElementData)
}


/**
 * Name         : FReturnPermissionsObject
 * Objective    : Return a Object with all the Permission Data.
 * Developer    : Ricardo Scarpim
 * Date         : Jun/20/23
 * Return       : String with all the Permissions
 * Use          : FReturnPermissionsObject(pPermissions,pDomElements,pElementData);
 * @param pPermissions  = The Concatenated string with the Permissions,Example 1110110
 * @param pDomElements  =
 * @param pElementData
 * @constructor
 */
export const FReturnPermissionsObject = (pPermissions, pDomElements, pElementData) => {

    let vPermissionsObj = [];

    /* Iterating the Split Array to Populate the Object, when is the Last Iteration */
    for(let i = 0; i < pElementData.length; i++){

        vPermissionsObj = {
            per_device      : pElementData[0],
            per_sequence    : pElementData[1],
            per_screen      : pElementData[2],
            user_id         : pElementData[3],
            per_id          : pElementData[4],
            level_id        : pElementData[5],
            per_description : pPermissions,
            pType           : pElementData[6]
        }
    }

    /* Calling the API to Save the Information */
    axios({method: "post", url: "/permissions", data: vPermissionsObj}).then((res) => { console.log(res)})
}


/**
 * Name         : FCustomToast
 * Objective    :
 *
 * @param pTitle
 * @constructor
 */
export const FCustomToast = (pTitle) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: pTitle
    })
}


