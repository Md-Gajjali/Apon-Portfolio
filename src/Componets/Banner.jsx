import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Buttons from './Buttons'
import img from '../assets/img.png'
const Banner = () => {
  return (
    <div>
      <Container>
        <div className='text-center leading-12 mt-20 animate-blurred-fade-in duration-[2500ms]'>
            <h4 className='text-white text-[17px]'>Hello, I'm</h4>
            <h1 className='text-5xl text-DarkBlue'>Emam Gajjali</h1>
            <p className='text-[19px] text-primary '>Frontend Developer</p>
            <Flex className='gap-10 justify-center mt-10'>
                <Buttons className='text-DarkBlue  border hover:bg-DarkBlue hover:text-black linear ease-in-out duration-400 '>Download CV</Buttons>
                <Buttons className='bg-DarkBlue text-black  '>About</Buttons>
            </Flex>
        </div>
            <div className='flex justify-center mt-20 mb-20'>
                <img src={img} alt="" className='rounded-t-full h-90 w-90' />
            </div>
      </Container>
    </div>
  )
}

export default Banner
