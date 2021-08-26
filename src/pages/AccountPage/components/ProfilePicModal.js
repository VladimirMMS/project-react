import { useState } from 'react';
import {Modal, Form, Button} from 'react-bootstrap'
import {toast} from 'react-toastify'
import useAuth from '../../../auth/useAuth';

function ProfileModal({open, close, state}) {

    const {updateUser} = useAuth();
    const [fileName, setFileName] = useState("Upload an Image")
    const [selectedFile, setSelectedFile] = useState(null)
    
    const handleFileChange = async(e) => {
        const [file] = e.target.files
        const isValidSize = file.size < 50 * 200 * 1024

        if(!isValidSize) return alert("Image so heavy")

        setFileName(file.name)
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedFile(reader.result)
        }
        reader.readAsDataURL(file)
    }

    const handleUpdateProfile = () => {
        if(!selectedFile) return alert("Select a new image");
        updateUser({profilePic:selectedFile})
        close()
    }

    return (
        <Modal show = {state} onHide = {close}>
            <Modal.Header>
                <Modal.Title>Change my Profile Photo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.File
                        custom
                        label = {fileName}
                        data-browse = "Upload"
                        onChange = {handleFileChange}
                        accept = ".jpg, .jpeg, .gif, .png"
                    />
                </Form>
                {selectedFile ?<img 
                    className ="img-fluid"
                    src = {selectedFile}
                    alt ="profile-view"
                               
                />: ""}
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick = {handleUpdateProfile}>Update Photo</Button>
                <Button variant = "danger" onClick = {close}>Cancel</Button>
            </Modal.Footer>
        </Modal>    
    );
}

export default ProfileModal;