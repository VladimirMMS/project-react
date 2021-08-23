
import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';


function HomePage() {
    return (
        <Container>
            <Row className = 'mt-5'>
                <Col xs = {{span:12}}  md = {{span:6}}className = "mb-5">

                    <h2>Welcome to task Manage</h2>
                    <p>Here you will can manage your proyects!</p>

                    <p>
                        Mark your task as finished, Add, Delete or Update
                    </p>
                    <div>
                        <Link to = {routes.login}>Enter</Link> o <Button as= {Link} to = {routes.register}>Create a Account</Button>
                    </div>
                   
                </Col>

                <Col >
                    <img
                        style = {{width:'100%'}}
                        src = "img/task-manager.svg"
                        alt = "task-manage"
                    
                    />

                    <p>Manage your time, improve your proactivity</p>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;