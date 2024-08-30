import React from 'react'
import UserClass from './UserClass'
import { useContext } from 'react'
import UserContext from '../../utils/UserContext'
const About = () => {

  const { loggedInUser, userName, setUserName} = useContext(UserContext);
  return (

    <div className='about flex'>
    
        <div  className="about-container flex justify-center items-center flex-col h-[380px] w-[300px] shadow-xl shadow-orange-300 rounded-t-full bg-red-300 mt-9 ml-9">               
            <img className='border-x-4 border-pink-600 about-image h-[200px] w-[200px] rounded-full object-cover' src="https://i.pinimg.com/736x/7d/89/5d/7d895deb8bdf7e280ca3cfe6387c74a9.jpg" alt="profile pic" />
            
            <div className='about-content m-3 '>
                <h1 className='font-bold'>About Me</h1>
                <UserClass name={"Souvik Das"} description={"Hi there! I am a passionate developer with over two years of experience in web development and mobile app development. My journey as a programmer"}/>
                
            </div>
            
        </div>
        <input 
              type='text'
              className='h-12 rounded-full border-4 p-3 border-green-600 m-10'
              placeholder='enter name'
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value)
              }}
            />

    </div>
    
  )
}

export default About
