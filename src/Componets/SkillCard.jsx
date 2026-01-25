import React from 'react'
import Flex from './Flex'

const SkillCard = ({icons,Skills,subSkil,Heading,icons1,Skills1,subSkil1,subSki2,Skills2,icons2,icons3,Skills3,subSkil3,icons4,Skills4,subSkil4,icons5,Skills5,subSkil5 ,className}) => {
  return (
    <div className='W-100  backdrop-blur-2xl bg-white/5 py-10 px-25 mt-30 rounded-2xl'>
        <h3 className='text-DarkBlue text-center pb-10'>{Heading}</h3>
      <Flex className=' items-center justify-between'>
        <div>
            <Flex className={`${className}items-center gap-4`}>
                <span className='text-DarkBlue text-5xl '>{icons}</span>
                <div>
                    <h3 className='text-white text-[19px]'>{Skills}</h3>
                    <span className='text-primary  text-[16px]'>{subSkil}</span>
                </div>
            </Flex>
            <Flex className='items-center gap-4 mt-10'>
                <span className='text-DarkBlue text-5xl'>{icons1}</span>
                <div>
                    <h3 className='text-white text-[19px]'>{Skills1}</h3>
                    <span className='text-primary  text-[16px] '>{subSkil1}</span>
                </div>
            </Flex>
            <Flex className='items-center gap-4 mt-10'>
                <span className='text-DarkBlue text-5xl'>{icons2}</span>
                <div>
                    <h3 className='text-white text-[19px]'>{Skills2}</h3>
                    <span className='text-primary  text-[16px]'>{subSki2}</span>
                </div>
            </Flex>
        </div>
        <div>
             <Flex className='items-center gap-4 '>
                <span className='text-DarkBlue text-5xl'>{icons3}</span>
                <div>
                    <h3 className='text-white text-[19px]'>{Skills3}</h3>
                    <span className='text-primary  text-[16px]'>{subSkil3}</span>
                </div>
            </Flex>
            <Flex className='items-center gap-4 mt-10'>
                <span className='text-DarkBlue text-5xl'>{icons4}</span>
                <div>
                    <h3 className='text-white text-[19px]'>{Skills4}</h3>
                    <span className='text-primary  text-[16px]'>{subSkil4}</span>
                </div>
            </Flex>
            <Flex className='items-center gap-4 mt-10'>
                <span className='text-DarkBlue text-5xl'>{icons5}</span>
                <div>
                    <h3 className='text-white text-[19px]'>{Skills5}</h3>
                    <span className='text-primary  text-[16px]'>{subSkil5}</span>
                </div>
            </Flex>
        </div>
      </Flex>
    </div>
  )
}

export default SkillCard