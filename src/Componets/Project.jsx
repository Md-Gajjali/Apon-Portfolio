import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import ProjectCard from './ProjectCard'
import carts from '../assets/carts.jpg'
import todo from '../assets/todo.jpeg'
import phone from '../assets/phone.jpg'

const Project = () => {
  return (
    <div className='mt-50'>
      <Container>
        <Heading title='My Project' Header='Recent project '/>
        <Flex className='mt-25  gap-10'>
            <ProjectCard imgSrc={carts} title='E-Commerce Website' btn='Demo'/>
            <ProjectCard imgSrc={todo} title='Todo List' btn='Demo' />
            <ProjectCard imgSrc={phone} title=' placed.ai' btn='Demo'/>
        </Flex>
      </Container>
    </div>
  )
}

export default Project