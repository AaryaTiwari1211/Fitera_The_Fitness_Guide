import React, { useState } from 'react';
import './ContactUs.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/Message/Message';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../data/firebase'; // Assuming you have exported db from firebase.js

function ContactUs() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleFirstname = (event) => {
        setFirstname(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleMessage = (event) => {
        setMessage(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (firstname === '' || lastname === '' || email === '' || phone === '' || message === '') {
            setError(true);
            return;
        }
        try {
            await addDoc(collection(db, "contacts"), {
                firstname,
                lastname,
                email,
                phone,
                message
            });
            console.log("Contact information submitted successfully.");
            navigate('/'); // Redirect to home page or any other page after successful submission
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <div className='main-contact'>
            <div className='contact'>
                <div className='contact-left'>
                    <form method='post'>
                        <div className='contact-form'>
                            {error && <Message type='red' text='Please input all fields' />}
                            <h2 className='contact-text'>Contact Us</h2>
                            <div>
                                <input type="text" value={firstname} name="firstname" className="contact-input" onChange={handleFirstname} placeholder="Enter Your First Name" />
                                <input type="text" value={lastname} name="lastname" className="contact-input" onChange={handleLastName} placeholder="Enter Your Last Name" />
                            </div>
                            <div className='form-row'>
                                <input type="email" value={email} name="email" className="contact-input" onChange={handleEmail} placeholder="Enter Your Email" />
                                <input type="text" value={phone} name="phone" className="contact-input" onChange={handlePhone} placeholder="Enter Your Phone" />
                            </div>
                            <div>
                                <textarea className='contact-message' value={message} onChange={handleMessage} rows='8' cols='50' placeholder='Enter your Message' />
                            </div>
                            <div className='form-row'>
                                <Button text='Submit' click={handleSubmit} type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                {/* Contact details and map */}
            </div>
        </div>
    )
}

export default ContactUs;
