import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaMoon } from "react-icons/fa6";
import ShinyText from './ShinyText';

const Header = () => {
  return (
    <div>
      <Container>
        <Flex className='justify-between mt-10 animate-blurred-fade-in px-3 '>
          <h3 className='text-2xl '>
            <ShinyText
            text="✨ Emam Gajjali "
            speed={2}
            delay={0}
            color="#A395E9"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            
          /></h3>
          
          <FaMoon className='text-DarkBlue text-[20px]' />
        </Flex>
      </Container>
    </div>
  )
}

export default Header
