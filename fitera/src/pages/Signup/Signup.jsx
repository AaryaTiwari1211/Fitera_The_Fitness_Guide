import React, { useState } from 'react';
import './Signup.css';
import Button from '../../components/Button/Button';
import Message from '../../components/Message/Message';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../data/firebase'; // Assuming you have exported auth and db from firebase.js

function Signup() {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== cpassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User created:', user);

            // Add user to db collection
            await setDoc(doc(db, "Users", user.uid), {
                firstname,
                lastname,
                phone,
                email,
                username
            });

            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='main-signup'>
            <h2 className='login-text'>Signup</h2>
            <form method='post' className='signup-form'>
                <div className='main-form'>
                    {error && <Message type='red' text={error} />}
                    <div className='main-name'>
                        <input type="text" value={firstname} name="text" className="signup-input" onChange={(event) => { setFirstname(event.target.value) }} placeholder="First Name" />
                        <input type="text" value={lastname} name="text" className="signup-input" onChange={(event) => { setLastname(event.target.value) }} placeholder="Last Name" />
                    </div>
                    <div className='main-name'>
                        <input type="number" pattern="\d{10}" maxLength='10' value={phone} name="text" className="signup-input" onChange={(event) => { setPhone(event.target.value) }} placeholder="Phone" />
                        <input type="email" value={email} name="text" className="signup-input" onChange={(event) => { setEmail(event.target.value) }} placeholder="Email" />
                    </div>
                    <div className='main-name'>
                        <input type="text" value={username} name="text" className="signup-input" onChange={handleUsername} placeholder="Username" />
                        <input type="password" value={password} name="text" className="signup-input" onChange={handlePassword} placeholder="Password" />
                        <input type="password" value={cpassword} name="text" className="signup-input" onChange={(event) => { setCPassword(event.target.value) }} placeholder="Confirm Password" />
                    </div>
                    <Button text='Submit' click={handleSubmit} />
                    <h5>Already have an account??</h5>
                    <a href="/login" className='login-link'>Login</a>
                </div>
            </form>
        </div>
    )
}

export default Signup;
