import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import ContactCard from './ContactCard'
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import Buttons from './Buttons'


const Contact = () => {
  return (
    <div className='mt-50'>
      <Container>
        <Heading 
            title="Get in touch" 
            Header='Contact Me'
        />
        <div className='lg:flex flex flex-col px-3 mt-20 lg:justify-between'>
            <div className=' flex flex-col items-center justify-center'>
                <ContactCard 
                icons={<BiLogoGmail />} 
                iconNAme='gmail'
                contact='hellogajjali@gmail.com'
                btn='Write me'
                />

                <ContactCard 
                icons={<FaSquareWhatsapp />} 
                iconNAme='Whats'
                contact='Account nei'
                btn='Write me'
                />

                <ContactCard 
                icons={<FaSquareTwitter />} 
                iconNAme='Twitter'
                contact='Account nei'
                btn='Write me'
                />


            </div>
            <div className=''>
                <div className='mt-10'>
                    <label htmlFor="" className='text-[20px] text-primary'> Your Name</label>
                    <input type="text" placeholder='Inter Your Name' className='w-full h-17 py-4 px-6 text-primary border-[#252C38]! border-3 mt-3 rounded-2xl' />
                </div>
                 <div className='mt-10'>
                    <label htmlFor="" className='text-[20px] text-primary'> Mail</label>
                    <input type="text" placeholder='Inter Your Mail' className='w-full  h-17 py-4 px-6 text-primary border-[#252C38]! border-3 mt-3 rounded-2xl' />
                </div>
                 <div className='mt-10'>
                    <label htmlFor="" className='text-[20px] text-primary'> Your Message</label>
                    <input type="text" placeholder='Enter Your Message' className='w-full h-40 py-4 px-6 text-primary border-[#252C38]! border-3 mt-3 rounded-2xl' />
                </div>
                <Buttons className='w-50 text-[20px] mt-10 bg-DarkBlue  text-black'>Send Massage</Buttons>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact