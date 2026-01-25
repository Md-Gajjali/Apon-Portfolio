import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='mt-40  '>
      <Container>
        <Heading  title='My Service' Header='What I Offer' />
        <Flex className='justify-between mt-20'>
            <ServiceCard heading='Clean & Maintainable Code' btn='See More'  />
            <ServiceCard heading='Responsive Web Design' btn='See More' />
            <ServiceCard heading='Time Management' btn='See More' />
        </Flex>
      </Container>
    </div>
  )
}

export default Services