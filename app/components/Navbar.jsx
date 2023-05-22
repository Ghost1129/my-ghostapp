import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 flex items-center justify-between w-full px-12 py-3 text-sm bg-white'>
        <div className='relative w-12 h-12 bg-purple-500 rounded-md '>
            <Image src='/assets/logo.png' fill alt="logo" />
        </div>
        <div className='flex gap-8'>
            <span className='cursor-pointer'>Emotions</span>
            <span className='cursor-pointer'>Manifesto</span>
            <span className='cursor-pointer'>Self-awareness test</span>
            <span className='cursor-pointer'>Work With Us</span>
        </div>
        <button className='px-4 py-3 text-white bg-black rounded-full'>Download app</button>

    </nav>
  )
}

export default Navbar