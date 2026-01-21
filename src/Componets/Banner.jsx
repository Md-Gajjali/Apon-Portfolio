import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Buttons from './Buttons'

const Banner = () => {
  return (
    <div>
      <Container>
        <div className='text-center leading-12 mt-20'>
            <h4 className='text-white text-[17px]'>Hello, I'm</h4>
            <h1 className='text-5xl text-DarkBlue'>Emam Gajjali</h1>
            <p className='text-[19px] text-primary '>Frontend Developer</p>
            <div>
                <Buttons >Download CV</Buttons>
                <Buttons >About</Buttons>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
