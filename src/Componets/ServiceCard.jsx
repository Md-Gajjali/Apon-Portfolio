import React from 'react'
import Buttons from './Buttons'

const ServiceCard = ({heading}) => {
  return (
    <div className='w-86 px-5 py-4  backdrop-blur-2xl flex justify-center items-center tect-center cursor-pointer bg-white/5   rounded-2xl  '>
        <div className=' text-center '>
            <h3 className='w-80 text-white text-2xl mt-10 '>{heading}</h3>
        </div>
    </div>
  )
}

export default ServiceCard