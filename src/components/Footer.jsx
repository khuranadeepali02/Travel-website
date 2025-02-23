import React from 'react'
import Logo from '../assets/LOGO-Photoroom.png'
import { FaFacebook, FaInstagram , FaLinkedin ,FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import TravelVideo from '../assets/travelVideo.mp4'
import {Link } from 'react-router-dom'

const FooterLinks=[
  {
    title:"Home",
    link:"/",
  },
  {
    title:"About",
    link:"/about",
  },
  {
    title:"Best Places",
    link:"/best-places",
  },
  {
    title:"Blogs",
    link:"/blogs",
  },
]

const Footer = () => {
  return (
    <div className='py-10 relative overflow-hidden p-7 '>
      <video
      autoPlay
      loop
      muted
      className='absolute right-0 top-0 h-full overflow-hidden
      w-full object-cover z-[-1]'>
        <source src={TravelVideo} type='video/mp4'></source>
      </video>
      <div className='container p-7 sm:p-2 lg:p-4 xl:p-5 2xl:p-6 '>
        <div className='grid  md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl'>
        <div className='py-8 px-4'>
          <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify
          sm:text-left'>
            <img src={Logo} alt='' className='max-h-[60px]'/>

          </h1>
          <p className='text-sm'>
          Stay connected with us and never miss an update on the best travel destinations, tips, and exclusive deals. Follow us on social media and subscribe to our newsletter for the latest travel inspiration.
          </p>
          <br/>
          <div className='flex items-center gap-3 mt-3'>
            <FaLocationArrow/>
            <p>Rajasthan</p>
          </div>
          <div className='flex items-center gap-3 mt-3'>
            <FaMobileAlt/>
            <p>+91 000000000</p>
          </div>
          {/*social handles*/}
           <div className='flex items-center gap-3 mt-6'>
            <a href='#'>
              <FaInstagram className='text-3xl'/>
            </a>
            <a href='#'>
              <FaFacebook className='text-3xl'/>
            </a>
            <a href='#'>
              <FaLinkedin className='text-3xl'/>
            </a>
           </div>
         </div>
         {/*footer links*/}
         <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
          {/*first column links*/}
          <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map(({title,link})=>(
                    <li className='cursor-pointer hover:translate-x-1 duration-300
                    hover:!text-primary space-x-1 text-gray-700'>
                      <Link
                      to={link}
                      onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                        <span></span>
                        <span>{title}</span>
                      </Link>

                    </li>

                  ))
                }
              </ul>

            </div>
          </div>
          {/*second coloumn link*/}
          <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map(({title,link})=>(
                    <li className='cursor-pointer hover:translate-x-1 duration-300
                    hover:!text-primary space-x-1 text-gray-700'>
                      <Link
                      to={link}
                      onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                        <span></span>
                        <span>{title}</span>
                      </Link>

                    </li>

                  ))
                }
              </ul>

            </div>
          </div>
          {/*third column link*/}
          <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map(({title,link})=>(
                    <li className='cursor-pointer hover:translate-x-1 duration-300
                    hover:!text-primary space-x-1 text-gray-700'>
                      <Link
                      to={link}
                      onClick={()=>{
                        window.scrollTo(0,0);
                      }}>
                        <span></span>
                        <span>{title}</span>
                      </Link>

                    </li>

                  ))
                }
              </ul>

            </div>
          </div>


        </div>

        </div>
        {/*footer copyright section*/}
        <div>
          <div className='text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white '>
            @copyright 2025 All rights reserved || Made with love by Deepali khurana
          </div>

        </div>
        
      </div>

    </div>
  )
}

export default Footer