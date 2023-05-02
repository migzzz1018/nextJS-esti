"use client"

import { useState } from 'react'
import { 
    FaSearch, 
    FaListUl,
    FaClipboard,
    FaRegBuilding,
    FaUser,
    FaCalendar
 } 
    from 
    "react-icons/fa"

export const Navbar = () => {
    const [open,setOpen] = useState<boolean>(true)

  return (
    <section className='w-80px flex flex-col items-center h-[calc(100vh_-_8px)] mt-1 ml-2 back rounded-xl bg-white text-black'>
        <div className='logo'> E</div>
        <div className='w-8 h-8'></div>
        <div className='components hover:componenthover'> <FaSearch size="20px"/></div>
        <div className='w-12 h-12'></div>
        <div className='components'> <FaListUl size="20px"/></div>
        <div className='components'> <FaClipboard size="20px"/></div>
        <div className='components'> <FaRegBuilding size="20px"/></div>
        <div className='components'> <FaUser size="20px"/></div>
        <div className='components'> <FaCalendar size="20px"/></div>
        <div className='w-12 h-12'></div>
        <Divider />

    </section>
  )
}
