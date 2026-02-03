import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import ClientCard from './ClientCard'
import testimonial1 from '../assets/testimonial1.png'
import testimonial2 from '../assets/testimonial2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Client = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
        style={{
          color: '#808080',
          borderRadius: "10px",
          padding: "10px",
          margin: '50px 15px',
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='w-3 h-3 rounded-full bg-primary ' />
    ),
  };
  return (
    <div className='mt-50 mb-29'>
      <Container>
        <Heading
          title='My clients say'
          Header='Testimonials'
        />

        <Slider {...settings} className='flex justify-center '>
          <div>
            <ClientCard
              imgSrc={testimonial1}
              heading='Jhon doe'
              title='A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone' />
          </div>
          <div>
            <ClientCard
              imgSrc={testimonial2}
              heading='Ada Hill'
              title='A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone' />
          </div>
           <div>
            <ClientCard
              imgSrc={testimonial1}
              heading='Jhon doe'
              title='A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone' />
          </div>
          <div>
            <ClientCard
              imgSrc={testimonial2}
              heading='Ada Hill'
              title='A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone' />
          </div>
          
        </Slider>
      </Container>
    </div>
  )
}

export default Client