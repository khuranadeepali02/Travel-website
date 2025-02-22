import React from 'react'
import Img1 from '../assets/img1.webp'
import Img2 from '../assets/img2.webp'
import Img3 from '../assets/img3.webp'
import Img4 from '../assets/img4.webp'
import Img5 from '../assets/img5.webp'
import Img6 from '../assets/img6.webp'
import PlacesCard from './PlacesCard'


const PlacesData=[
    {
        img:Img1,
        title:"Boat Tour",
        location:"USA",
        description:"lorem ipsum",
        price:100,
        type:"Cultural Relax",

    },
    {
        img:Img2,
        title:"Taj Mahal",
        location:"India",
        description:"lorem ipsum",
        price:6700,
        type:"Cultural Relax",

    },
    {
        img:Img3,
        title:"Underwater",
        location:"US",
        description:"lorem ipsum",
        price:6200,
        type:"Cultural Relax",

    },
    {
        img:Img4,
        title:"Sydeny",
        location:"USA",
        description:"lorem ipsum",
        price:6700,
        type:"Cultural Relax",

    },
    {
        img:Img5,
        title:"Los Angeles",
        location:"United State",
        description:"lorem ipsum",
        price:6700,
        type:"Cultural Relax",

    },
    {
        img:Img6,
        title:"Los Vegas",
        location:"California",
        description:"lorem ipsum",
        price:6200,
        type:"Cultural Relax",

    },
]

const Places = ({handleOrderPopup}) => {
  return (
    <div className='bg-gray-50 py-10 p-7'>
        <div 
        data-aos="fade-up"
        className='container p-1 sm:p-2 lg:p-4 xl:p-5 2xl:p-6 '>
        
        <h1
        className='my-8 border-l-8 border-primary/50 py-2 pl-2
        text-3xl font-bold'>
            Best Places to visit</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    PlacesData.map((item,index)=>(
                        <PlacesCard
                        handleOrderPopup={handleOrderPopup}
                         key={index}
                        {...item}/>
                    ))
                }
            </div>
            </div>
    </div>
  )
}

export default Places