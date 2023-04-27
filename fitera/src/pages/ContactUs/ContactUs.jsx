import React from 'react'
import { useState } from 'react'
import './ContactUs.css'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import Message from '../../components/Message/Message'

function ContactUs() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const navigate = useNavigate()

    const handleFirstname = (event) => {
        setFirstname(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePhone = (event) => {
        setPhone(event.target.value)
    }
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }
    const handleSubmit = (event) => {
        if (username === '' || password === '') {
            setError1(true)
            event.preventDefault()
            return false
        }
        else if (username === 'Aarya' && password === 'password') {
            setError2(false)
            navigate('/')
        }
        else {
            setError(true)
            console.log(username, password)
        }
    }
    return (
        <div className='main-contact'>
            <div className='contact'>
                <div className='contact-left'>
                    <form method='post'>
                        <div className='contact-form'>
                            <h2 className='contact-text'>Contact Us</h2>
                            <div>
                                <input type="text" value={firstname} name="firstname" className="contact-input" onChange={handleFirstname} placeholder="Enter Your First Name" />
                                <input type="password" value={lastname} name="text" className="contact-input" onChange={handleLastName} placeholder="Enter Your Last Name" />
                            </div>
                            <div className='form-row'>
                                <input type="text" value={email} name="text" className="contact-input" onChange={handleEmail} placeholder="Enter Your Email" />
                                <input type="password" value={phone} name="" className="contact-input" onChange={handlePhone} placeholder="Enter Your Phone" />
                            </div>
                            <div>
                                <textarea className='contact-message' value={message} onChange={handleMessage} rows='8' cols='50' placeholder='Enter your Message' height='10vh' />
                            </div>
                            <div className='form-row'>
                                <Button text='Submit' click={handleSubmit} type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='contact-right'>
                    <span class='contact-right-text'>We would love to hear from you!!!</span>
                    <span class='contact-right-text'>Phone: <b>+91 7021875752</b></span>
                    <span class='contact-right-text'>Email: <b>aarya.tiwari@somaiya.edu</b></span>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs