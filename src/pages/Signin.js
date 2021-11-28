import React, {useState, useContext} from 'react'
import {Redirect} from 'react-router'
import {GlobalContext} from './App'
import {Link} from "react-router-dom";
import {signInWithCredentials} from "../utils/auth";

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const g = useContext(GlobalContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await signInWithCredentials(email, password)
    if (response) {
      window.localStorage.setItem('token', response.token)
      const payload = {
        email: response.email,
        authorId: response.author_id
      }
      g.userDispatch({type: 'SIGN_IN', payload})
    } else {
      g.userDispatch({type: 'SIGN_OUT'})
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  if (g.userState.signedIn) {
    return <Redirect to='/'/>
  }
  return (
    <div className='w-full max-w-xs container mx-auto mt-5'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={e => handleSubmit(e)}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email' type='text' placeholder='Email' onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password' type='password' placeholder='********' onChange={(e) => handlePasswordChange(e)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'>
            Sign In
          </button>
          <Link to='#' className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signin
