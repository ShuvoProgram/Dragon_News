import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';



const Login = () => {
    const { signIn, setLoading } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation()
    const [error, setError] = useState('')

    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            form.reset()
            if (user.emailVerified){
                navigate(from, { replace: true })
            }
            else {
                toast.error('Your email is not verified. Please verify your email address.')
            }
            
        })
        .catch(err => {
            console.error(err);
            setError(err.message)
        })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;