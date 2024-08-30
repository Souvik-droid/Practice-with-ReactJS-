import React, { useEffect } from 'react'
import { LOGO, cart_icon } from '../utils/constants'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserOnlineStatus from '../utils/UserOnlineStatus'
import UserContext from '../utils/UserContext'
import {useSelector} from "react-redux";

const Header = () => {
    const [login, setLogin] = useState('login');
    const userStatus  = UserOnlineStatus();

    const data = useContext(UserContext);
    console.log(data)

    //subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

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
                    <Link to="/ContactUs">Contact Us</Link> 
                    </li>

                    <li className='flex flex-col-reverse text-xs -ml-1'>
                        <Link to="/cart">
                            
                            <span className=' w-4 h-4 rounded-full bg-yellow-300 ml-4 flex justify-center z-10'> {cartItems.length}</span>
                            <img className=' mix-blend-multiply h-4 w-7 -mt-2' src={cart_icon}/>
                        </Link>
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
                    <li className='text-red-600'>
                        {data.loggedInUser}
                    </li>
                </ul>
            </div>
        </div>       
    )
}

export default Header
