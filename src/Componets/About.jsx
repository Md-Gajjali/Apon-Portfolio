import React from 'react'
import Container from './Container'
import Heading from '../Componets/Heading'
import Flex from './Flex'
import MiniCard from './MiniCard'
import Buttons from './Buttons'
import { IoRibbon } from "react-icons/io5";
import { PiSuitcaseBold } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import img from '../assets/img.png'

const About = () => {
  return (
    <div className='mt-40 '>
     <Container>
        <Heading title='My Intro' Header='About ME' />

        <Flex className='gap-20 mt-20 flex-col lg:flex-row '>
          <div className='flex  justify-center items-center '>
            <img src={img} alt="" className='w-80 h-80  rounded-2xl '/>
          </div>
          <div>
            <div className='lg:flex justify-between gap-10 px-3 lg:px-0    '>
                <MiniCard icon={<IoRibbon />}  
                Heading=' Experience' 
                title='8 Months Working' />

                <MiniCard icon={<PiSuitcaseBold />}  
                Heading=' Completed' 
                title='48+ Projects' />

                <MiniCard icon={<BiSupport />}  
                Heading='Support' 
                title='Online 24/7' />
            </div>
            <p className='text-primary lg:w-155  py-9 text-[19px] px-4 lg:0 '>Frontend Developer. I create web pages with UI / UX user interfaces, I have years of experience and many clients are happy with the woek i did.</p>
            <Buttons className='bg-DarkBlue w-50 px-10 mx-auto lg:mx-0  '>Contant Me</Buttons>
          </div>
        </Flex>
     </Container>
    </div>
  )
}

export default About