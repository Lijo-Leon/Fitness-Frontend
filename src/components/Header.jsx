import React from 'react'
import { Link } from 'react-router-dom'

function Header({addDetails , setAddDetails}) {
  return (
    <div className='z-30 w-full h-20 fixed bg-amber-50/90 backdrop-blur-3xl text-black flex items-center justify-center px-5'>
      <a className='h-full flex items-center justify-center' href="/"><h1 className='font1 text-4xl absolute left-5 font-bold tracking-wide'>FitNex</h1></a>
      <ul className='hidden md:flex items-center justify-center gap-20 font-bold uppercase cursor-pointer'>
        <a href="/"><li>Home</li></a>
        <a href="/dashboard"><li onClick={() => setAddDetails(true)}>History</li></a>
        <li onClick={() => setAddDetails(false)}>Dashboard</li>
      </ul>
    </div>
  )
}

export default Header
