import React from 'react'
import Container from './Container'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Futter = () => {
  return (
    <div className='text-black py-10 px-10 h-105 bg-DarkBlue text-center mt-20'>
      <Container>
        <h1 className='text-2xl text-black '>GAjjali</h1>
        <div className='text-center ml-95 mt-10'>
            <ul className='flex gap-10 text-[20px] '>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
                <li></li>
            </ul>
            <ul className='flex text-3xl mt-10 gap-10 ml-30 w-50 justify-center'>
                <li><FaFacebook /></li>
                <li><FaTwitter /></li>
                <li><FaLinkedin /></li>
            </ul>
        </div>
      </Container>
    </div>
  )
}

export default Futter