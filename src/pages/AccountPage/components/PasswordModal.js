
import { useEffect } from 'react';
import {Modal, Form, Button, Alert} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import PasswordResolver from '../../../validations/PasswordResolver';



function PasswordModal({open, close, state}) {

    const {register,handleSubmit, formState:{errors}, reset} = useForm({resolver:PasswordResolver});
    
    const onSubmit = (formData) => {
        alert("Change Password")
    }

    useEffect(() => {
        if(!state) {
            reset()
        }
    },[state, reset])
    

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
                            type="password"
                            {...register("password")}     
                        />
                       
                        {errors?.password && (
                            <Form.Text>
                                <Alert variant = "danger">
                                    {errors.password.message}
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

export default PasswordModal;