import React, { useState } from 'react';
import './Login.css';
import Button from '../../components/Button/Button';
import Message from '../../components/Message/Message';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../../data/firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (!user.emailVerified) {
                await sendEmailVerification(user);
                setError('Verification email sent. Please check your inbox.');
            } else {
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='main-login'>
            <h2 className='login-text'>Login</h2>
            <form method='post'>
                <div className='main-form'>
                    {error && <Message type='red' text={error} />}
                    <input type="email" value={email} name="email" className="login-input" onChange={handleEmail} placeholder="Enter Your Email" />
                    <input type="password" value={password} name="password" className="login-input" onChange={handlePassword} placeholder="Enter Your Password" />
                    <Button text='Submit' click={handleSubmit} type="submit" />
                    <h5>Don't have an account??</h5>
                    <a href="/signup" className='signup-link'>Signup</a>
                </div>
            </form>
        </div>
    )
}

export default Login;
