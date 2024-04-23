import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping, FaSquarePollHorizontal } from "react-icons/fa6";
const Header = () => {
  return (
    <div className=''>
      <h3 className='text-xl uppercase text-gray-400'>menu</h3>
      <nav>
        <div>
            <Link to='/create-food' className='flex items-center text-lg my-3 hover:bg-violet-200 py-2 px-4 rounded hover:text-violet-500 gap-3 capitalize '><span><FaCartShopping /></span> create food</Link>
            <Link to='/' className='flex items-center text-lg my-3 hover:bg-violet-200 py-2 px-4 rounded hover:text-violet-500 gap-3 capitalize '><span><FaSquarePollHorizontal /></span> all foods</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
