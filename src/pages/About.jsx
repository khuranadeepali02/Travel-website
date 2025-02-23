import React from 'react'
import Location from '../components/Location'

const About = () => {
  return (
    <div className='container pt-14 p-1 sm:p-2 lg:p-4 xl:p-5 2xl:p-6'>
      <div className='py-10 pt-20'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold '>
          About Us
        </h1>
        <p> we are passionate about creating unforgettable travel experiences for explorers around the world. Whether you’re looking for adventure, relaxation, or cultural immersion, our expertly curated trips take you to the most breathtaking destinations. With a focus on seamless planning, personalized itineraries, and top-notch customer service, we ensure that every journey is as smooth as it is memorable.
        </p>
        <br/>
        <p>
        Our mission is to inspire and empower travelers by providing reliable travel resources, expert recommendations, and exclusive deals. We believe that travel should be accessible, enriching, and hassle-free, which is why we partner with the best local guides and tour operators. Join us as we help you explore the world, one incredible destination at a time!
        </p>
      </div>
      <Location/>
    </div>
  )
}

export default About