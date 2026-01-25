import React from 'react'

const Heading = ({title,Header}) => {
  return (
    <div className='text-center '>
      <p className='text-[18px] text-primary'>{title}</p>
      <h1 className='text-2xl text-DarkBlue'>{Header}</h1>
    </div>
  )
}

export default Heading