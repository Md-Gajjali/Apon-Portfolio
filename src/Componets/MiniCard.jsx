import React from 'react'

const MiniCard = ({icon,title,Heading}) => {
  
  return (
    <div className='text-center lg:w-52 mt-10 lg:mt-0  w-full py-6 px-5 h-30 backdrop-blur-2xl bg-white/5 rounded-2xl '>
      <span className='text-DarkBlue text-[16px] flex justify-center'>{icon}</span>
      <h4 className='text-white text-[23px] py-2'>{Heading}</h4>
      <p className='text-primary text-[14px]'>{title}</p>
    </div>
  )
}

export default MiniCard