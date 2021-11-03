import axios from 'axios';
import React, { useState, useReducer } from 'react';

import ExperimentRow from '../components/ExperimentRow';
import { host } from '../settings';
import toolReducer, { defaultState } from '../reducers/toolReducer';

const Tool = () => {
  const [state, dispatch] = useReducer(toolReducer, defaultState);
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let queryStrings = [];
    if (state.carbonSource) {
      queryStrings.push(`rcs=${carbonSource}`);
    }
    if (state.basePressure) {
      queryStrings.push(`rbp=${bpIneq}${basePressure}`);
    }
    if (catalyst) {
      queryStrings.push(`sc=${catalyst}`);
    }
    if (thickness) {
      queryStrings.push(`st=${thIneq}${thickness}`);
    }
    if (diameter) {
      queryStrings.push(`sd=${dmIneq}${diameter}`);
    }
    if (length) {
      queryStrings.push(`sl=${lenIneq}${length}`);
    }
    if (surfaceArea) {
      queryStrings.push(`ssa=${saIneq}${surfaceArea}`);
    }
    if (tubeDiameter) {
      queryStrings.push(`ftd=${tdIneq}${tubeDiameter}`);
    }
    if (crossSectionalArea) {
      queryStrings.push(`fcsa=${csaIneq}${crossSectionalArea}`);
    }
    if (tubeLength) {
      queryStrings.push(`ftl=${tlIneq}${tubeLength}`);
    }
    if (lengthOfHeatedRegion) {
      queryStrings.push(`flhr=${lhrIneq}${lengthOfHeatedRegion}`);
    }

    const queryString = queryStrings.join('&');
    setLoading(true);
    const response = await axios.get(host + '/experiments/data?' + queryString);
    const data = response.data;
    setExperiments(data);
    setLoading(false);
  }
  if (loading) {
    return <p>loading</p>
  }
  return (
    <div className="w-full flex">
      <form className="w-1/3 max-w-sm" onSubmit={e => handleSubmit(e)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="carbonsource">Carbon Source</label>
          </div>
          <div className="md:w-1/2">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="carbonsource" type="text" onChange={e => dispatch({ type: "CARBON_SOURCE_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="basepressure">Base Pressure</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "BASE_PRESSURE_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="basepressure" type="number" step="0.01" onChange={e => dispatch({ type: "BASE_PRESSURE_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="catalyst">Catalyst</label>
          </div>
          <div className="md:w-1/2">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="catalyst" type="text" onChange={e => dispatch({ type: "CATALYST_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="thickness">Thickness</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "THICKNESS_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="thickness" type="number" step="0.01" onChange={e => dispatch({ type: "THICKNESS_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="diameter">Diameter</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "DIAMETER_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="diameter" type="number" step="0.01" onChange={e => dispatch({ type: "DIAMETER_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="length">Length</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "LENGTH_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="length" type="number" step="0.01" onChange={e => dispatch({ type: "LENGTH_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="surfacearea">Surface Area</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "SURFACE_AREA_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="surfacearea" type="number" step="0.01" onChange={e => dispatch({ type: "SURFACE_AREA_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tubediameter">Tube Diameter</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "TUBE_DIAMETER_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="tubediameter" type="number" step="0.01" onChange={e => dispatch({ type: "TUBE_DIAMETER_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="crosssectionalarea">Cross Sectional Area</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "CROSS_SECTIONAL_AREA_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              onChange={e => dispatch({ type: "CROSS_SECTIONAL_AREA_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tubelength">Tube Length</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "TUBE_LENGTH_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="tubelength" type="number" step="0.01" onChange={e => dispatch({ type: "TUBE_LENGTH_CHANGE", payload: e.target.value })} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lohr">Length of Heated Region</label>
          </div>
          <div className="md:w-1/2">
            <div class="inline-block relative md:w-1/2">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => dispatch({ type: "LENGTH_OF_HEATED_REGION_INEQ_CHANGE", payload: e.target.value })}>
                <option value="eq">=</option>
                <option value="ne">&#8800;</option>
                <option value="lt">&#60;</option>
                <option value="le">&#8804;</option>
                <option value="gt">&#62;</option>
                <option value="ge">&#8805;</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
              id="lohr" type="number" step="0.01" onChange={e => dispatch({ type: "LENGTH_OF_HEATED_REGION_CHANGE", payload: e.target.value })} />
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

      <div className="w-2/3">
        <table className="table-fixed">
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
              return <ExperimentRow
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
                tubeDiameter={data.tube_diamter}
                tubeLen={data.tube_length}
              />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tool;
