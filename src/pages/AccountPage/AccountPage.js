import React from 'react';
import { Container, Row, Col,Button, Card } from 'react-bootstrap';
import useAuth from '../../auth/useAuth';



function AccountPage() {

    const {user} = useAuth();

    return (
        <Container>
            <Row className = 'mt-4'>
                <Col xs = {12} className = 'text-center'>
                    <img
                        style = {{
                            width:'200px',
                            height:'200px',
                            borderRadius:'50%',
                            objectFit:'cover'                   
                        }}
                        src = "/img/male_avatar.svg"
                        alt="profile"

                    />
                </Col>

                <Col>
                <Card className= "mt-4" style = {{maxWidth:'360px', margin:'auto' , padding:'2em'}}>
                    <div className= "text-center">
                        <p><b>Name: </b>{user?.name}</p>
                        <p><b>Email: </b>{user?.email}</p>
                        <p><b>Role: </b>{user?.role}</p> 
                    </div>

                    <Button variant = "warning">
                        Edit Account
                    </Button>

                    <Button variant = "link">
                        Change password
                    </Button>

                    <Button variant = "link text-danger">
                        Delete Account
                    </Button>
                       
                </Card>
                
                </Col>
            </Row>
        </Container>
    );
}

export default AccountPage;