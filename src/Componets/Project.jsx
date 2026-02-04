import React from 'react'
import Container from './Container'
import Heading from './Heading'
import ProjectCard from './ProjectCard'
import carts from '../assets/carts.jpg'
import todo from '../assets/todo.jpeg'
import phone from '../assets/phone.jpg'

const Project = () => {
  return (
    <div className='mt-50'>
      <Container>
        <Heading title='My Project' Header='Recent project '/>
        <div className='mt-25 lg:flex gap-10'>
            <ProjectCard imgSrc={carts} title='E-Commerce Website' btn='Demo'/>
            <ProjectCard imgSrc={todo} title='Todo List' btn='Demo' />
            <ProjectCard imgSrc={phone} title=' placed.ai' btn='Demo'/>
        </div>
      </Container>
    </div>
  )
}

export default Project