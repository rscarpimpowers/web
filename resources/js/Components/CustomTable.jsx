import {Badge, Table}               from "flowbite-react";
import {HiBan, HiCheck}             from "react-icons/hi";
import axios                        from "axios";

export default function CustomTable({...props}){
    console.log('permission', props.permissions)

    console.log('this', props.permissions.permissions.find(function (toReturn){

        return toReturn === props.axiosconfig.axios.data.screen
    }))

    const fetchPermissions = () => {

        let formData = new FormData();

        /* Populating the formData  */
        Object.keys(props.axiosconfig.axios.data).map((key, i) => {

            formData.append(key, props.axiosconfig.axios.data[key])
        })

        /* Calling the Api */
        axios({
            method: "post",
            url: props.axiosconfig.axios.url,
            data: formData
        }).then(function (response){
            console.log(response.data)
        })
    }

    return(

        <Table striped {...props}>

            { fetchPermissions()}
            <Table.Head>

                {/* Iterates to create all the Table Headers.*/}
                {Object.values(props.headerconfig['headerItems']).map((keys, i) => {
                    return <Table.HeadCell key={i} className={`${keys.class !== ''? `${keys.class}`: ''}`}>{keys.title}</Table.HeadCell>
                }) }
            </Table.Head>

            <Table.Body className="divide-y">

                {/*  Iterates the Data from the Database.   */}
                { props.data.map((items, i) => {

                    return <Table.Row key={i} className="bg-red-700 dark:border-gray-700 dark:bg-gray-800">

                    {/*  Iterates the Props to create all the Table Cell's   */}
                    { Object.keys(props.rowconfig).map((key, item) => {

                        /* Creating the Row Based on the type Selected. */
                        switch (props.rowconfig[key].type){

                            /* Case is a Regular Row */
                            case 'r':

                                return <Table.Cell key={item}
                                    className={`${props.rowconfig[key].class !== ""? props.rowconfig[key].class: ''}`}
                                >{items[props.rowconfig[key].field]}</Table.Cell>

                            /* Case is a CheckBox */
                            case 'chk':

                                return <Table.Cell key={item}
                                    className={`${props.rowconfig[key].class !== ""? props.rowconfig[key].class: ''}`}
                                >
                                    <div className={`flex items-center gap-2`}>

                                        { items['is_active'] === 1? (

                                            /* Showing the Active Badge */
                                            <Badge className="w-20" icon={HiCheck} color="info">Active</Badge>
                                        ):(

                                            /* Showing the Inactive Badger */
                                            <Badge className="w-20" icon={HiBan} color="failure">Inactive</Badge>
                                        )}
                                    </div>
                                </Table.Cell>

                        }

                    })}

                    </Table.Row>
                })}
            </Table.Body>
        </Table>
    )
}
