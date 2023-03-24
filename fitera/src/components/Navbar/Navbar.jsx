import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const NavbarItem = ({ text, to }) => {
        return (
            <Link className='navbartext' to={to}>
                {text}
            </Link>
        )
    }
    const SocialMedia = ({ icon }) => {
        return (
            <li class="nav-item">
                <a href="#" class="nav-link">{icon}</a>
            </li>
        )
    }
    return (
        <div class='main'>
            <div className='navbar'>
                <NavbarItem text='Home' to='/' />
                <NavbarItem text='Login' to='/login' />
                <NavbarItem text='Signup' to='/signup' />
                <NavbarItem text='Blog' to='/blog' />
                <NavbarItem text='Contact Us' to='/contactus' />
                <NavbarItem text='Membership' to='/membership' />
                <nav class="nav">
                    <h4 class="sm-header">Follow us on</h4>
                    <ul class="nav-list">
                        <SocialMedia icon={<i class="bi bi-instagram" id='insta'></i>} />
                        <SocialMedia icon={<i class="bi bi-facebook" id='face'></i>} />
                        <SocialMedia icon={<i class="bi bi-github" id='git'></i>} />
                        <SocialMedia icon={<i class="bi bi-linkedin" id='ld'></i>} />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar