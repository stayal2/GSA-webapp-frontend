import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import {Redirect} from 'react-router'
import {host} from '../settings'
import {GlobalContext} from "./App";

const Signup = () => {
  const [countryOptions, setCountryOptions] = useState(['...'])
  const [institutionCountry, setInstitutionCountry] = useState('United States')
  const [institutionOptions, setInstitutionOptions] = useState(['...'])
  const [institution, setInstitution] = useState('')
  const [email, setEmail] = useState('')
  const [email2, setEmail2] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [signedUp, setSignedUp] = useState(false)
  const g = useContext(GlobalContext)

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get(host + '/auth/countries')
        const data = response.data
        setCountryOptions(data)
      } catch (err) {
      }
    }
    getCountries()
  }, [])

  useEffect(() => {
    const getInstitutions = async () => {
      try {
        const response = await axios.get(host + '/auth/institutions/' + institutionCountry)
        const data = response.data
        setInstitutionOptions(data)
        setInstitution(data[0])
      } catch (err) {
      }
    }
    getInstitutions()
  }, [institutionCountry])

  const onClickSignUpBtn = async (e) => {
    e.preventDefault()
    if (email !== email2) {
      g.flashError('Emails do not match.')
      return
    }
    if (password !== password2) {
      g.flashError('Passwords do not match.')
      return
    }
    const data = {
      email,
      password,
      first_name: firstname,
      last_name: lastname,
      institution
    }
    try {
      const response = await axios.post(host + '/auth/signup', data)
      if (response.status === 201) {
        setSignedUp(true)
        g.flashSuccess('The account has been created.')
      }
    } catch (err) {
      if (err.response.status === 409) {
        g.flashError('The email is already taken.')
      }
    }
  }

  if (signedUp) {
    return <Redirect to='/'/>
  }

  return (
    <form className='md:w-1/2 flex flex-col md:items-center mx-auto border rounded my-6 py-6'
          onSubmit={onClickSignUpBtn}>
      <h2 className='text-center text-3xl font-bold mb-6'>Sign Up</h2>
      <div className="md:w-full md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="email">
            Email
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email" type="email" placeholder="Email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="md:w-full md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="email2">
            Confirm email
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email2" type="email" placeholder="Email"
            value={email2}
            onChange={e => {
              setEmail2(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="md:w-full md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="password">
            password
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password" type="password" placeholder="********"
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="md:w-full md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="password2">
            Confirm password
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password2" type="password" placeholder="********"
            value={password2}
            onChange={e => {
              setPassword2(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="md:w-full md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="firstname">
            First Name
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="firstname" type="text" placeholder="First Name"
            value={firstname}
            onChange={e => {
              setFirstname(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="md:w-full md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="lastname">
            Last Name
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="lastname" type="text" placeholder="Last Name"
            value={lastname}
            onChange={e => {
              setLastname(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="md:w-full md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="lastname">
            Country of Institution
          </label>
        </div>
        <div className="md:w-1/3 relative">
          <select
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={institutionCountry}
            onChange={e => {
              setInstitutionCountry(e.target.value)
            }}
          >
            {countryOptions.map((country) => {
              return <option key={country}>{country}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="md:w-full md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="lastname">
            Institution
          </label>
        </div>
        <div className="md:w-1/2 relative">
          <select
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={institution}
            onChange={e => {
              setInstitution(e.target.value)
            }}
          >
            {institutionOptions.map((school, i) => {
              return <option key={i}>{school}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      <button
        className='self-center w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5'
        type='submit'>
        Sign Up
      </button>
    </form>
  )
}

export default Signup
