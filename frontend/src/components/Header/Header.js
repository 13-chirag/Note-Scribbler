import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();

    return (
        <Navbar bg="warning" color="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand>
                    <Link to='/'><b>Note-Scribbler</b></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='m-auto'>
                        <Form style={{ paddingLeft: "150px" }} >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                    </Nav>
                    <Nav className="m-auto">
                        <Nav.Link href="/mynotes">
                            My Notes
                        </Nav.Link>
                        <NavDropdown title="Chirag Sonavale" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => {
                                localStorage.removeItem('userInfo');
                                navigate('/');
                            }}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header

