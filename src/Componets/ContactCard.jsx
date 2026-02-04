import React from 'react'
import Buttons from './Buttons'

const ContactCard = ({icons,iconNAme,contact,btn}) => {
  return (
    <div className='lg:w-120 w-80 backdrop-blur-2xl bg-white/5 py-4 px-5 text-center rounded-2xl mt-10 leading-9'>
      <div>
        <span className='text-white  flex justify-center text-2xl'>{icons}</span>
        <h4 className='text-white text-[18px] mt-3'>{iconNAme}</h4>
        <p className='text-primary text-[20px]'>{contact}</p>
        <Buttons className='w-full  flex justify-center text-[20px] border-none   text-DarkBlue!  '>{btn}</Buttons>
      </div>
    </div>
  )
}

export default ContactCard