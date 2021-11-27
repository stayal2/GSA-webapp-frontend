import axios from 'axios'
import React, {useContext, useState} from 'react'
import {Redirect} from 'react-router'
import {host} from '../settings'
import {GlobalContext} from "./App";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [institution, setInstitution] = useState('')
  const [signedUp, setSignedUp] = useState(false)
  const g = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
      first_name: firstname,
      last_name: lastname,
      institution
    }
    try {
      const response = axios.post(host + '/auth/signup', data)
      if (response.status === 200) {
        setSignedUp(true)
        g.flashSuccess('The account has been created.')
      }
    } catch (e) {
      g.flashError('Ooops. Something went wrong.')
    }
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value)
  }
  const handleLastnameChange = (e) => {
    setLastname(e.target.value)
  }
  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value)
  }

  if (signedUp) {
    return <Redirect to='/'/>
  }

  return (
    <div className='w-full max-w-xs container mx-auto mt-5'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={(e) => handleSubmit(e)}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email' type='email' placeholder='example@example.com' onChange={(e) => handleEmailChange(e)}
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
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstname'>
            First Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='firstname' type='text' placeholder='First Name' onChange={(e) => handleFirstnameChange(e)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastname'>
            Last Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='lastname' type='text' placeholder='Last Name' onChange={(e) => handleLastnameChange(e)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='institution'>
            Institution
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='institution' type='text' placeholder='Institution' onChange={(e) => handleInstitutionChange(e)}
          />
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'>
            Sign Up
          </button>
        </div>
      </form>

    </div>
  )
}

export default Signup
