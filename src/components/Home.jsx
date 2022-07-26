import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

{/* */}
<div className="max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full">
<p className="text-blue-400">Hi, my name is</p>
<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Peter Benassi</h1>
<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">software engineer</h2>
<p className="text-[#8892b0] py-4 max-w-[600px]">I'm a full stack software engineer, writer, and educator with a passion for creating responsive modern websites and applications that make a positive impact. </p>
<div>
  <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400">view work
  <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3'/>
  </span>
  </button>
</div>
</div>

    </div>
  )
}

export default Home