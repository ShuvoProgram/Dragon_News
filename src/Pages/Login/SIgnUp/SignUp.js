import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';
import { toast }  from 'react-hot-toast';

const SignUp = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(UserContext);
    const [error, setError] = useState('')
    const [accept, setAccept] = useState(false);

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email =  form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            form.reset();
            handleUpdateUserProfile(name, photoURL)
            handleEmailVerification()
            toast.success("Please Verify Your Email !")
        })
        .catch(err => {
            console.error(err)
            setError(err.message)
        })
        
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            name: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => { })
        .catch(err => console.error(err))
    }

    const handleEmailVerification = () => {
        verifyEmail()
        .then(() => {})
        .catch(err => console.error(err))
    }

    const handleTermsAndConditions = event => {
      setAccept(event.target.checked)
    }
    
    return (
        <Form onSubmit={handleSignUp}>
            
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" />
                <Form.Text className="text-muted">
                    Please Type Your Name
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTermsAndConditions">
                <Form.Check onClick={handleTermsAndConditions} type="checkbox" label={<p>Accept <Link to='/terms'>Terms And Conditions</Link></p>}/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accept}>
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default SignUp;