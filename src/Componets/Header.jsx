import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaMoon } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <Container>
        <Flex className='justify-between mt-10 animate-blurred-fade-in '>
            <h3 className='text-2xl text-DarkBlue'>Emam</h3>
            <FaMoon className='text-DarkBlue text-[20px]'/>
        </Flex>
      </Container>
    </div>
  )
}

export default Header
