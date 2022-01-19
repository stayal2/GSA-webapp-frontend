import axios from 'axios'
import React, {useState, useEffect, useContext, useRef} from 'react'
import {Redirect} from "react-router-dom";
import {host} from '../settings'
import EnvironmentalConditions from '../containers/EnvironmentalConditions'
import Furnaces from '../containers/Furnaces'
import Substrates from '../containers/Substrates'
import Recipes from '../containers/Recipes'
import Authors from "../containers/Authors";
import Properties from "../containers/Properties";
import ExperimentLink from "../components/ExperimentLink";
import {GlobalContext} from "./App";
import ToolSubmit from "../containers/ToolSubmit";
import Sidebar from "../components/Sidebar";
import LoadingPage from "../components/LoadingPage";

const Tool = () => {
  const g = useContext(GlobalContext)
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
          g.toolDispatch({type: 'INIT', payload: data})
        }
      } catch (e) {
        g.flashError('Oops. Something went wrong. Retrying...')
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
      environmentalConditionFilters: g.toolState.environmentalConditionFilters,
      furnaceFilters: g.toolState.furnaceFilters,
      substrateFilters: g.toolState.substrateFilters,
      recipeFilters: g.toolState.recipeFilters,
      propertyFilters: g.toolState.propertyFilters,
      authorFilters: g.toolState.authorFilters,
    }
    try {
      console.log(body)
      const response = await axios.post(host + '/experiments/filter', body)
      const data = response.data
      setExperimentIds(data)
      g.flashSuccess('Experiments with selected filters were fetched. Scroll down to see the results.')
    } catch (e) {
      console.log(e)
      g.flashError('Oops. Something went wrong. Please try again later.')
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
        refs={[queryRef,resultRef,submitRef]}
      />
      <div className='w-full md:flex flex-col md:container md:mx-auto mt-5 border rounded p-5'
           ref={queryRef}>
        <h2 className='text-center text-4xl font-bold mr-2 md:mb-4'>Query</h2>
        <hr/>
        <div className='w-full md:flex flex-row mt-5'>
          <div className='md:w-1/2 px-10'>
            <h2 className='text-center text-4xl font-bold mr-2 md:mb-4'>Filters</h2>
            <div className='w-full border rounded p-5'>
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
                {showEnvironmentalConditions &&
                <EnvironmentalConditions
                  environmentalConditions={g.toolState.environmentalConditions}
                />}
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
                {showFurnaces &&
                <Furnaces
                  furnaces={g.toolState.furnaces}
                />}
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
                {showSubstrates &&
                <Substrates
                  substrates={g.toolState.substrates}
                />}
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
                  recipes={g.toolState.recipes}
                />}
              </section>
              <section className='w-full flex flex-col mb-5'>
                <div className='flex justify-center align-middle mb-4'>
                  <h2 className='text-center text-3xl font-bold mr-2'>Properties</h2>
                  <button
                    className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                    type='button' id='property-btn' onClick={() => setShowProperties(!showProperties)}
                  >
                    +
                  </button>
                </div>
                {showProperties || <hr/>}
                {showProperties &&
                <Properties
                  properties={g.toolState.properties}
                />}
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
                <Authors
                  authors={g.toolState.authors}
                />}
              </section>
            </div>
          </div>

          <div className='md:w-1/2 px-10'>
            <div className='md:w-full flex flex-col'>
              <h2 className='text-center text-4xl font-bold mr-2 md:mb-4'>Current Filters</h2>
              <div className='h-screen-3/4 overflow-y-scroll border p-3'>
                <EnvironmentalConditions
                  environmentalConditions={g.toolState.environmentalConditionFilters}
                  isFilter
                />
                <Furnaces
                  furnaces={g.toolState.furnaceFilters}
                  isFilter
                />
                <Substrates
                  substrates={g.toolState.substrateFilters}
                  isFilter
                />
                <Recipes
                  recipes={g.toolState.recipeFilters}
                  isFilter
                />
                <Properties
                  properties={g.toolState.propertyFilters}
                  isFilter
                />
                <Authors
                  authors={g.toolState.authorFilters}
                  isFilter
                />
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
