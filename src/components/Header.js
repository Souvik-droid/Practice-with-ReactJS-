import React, { useEffect } from 'react'
import { LOGO } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [login, setLogin] = useState('login');
    useEffect(()=>{
        console.log("useEffect rendered")
    } );
    

    return (
        <div className='header'>
            <Link to="/"><img className='logo' src={LOGO} alt='logo' /></Link> 

            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/about">about</Link>
                    </li>

                    <li>
                        list
                    </li>

                    <li>
                    <Link to="ContactUs">Contact Us</Link> 
                    </li>

                    <li>
                        cart
                    </li>
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
