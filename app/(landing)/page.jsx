import React from 'react'
import Heading from './_component/Heading'
import Heroes from './_component/Heroes'
import Footer from './_component/Footer'

const LandingPage = () => {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col justify-center md:justify-start items-center flex-1 px-6 pb-10 gap-y-8 text-center'>
        <Heading/>
        <Heroes/>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
