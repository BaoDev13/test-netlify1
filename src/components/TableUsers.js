import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserServices';
import { useEffect } from 'react';

const TableUsers = (props) => {

    useEffect(() => {
        //call api
        getUser();

    },[])

    const getUser = async () => {
        let res = await fetchAllUser();
        console.log(">>> check res: ", res)
    }
   
    return (<>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>  
    </>)
}
export default TableUsers;