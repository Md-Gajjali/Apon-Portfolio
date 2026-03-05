import React from 'react'
import Container from './Container'
import Heading from './Heading'
import ProjectCard from './ProjectCard'
import pacific from '../assets/pacific.png'
import project from '../assets/e-commerce.png'
import gerold from '../assets/gerold.png'
import Buttons from './Buttons'

const Project = () => {
  return (
    <div id='Project' className='mt-50 '>
      <Container>
        <Heading title='My Project' Header='Recent project ' />
        <div className='lg:justify-between  mt-20  flex flex-col  gap-6 lg:flex-row justify-center items-center   '>
          <div className='lg:w-100 w-80  py-7 px-5 rounded-2xl backdrop-blur-2xl bg-white/5 cursor-pointer '>
            <img src={project} alt="" className='h-50 rounded-sm' />
            <h3 className='text-white text-[20px] py-4 '>E-commerce project</h3>
            <a href="http://e-commerce-lac-six-30.vercel.app" target="_blank" rel="noopener noreferrer">
            <Buttons className='w-30 bg-DarkBlue text-white'>Demo</Buttons>
            </a>
          </div>
          <div className='lg:w-100 w-80  py-7 px-5 rounded-2xl backdrop-blur-2xl bg-white/5 cursor-pointer '>
            <img src={gerold} alt="" className='h-50 rounded-sm' />
            <h3 className='text-white text-[20px] py-4 '>Gerold project</h3>
            <a href="http://gerolad.vercel.app" target="_blank" rel="noopener noreferrer">
            <Buttons className='w-30 bg-DarkBlue text-white'>Demo</Buttons>
            </a>
          </div>
          <div className='lg:w-100 w-80  py-7 px-5 rounded-2xl backdrop-blur-2xl bg-white/5 cursor-pointer '>
            <img src={pacific} alt="" className='h-50 rounded-sm' />
            <h3 className='text-white text-[20px] py-4 '>E-commerce project</h3>
            <a href="https://pacific-crop-silk.vercel.app" target="_blank" rel="noopener noreferrer">
            <Buttons className='w-30 bg-DarkBlue text-white'>Demo</Buttons>
            </a>
          </div>
          {/* <ProjectCard imgSrc={todo} title='Todo List' btn='Demo' />
          <ProjectCard imgSrc={phone} title=' placed.ai' btn='Demo' /> */}
        </div>
      </Container>
    </div>
  )
}

export default Project