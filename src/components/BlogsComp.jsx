import React from 'react'
import BlogsCard from './BlogsCard'
import Img1 from '../assets/img1.webp'
import Img2 from '../assets/img2.webp'
import Img3 from '../assets/img3.webp'


const BlogsData=[
  {
    id:1,
    image:Img1,
    title:"The 10 best places to visit in India",
    description:"lorem ipsum",
    author:"John Doe",
    date:"April ,2022",
  },
  {
    id:2,
    image:Img2,
    title:"The 10 best places to visit in India",
    description:"lorem ipsum",
    author:"John Doe",
    date:"April ,2022",
  },
  {
    id:3,
    image:Img3,
    title:"The 10 best places to visit in India",
    description:"lorem ipsum",
    author:"John Doe",
    date:"April ,2022",
  },
]

const BlogsComp = () => {
  return (
    <div >
      <div data-aos="fade-up"
      className='container p-4 sm:p-2 lg:p-4 xl:p-5 2xl:p-6'
      >
        <h1 className='my-8 border-l-8 border-primary/50
        py-2 pl-2 text-3xl font-bold'>Our Latest Blogs</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          { BlogsData.map((item,index)=>(
            <BlogsCard key={index} {...item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsComp