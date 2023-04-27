import React, { useState } from 'react'
import './Login.css'
import Button from '../../components/Button/Button'
import Message from '../../components/Message/Message'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [error4, setError4] = useState(false)
    const navigate = useNavigate()

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        if (username === '' || password === '') {
            setError1(true)
            setError2(false)
            event.preventDefault()
            return false
        }
        else if(username!=='Aarya' && password!=='password')
        {
            setError2(true)
            setError1(false)
            event.preventDefault()
            return false
        }
        else if(username==='Aarya' && password==='password')
        {
            setError1(false)
            setError2(false)
            alert("Successful Signin!!")
            navigate('/')
        }
    }
    return (
        <div className='main-login'>
            <h2 className='login-text'>Login</h2>
            <form method='post'>
                <div className='main-form'>
                    {error1 && <Message type='red' text='Please input all fields' />}
                    {error2 && <Message type='red' text='Invalid Username or Password' />}
                    <input type="text" value={username} name="text" className="login-input" onChange={handleUsername} placeholder="Enter Your Username" />
                    <input type="password" value={password} name="text" className="login-input" onChange={handlePassword} placeholder="Enter Your Password" />
                    <Button text='Submit' click={handleSubmit} type="submit"/>
                    <h5>Dont have an account??</h5>
                    <a href="/signup" className='signup-link'>Signup</a>
                </div>
            </form>
        </div>
    )
}

export default Login