import { useEffect } from 'react';
import {Modal, Form, Button, Alert} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import roles from '../../../helpers/roles';
import EditResolver from '../../../validations/EditResolver';
import useAuth from '../../../auth/useAuth';


function DeleteModal({close, state, user}) {

    const {register,handleSubmit, formState:{errors, dirtyFields}, reset} = useForm({resolver:EditResolver});
    const {updateUser, hasRole} = useAuth();
    const isDirty = !!Object.keys(dirtyFields).length;
    
    const onSubmit = (formData) => {
        
        if(!isDirty) return;

        if(!formData.role) {
            formData.role = "regular"
        }

        updateUser(formData)
        close()    
    }

    useEffect(() => {
        if(!state) {
            reset()
        }
    },[state, reset])

    useEffect(() => {
    
        reset({
            name:user.name,
            email:user.email,
            role:user.rol
        })
        
    },[user])

    return (
        <Modal show = {state}>
            <Modal.Header>
                <Modal.Title>Edit my Acccount</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>New Name</Form.Label>
                        <Form.Control
                            placeholder = "Type your new name"
                            type="text"
                            {...register("name")}     
                        />              
                        {errors?.name && (
                            <Form.Text>
                                <Alert variant = "danger">
                                    {errors.name.message}
                                </Alert>
                            </Form.Text>
                        )}                                   
                    </Form.Group>

                    <Form.Group>
                        
                        <Form.Label>New Email</Form.Label>
                        <Form.Control
                            placeholder = "Type your new email"
                            type="email"
                            {...register("email")}     
                        />
                        
                        {errors?.email && (
                            <Form.Text>
                                <Alert variant = "danger">
                                    {errors.email.message}
                                </Alert>
                            </Form.Text>
                        )}                                   
                    </Form.Group>
                    <Form.Group>
                        
                        <Form.Label>Select Role</Form.Label>
                        <Form.Control
                            disabled = {!hasRole('admin')}
                            {...register("role")}
                            as = "select"    
                        >
                            {Object.keys(roles).map(role => (
                                <option key={role}>{role}</option>

                            ))}
                            
                        </Form.Control>          
                        {errors?.role && (
                            <Form.Text>
                                <Alert variant = "danger">
                                    {errors.role.message}
                                </Alert>
                            </Form.Text>
                        )}                                   
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick = {handleSubmit(onSubmit)} variant = "primary" disabled = {!isDirty}>Update my Account</Button>
                <Button variant = "danger" onClick = {close}>Cancel</Button>
            </Modal.Footer>
        </Modal>          
    );
}

export default DeleteModal;