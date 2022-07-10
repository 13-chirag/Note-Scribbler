import React from 'react';
// import { useEffect } from 'react';
import "./LandingPage.css";
import { Button, Container, Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    //     const navigate = useNavigate();

    //     useEffect(() => {
    //         userInfo = localStorage.getItem("userInfo");

    //         if (userInfo) {
    //             navigate("/mynotes");
    //         }
    //     }, [navigate]);

    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className='title'>Welcome to Note Scribbler</h1>
                            <p className='subtitle'>Place to gather all your notes.</p>
                        </div>
                        <div className="buttonContainer">
                            <a href="/login">
                                <Button size='lg' className='landingbutton btn-warning'>Login</Button>
                            </a>
                            <a href="/register">
                                <Button size='lg' className='landingbutton' variant="outline-warning">Sign Up</Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage