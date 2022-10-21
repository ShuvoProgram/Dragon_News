import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import CarouselPage from '../CarouselPage/CarouselPage';
import { UserContext } from '../../../Context/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const { loginProvider } = useContext(UserContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        loginProvider(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle/> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub/> Login With Github</Button>
                </ButtonGroup>
                <div className='mt-3'>
                    <h5>Find us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Privacy</ListGroup.Item>
                </ListGroup>
                </div>
                <div>
                    <CarouselPage></CarouselPage>
                </div>
        </div>
    );
};

export default RightSideNav;