import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserServices';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';

const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

    const handleClose = () => {
        setIsShowModalAddNew(false);
    }

    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    }

    useEffect(() => {
        //call api
        getUser(1);

    }, [])

    const getUser = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            console.log(res)
            setTotalPages(res.total_pages)
            setTotalUsers(res.total)
            setListUsers(res.data);
        }
    }

    const handlePageClick = (event) => {
        // dau + de convert kieu string ve number khi minh chua biet bien selected co kieu gi
        getUser(+event.selected + 1);
    }

    return (<>
        <div className='my-3 add-new'>
            <span>List Users:</span>
            <button className='btn btn-success'
                onClick={() => setIsShowModalAddNew(true)}>Add new user</button>
        </div>
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
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <tr key={`users-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={totalPages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />
        <ModalAddNew
            show={isShowModalAddNew}
            handleClose={handleClose}
            handleUpdateTable={handleUpdateTable}
        />
    </>)
}
export default TableUsers;