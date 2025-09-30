import React from 'react'

const Navbar = () => {
  return (
      <div className='flex items-center justify-between p-3 bg-blue-600 text-white'>
          <div>
              Food Recipe
          </div>

          <div className='flex justify-between items-center gap-3'>
              <p>Home</p>
              <p>Recipes</p>
              <p>Pure Veg</p>
              <p>Non Veg</p>
          </div>
          
      </div>
  )
}

export default Navbar