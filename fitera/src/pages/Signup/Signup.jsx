import React, { useState } from 'react'
import './Signup.css'
import Button from '../../components/Button/Button'
import Message from '../../components/Message/Message'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        if (username === '' || password === '' || firstname === '' || lastname === '' || phone === '' || email === '') {
            setError(true)
            event.preventDefault()
            return false;
        }
        else {
            console.log([firstname, lastname, phone, email, username])
            navigate('/')
        }
    }
    return (
        <div className='main-signup'>
            <h2 className='login-text'>Signup</h2>
            <form method='post'>
                <div className='main-form'>
                    {error && <Message type='red' text='Please Fill All Fields' />}
                    <div className='main-name'>
                        <input type="text" value={firstname} name="text" className="input" onChange={(event) => { setFirstname(event.target.value) }} placeholder="First Name" />
                        <input type="text" value={lastname} name="text" className="input" onChange={(event) => { setLastname(event.target.value) }} placeholder="Last Name" />
                    </div>
                    <div className='main-name'>
                        <input type="number" value={phone} name="text" className="input" onChange={(event) => { setPhone(event.target.value) }} placeholder="Phone" />
                        <input type="email" value={email} name="text" className="input" onChange={(event) => { setEmail(event.target.value) }} placeholder="Email" />
                    </div>
                    <div className='main-name'>
                        <input type="text" value={username} name="text" className="input" onChange={handleUsername} placeholder="Username" />
                        <input type="password" value={password} name="text" className="input" onChange={handlePassword} placeholder="Password" />
                    </div>
                    <Button text='Submit' click={handleSubmit} />
                    <h5>Already have an account??</h5>
                    <a href="/login" className='login-link'>Login</a>
                </div>
            </form>
        </div>
    )
}

export default Signup