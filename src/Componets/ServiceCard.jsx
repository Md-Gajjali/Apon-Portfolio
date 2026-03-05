import React from 'react'
import Buttons from './Buttons'

const ServiceCard = ({heading,para}) => {
  return (
    <div className='timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]
      w-86 px-5 py-10  backdrop-blur-2xl   text-center cursor-pointer bg-white/8   rounded-2xl  '>
            <h3 className=' text-white text-2xl   '>{heading}</h3>
            <p className='text-white/50 mt-5'>{para}</p>
    </div>
  )
}

export default ServiceCard