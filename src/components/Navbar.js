import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalContext} from "../pages/App";

const Navbar = () => {
  const {signedIn, setSignedIn} = useContext(GlobalContext)

  const signOut = () => {
    setSignedIn(false)
    window.localStorage.removeItem('token')
  }
  const signInUp =
    <>
      <Link to='/signin'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Sign In
      </Link>
      <Link to='/signup'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Sign Up
      </Link>
    </>
  const profileSignOut =
    <>
      <Link to='/profile'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Profile
      </Link>
      <button
        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        onClick={signOut}
      >
        Sign Out
      </button>
    </>
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <Link to='/'
                className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            GR-RESQ
          </Link>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link to='#' className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                      aria-current='page'>
                  highlighted
                </Link>
                <Link to='/tool'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Tool
                </Link>
              </div>
            </div>
          </div>
          <div>
            {signedIn && profileSignOut}
            {signedIn || signInUp}
          </div>
        </div>
      </div>

      <div className='sm:hidden' id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link to='#' className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                aria-current='page'>
            highlighted
          </Link>
          <Link to='/tool'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
            Tool
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
