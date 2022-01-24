import axios from 'axios'
import React, {useState, useEffect, useContext, useRef} from 'react'
import {Redirect} from "react-router-dom";
import {host} from '../settings'
import Recipes from '../containers/Recipes'
import Authors from "../containers/Authors";
import ExperimentLink from "../components/ExperimentLink";
import {GlobalContext} from "./App";
import ToolSubmit from "../containers/ToolSubmit";
import Sidebar from "../components/Sidebar";
import LoadingPage from "../components/LoadingPage";
import SearchByEnvironmentalCondition from "../components/SearchByEnvironmentalCondition";
import SearchFilters from "../containers/SearchFilters";
import SearchByFurnace from "../components/SearchByFurnace";
import SearchBySubstrate from "../components/SearchBySubstrate";
import SearchByCharacterization from "../components/SearchByCharacterization";
import SearchByAuthor from "../components/SearchByAuthor";

const Tool = () => {
  const {toolState, toolDispatch, flashError, flashSuccess} = useContext(GlobalContext)
  const [experimentIds, setExperimentIds] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [showEnvironmentalConditions, setShowEnvironmentalConditions] = useState(false)
  const [showFurnaces, setShowFurnaces] = useState(false)
  const [showSubstrates, setShowSubstrates] = useState(false)
  const [showRecipes, setShowRecipes] = useState(false)
  const [showAuthors, setShowAuthors] = useState(false)
  const [showProperties, setShowProperties] = useState(false)

  const queryRef = useRef(null)
  const resultRef = useRef(null)
  const submitRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      setLoading(true)
      try {
        const response = await axios.get(host + '/experiments/init')
        const data = response.data
        if (response.status === 200) {
          toolDispatch({type: 'INIT', payload: data})
        }
      } catch (e) {
        flashError('Oops. Something went wrong. Retrying...')
        setError(true)
      }
      setLoading(false)
    }
    init()
  }, [])
  useEffect(() => {
    document.getElementById('environmental-conditions-btn').innerHTML =
      showEnvironmentalConditions ? '&#8211;' : '+'
  }, [showEnvironmentalConditions])
  useEffect(() => {
    document.getElementById('furnace-btn').innerHTML =
      showFurnaces ? '&#8211;' : '+'
  }, [showFurnaces])
  useEffect(() => {
    document.getElementById('substrate-btn').innerHTML =
      showSubstrates ? '&#8211;' : '+'
  }, [showSubstrates])
  useEffect(() => {
    document.getElementById('recipe-btn').innerHTML =
      showRecipes ? '&#8211;' : '+'
  }, [showRecipes])
  useEffect(() => {
    document.getElementById('author-btn').innerHTML =
      showAuthors ? '&#8211;' : '+'
  }, [showAuthors])
  useEffect(() => {
    document.getElementById('property-btn').innerHTML =
      showProperties ? '&#8211;' : '+'
  }, [showProperties])

  const fetchExperimentIds = async (e) => {
    setLoading(true)
    const body = {
      environmentalConditionFilters: toolState.environmentalConditionFilters,
      furnaceFilters: toolState.furnaceFilters,
      substrateFilters: toolState.substrateFilters,
      recipeFilters: toolState.recipeFilters,
      propertyFilters: toolState.propertyFilters,
      authorFilters: toolState.authorFilters,
    }
    try {
      const response = await axios.post(host + '/experiments/filter', body)
      const data = response.data
      setExperimentIds(data)
      flashSuccess('Experiments with selected filters were fetched. Scroll down to see the results.')
    } catch (e) {
      flashError('Oops. Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingPage/>
  }
  if (error) {
    return <Redirect to='/tool'/>
  }
  return (
    <>
      <Sidebar
        texts={['Query', 'Result', 'Submission']}
        refs={[queryRef, resultRef, submitRef]}
      />
      <div className='w-full md:flex flex-col md:container md:mx-auto mt-5 border rounded p-5'
           ref={queryRef}>
        <h2 className='text-center text-4xl font-bold mr-2 md:mb-4'>Query</h2>
        <hr/>
        <div className='w-full md:flex flex-row mt-5 '>
          <div className='md:w-1/2 px-10'>
            <h2 className='text-center text-4xl font-bold mr-2 md:mb-4'>Search By</h2>
            <div className='h-screen-3/4 overflow-y-scroll border p-3'>
              <section className='w-full flex flex-col mb-5'>
                <div className='flex justify-center align-middle mb-4'>
                  <h2 className='text-center text-3xl font-bold mr-2'>Environmental Conditions</h2>
                  <button
                    className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                    type='button' id='environmental-conditions-btn'
                    onClick={() => setShowEnvironmentalConditions(!showEnvironmentalConditions)}
                  >
                    +
                  </button>
                </div>
                {showEnvironmentalConditions || <hr/>}
                {showEnvironmentalConditions && <SearchByEnvironmentalCondition/>}
              </section>
              <section className='w-full flex flex-col mb-5'>
                <div className='flex justify-center align-middle mb-4'>
                  <h2 className='text-center text-3xl font-bold mr-2'>Furnace</h2>
                  <button
                    className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                    type='button' id='furnace-btn' onClick={() => setShowFurnaces(!showFurnaces)}
                  >
                    +
                  </button>
                </div>
                {showFurnaces || <hr/>}
                {showFurnaces && <SearchByFurnace/>}
              </section>
              <section className='w-full flex flex-col mb-5'>
                <div className='flex justify-center align-middle mb-4'>
                  <h2 className='text-center text-3xl font-bold mr-2'>Substrate</h2>
                  <button
                    className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                    type='button' id='substrate-btn' onClick={() => setShowSubstrates(!showSubstrates)}
                  >
                    +
                  </button>
                </div>
                {showSubstrates || <hr/>}
                {showSubstrates && <SearchBySubstrate/>}
              </section>
              <section className='w-full flex flex-col mb-5'>
                <div className='flex justify-center align-middle mb-4'>
                  <h2 className='text-center text-3xl font-bold mr-2'>Recipe</h2>
                  <hr/>
                  <button
                    className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                    type='button' id='recipe-btn' onClick={() => setShowRecipes(!showRecipes)}
                  >
                    +
                  </button>
                </div>
                {showRecipes || <hr/>}
                {showRecipes &&
                  <Recipes
                    recipes={toolState.recipes}
                  />}
              </section>
              <section className='w-full flex flex-col mb-5'>
                <div className='flex justify-center align-middle mb-4'>
                  <h2 className='text-center text-3xl font-bold mr-2'>Characterization</h2>
                  <button
                    className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                    type='button' id='property-btn' onClick={() => setShowProperties(!showProperties)}
                  >
                    +
                  </button>
                </div>
                {showProperties || <hr/>}
                {showProperties && <SearchByCharacterization/>}
              </section>
              <section className='w-full flex flex-col mb-5'>
                <div className='flex justify-center align-middle mb-4'>
                  <h2 className='text-center text-3xl font-bold mr-2'>Authors</h2>
                  <button
                    className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                    type='button' id='author-btn' onClick={() => setShowAuthors(!showAuthors)}
                  >
                    +
                  </button>
                </div>
                {showAuthors || <hr/>}
                {showAuthors &&
                  <SearchByAuthor/>
                }
              </section>
            </div>
          </div>

          <div className='md:w-1/2 px-10'>
            <div className='md:w-full flex flex-col'>
              <h2 className='text-center text-4xl font-bold mr-2 md:mb-4'>Current Search Filters</h2>
              <div className='h-screen-3/4 overflow-y-scroll border p-3'>
                <SearchFilters filters={toolState.filters}/>
              </div>
              <div className='md:w-full md:flex md:flex-row md:justify-evenly'>
                <button
                  className='self-center w-1/3 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5'
                  type='button' onClick={() => {
                  fetchExperimentIds()
                }}
                >
                  Search Experiments
                </button>
                {experimentIds.length > 0 &&
                  <button
                    className='self-center w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5'
                    type='button' onClick={() => {
                    resultRef.current.scrollIntoView({behavior: "smooth"})
                  }}
                  >
                    See Results
                  </button>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={resultRef} className='w-full md:flex flex-col md:container md:mx-auto mt-10 border rounded p-5'>
        <h2 className='text-center text-4xl font-bold mb-4'>Query Result</h2>
        <hr className='mb-5'/>
        {
          experimentIds.length === 0 &&
          <h4 className='text-center text-3xl font-bold'>No experiment was found.</h4>
        }
        <div className='w-full md:flex flex-row flex-wrap'>
          {experimentIds.map((id) =>
            <ExperimentLink
              key={id}
              id={id}
            />
          )}
        </div>
      </div>
      <div className='w-full md:flex flex-col md:container md:mx-auto mt-10 border rounded p-5'
           ref={submitRef}>
        <ToolSubmit/>
      </div>
    </>
  )
}

export default Tool
