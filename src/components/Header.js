import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={LOGO} alt='logo'></img>

            <div className='nav-items'>
                <ul>
                    <li>about</li>
                    <li>list</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>       
    )
}

export default Header
