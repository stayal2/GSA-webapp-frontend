import React, { useState } from 'react'

const Tool = () => {
  const [carbonSource, setCarbonSource] = useState(null);
  const [basePressure, setBasePressure] = useState(null);
  const [catalyst, setCatalyst] = useState(null);
  const [thickness, setThickness] = useState(null);
  const [diameter, setDiameter] = useState(null);
  const [length, setLength] = useState(null);
  const [surfaceArea, setSurfaceArea] = useState(null);
  const [tubeDiameter, setTubeDiameter] = useState(null);
  const [crossSectionalArea, setCrossSectionalArea] = useState(null);
  const [tubeLength, setTubeLength] = useState(null);
  const [lengthOfHeatedRegion, setLengthOfHeatedRegion] = useState(null);

  const handleCarbonSourceChange = e => {
    e.target.value ? setCarbonSource(e.target.value) : setCarbonSource(null);
  }
  const handleBasePressureChange = e => {
    e.target.value ? setBasePressure(e.target.value) : setBasePressure(null);
  }
  const handleCatalystChange = e => {
    e.target.value ? setCatalyst(e.target.value) : setCatalyst(null);
  }
  const handleThicknessChange = e => {
    e.target.value ? setThickness(e.target.value) : setThickness(null);
  }
  const handleDiameterChange = e => {
    e.target.value ? setDiameter(e.target.value) : setDiameter(null);
  }
  const handleLengthChange = e => {
    e.target.value ? setLength(e.target.value) : setLength(null);
  }
  const handleSurfaceAreaChange = e => {
    e.target.value ? setSurfaceArea(e.target.value) : setSurfaceArea(null);
  }
  const handleTubeDiameterChange = e => {
    e.target.value ? setTubeDiameter(e.target.value) : setTubeDiameter(null);
  }
  const handleCrossSectionalAreaChange = e => {
    e.target.value ? setCrossSectionalArea(e.target.value) : setCrossSectionalArea(null);
  }
  const handleTubeLengthChange = e => {
    e.target.value ? setTubeLength(e.target.value) : setTubeLength(null);
  }
  const handleLengthOfHeatedRegionChange = e => {
    e.target.value ? setLengthOfHeatedRegion(e.target.value) : setLengthOfHeatedRegion(null);
  }
  const handleSubmit = e => {
    e.preventDefault();

  }
  return (
    <form className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="carbonsource">Carbon Source</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="carbonsource" type="text" onChange={e => handleCarbonSourceChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="basepressure">Base Pressure</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="basepressure" type="number" step="0.01" onChange={e => handleBasePressureChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="catalyst">Catalyst</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="catalyst" type="text" onChange={e => handleCatalystChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="thickness">Thickness</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="thickness" type="number" step="0.01" onChange={e => handleThicknessChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="diameter">Diameter</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="diameter" type="number" step="0.01" onChange={e => handleDiameterChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="length">Length</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="length" type="number" step="0.01" onChange={e => handleLengthChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="surfacearea">Surface Area</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="surfacearea" type="number" step="0.01" onChange={e => handleSurfaceAreaChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tubediameter">Tube Diameter</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="tubediameter" type="number" step="0.01" onChange={e => handleTubeDiameterChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="crosssectionalarea">Cross Sectional Area</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="crosssectionalarea" type="number" step="0.01" onChange={e => handleCrossSectionalAreaChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tubelength">Tube Length</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="tubelength" type="number" step="0.01" onChange={e => handleTubeLengthChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lohr">Length of Heated Region</label>
        </div>
        <div className="md:w-1/2">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="lohr" type="number" step="0.01" onChange={e => handleLengthOfHeatedRegionChange(e)} />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Tool
