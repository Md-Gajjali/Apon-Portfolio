import React from 'react'

const ClientCard = ({heading,title,imgSrc}) => {
  return (
    <div className=' w-90 lg:w-120 backdrop-blur-2xl bg-white/5  py-7 px-8 rounded-2xl'>
      <div>
        <img src={imgSrc} alt="" className='w-20 h-20 rounded-full' />
        <h3 className='text-white text-[18px] py-8'>{heading}</h3>
        <p className='text-primary '>{title}</p>
      </div>
    </div>
  )
}

export default ClientCard