import React from 'react'
import Slider from 'react-slick'
import Image1 from '../assets/img1.webp'
import Image2 from '../assets/img2.webp'
import Image3 from '../assets/img3.webp'
import Image4 from '../assets/img4.webp'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const TestimonialData = [
  {
    id:1,
    name:"Emma Johnson",
    text:'An unforgettable journey! Every detail was perfectly planned, making our trip smooth and stress-free.',
    img:Image1,
  },
  {
    id:2,
    name:"Michael Smith ",
    text:"Exploring new destinations with this travel service was a dream come true. Highly recommended!",
    img:Image2,
  },
  {
    id:3,
    name:"Sophia Martinez",
    text:"From breathtaking landscapes to cultural experiences, every moment of our trip was magical!",
    img:Image3,
    
    
  },
  {
    id:4,
    name:"David Brown",
    text:"Seamless booking, incredible destinations, and top-notch service—can't wait for my next adventure!",
    img:Image4,
  },
]

const Testimonial = () => {
  var settings = {
    dots:true,
    arrows:false,
    infinite:true,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive:[
     {
      breakpoint:10000,
      settings:{
        slidesToShow:2,
        slidesToScroll:1,
        infinite:true,

      },
     },
     {
      breakpoint:1024,
      settings:{
        slidesToShow:2,
        slidesToScroll:1,
        initialSlide:2,
      },
     },
     {
      breakpoint:640,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      },
     },

    ],


  };
  return (
    <div className='py-10'>
        <div className='container p-1 sm:p-2 lg:p-4 xl:p-5 2xl:p-6'>
            {/*header section*/}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
              <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                Testimonial
              </p>
              <h1 className='text-3xl font-bold'>Testimonial</h1>
              <p className='text-sm mt-2 text-gray-400'>
                {" "}
                "Our testimonial section showcases real stories from travelers who have explored the world with us. Read firsthand experiences of unforgettable adventures, breathtaking destinations, and seamless travel planning. Let their journeys inspire your next adventure!"
              </p>
            </div>
            {/*testimonial section*/}
            <Slider {... settings}>
              {
                TestimonialData.map(({id,name,text,img})=>{
                  return <div key={id} className='my-6'>
                    <div className='flex flex-col justify-center items-center gap-4 text-center
                    shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative'>
                    <img src={img} alt='' className='rounded-full block mx-auto w-25 h-25'/>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <p className='text-gray-500 text-sm'>{text}</p>
                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0
                    '>
                      ,,
                    </p>

                    </div>
                    

                  </div>
                })
              }

            </Slider>
        </div>
    </div>
  )
}

export default Testimonial