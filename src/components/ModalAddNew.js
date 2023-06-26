import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {postCreateUsers} from "../services/UserServices";
import { toast } from 'react-toastify';

const ModalAddNew = (props) => {
    const { show, handleClose, handleUpdateTable } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const handleSaveUser = async () => {
        let res = await postCreateUsers(name, job);
        if(res && res.id){
            //success
            handleClose();
            setName('');
            setJob('');
            toast.success("A User is created succeed!")
            handleUpdateTable({first_name: name, id: res.id})
        }else{
            //error
            toast.error("An error!")
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                            <div class="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" class="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Job</label>
                                <input type="text" class="form-control"  value={job} onChange={(event) => setJob(event.target.value)}/>
                            </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=> handleSaveUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalAddNew;