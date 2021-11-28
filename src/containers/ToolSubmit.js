import React, {useContext, useEffect, useReducer, useState} from "react";
import {GlobalContext} from "../pages/App";
import {defaultPrecision, catalystOptions, carbonSourceOptions} from "../settings";
import submissionReducer, {submissionDefaultState} from "../reducers/submissionReducer";

const ToolSubmit = () => {
  const {userState, toolState} = useContext(GlobalContext)
  const [submissionState, submissionDispatch] = useReducer(submissionReducer, submissionDefaultState)
  const [authorIdToAdd, setAuthorIdToAdd] = useState(1)

  useEffect(() => {
    if (!userState.authorId) {
      return
    }
    let author = toolState.authors.filter((author) => {
      return author.id === userState.authorId
    })
    const payload = {}
    if (author) {
      payload.author = author[0]
    }
    submissionDispatch({type: 'INIT_SUBMISSION', payload})
  }, [])

  const addAuthor = () => {
    for (const author of submissionState.authors) {
      if (author.id === authorIdToAdd) {
        return
      }
    }
    for (const author of toolState.authors) {
      if (author.id === authorIdToAdd) {
        const payload = author
        submissionDispatch({type: 'ADD_AUTHOR', payload})
      }
    }
  }
  const onSubmitExperiment = () => {
    console.log(submissionState)
  }
  const environmentalConditionsForm =
    submissionState.useCustomEnvironmentalConditions
      ?
      <div className='flex flex-col'>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-ambient-temperature">
              Ambient Temperature
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-ambient-temperature" type="number" step={defaultPrecision}
              value={submissionState.ambientTemperature}
              onChange={e => submissionDispatch({
                type: 'AMBIENT_TEMPERATURE_CHANGE',
                payload: parseFloat(e.target.value)
              })}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>&deg;C</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-dew-point">
              Dew Point
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-dew-point" type="number" step={defaultPrecision} value={submissionState.dewPoint}
              onChange={e => submissionDispatch({type: 'DEW_POINT_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>&deg;C</span>
        </div>
      </div>
      :
      <>
        <div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="env-con-submit">
            Environmental Conditions Number
          </label>
        </div>
        <div className="md:w-1/4 relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="env-con-submit"
            onChange={e => submissionDispatch({
              type: 'ENVIRONMENTAL_CONDITIONS_NUMBER_CHANGE', payload: parseInt(e.target.value)
            })}
            value={submissionState.environmentalConditionsNumber}
          >
            {toolState.environmentalConditions.map((envCon) => {
              return <option key={envCon.id}>{envCon.id}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </>

  const furnaceForm =
    submissionState.useCustomFurnace
      ?
      <div className='flex flex-col'>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-tube-diameter">
              Tube Diameter
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-tube-diameter" type="number" step={defaultPrecision} value={submissionState.tubeDiameter}
              onChange={e => submissionDispatch({type: 'TUBE_DIAMETER_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>mm</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-cross-sectional-area">
              Cross Sectional Area
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-cross-sectional-area" type="number" step={defaultPrecision}
              value={submissionState.crossSectionalArea}
              onChange={e => submissionDispatch({
                type: 'CROSS_SECTIONAL_AREA_CHANGE',
                payload: parseFloat(e.target.value)
              })}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>mm&sup2;</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-tube-length">
              Tube Length
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-tube-length" type="number" step={defaultPrecision} value={submissionState.tubeLength}
              onChange={e => submissionDispatch({type: 'TUBE_LENGTH_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>mm</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-lohr">
              Length of Heated Region
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-lohr" type="number" step={defaultPrecision} value={submissionState.lengthOfHeatedRegion}
              onChange={e => submissionDispatch({
                type: 'LENGTH_OF_HEATED_REGION_CHANGE',
                payload: parseFloat(e.target.value)
              })}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>mm</span>
        </div>
      </div>
      :
      <>
        <div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="furnace-submit">
            Furnace Number
          </label>
        </div>
        <div className="md:w-1/4 relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="furnace-submit"
            onChange={e => submissionDispatch({type: 'FURNACE_NUMBER_CHANGE', payload: parseInt(e.target.value)})}
            value={submissionState.furnaceNumber}
          >
            {toolState.furnaces.map((furnace) => {
              return <option key={furnace.id}>{furnace.id}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </>

  const substrateForm =
    submissionState.useCustomSubstrate
      ?
      <div className='flex flex-col'>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-catalyst">
              Catalyst
            </label>
          </div>
          <div className="md:w-1/2">
            <select
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-catalyst"
              value={submissionState.catalyst}
              onChange={e => submissionDispatch({type: 'CATALYST_CHANGE', payload: e.target.value})}
            >
              {catalystOptions.map((catalyst) => {
                return <option key={catalyst}>{catalyst}</option>
              })}
            </select>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-thickness">
              Thickness
            </label>
          </div>
          <div className="md:w-2/6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-thickness" type="number" step={defaultPrecision} value={submissionState.thickness}
              onChange={e => submissionDispatch({type: 'THICKNESS_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/6 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>mm</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-diameter">
              Diameter
            </label>
          </div>
          <div className="md:w-2/6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-diameter" type="number" step={defaultPrecision} value={submissionState.diameter}
              onChange={e => submissionDispatch({type: 'DIAMETER_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/6 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>mm&sup2;</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-length">
              Length
            </label>
          </div>
          <div className="md:w-2/6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-length" type="number" step={defaultPrecision} value={submissionState.length}
              onChange={e => submissionDispatch({type: 'LENGTH_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/6 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>mm</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-surface-area">
              Surface Area
            </label>
          </div>
          <div className="md:w-2/6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-surface-area" type="number" step={defaultPrecision} value={submissionState.surfaceArea}
              onChange={e => submissionDispatch({type: 'SURFACE_AREA_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/6 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>mm</span>
        </div>
      </div>
      :
      <>
        <div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="substrate-submit">
            Substrate Number
          </label>
        </div>
        <div className="md:w-1/4 relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="substrate-submit"
            onChange={e => submissionDispatch({type: 'SUBSTRATE_NUMBER_CHANGE', payload: parseInt(e.target.value)})}
            value={submissionState.substrateNumber}
          >
            {toolState.substrates.map((substrate) => {
              return <option key={substrate.id}>{substrate.id}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </>

  const recipeForm =
    submissionState.useCustomRecipe
      ?
      <div className='flex flex-col'>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-carbon-source">
              Carbon Source
            </label>
          </div>
          <div className="md:w-1/2">
            <select
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-carbon-source"
              onChange={e => submissionDispatch({type: 'CARBON_SOURCE_CHANGE', payload: e.target.value})}
              value={submissionState.carbonSource}
            >
              {carbonSourceOptions.map((carbonSource) => {
                return <option key={carbonSource}>{carbonSource}</option>
              })}
            </select>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-base-pressure">
              Base Pressure
            </label>
          </div>
          <div className="md:w-2/6">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-base-pressure" type="number" step={defaultPrecision} value={submissionState.basePressure}
              onChange={e => submissionDispatch({type: 'BASE_PRESSURE_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/6 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>Torr</span>
        </div>
      </div>
      :
      <>
        <div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="substrate-submit">
            Recipe Number
          </label>
        </div>
        <div className="md:w-1/4 relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="recipe-submit"
            onChange={e => submissionDispatch({type: 'RECIPE_NUMBER_CHANGE', payload: parseInt(e.target.value)})}
            value={submissionState.recipeNumber}
          >
            {toolState.recipes.map((recipe) => {
              return <option key={recipe.id}>{recipe.id}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </>
  const propertiesForm =
    submissionState.useCustomProperties
      ?
      <div className='flex flex-col'>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-avd-thickness-of-growth">
              Average Thickness of Growth
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-avd-thickness-of-growth" type="number" step={defaultPrecision}
              value={submissionState.avgThicknessOfGrowth}
              onChange={e => submissionDispatch({
                type: 'AVG_THICKNESS_OF_GROWTH_CHANGE',
                payload: parseFloat(e.target.value)
              })}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>nm</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-std-dev-of-growth">
              Std. Dev. of Growth
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-std-dev-of-growth" type="number" step={defaultPrecision} value={submissionState.stdDevOfGrowth}
              onChange={e => submissionDispatch({
                type: 'STD_DEV_OF_GROWTH_CHANGE',
                payload: parseFloat(e.target.value)
              })}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>nm</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-number-of-layers">
              Number of Layers
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-number-of-layers" type="number" step={1} value={submissionState.numberOfLayers}
              onChange={e => submissionDispatch({type: 'NUMBER_OF_LAYERS_CHANGE', payload: parseInt(e.target.value)})}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'/>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-growth-coverage">
              Growth Coverage
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-growth-coverage" type="number" step={0.01} value={submissionState.growthCoverage}
              onChange={e => submissionDispatch({type: 'GROWTH_COVERAGE_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>%</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                   htmlFor="form-domain-size">
              Domain Size
            </label>
          </div>
          <div className="md:w-1/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="form-domain-size" type="number" step={defaultPrecision} value={submissionState.domainSize}
              onChange={e => submissionDispatch({type: 'DOMAIN_SIZE_CHANGE', payload: parseFloat(e.target.value)})}
            />
          </div>
          <span className='md:w-1/4 block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-2'>um&sup2;</span>
        </div>
      </div>
      :
      <>
        <div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="properties-submit">
            Properties Number
          </label>
        </div>
        <div className="md:w-1/4 relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="properties-submit"
            onChange={e => submissionDispatch({type: 'PROPERTIES_NUMBER_CHANGE', payload: parseInt(e.target.value)})}
            value={submissionState.propertiesNumber}
          >
            {toolState.properties.map((property) => {
              return <option key={property.id}>{property.id}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </>

  const authorsForm =
    <div className='flex flex-col w-full'>
      {submissionState.authors.map((author, i) => {
        return (
          <div key={i} className='py-2 px-4 mb-2 border rounded'>
            <div className='flex justify-between'>
              <h6 className='font-bold ml-3'>Author #{author.id}</h6>
              <button
                className='w-9 h-9 text-center bg-red-500 hover:bg-red-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
                type='button'
                onClick={() => {
                  submissionDispatch({type: 'DEL_AUTHOR', payload: i})
                }}
              >
                X
              </button>
            </div>
            <hr className='my-1'/>
            <div className='w-full md:flex md:items-center mb-1'>
              <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Name :</span>
              {author.first_name + " " + author.last_name}
            </div>
            <div className='w-full md:flex md:items-center mb-1'>
              <span
                className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Institution :</span>
              {author.institution}
            </div>
          </div>
        )
      })}
      <div className='flex items-center justify-center'>
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="author-submit">
          Author Number
        </label>
        <div className='relative mr-4'>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="author-submit"
            value={authorIdToAdd}
            onChange={e => setAuthorIdToAdd(parseInt(e.target.value))}
          >
            {toolState.authors.map((author) => {
              return <option key={author.id}>{author.id}</option>
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={addAuthor}>
          Add Author
        </button>
      </div>
    </div>
  return (
    <div className='w-full md:flex flex-col md:container md:mx-auto mt-10 border rounded p-5'>
      <h2 className='text-center text-4xl font-bold mb-4'>Submission</h2>
      <hr className='mb-5'/>
      <h4 className='text-center text-3xl font-bold mb-4'>Environmental Conditions</h4>
      <div className="md:flex md:items-center md:justify-center mb-6">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox"
                 onChange={e => submissionDispatch({
                   type: 'SET_CUSTOM_ENVIRONMENTAL_CONDITIONS',
                   payload: e.target.checked
                 })}/>
          <span className="text-sm">
              I will upload new Environmental Conditions
            </span>
        </label>
      </div>
      <div className="md:w-1/2 md:flex md:items-center md:justify-center mb-6 mx-auto">
        {environmentalConditionsForm}
      </div>
      <hr className='mb-5'/>
      <h4 className='text-center text-3xl font-bold mb-4'>Furnace</h4>
      <div className="md:flex md:items-center md:justify-center mb-6">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox"
                 onChange={e => submissionDispatch({type: 'SET_CUSTOM_FURNACE', payload: e.target.checked})}/>
          <span className="text-sm">
              I will upload a new Furnace
            </span>
        </label>
      </div>
      <div className="md:w-1/2 md:flex md:items-center md:justify-center mb-6 mx-auto">
        {furnaceForm}
      </div>
      <hr className='mb-5'/>
      <h4 className='text-center text-3xl font-bold mb-4'>Substrate</h4>
      <div className="md:flex md:items-center md:justify-center mb-6">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox"
                 onChange={e => submissionDispatch({type: 'SET_CUSTOM_SUBSTRATE', payload: e.target.checked})}/>
          <span className="text-sm">
              I will upload a new Substrate
            </span>
        </label>
      </div>
      <div className="md:w-1/2 md:flex md:items-center md:justify-center mb-6 mx-auto">
        {substrateForm}
      </div>
      <hr className='mb-5'/>
      <h4 className='text-center text-3xl font-bold mb-4'>Recipe</h4>
      <div className="md:flex md:items-center md:justify-center mb-6">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox"
                 onChange={e => submissionDispatch({type: 'SET_CUSTOM_RECIPE', payload: e.target.checked})}/>
          <span className="text-sm">
              I will upload a new Recipe
            </span>
        </label>
      </div>
      <div className="md:w-1/2 md:flex md:items-center md:justify-center mb-6 mx-auto">
        {recipeForm}
      </div>
      <hr className='mb-5'/>
      <h4 className='text-center text-3xl font-bold mb-4'>Properties</h4>
      <div className="md:flex md:items-center md:justify-center mb-6">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox"
                 onChange={e => submissionDispatch({type: 'SET_CUSTOM_PROPERTIES', payload: e.target.checked})}/>
          <span className="text-sm">
              I will upload new Properties
            </span>
        </label>
      </div>
      <div className="md:w-1/2 md:flex md:items-center md:justify-center mb-6 mx-auto">
        {propertiesForm}
      </div>
      <hr className='mb-5'/>
      <h4 className='text-center text-3xl font-bold mb-4'>Authors</h4>
      <div className="md:w-1/2 md:flex md:flex-col md:items-center md:justify-center mb-6 mx-auto">
        {authorsForm}
      </div>
      <hr className='mb-5'/>
      <button className="w-1/12 self-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={onSubmitExperiment}>
        Submit
      </button>
    </div>
  )
}

export default ToolSubmit