import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(UserContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon News</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid ? 
                                    <>
                                            <span variant='light'>{user?.displayName}</span>
                                            <button variant='light' className='mx-2' onClick={handleLogOut}>Log Out</button>
                                    </>
                                    :
                                    <>
                                    <Link to='/login' className='mx-2'>Login</Link>
                                    <Link to='signup' className='mx-2'>SignUp</Link>
                                    </>
                                }
                                </>

                            <Link to='/profile'>
                                {
                                    user?.photoURL ?
                                        <Image
                                        roundedCircle
                                        style={{height: '30px'}}
                                         src={user?.photoURL}></Image>
                                      : <FaUser></FaUser>
                                }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;