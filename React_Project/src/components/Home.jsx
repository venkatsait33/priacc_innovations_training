import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold text-center mt-10'>Welcome to React Projects</h1>

            <p>Project List</p>
            <div className='mt-4'>
                <Link to='/todo' className='text-blue-500 hover:text-blue-700'>Todo App</Link>
            </div>
            <div className='mt-4'>
                <Link to='/calculator' className='text-blue-500 hover:text-blue-700'>Calculator App</Link>
            </div>
        </div>
    )
}

export default Home