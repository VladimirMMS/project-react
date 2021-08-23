import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';


function NotFoundPage(props) {
    return (
        <div>
            <Row className = 'mt-5'>
                <Col md = {{span:6, offset:3}}className= 'text-center'>
                    <img
                    style= {{
                        width:'100%',
                
                        }}
                        src= "/img/404-not-found.svg"
                        alt= "error-404"
                    />
                    <h2>Are you lost?</h2>
                    <p>Come back <Link to= {routes.home}>Home</Link></p>
                </Col>
            </Row>
        </div>
    );
}

export default NotFoundPage;