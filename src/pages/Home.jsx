import React,{useState} from 'react'
import TravelVideo from '../assets/travelVideo.mp4'
import Hero from '../components/Hero'
import Places from '../components/Places'
import BannerImg from '../components/BannerImg'
import Image from '../assets/bannerimg.webp'
import Blogs from './Blogs'
import Banner from '../components/Banner'
import Poster from '../assets/poster.webp'
import Testimonial from '../components/Testimonial'
import Popup from '../components/Popup'


const Home = () => {

  const [orderPopup,setOrderPopup]=React.useState(false);

  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  }
  return (
    <>
    <div>
      <div className='relative h-[700px]'>
        <video
        autoPlay
        loop
        muted
        className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
          <source src={TravelVideo} type='video/mp4'/>

        </video>
        <Hero/>
      </div>
      <Places handleOrderPopup={handleOrderPopup}/>
      <BannerImg img={Image}/>
      <Blogs/>
      <Banner/>
      <BannerImg img={Poster}/>
      <Testimonial/>
      <Popup orderPopup={orderPopup}
      setOrderPopup={setOrderPopup}/>
      


    </div>
    </>
  )
}

export default Home