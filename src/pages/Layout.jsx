import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Popup from '../components/Popup'

const Layout = () => {
  const [orderPopup,setOrderPopup]=React.useState(false);

  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  }
  return (
    <>

    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Outlet/>
    <Footer/>
    <Popup orderPopup={orderPopup}
      setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default Layout