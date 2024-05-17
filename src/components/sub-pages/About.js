import React from 'react'
import UserClass from './UserClass'
const About = () => {
  return (

    <div className='about bg-slate-300'>
    
        <div  className="about-container flex justify-center items-center flex-col h-[380px] w-[300px] shadow-xl shadow-orange-300 rounded-t-full bg-red-300 mt-9 ml-9">               
            <img className='border-x-4 border-pink-600 about-image h-[200px] w-[200px] rounded-full object-cover' src="https://i.pinimg.com/736x/7d/89/5d/7d895deb8bdf7e280ca3cfe6387c74a9.jpg" alt="profile pic" />
            
            <div className='about-content'>
                <h1>About Me</h1>
                <UserClass name={"Souvik Das"} description={"Hi there! I am a passionate developer with over two years of experience in web development and mobile app development. My journey as a programmer"}/>
                
            </div>

        </div>

    </div>
    
  )
}

export default About
