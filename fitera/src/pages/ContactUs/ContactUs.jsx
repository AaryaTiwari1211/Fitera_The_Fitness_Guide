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
        if (firstname === '' || lastname === '' || email === '' || phone === '' || message === '') {
            setError1(true)
            event.preventDefault()
            return false
        }
        else {
            setError1(true)
            console.log(username, password)
        }
    }
    return (
        <div className='main-contact'>
            <div className='contact'>
                <div className='contact-left'>
                    <form method='post'>
                        <div className='contact-form'>
                            {error1 && <Message type='red' text='Please input all fields' />}
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
                    <span className='contact-right-text'>We would love to hear from you!!!</span>
                    <span className='contact-right-text'>Phone: <b>+91 7021875752</b></span>
                    <span className='contact-right-text'>Email: <b>aarya.tiwari@somaiya.edu</b></span>
                    <div id="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.123980810698!2d72.88594514622258!3d19.07336426408772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627923df00d%3A0x4c2b4fb28923f63d!2sSomaiya%20Vidyavihar%2C%20Group%20of%20Somaiya%20Institutions%2C%20Vidyanagar%2C%20Vidya%20Vihar%20East%2C%20Vidyavihar%2C%20Mumbai%2C%20Maharashtra%20400077!5e0!3m2!1sen!2sin!4v1682665122125!5m2!1sen!2sin"
                            allowFullScreen={true}
                            className='contact-map'
                        />
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs