import React from 'react'
import Buttons from './Buttons'

const ProjectCard = ({title,imgSrc,btn}) => {
  return (
    <div className='w-100 py-4 px-5 rounded-2xl backdrop-blur-2xl bg-white/5 cursor-pointer '>
      <img src={imgSrc} alt="" className='h-55 rounded-2xl'/>
      <h3 className='text-white text-[20px] py-4 '>{title}</h3>
      <Buttons className='w-30 bg-DarkBlue text-white'>{btn}</Buttons>
    </div>
  )
}

export default ProjectCard