import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-20 bg-black w-full flex justify-between px-5 items-center ' >
        <div><p className='text-white text-5xl font-bold'>Searches</p></div>
        <div>
            <button className='bg-white px-2 text-md'>Delete Flicker cache</button>
        </div>
        
    </div>
  )
}

export default Navbar