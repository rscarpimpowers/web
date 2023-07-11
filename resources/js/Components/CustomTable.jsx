
import {useState}                       from "react";
import {Link}                           from "@inertiajs/react";
import {Badge, Button, Pagination, Table}
                                        from "flowbite-react";
import Swal                             from "sweetalert2";

import {HiBan, HiCheck, HiOutlineTrash} from "react-icons/hi";
import {HiOutlinePencilSquare}          from "react-icons/hi2";





const handleDelete = (e) => {

    e.preventDefault();

    Swal.fire({
        title: 'Are you sure?',
        html: vText,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: vConfirmBtn
    }).then((result) => {
        if (result.isConfirmed) {

            /* Call Api Route to Delete the Data. */


            Swal.fire(
                'Deleted!',
                'Deleted Successfully',
                'success'
            )
        }
    })
}


export default function CustomTable({...props}){
    const [currentPage, setCurrentPage] = useState();
    console.log(props.data)
    return(

        <div>
            <Table striped {...props}>

            <Table.Head>

                {/* Iterates to create all the Table Headers.*/}
                {Object.values(props.headerconfig['headerItems']).map((keys, i) => {
                    return <Table.HeadCell key={i} className={`${keys.class !== ''? `${keys.class}`: ''}`}>{keys.title}</Table.HeadCell>
                }) }
            </Table.Head>

            <Table.Body className="divide-y">

                {/*  Iterates the Data from the Database.   */}
                { props.data.data.map((items, i) => {

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

                                            { items[props.rowconfig[key]['field']] === 1? (

                                                /* Showing the Active Badge */
                                                <Badge className="w-20" icon={HiCheck} color="info">Active</Badge>
                                            ):(

                                                /* Showing the Inactive Badger */
                                                <Badge className="w-20" icon={HiBan} color="failure">Inactive</Badge>
                                            )}
                                        </div>
                                    </Table.Cell>

                                /* Case is a Button  */
                                case 'btn':

                                    /* Creating the Button according to the btn */
                                    switch (props.rowconfig[key].typeBtn){

                                        /* Edit Button */
                                        case 'edit':
                                            return <Table.Cell key={item}
                                                className={`w-24 ${props.rowconfig[key].class !== ""? props.rowconfig[key].class: ''}`}
                                            >
                                                <Link href={route(`${props.rowconfig[key].route}`, `${items['uuid']}`)}>
                                                    <Button color="warning" className="w-24 h-7">

                                                        <HiOutlinePencilSquare className="mr-2 h-3.5 w-3.5" />
                                                            Edit
                                                    </Button>
                                                </Link>
                                            </Table.Cell>

                                        /* Delete Button */
                                        case 'delete':
                                            return <Table.Cell key={item}
                                                className={`w-24 ${props.rowconfig[key].class !== ""? props.rowconfig[key].class: ''}`}
                                            >
                                                <Link href={route(`${props.rowconfig[key].route}`, `${items['uuid']}`)}>
                                                    <Button color="failure" className="w-24 h-7">

                                                        <HiOutlineTrash className="mr-2 h-3.5 w-3.5" />
                                                        Delete
                                                    </Button>
                                                </Link>
                                            </Table.Cell>
                                    }
                            }
                        })}
                    </Table.Row>
                })}
            </Table.Body>
        </Table>
            <Pagination className="float-right mt-2" currentPage={props.data.current_page} onPageChange={page => setCurrentPage(page)} totalPages={props.data.total}/>
        </div>
    )
}
