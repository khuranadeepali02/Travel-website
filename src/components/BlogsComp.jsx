import React from 'react'
import BlogsCard from './BlogsCard'
import Img1 from '../assets/img1.webp'
import Img2 from '../assets/img2.webp'
import Img3 from '../assets/img3.webp'


const BlogsData=[
  {
    id:1,
    image:Img1,
    title:"Exploring the Waters: A Breathtaking Boat Tour Experience",
    description:`There is something magical about being on the water, feeling the gentle waves beneath you, and breathing in the fresh air. Recently, I had the chance to embark on an unforgettable boat tour, and it was an experience I won't soon forget. Our journey began early in the morning as we set sail from the harbor, the sun just starting to rise over the horizon. The golden rays reflected off the water, creating a mesmerizing view. The boat was spacious and comfortable, with plenty of seating and an open deck perfect for soaking in the surroundings. As we cruised along, we spotted an array of marine life—playful dolphins dancing through the waves, seabirds gliding effortlessly above us, and even a distant whale sighting that left everyone in awe. The knowledgeable guide on board shared fascinating insights about the local ecosystem, making the tour not just scenic but also educational.

One of the highlights of the trip was when we anchored near a secluded cove, where we had the chance to swim in crystal-clear waters. Some guests opted for snorkeling, discovering a vibrant underwater world filled with colorful fish and coral reefs. Others simply relaxed on deck, enjoying the tranquility of the ocean.

As the tour came to an end, we were treated to a stunning sunset that painted the sky in shades of pink, orange, and purple. It was the perfect way to wrap up an incredible day on the water.

For anyone looking to escape the hustle and bustle of everyday life, a boat tour is an excellent way to reconnect with nature and unwind. Whether you're an adventure seeker or just looking for a peaceful retreat, this experience is one that should be on your travel list.

Have you ever been on a boat tour? Share your experiences in the comments below!`,
    author:" John Anderson ",
    date:"February 23, 2025",
  },
  {
    id:2,
    image:Img2,
    title:"The Timeless Beauty of the Taj Mahal",
    description:`The Taj Mahal, one of the most breathtaking architectural wonders in the world, stands as a timeless symbol of love and devotion. Nestled in Agra, India, this iconic monument was built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. Visiting the Taj Mahal is not just a sightseeing experience; it is a journey through history, artistry, and emotion.

As I approached the grand entrance, the sight of the white marble masterpiece left me in awe. The intricate carvings, calligraphy, and the perfect symmetry of the structure showcased the incredible craftsmanship of the Mughal era. The reflecting pool leading up to the monument created a stunning visual, amplifying its beauty against the backdrop of the sky.

Walking through the gardens and the inner chambers of the Taj Mahal, I was captivated by the delicate inlay work, featuring precious gemstones embedded in the marble. The central chamber, where the tombs of Shah Jahan and Mumtaz Mahal rest, exuded a serene and reverent atmosphere.

One of the most mesmerizing moments of my visit was witnessing the Taj Mahal at sunrise. The first rays of light bathed the monument in shades of pink and gold, making it look almost ethereal. As the day progressed, the colors shifted, offering a new perspective every hour, making it an ever-changing marvel.

For travelers and history enthusiasts alike, the Taj Mahal is a must-visit destination that leaves a lasting impression. It is a tribute to eternal love and a masterpiece of architecture that continues to inspire visitors from around the world.

Have you ever visited the Taj Mahal? Share your thoughts and experiences in the comments below!`,
    author:"John Anderson",
    date:"February 23, 2025",
  },
  {
    id:3,
    image:Img3,
    title:"Exploring the Wonders of the Underwater World",
    description:`The underwater world is a mesmerizing realm filled with vibrant marine life, breathtaking coral reefs, and mysterious shipwrecks. Whether you're diving into the crystal-clear waters of the Caribbean, exploring the kelp forests off the California coast, or snorkeling in Australia's Great Barrier Reef, the experience is nothing short of magical.

One of the most thrilling aspects of underwater exploration is encountering marine creatures in their natural habitat. From colorful schools of fish and majestic sea turtles to playful dolphins and elusive sharks, the diversity of ocean life is truly astounding. Swimming among these creatures provides an unparalleled connection to nature.

The beauty of the underwater world extends beyond marine life. Coral reefs, often called the rainforests of the sea, are a spectacle of color and biodiversity. These delicate ecosystems support countless species and are essential for maintaining the balance of marine life. However, they are also vulnerable to climate change, pollution, and human activity, making conservation efforts more crucial than ever.

For adventurers seeking mystery and history, underwater shipwrecks offer a unique glimpse into the past. Sunken vessels, some centuries old, are now home to thriving marine ecosystems and serve as reminders of the ocean's powerful force.

Exploring the underwater world is a humbling and awe-inspiring experience. Whether you're a seasoned diver or a first-time snorkeler, there's always something new to discover beneath the surface. The ocean holds countless secrets, waiting to be explored and cherished for generations to come.

Have you ever gone diving or snorkeling? Share your underwater experiences in the comments below!`,
    author:"John Anderson",
    date:"February 23, 2025",
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