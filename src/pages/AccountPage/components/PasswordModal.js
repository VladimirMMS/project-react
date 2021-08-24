
import {Modal, Form, Button, Alert} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import PasswordResolver from '../../../validations/PasswordResolver';



function DeleteModal({open, close, state}) {

    const {register,handleSubmit, formState:{errors}} = useForm({resolver:PasswordResolver});
    
   
    
    const onSubmit = (formData) => {
        alert("Change Password")
    }
    

    return (
        <Modal show = {state}>
            <Modal.Header>
                <Modal.Title>Change Your Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            placeholder = "Type your new password"
                            {...register("password")}     
                        />
                       
                        {errors?.password && (
                            <Form.Text>
                                <Alert variant = "danger">
                                    Errror in password field
                                </Alert>
                            </Form.Text>
                        )} 
                                             
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick = {handleSubmit(onSubmit)} variant = "primary">Update Password</Button>
                <Button variant = "danger" onClick = {close}>Cancel</Button>
            </Modal.Footer>
        </Modal>
            
    );
}

export default DeleteModal;