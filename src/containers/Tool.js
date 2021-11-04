import axios from 'axios';
import React, { useState, useReducer } from 'react';

import ExperimentRow from '../components/ExperimentRow';
import FieldInput from '../components/FieldInput';
import { host } from '../settings';
import toolReducer, { defaultState } from '../reducers/toolReducer';
import { buildExperimentQueryStr } from '../utils/query';

const catalystOptions = ['Copper', 'Platinum', 'Nickel', 'Palladium', 'Palladium Thin F'].sort()
const prepNameOptions = ['Annealing', 'Growing', 'Cooling']
const carbonSourceOptions = ['CH4']

const Tool = () => {
  const [state, dispatch] = useReducer(toolReducer, defaultState);
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState([]);

  const onAddExperimentalConditionsFilters = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_EXPERIMENTAL_CONDITIONS_FILTERS' });
  }
  const onPreparationFilters = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_PREPARATION_FILTERS' });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryString = buildExperimentQueryStr(state);

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
    <React.Fragment>
      <div className="w-full flex flex-row md:container md:mx-auto">
        <div className="w-1/2">
          <form className="w-full flex flex-col mt-10" onSubmit={e => onAddExperimentalConditionsFilters(e)}>
            <h2 className="text-center text-3xl font-bold underline mb-4">Experimental Conditions</h2>
            <FieldInput type="select" options={catalystOptions} label="Catalyst" id="catalyst"
              dispatch={dispatch} valueType="CATALYST_CHANGE" />
            <FieldInput type="number" label="Tube Diameter" unit="mm" step={0.001} id="tube-diameter"
              dispatch={dispatch} valueType="TUBE_DIAMETER_CHANGE" ineqType="TUBE_DIAMETER_INEQ_CHANGE" />
            <FieldInput type="number" label="Cross Sectional Area" unit="mm&sup2;" id="cross-sectional-area"
              dispatch={dispatch} valueType="CROSS_SECTIONAL_AREA_CHANGE" ineqType="CROSS_SECTIONAL_AREA_INEQ_CHANGE" />
            <FieldInput type="number" label="Tube Length" unit="mm" id="tube-length"
              dispatch={dispatch} valueType="TUBE_LENGTH_CHANGE" ineqType="TUBE_LENGTH_INEQ_CHANGE" />
            <FieldInput type="number" label="Base Pressure" unit="Torr" id="base-pressure"
              dispatch={dispatch} valueType="BASE_PRESSURE_CHANGE" ineqType="BASE_PRESSURE_INEQ_CHANGE" />
            <FieldInput type="number" label="Thickness" unit="um" id="thickness"
              dispatch={dispatch} valueType="THICKNESS_CHANGE" ineqType="THICKNESS_INEQ_CHANGE" />
            <FieldInput type="number" label="Diameter" unit="um" id="diameter"
              dispatch={dispatch} valueType="DIAMTER_CHANGE" ineqType="DIAMTER_INEQ_CHANGE" />
            <FieldInput type="number" label="Length" unit="um" id="length"
              dispatch={dispatch} valueType="LENGTH_CHANGE" ineqType="LENGTH_INEQ_CHANGE" />
            <button className="self-center w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add filters
            </button>
          </form>

          <form className="w-full flex flex-col mt-10">
            <h2 className="text-center text-3xl font-bold underline mb-4">Preparation</h2>
            <FieldInput type="select" options={[]} label="Name" id="name"
              dispatch={dispatch} valueType="PREP_NAME_CHANGE" />
            <FieldInput type="number" label="Duration" unit="min" step={0.001} id="duration"
              dispatch={dispatch} valueType="DURATION_CHANGE" ineqType="DURATION_INEQ_CHANGE" />
            <FieldInput type="number" label="Furnace Temperature" unit="&deg;C" step={0.001} id="furnace-temperature"
              dispatch={dispatch} valueType="FURNACE_TEMPERATURE_CHANGE" ineqType="FURNACE_TEMPERATURE_INEQ_CHANGE" />
            <FieldInput type="number" label="Furnace Pressure" unit="Torr" step={0.001} id="furnace-pressure"
              dispatch={dispatch} valueType="FURNACE_PRESSURE_CHANGE" ineqType="FURNACE_PRESSURE_INEQ_CHANGE" />
            <FieldInput type="number" label="Sample Location" unit="mm" step={0.001} id="sample-location"
              dispatch={dispatch} valueType="SAMPLE_LOCATION_CHANGE" ineqType="SAMPLE_LOCATION_INEQ_CHANGE" />
            <FieldInput type="number" label="Helium Flow Rate" unit="sccm" step={0.001} id="helium-flow-rate"
              dispatch={dispatch} valueType="HELIUM_FLOW_RATE_CHANGE" ineqType="HELIUM_FLOW_RATE_INEQ_CHANGE" />
            <FieldInput type="number" label="Hydrogen Flow Rate" unit="sccm" step={0.001} id="hydrogen-flow-rate"
              dispatch={dispatch} valueType="HYDROGEN_FLOW_RATE_CHANGE" ineqType="HYDROGEN_FLOW_RATE_INEQ_CHANGE" />
            <FieldInput type="select" label="Carbon Source" options={carbonSourceOptions} id="carbon-source"
              dispatch={dispatch} valueType="CARBON_SOURCE_CHANGE" />
            <FieldInput type="number" label="Carbon Source Flow Rate" unit="sccm" step={0.001} id="carbon-source-flow-rate"
              dispatch={dispatch} valueType="CARBON_SOURCE_FLOW_RATE_CHANGE" ineqType="CARBON_SOURCE_FLOW_RATE_INEQ_CHANGE" />
            <FieldInput type="number" label="Argon Flow Rate" unit="sccm" step={0.001} id="argon-flow-rate"
              dispatch={dispatch} valueType="ARGON_FLOW_RATE_CHANGE" ineqType="ARGON_FLOW_RATE_INEQ_CHANGE" />
            <FieldInput type="number" label="Cooling Rate" unit="&deg;C/min" step={0.001} id="cooling-rate"
              dispatch={dispatch} valueType="COOLING_RATE_CHANGE" ineqType="COOLING_RATE_INEQ_CHANGE" />
            <button className="self-center w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add filters
            </button>
          </form>
        </div>
        <div className="w-1/2">
        </div>
      </div>
      <div>
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
    </React.Fragment>
  )
}

export default Tool;
