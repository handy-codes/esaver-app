import React from 'react'

const Navdara = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className='flex justify-between p-6 bg-blue-500 text-white text-lg  '>
        <h1 className='font-bold text-2xl'> Bethel Academy</h1>
        <nav className='hidden sm:flex justify-between gap-4 mr-8'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Mission</a>
          <a href="#">Career</a>
          <a href="#">Login</a>
        </nav>
      </div>
    </header>
  )
}

export default Navdara