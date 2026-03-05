import React from 'react'

const MiniCard = ({ icon, title, Heading }) => {

  return (
    <div className='timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]
 text-center lg:w-52 mt-10 lg:mt-0  w-[60%] m-auto  py-6 px-6   backdrop-blur-2xl bg-white/5 rounded-2xl '>
        <span className='text-DarkBlue text-[16px] flex justify-center'>{icon}</span>
        <h4 className='text-white text-[23px] py-2'>{Heading}</h4>
        <p className='text-primary text-[14px]'>{title}</p>
    </div>
  )
}

export default MiniCard