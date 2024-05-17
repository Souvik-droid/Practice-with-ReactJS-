import React, { useEffect } from 'react'
import { LOGO } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UserOnlineStatus from '../utils/UserOnlineStatus'

const Header = () => {
    const [login, setLogin] = useState('login');
    const userStatus  = UserOnlineStatus();

    useEffect(()=>{
        console.log("useEffect rendered")
    } );
    

    return (
        <div className='header flex justify-between h-30 px-4 w-100 items-center bg-gradient-to-br from-white to-gray-100 shadow-xl z-10'>
            <Link to="/"><img className='h-24 mix-blend-multiply z-1' src={LOGO} alt='logo' /></Link> 

            <div className='nav-items'>
                <ul className='flex justify-around items-center gap-4 px-5 mx-3 text-stone-700 font-bold' >
                    <li>
                        <Link to='/groceries'>Grocery</Link>
                    </li>
                    <li>{userStatus ? "online🟢": "offline🔴"}</li>
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
