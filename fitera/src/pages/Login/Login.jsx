import React, { useState } from 'react'
import './Login.css'
import Button from '../../components/Button/Button'
import Message from '../../components/Message/Message'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        if (username === '' || password === '') {
            setError(true)
            event.preventDefault()
            return false
        }
        else {
            console.log(username, password)
            navigate('/')
        }
    }
    return (
        <div className='main-login'>
            <h2 className='login-text'>Login</h2>
            <form method='post'>
                <div className='main-form'>
                    {error && <Message type='red' text='Please Fill All Fields'/>}
                    <input type="text" value={username} name="text" className="input" onChange={handleUsername} placeholder="Enter Your Username" />
                    <input type="password" value={password} name="text" className="input" onChange={handlePassword} placeholder="Enter Your Password" />
                    <Button text='Submit' click={handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default Login