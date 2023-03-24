import React from 'react'
import './Heading.css'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home/Home'
function Heading() {
    return (
        <div className='mainheading'>
            <Link className='text' style={{marginTop: '20px'}} to='/'>
                Fitera - The Only Motivation you Need
            </Link>
        </div>
    )
}

export default Heading