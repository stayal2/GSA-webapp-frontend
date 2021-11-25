import axios from 'axios'
import React, {useState, useReducer, useEffect, useContext} from 'react'

import {host} from '../settings'
import toolReducer, {defaultState} from '../reducers/toolReducer'
import EnvironmentalConditions from '../containers/EnvironmentalConditions'
import Furnaces from '../containers/Furnaces'
import Substrates from '../containers/Substrates'
import Recipes from '../containers/Recipes'
import Authors from "../containers/Authors";
import Properties from "../containers/Properties";
import ExperimentLink from "../components/ExperimentLink";
import {GlobalContext} from "./App";

const catalystOptions = ['Copper', 'Platinum', 'Nickel', 'Palladium', 'Palladium Thin F'].sort()
const prepNameOptions = ['Annealing', 'Growing', 'Cooling']
const carbonSourceOptions = ['CH4']
const shapeOptions = []
const firstnames = []
const lastnames = []
const institutions = []
const defaultPrecision = 0.0001

export const ToolContext = React.createContext()

const Tool = () => {
  const [state, dispatch] = useReducer(toolReducer, defaultState)
  const g = useContext(GlobalContext)
  const [experimentIds, setExperimentIds] = useState([])

  const [loading, setLoading] = useState(false)


  const [showEnvironmentalConditions, setShowEnvironmentalConditions] = useState(false)
  const [showFurnaces, setShowFurnaces] = useState(false)
  const [showSubstrates, setShowSubstrates] = useState(false)
  const [showRecipes, setShowRecipes] = useState(false)
  const [showAuthors, setShowAuthors] = useState(false)
  const [showProperties, setShowProperties] = useState(false)

  const init = async () => {
    setLoading(true)
    const response = await axios.get(host + '/db/tables/all')
    const data = response.data
    if (response.status === 200) {
      dispatch({type: 'INIT', payload: data})
    }
    setLoading(false)
  }

  useEffect(() => {
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
      environmentalConditionFilters: state.environmentalConditionFilters,
      furnaceFilters: state.furnaceFilters,
      substrateFilters: state.substrateFilters,
      recipeFilters: state.recipeFilters,
      propertyFilters: state.propertyFilters,
      authorFilters: state.authorFilters,
    }
    try {
      const response = await axios.post(host + '/experiments/filter', body)
      const data = response.data
      setExperimentIds(data)
    } catch (e) {
      g.flashError('Oops. Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <h1 className='text-5xl'>LOADING...</h1>
  }
  return (
    <ToolContext.Provider value={{dispatch: dispatch}}>
      <div className='w-full md:flex flex-row md:container md:mx-auto mt-10 border rounded p-5'>
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
                environmentalConditions={state.environmentalConditions}
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
                furnaces={state.furnaces}
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
                substrates={state.substrates}
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
                recipes={state.recipes}
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
                properties={state.properties}
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
                authors={state.authors}
              />}
            </section>
          </div>
        </div>

        <div className='w-1/2 px-10'>
          <div className='md:w-full flex flex-col'>
            <h2 className='text-center text-4xl font-bold mr-2 md:mb-4'>Current Filters</h2>
            <div className='h-screen-3/4 overflow-y-scroll border p-3'>
              <EnvironmentalConditions
                environmentalConditions={state.environmentalConditionFilters}
                isFilter
              />
              <Furnaces
                furnaces={state.furnaceFilters}
                isFilter
              />
              <Substrates
                substrates={state.substrateFilters}
                isFilter
              />
              <Recipes
                recipes={state.recipeFilters}
                isFilter
              />
              <Properties
                properties={state.propertyFilters}
                isFilter
              />
              <Authors
                authors={state.authorFilters}
                isFilter
              />
            </div>
            <button
              className='self-center w-1/2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5'
              type='button' onClick={() => {
              fetchExperimentIds()
            }}
            >
              Search Associated Experiments
            </button>
          </div>
        </div>
      </div>
      <div className='w-full md:flex flex-col md:container md:mx-auto mt-10 border rounded p-5'>
        <h2 className='text-center text-4xl font-bold mr-2 mb-4'>Results</h2>
        <hr className='mb-5'/>
        <div className='w-full md:flex flex-row flex-wrap'>
          {experimentIds.map((id) =>
            <ExperimentLink
              key={id}
              id={id}
            />
          )}
        </div>
      </div>
    </ToolContext.Provider>
  )
}

export default Tool
