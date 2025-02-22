import React,{useState} from 'react'
import { Link , NavLink } from 'react-router-dom'
import LogoImg from '../assets/LOGO-photoroom.png'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'


const DropdownLinks=[
  {
    name:"Our Services",
    link:"/#services",
  },
  {
    name:"Top Brands",
    link:"/#mobile_brands",
  },
  {
    name:"Location",
    link:"/#location",
  },

]
const Navbar = ({handleOrderPopup}) => {
  const [showMenu,setShowMenu]=useState(false);

  const toogleMenu=()=>{
    setShowMenu(!showMenu);
  };

  
  return (
    <>
    <div className='fixed top-0 w-full bg-white text-black right-0 shadow-md z-[99999] '>
      <div className=" bg-gradient-to-r from-primary to-seconadary text-white ">
      <div className="container p-1 sm:p-2 lg:p-4  py-[2px] sm:block hidden
   ">
       
        <div className="flex justify-between">
          <p>20% off on next booking</p>
          <p>Mobile no. +91 000000000</p>
        </div>

      </div>
      </div>
      <div className='container py-3 sm:py-0 p-1 sm:p-2  '>
        <div className='flex justify-between items-center'>
          {/*logo section*/}
          <div>
            <Link to="/" onClick={()=>
              window.scrollTo(0,0)
            }>
            <img src={LogoImg} alt="" className='h-16'/>
            </Link>

          </div>
          {/* desktop navlinks section*/}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6'>
              <li className='py-4'>
                <NavLink to="/" activeClassName="active"
                onClick={()=>
              window.scrollTo(0,0)}>
                Home
                </NavLink>
              </li>
              <li className='py-4'>
                <NavLink to="/blogs" activeClassName="active"
                 onClick={()=>
              window.scrollTo(0,0)} >
                Blogs
                </NavLink>
              </li>
              <li className='py-4'>
                <NavLink to="/places" activeClassName="active"
                onClick={()=>
              window.scrollTo(0,0)} >
                Best Places
                </NavLink>
              </li>
              <li className='py-4 '>
                <NavLink to="/about" activeClassName="active"
                onClick={()=>
              window.scrollTo(0,0)} >
                About
                </NavLink>
              </li>
              {/* dropdown section*/}
              <li className='py-4 relative group cursor-pointer'>
                <div className='dropdown flex items-center '>
                  <span>Quick Links</span>
                  <span>
                    <FaCaretDown
                    className='transition-all duration-200 group-hover:rotate-180'
                    />

                  </span>
                </div>
                <div className='absolute -left-9 z-[9999] top-[57px] hidden group-hover:block shadow:md 
                text-black w-[150px] bg-white p-2'>
                  <ul>
                    
                    {
                      DropdownLinks.map((data)=>{
                        return(
                          <li key={data.name}>
                          <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                          href={data.Link}>
                            {data.name}

                          </a>
                        </li>
                        );
                        
                      })
                    }

                  </ul>
                </div>

              </li>
            </ul>
          </div>
          {/* book now button*/}
          <div className='flex items-center gap-4'>
             <button 
             onClick={()=>handleOrderPopup()}
             className='bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r
             hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3
             py-1 rounded-full'>
              Book Now</button>
              {/*Mobile hamburgur menu*/}
              <div className='md:hidden block'>
                { showMenu ? (
              <HiMenuAlt1
              onClick={toogleMenu}
              className='cursor-pointer transition-all'
              siz={30}/>
                ):(
                  <HiMenuAlt3
                  onClick={toogleMenu}
                  className='cusror-pointer transition-all'
                  size={30}/>

                )
                  
                }
                
              </div>
          </div>

        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
      
    </div>
    </>
  )
}

export default Navbar