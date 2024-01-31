import React from 'react'
import { LOGO } from '../utils/constants'
import { useState } from 'react'

const Header = () => {
    const buttonName = 'login';
    const [login, setLogin] = useState('login');
    

    return (
        <div className='header'>
            <img className='logo' src={LOGO} alt='logo'></img>

            <div className='nav-items'>
                <ul>
                    <li>about</li>
                    <li>list</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                    <li>
                        <button 
                        className='login'
                        onClick={() => {
                            login === "login" ? setLogin("logout") : setLogin("login");
                        }}>
                            {login}
                        </button>
                    </li>
                </ul>
            </div>
        </div>       
    )
}

export default Header
