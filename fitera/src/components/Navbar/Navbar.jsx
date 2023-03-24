import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'


function Navbar() {
    const [collapse, setCollapse] = useState(false)
    const NavbarItem = ({ text, to }) => {
        return (
            <Link className='navbartext' to={to}>
                <span>{text}</span>
            </Link>
        )
    }
    const SidebarItem = ({ text, to }) => {
        return (
            <Link className='sidebartext' to={to}>
                <span>{text}</span>
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
    const handleNavbar = () => {
        setCollapse(!collapse)
    }
    return (
        <div>
            <div class='main'>
                <div className='navbar'>
                    <NavbarItem text='Home' to='/' />
                    <NavbarItem text='Login' to='/login' />
                    <NavbarItem text='Signup' to='/signup' />
                    <NavbarItem text='Blog' to='/blog' />
                    <NavbarItem text='Contact Us' to='/contactus' />
                    <NavbarItem text='Membership' to='/membership' />
                    <nav class="nav">
                        <h4 class="sm-header" id='header'>Follow us on</h4>
                        <ul class="nav-list">
                            <SocialMedia icon={<i class="bi bi-instagram" id='insta'></i>} />
                            <SocialMedia icon={<i class="bi bi-facebook" id='face'></i>} />
                            <SocialMedia icon={<i class="bi bi-github" id='git'></i>} />
                            <SocialMedia icon={<i class="bi bi-linkedin" id='ld'></i>} />
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='sidebar' onClick={handleNavbar}>
                {
                    collapse ? (
                        <div className='sidebarlist'>
                            <i class="bi bi-list" id='hamburger'></i>
                        </div>
                    ) : (
                        <div className='sidebarlist'>
                            <i class="bi bi-list" id='hamburger'></i>
                            <SidebarItem text='Home' to='/' />
                            <SidebarItem text='Login' to='/login' />
                            <SidebarItem text='Signup' to='/signup' />
                            <SidebarItem text='Blog' to='/blog' />
                            <SidebarItem text='Contact Us' to='/contactus' />
                            <SidebarItem text='Membership' to='/membership' />
                            <nav class="nav">
                                <h4 class="sm-header" id='header'>Follow us on</h4>
                                <ul class="nav-list">
                                    <SocialMedia icon={<i class="bi bi-instagram" id='insta'></i>} />
                                    <SocialMedia icon={<i class="bi bi-facebook" id='face'></i>} />
                                    <SocialMedia icon={<i class="bi bi-github" id='git'></i>} />
                                    <SocialMedia icon={<i class="bi bi-linkedin" id='ld'></i>} />
                                </ul>
                            </nav>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar