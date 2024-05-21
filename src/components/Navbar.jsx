import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-2'>
        <div className="logo">
           <span className='mx-9 font-bold text-xl'>iTask</span> 
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all '>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
