import React from 'react'
import ComplexNavbar from '../common/Navbar'
import Footer from '../common/Footer'
import Addproduct from '../uploadproduct/Addproduct'

function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-between'>
    <div className='mt-0'>
      <ComplexNavbar />
    </div>
    <div className='flex items-center justify-center'>
      <Addproduct/>
    </div>
    <div className='mb-0'>
      <Footer/>
    </div>
  </div>
  )
}

export default Home
