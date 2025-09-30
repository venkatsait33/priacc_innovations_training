import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold text-center mt-10'>Welcome to React Projects</h1>

            <p className='text-center mt-10 text-lg font-semibold'>Project List</p>
            <div className='flex flex-col gap-3 items-center'>
                <div className=''>
                    <Link to='/todo' className='text-blue-500 hover:text-blue-700'>Todo App</Link>
                </div>
                <div className=''>
                    <Link to='/calculator' className='text-blue-500 hover:text-blue-700'>Calculator App</Link>
                </div>

                <div>
                    <Link to='/food' className='text-blue-500 hover:text-blue-700'>Food App</Link>
                </div>
                <div>
                    <Link to='/vendingMachine' className='text-blue-500 hover:text-blue-700'>vending Machine</Link>
                </div>
           </div>
        </div>
    )
}

export default Home