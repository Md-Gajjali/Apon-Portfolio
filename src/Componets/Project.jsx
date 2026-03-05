import React from 'react'
import Container from './Container'
import Heading from './Heading'
import pacific from '../assets/pacific.png'
import project from '../assets/e-commerce.png'
import gerold from '../assets/gerold.png'
import Buttons from './Buttons'
import { MdPlayArrow } from "react-icons/md";


const Project = () => {
  return (
    <div id='Project' className='mt-50 '>
      <Container>
        <Heading title='My Project' Header='Recent project ' />
        <div className='  mt-20  flex flex-col  gap-6 lg:flex-row justify-center items-center   '>

          <div className='timeline-view animate-blurred-fade-in animate-range-[entry_5%_contain_70%]
 lg:justify-between lg:w-100 w-80  py-7 px-5 rounded-2xl backdrop-blur-2xl bg-white/10 cursor-pointer '>
            <img src={project} alt="" className='h-50 rounded-sm' />
            <h3 className='text-white text-[20px] py-4 '>E-commerce project</h3>
            <p className='text-gray-400'>This is a responsive E-commerce web application where users can browse products and add items to their shopping cart. The project demonstrates my frontend development skills using modern technologies and component-based architecture.</p>
            <a href="http://e-commerce-lac-six-30.vercel.app" target="_blank" rel="noopener noreferrer">
              <buttons className='w-30 mt-4 bg-DarkBlue text-white flex items-center gap-3 py-4 px-3 rounded-2xl text-[18px]'>Preview <MdPlayArrow className='text-white text-2xl'/></buttons>
            </a>
          </div>

          <div className='timeline-view animate-blurred-fade-in animate-range-[entry_5%_contain_70%]
 lg:justify-between lg:w-100 w-80  py-7 px-5 rounded-2xl backdrop-blur-2xl bg-white/10 cursor-pointer '>
            <img src={gerold} alt="" className='h-50 rounded-sm' />
            <h3 className='text-white text-[20px] py-4 '>Gerold project</h3>
            <p className='text-gray-400'>This is a modern personal portfolio website showcasing projects, skills, and developer experience. It features a clean UI, responsive design, and smooth animations to present my work professionally.</p>
            <a href="http://gerolad.vercel.app" target="_blank" rel="noopener noreferrer">
              <buttons className='w-30 mt-4 bg-DarkBlue text-white flex items-center gap-3 py-4 px-3 rounded-2xl text-[18px]'>Preview <MdPlayArrow className='text-white text-2xl'/></buttons>
            </a>
          </div>

          <div className='timeline-view animate-blurred-fade-in animate-range-[entry_5%_contain_70%]
 lg:justify-between lg:w-100 w-80  py-7 px-5 rounded-2xl backdrop-blur-2xl bg-white/10 cursor-pointer '>
            <img src={pacific} alt="" className='h-50 rounded-sm' />
            <h3 className='text-white text-[20px] py-4 '>E-commerce project</h3>
            <p className='text-gray-400'>This is a modern web application designed to showcase a clean UI and responsive layout for an online platform. The project highlights my frontend development skills by building a structured, user-friendly interface and deploying it on Vercel.</p>
            <a href="https://pacific-crop-silk.vercel.app" target="_blank" rel="noopener noreferrer">
              <buttons className='w-30 mt-4 bg-DarkBlue text-white flex items-center gap-3 py-4 px-3 rounded-2xl text-[18px]'>Preview <MdPlayArrow className='text-white text-2xl'/></buttons>
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