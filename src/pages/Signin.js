import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router'
import { host } from '../settings'
import { GlobalContext } from './App'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const g = useContext(GlobalContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = { email, password }
    const response = await axios.post(host + '/auth/signin', data)

    if (response.status >= 200 && response.status < 300) {
      const data = response.data
      console.log(data)
      g.setSignedIn(true)
    } else {
      g.setSignedIn(false)
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  if (g.signedIn) {
    return <Redirect to='/' />
  }
  return (
    <div className='w-full max-w-xs'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={e => handleSubmit(e)}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email' type='text' placeholder='Email' onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password' type='password' placeholder='********' onChange={(e) => handlePasswordChange(e)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
            Sign In
          </button>
          <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
            Forgot Password?
          </a>
        </div>
      </form>
      <p className='text-center text-gray-500 text-xs'>
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  )
}

export default Signin
