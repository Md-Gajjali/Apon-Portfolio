import React from 'react'

const MiniCard = ({icon,title,Heading}) => {
  return (
    <div className='text-center w-52 py-6 px-5 h-30 backdrop-blur-2xl bg-white/5 rounded-2xl '>
      <span className='text-DarkBlue flex justify-center'>{icon}</span>
      <h4 className='text-white texxt-[19px] py-2'>{Heading}</h4>
      <p className='text-primary text-[13px]'>{title}</p>
    </div>
  )
}

export default MiniCard