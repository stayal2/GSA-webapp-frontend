import axios from 'axios'
import React, { useState, useReducer, useEffect } from 'react'

import { host } from '../settings'
import { buildExperimentQueryStr } from '../utils/query'
import toolReducer, { defaultState } from '../reducers/toolReducer'
import ExperimentRow from '../components/ExperimentRow'
import FieldInput from '../components/FieldInput'
import EnvironmentalConditions from '../containers/EnvironmentalConditions'
import Furnaces from '../containers/Furnaces'
import Substrates from '../containers/SubstrateFilters'
import Recipes from '../containers/Recipes'

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

  const [experiments, setExperiments] = useState([])

  const [loading, setLoading] = useState(false)
  const [showAddSuccess, setShowAddSuccess] = useState(false)

  const [showEnvironmentalConditions, setShowEnvironmentalConditions] = useState(false)
  const [showFurnaces, setShowFurnaces] = useState(false)
  const [showSubstrates, setShowSubstrates] = useState(false)
  const [showRecipes, setShowRecipes] = useState(false)

  const [showExperimentalConditions, setShowExperimentalConditions] = useState(true)
  const [showPreparation, setShowPreparation] = useState(false)
  const [showProperties, setShowProperties] = useState(false)
  const [showProvenanceInformation, setShowProvenanceInformation] = useState(false)

  const init = async () => {
    setLoading(true)
    const response = await axios.get(host + '/db/tables/all')
    const data = response.data

    if (response.status === 200) {
      dispatch({ type: 'INIT', payload: data })
    }
    setLoading(false)
  }

  useEffect(() => {
    init()
  }, [])

  const flashSuccess = () => {
    setShowAddSuccess(true)
    setTimeout(() => {
      setShowAddSuccess(false)
    }, 5000)
  }

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

  const onAddExperimentalConditionsFilters = (e) => {
    e.preventDefault()
    for (let i = 0; i < state.filters.length; i++) {
      const filter = state.filters[i]
      if (filter.field === 'Catalyst' && state.catalyst) {
        alert('Catalyst is already included in the filters.')
        return
      } else if (filter.field === 'Tube Diameter' && state.tubeDiameter) {
        alert('Tube Diameter is already included in the filters.')
        return
      } else if (filter.field === 'Cross Sectional Area' && state.crossSectionalArea) {
        alert('Cross Sectional Area is already included in the filters.')
        return
      } else if (filter.field === 'Tube Length' && state.tubeLength) {
        alert('Tube Length is already included in the filters.')
        return
      } else if (filter.field === 'Base Pressure' && state.basePressure) {
        alert('Base Pressure is already included in the filters.')
        return
      } else if (filter.field === 'Thickness' && state.thickness) {
        alert('Thickness is already included in the filters.')
        return
      } else if (filter.field === 'Diameter' && state.diameter) {
        alert('Diameter is already included in the filters.')
        return
      } else if (filter.field === 'Length' && state.length) {
        alert('Length is already included in the filters.')
        return
      } else if (filter.field === 'Sample Surface Area' && state.surfaceArea) {
        alert('Sample Surface Area is already included in the filters.')
        return
      } else if (filter.field === 'Dew Point' && state.dewPoint) {
        alert('Dew Point is already included in the filters.')
        return
      }
    }
    dispatch({ type: 'ADD_EXPERIMENTAL_CONDITIONS_FILTERS' })
    setShowExperimentalConditions(false)
    document.getElementById('experimental-conditions-btn').innerHTML = '+'
    flashSuccess()
  }
  const onShowExperimentalConditionsClick = () => {
    setShowExperimentalConditions(!showExperimentalConditions)
    document.getElementById('experimental-conditions-btn').innerHTML = showExperimentalConditions ? '+' : '&#8211'
  }
  const onAddPreparationFilters = (e) => {
    e.preventDefault()
    for (let i = 0; i < state.filters.length; i++) {
      const filter = state.filters[i]
      if (filter.field === 'Name' && state.prepName) {
        alert('Name is already included in the filters.')
        return
      } else if (filter.field === 'Duration' && state.duration) {
        alert('Duration is already included in the filters.')
        return
      } else if (filter.field === 'Furnace Temperature' && state.furnaceTemperature) {
        alert('Furnace Temperature is already included in the filters.')
        return
      } else if (filter.field === 'Furnace Pressure' && state.furnacePressure) {
        alert('Furnace Pressure is already included in the filters.')
        return
      } else if (filter.field === 'Helium Flow Rate' && state.heliumFlowRate) {
        alert('Helium Flow Rate is already included in the filters.')
        return
      } else if (filter.field === 'Hydrogen Flow Rate' && state.hydrogenFlowRate) {
        alert('Hydrogen Flow Rate is already included in the filters.')
        return
      } else if (filter.field === 'Carbon Source' && state.carbonSource) {
        alert('Carbon Source is already included in the filters.')
        return
      } else if (filter.field === 'Carbon Source Flow Rate' && state.carbonSourceFlowRate) {
        alert('Carbon Source Flow Rate is already included in the filters.')
        return
      } else if (filter.field === 'Argon Flow Rate' && state.argonFlowRate) {
        alert('Carbon Source Flow Rate is already included in the filters.')
        return
      } else if (filter.field === 'Cooling Rate' && state.coolingRate) {
        alert('Carbon Source Flow Rate is already included in the filters.')
        return
      }
    }
    dispatch({ type: 'ADD_PREPARATION_FILTERS' })
    setShowPreparation(false)
    document.getElementById('preparation-btn').innerHTML = '+'
    flashSuccess()
  }
  const onShowPreparationClick = () => {
    setShowPreparation(!showPreparation)
    document.getElementById('preparation-btn').innerHTML = showPreparation ? '+' : '&#8211'
  }
  const onAddPropertiesFilters = (e) => {
    e.preventDefault()
    for (let i = 0; i < state.filters.length; i++) {
      const filter = state.filters[i]
      if (filter.field === 'Growth Coverage' && state.growthCoverage) {
        alert('Growth Coverage is already included in the filters.')
        return
      } else if (filter.field === 'Average Thickness of Growth' && state.averageThicknessOfGrowth) {
        alert('Average Thickness of Growth is already included in the filters.')
        return
      } else if (filter.field === 'Std. Dev. of Growth' && state.stdDevOfGrowth) {
        alert('Std. Dev. of Growth is already included in the filters.')
        return
      } else if (filter.field === 'Number of Layers' && state.numberOfLayers) {
        alert('Number of Layers is already included in the filters.')
        return
      } else if (filter.field === 'Domain Size' && state.domainSize) {
        alert('Domain Size is already included in the filters.')
        return
      }
    }
    dispatch({ type: 'ADD_PROPERTIES_FILTERS' })
    setShowProperties(false)
    document.getElementById('properties-btn').innerHTML = '+'
    flashSuccess()
  }
  const onShowPropertiesClick = () => {
    setShowProperties(!showProperties)
    document.getElementById('properties-btn').innerHTML = showProperties ? '+' : '&#8211'
  }
  const onAddProvenanceInformationFilters = (e) => {
    e.preventDefault()
    for (let i = 0; i < state.filters.length; i++) {
      const filter = state.filters[i]
      if (filter.field === 'Last Name' && state.lastname) {
        alert('Last Name is already included in the filters.')
        return
      } else if (filter.field === 'First Name' && state.firstname) {
        alert('First Name is already included in the filters.')
        return
      } else if (filter.field === 'Institution' && state.institution) {
        alert('Institution is already included in the filters.')
        return
      }
    }
    dispatch({ type: 'ADD_PROVENANCE_INFORMATION_FILTERS' })
    setShowProvenanceInformation(false)
    document.getElementById('provenance-information-btn').innerHTML = '+'
    flashSuccess()
  }
  const onShowProvenanceInformationClick = () => {
    setShowProvenanceInformation(!showProvenanceInformation)
    document.getElementById('provenance-information-btn').innerHTML = showProvenanceInformation ? '+' : '&#8211'
  }
  const fetchData = async (e) => {
    const queryString = buildExperimentQueryStr(state.filters)
    console.log(queryString)

    setLoading(true)
    const response = await axios.get(host + '/experiments/data?' + queryString)
    const data = response.data
    setExperiments(data)
    setLoading(false)
  }

  if (loading) {
    return <h1>LOADING...</h1>
  }
  return (
    <ToolContext.Provider value={{ dispatch: dispatch }}>
      <div className='w-full md:flex flex-row md:container md:mx-auto mt-10'>
        <div className='md:w-1/2 px-10'>
          {showAddSuccess &&
            <div className='w-full bg-green-400 rounded text-center text-green-100 font-bold text-2xl py-2 mb-4'>
              Filters have been added.
            </div>}

          <section className='w-full flex flex-col mb-5'>
            <div className='flex justify-center align-middle mb-4'>
              <h2 className='text-center text-3xl font-bold mr-2'>Environmental Conditions</h2>
              <button
                className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                type='button' id='environmental-conditions-btn' onClick={() => setShowEnvironmentalConditions(!showEnvironmentalConditions)}
              >
                &#8211;
              </button>
            </div>
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
            {showSubstrates &&
              <Substrates
                substrates={state.substrates}
              />}
          </section>

          <section className='w-full flex flex-col mb-5'>
            <div className='flex justify-center align-middle mb-4'>
              <h2 className='text-center text-3xl font-bold mr-2'>Recipe</h2>
              <button
                className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                type='button' id='recipe-btn' onClick={() => setShowRecipes(!showRecipes)}
              >
                +
              </button>
            </div>
            {showRecipes &&
              <Recipes
                recipes={state.recipes}
              />}
          </section>

          *** Below here is from V1 (to be disabled) ***
          <form className='w-full flex flex-col ' onSubmit={e => onAddExperimentalConditionsFilters(e)}>
            <div className='flex justify-center align-middle mb-4'>
              <h2 className='text-center text-3xl font-bold mr-2'>Experimental Conditions</h2>
              <button
                className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                type='button' id='experimental-conditions-btn' onClick={onShowExperimentalConditionsClick}
              >
                &#8211;
              </button>
            </div>
            {showExperimentalConditions &&
              <>
                <FieldInput
                  type='select' options={catalystOptions} label='Catalyst' id='catalyst'
                  valueType='CATALYST_CHANGE'
                />
                <FieldInput
                  type='number' label='Tube Diameter' unit='mm' step={defaultPrecision} id='tube-diameter'
                  valueType='TUBE_DIAMETER_CHANGE' ineqType='TUBE_DIAMETER_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Cross Sectional Area' step={defaultPrecision} unit='mm&sup2;' id='cross-sectional-area'
                  valueType='CROSS_SECTIONAL_AREA_CHANGE' ineqType='CROSS_SECTIONAL_AREA_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Tube Length' unit='mm' step={defaultPrecision} id='tube-length'
                  valueType='TUBE_LENGTH_CHANGE' ineqType='TUBE_LENGTH_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Base Pressure' unit='Torr' step={defaultPrecision} id='base-pressure'
                  valueType='BASE_PRESSURE_CHANGE' ineqType='BASE_PRESSURE_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Thickness' unit='um' step={defaultPrecision} id='thickness'
                  valueType='THICKNESS_CHANGE' ineqType='THICKNESS_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Diameter' unit='um' step={defaultPrecision} id='diameter'
                  valueType='DIAMETER_CHANGE' ineqType='DIAMETER_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Length' unit='um' step={defaultPrecision} id='length'
                  valueType='LENGTH_CHANGE' ineqType='LENGTH_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Sample Surface Area' unit='mm&sup2;' step={defaultPrecision} id='sample-surface-area'
                  valueType='SURFACE_AREA_CHANGE' ineqType='SURFACE_AREA_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Dew Point' unit='&deg;C' step={defaultPrecision} id='dew-point'
                  valueType='DEW_POINT_CHANGE' ineqType='DEW_POINT_INEQ_CHANGE'
                />
                <button className='self-center w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                  Add Filters
                </button>
              </>}
          </form>
          <form className='w-full flex flex-col mt-10' onSubmit={e => onAddPreparationFilters(e)}>
            <div className='flex justify-center align-middle mb-4'>
              <h2 className='text-center text-3xl font-bold mr-2'>Preparation</h2>
              <button
                className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                type='button' id='preparation-btn' onClick={onShowPreparationClick}
              >
                +
              </button>
            </div>
            {showPreparation &&
              <>
                <FieldInput
                  type='select' options={prepNameOptions} label='Name' id='name'
                  valueType='PREP_NAME_CHANGE'
                />
                <FieldInput
                  type='number' label='Duration' unit='min' step={defaultPrecision} id='duration'
                  valueType='DURATION_CHANGE' ineqType='DURATION_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Furnace Temperature' unit='&deg;C' step={defaultPrecision} id='furnace-temperature'
                  valueType='FURNACE_TEMPERATURE_CHANGE' ineqType='FURNACE_TEMPERATURE_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Furnace Pressure' unit='Torr' step={defaultPrecision} id='furnace-pressure'
                  valueType='FURNACE_PRESSURE_CHANGE' ineqType='FURNACE_PRESSURE_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Sample Location' unit='mm' step={defaultPrecision} id='sample-location'
                  valueType='SAMPLE_LOCATION_CHANGE' ineqType='SAMPLE_LOCATION_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Helium Flow Rate' unit='sccm' step={defaultPrecision} id='helium-flow-rate'
                  valueType='HELIUM_FLOW_RATE_CHANGE' ineqType='HELIUM_FLOW_RATE_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Hydrogen Flow Rate' unit='sccm' step={defaultPrecision} id='hydrogen-flow-rate'
                  valueType='HYDROGEN_FLOW_RATE_CHANGE' ineqType='HYDROGEN_FLOW_RATE_INEQ_CHANGE'
                />
                <FieldInput
                  type='select' label='Carbon Source' options={carbonSourceOptions} id='carbon-source'
                  valueType='CARBON_SOURCE_CHANGE'
                />
                <FieldInput
                  type='number' label='Carbon Source Flow Rate' unit='sccm' step={defaultPrecision} id='carbon-source-flow-rate'
                  valueType='CARBON_SOURCE_FLOW_RATE_CHANGE' ineqType='CARBON_SOURCE_FLOW_RATE_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Argon Flow Rate' unit='sccm' step={defaultPrecision} id='argon-flow-rate'
                  valueType='ARGON_FLOW_RATE_CHANGE' ineqType='ARGON_FLOW_RATE_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Cooling Rate' unit='&deg;C/min' step={defaultPrecision} id='cooling-rate'
                  valueType='COOLING_RATE_CHANGE' ineqType='COOLING_RATE_INEQ_CHANGE'
                />
                <button className='self-center w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                  Add Filters
                </button>
              </>}
          </form>

          <form className='w-full flex flex-col mt-10' onSubmit={e => onAddPropertiesFilters(e)}>
            <div className='flex justify-center align-middle mb-4'>
              <h2 className='text-center text-3xl font-bold mr-2'>Properties</h2>
              <button
                className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                type='button' id='properties-btn' onClick={onShowPropertiesClick}
              >
                +
              </button>
            </div>
            {showProperties &&
              <>
                <FieldInput
                  type='number' label='Growth Coverage' unit='%' step={defaultPrecision} id='growth-coverage'
                  valueType='GROWTH_COVERAGE_CHAGNE' ineqType='GROWTH_COVERAGE_INEQ_CHANGE'
                />
                <FieldInput
                  type='select' label='Shape' options={shapeOptions} id='shape'
                  valueType='SHAPE_CHANGE'
                />
                <FieldInput
                  type='number' label='Average Thickness of Growth' unit='nm' step={defaultPrecision} id='average-thicknes-of-growth'
                  valueType='AVERAGE_THICKNESS_OF_GROWTH_CHANGE' ineqType='AVERAGE_THICKNESS_OF_GROWTH_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Std. Dev. of Growth' unit='nm' step={defaultPrecision} id='std-dev-of-growth'
                  valueType='STD_DEV_OF_GROWTH_CHANGE' ineqType='STD_DEV_OF_GROWTH_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Number of Layers' unit='' step={1} id='number-of-layers'
                  valueType='NUMBER_OF_LAYERS_CHANGE' ineqType='NUMBER_OF_LAYERS_INEQ_CHANGE'
                />
                <FieldInput
                  type='number' label='Domain Size' unit='um&sup2;' step={defaultPrecision} id='domain-size'
                  valueType='DOMAIN_SIZE_CHANGE' ineqType='DOMAIN_SIZE_INEQ_CHANGE'
                />
                <button className='self-center w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                  Add Filters
                </button>
              </>}
          </form>

          <form className='w-full flex flex-col mt-10' onSubmit={e => onAddProvenanceInformationFilters(e)}>
            <div className='flex justify-center align-middle mb-4'>
              <h2 className='text-center text-3xl font-bold mr-2'>Provenance Information</h2>
              <button
                className='w-9 h-9 self-center text-center bg-gray-400 hover:bg-blue-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                type='button' id='provenance-information-btn' onClick={onShowProvenanceInformationClick}
              >
                +
              </button>
            </div>
            {showProvenanceInformation &&
              <>
                <FieldInput
                  type='select' label='Last Name' options={lastnames} id='lastname'
                  valueType='LASTNAME_CHANGE'
                />
                <FieldInput
                  type='select' label='First Name' options={firstnames} id='firstname'
                  valueType='FIRSTNAME_CHANGE'
                />
                <FieldInput
                  type='select' label='Institution' options={institutions} id='institution'
                  valueType='INSTITUTION_CHANGE'
                />
                <button className='self-center w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                  Add Filters
                </button>
              </>}
          </form>
        </div>
        <div className='w-1/2 px-10'>
          <div className='md:w-full flex flex-col'>
            <h2 className='text-center text-3xl font-bold mr-2 md:mb-4'>Current Filters</h2>
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
              substrates={state.recipeFilters}
              isFilter
            />
            <button
              className='self-center w-1/4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5'
              type='button' onClick={() => { }}
            >
              Fetch Data
            </button>
          </div>
        </div>
      </div>
      <div>
        <table className='table-fixed'>
          <thead>
            <tr>
              <th>Ambient Temperature</th>
              <th>Average Thickness of Growth</th>
              <th>Base Pressure</th>
              <th>Carbon Source</th>
              <th>Catalyst</th>
              <th>Cross Sectional Area</th>
              <th>Date</th>
              <th>Dew Point</th>
              <th>Diameter</th>
              <th>Domain Size</th>
              <th>Growth Coverage</th>
              <th>Length</th>
              <th>Length of Heated Region</th>
              <th>Material</th>
              <th>Number of Layers</th>
              <th>Shape</th>
              <th>Standard Deviation of Growth</th>
              <th>Surface Area</th>
              <th>Thickness</th>
              <th>Tube Diameter</th>
              <th>Tube Length</th>
            </tr>
          </thead>
          <tbody>
            {experiments.map((data, i) => {
              return (
                <ExperimentRow
                  key={i}
                  ambientTemperature={data.amient_temperature}
                  avgThicknessOfGrowth={data.averabe_thickness_of_growth}
                  basePressure={data.base_pressure}
                  carbonSource={data.carbon_source}
                  catalyst={data.catalyst}
                  crossSectionalArea={data.cross_sectional_area}
                  date={data.date}
                  dewPoint={data.dew_point}
                  diameter={data.diameter}
                  domainSize={data.domain_size}
                  growthCoverage={data.growth_coverage}
                  len={data.length}
                  lenHeatedRegion={data.length_of_heated_region}
                  material={data.material}
                  numLayers={data.number_of_layers}
                  shape={data.shape}
                  stddevGrowth={data.standared_deviation_of_growth}
                  surfaceArea={data.surface_area}
                  thichness={data.thickness}
                  tubeDiameter={data.tube_diameter}
                  tubeLen={data.tube_length}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </ToolContext.Provider>
  )
}

export default Tool
