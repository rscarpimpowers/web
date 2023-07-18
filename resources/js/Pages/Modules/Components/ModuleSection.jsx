import {Label, TextInput} from "flowbite-react";
import InputError from "@/Components/InputError.jsx";


export default function ModuleSection({...props}){
 console.log(props)
    return(
        <div id={props.data_id}>
            <div className="grid grid-cols-1 gap-4 mt-2">

                {/* Module Description */}
                <div className="mt-2">
                    <div className="mb-1 block">
                        <Label
                            htmlFor="sec_name"
                            value="Section Name"
                        />
                    </div>
                    <TextInput
                        id="sec_name"
                        value={ `${props.inputName}${props.data_id}` }
                        type="text"
                        sizing="sm"
                        autoFocus
                        //color={ `${errors.mod_name || flash.message ? 'failure': ''}`}
                        onChange={(e) => { setData(`${props.inputName}${props.data_id}`, e.target.value)} }

                    />

                </div>
            </div>
        </div>
    )
}
