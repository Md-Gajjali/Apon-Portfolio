import React from 'react'
import Container from './Container'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-DarkBlue py-20 mt-10'>
      <Container>
        <h2 className='text-center text-2xl font-normal'>Emam Gajjali</h2>
        <div  className='flex justify-center mt-8 '>
          <ul className='flex gap-10 justify-between text-[20px]'>
            <li>Home</li>
            <li>About </li>
            <li>Experience</li>
            <li>service</li>
            <li>skill</li>
          </ul>
        </div>
        <div className='flex justify-center mt-8'>
          <ul className='flex  gap-10 text-2xl'>
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaLinkedin/></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer