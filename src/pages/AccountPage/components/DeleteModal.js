
import {Modal, Alert, Button} from 'react-bootstrap'
import useAuth from '../../../auth/useAuth';

function DeleteModal({open, close, state}) {

    const {setUser} = useAuth();

    function changeState() {
        setUser(null)
    }
    

    return (
        <Modal show = {state}>
            <Modal.Header>
                <Modal.Title>Delete Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant = "danger">
                    Are you sure that you wish to delete your account?<b> You're going to lost your data!</b>
                </Alert>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick = {changeState}>Accept</Button>
                <Button variant = "danger" onClick = {close}>Cancel</Button>
            </Modal.Footer>
        </Modal>
            
    );
}

export default DeleteModal;