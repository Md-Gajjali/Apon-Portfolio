import React from 'react'
import Container from './Container'
import Heading from './Heading'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='mt-40  '>
      <Container>
        <Heading  title='My Service' Header='What I Offer' />
        <div className='lg:justify-between mt-20  flex flex-col  gap-6 lg:flex-row justify-center items-center   '>
            <ServiceCard heading='Clean & Maintainable Code' btn='See More'  />
            <ServiceCard heading='Responsive Web Design' btn='See More' />
            <ServiceCard heading='Time Management' btn='See More' />
        </div>
      </Container>
    </div>
  )
}

export default Services