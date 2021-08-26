import React from 'react';
import { Container, Row, Col,Button, Card } from 'react-bootstrap';
import useAuth from '../../auth/useAuth';
import DeleteModal from './components/DeleteModal';
import PasswordModal from './components/PasswordModal'
import useModal from '../../hooks/useModal';
import EditModal from './components/EditModal' 
import ProfileModal from './components/ProfilePicModal';


function AccountPage() {

    const {user} = useAuth();

    const [isOpenDelete, openDelete, closeDelete] = useModal()
    const [isOpenPassword, openPassword, closePassword] = useModal()
    const [isOpenEdit, openEdit, closeEdit] = useModal()
    const [isOpenProfileModal, openProfileModal, closeProfileModal] = useModal()


    return (
        <>
            <Container>
                <Row className = 'mt-4'>
                    <Col xs = {12} className = 'text-center'>

                        {user.profilePic ? <img
                            style = {{
                                width:'200px',
                                height:'200px',
                                borderRadius:'50%',
                                objectFit:'cover',
                                cursor:'pointer'                   
                            }}
                            onClick = {openProfileModal}
                            src = {user.profilePic}
                            alt="profile"
                        />:<img
                            style = {{
                                width:'200px',
                                height:'200px',
                                borderRadius:'50%',
                                objectFit:'cover',
                                cursor:'pointer'                   
                            }}
                            onClick = {openProfileModal}
                            src = "/img/male_avatar.svg"
                            alt="profile"
                        />}
                        
                    </Col>

                    <Col>
                    <Card className= "mt-4" style = {{maxWidth:'360px', margin:'auto' , padding:'2em'}}>
                        <div className= "text-center">
                            <p><b>Name: </b>{user?.name}</p>
                            <p><b>Email: </b>{user?.email}</p>
                            <p><b>Role: </b>{user?.role}</p> 
                        </div>

                        <Button variant = "warning" onClick = {openEdit}>
                            Edit Account
                        </Button>

                        <Button variant = "link" onClick = {openPassword}>
                            Change password
                        </Button>

                        <Button variant = "link text-danger" onClick = {openDelete}>
                            Delete Account
                        </Button>
                        
                    </Card>
                    
                    </Col>
                </Row>
            </Container>
            <DeleteModal
                state = {isOpenDelete} 
                open = {openDelete}
                close = {closeDelete}
            />
            <PasswordModal
                state = {isOpenPassword} 
                open = {openPassword}
                close = {closePassword}
            />

            <EditModal
                state = {isOpenEdit} 
                close = {closeEdit}
                user= {user}
            />
            <ProfileModal
                state = {isOpenProfileModal} 
                close = {closeProfileModal}
                user= {user}
            />
        </>
    );
}

export default AccountPage;