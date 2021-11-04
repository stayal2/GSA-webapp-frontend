export const defaultState = {
  filters: [],
  catalyst: null,
  tubeDiameter: null,
  tubeDiameterIneq: null,
  crossSectionalArea: null,
  crossSectionalAreaIneq: null,
  tubeLength: null,
  tubeLengthIneq: null,
  basePressure: null,
  basePressureIneq: null,
  thickness: null,
  thicknessIneq: null,
  diameter: null,
  diameterIneq: null,
  length: null,
  lengthIneq: null,
  carbonSource: null,
  surfaceArea: null,
  surfaceAreaIneq: null,
  lengthOfHeatedRegion: null,
  lengthOfHeatedRegionIneq: null,
  prepName: null,
  duration: null,
  durationIneq: null,
  furnaceTemperature: null,
  furnaceTemperatureIneq: null,
  furnacePressure: null,
  furnacePressureIneq: null,
  sampleLocation: null,
  sampleLocationIneq: null,
  heliumFlowRate: null,
  heliumFlowRateIneq: null,
  hydrogenFlowRate: null,
  hydrogenFlowRateIneq: null,
  carbonSourceFlowRate: null,
  carbonSourceFlowRateIneq: null,
  argonFlowRate: null,
  argonFlowRateIneq: null,
  coolingRate: null,
  coolingRateIneq: null,
};

const toolReducer = (state, action) => {
  if (action.type === 'ADD_EXPERIMENTAL_CONDITIONS_FILTERS') {
    const newFilters = []
    if (state.catalyst) {
      newFilters.push({
        field: 'Catalyst',
        value: state.catalyst,
        isNumeric: false
      })
    }
    if (state.tubeDiameter) {
      newFilters.push({
        field: 'Tube Diameter',
        value: state.tubeDiameter,
        ineq: state.tubeDiameterIneq,
        unit: 'mm',
        isNumeric: true
      })
    }
    if (state.crossSectionalArea) {
      newFilters.push({
        field: 'Cross Sectional Area',
        value: state.crossSectionalArea,
        ineq: state.crossSectionalAreaIneq,
        unit: 'mm&sup2;',
        isNumeric: true
      })
    }
    if (state.tubeLength) {
      newFilters.push({
        field: 'Tube Length',
        value: state.tubeLength,
        ineq: state.tubeLengthIneq,
        unit: 'mm',
        isNumeric: true
      })
    }
    if (state.basePressure) {
      newFilters.push({
        field: 'Base Pressure',
        value: state.basePressure,
        ineq: state.basePressureIneq,
        unit: 'Torr',
        isNumeric: true
      })
    }
    if (state.thickness) {
      newFilters.push({
        field: 'Thickness',
        value: state.thickness,
        ineq: state.thicknessIneq,
        unit: 'um',
        isNumeric: true
      })
    }
    if (state.diameter) {
      newFilters.push({
        field: 'Diameter',
        value: state.diameter,
        ineq: state.diameterIneq,
        unit: 'um',
        isNumeric: true
      })
    }
    if (state.length) {
      newFilters.push({
        field: 'Length',
        value: state.length,
        ineq: state.lengthIneq,
        unit: 'mm&sup2;',
        isNumeric: true
      })
    }
    return {
      ...state,
      catalyst: null,
      tubeDiameter: null,
      tubeDiameterIneq: null,
      crossSectionalArea: null,
      crossSectionalAreaIneq: null,
      tubeLength: null,
      tubeLengthIneq: null,
      basePressure: null,
      basePressureIneq: null,
      thickness: null,
      thicknessIneq: null,
      diameter: null,
      diameterIneq: null,
      length: null,
      lengthIneq: null,
      filters: [...state.filters, ...newFilters]
    }
  } else if (action.type === 'BASE_PRESSURE_CHANGE') {
    return {
      ...state,
      basePressure: action.payload ? action.payload : null
    }
  } else if (action.type === 'BASE_PRESSURE_INEQ_CHANGE') {
    return {
      ...state,
      basePressureIneq: action.payload
    }
  } else if (action.type === 'CATALYST_CHANGE') {
    return {
      ...state,
      catalyst: action.payload ? action.payload : null
    }
  } else if (action.type === 'THICKNESS_CHANGE') {
    return {
      ...state,
      thickness: action.payload ? action.payload : null
    }
  } else if (action.type === 'THICKNESS_INEQ_CHANGE') {
    return {
      ...state,
      thicknessIneq: action.payload
    }
  } else if (action.type === 'DIAMETER_CHANGE') {
    return {
      ...state,
      diameter: action.payload ? action.payload : null
    }
  } else if (action.type === 'DIAMETER_INEQ_CHANGE') {
    return {
      ...state,
      diameterIneq: action.payload
    }
  } else if (action.type === 'LENGTH_CHANGE') {
    return {
      ...state,
      length: action.payload ? action.payload : null
    }
  } else if (action.type === 'LENGTH_INEQ_CHANGE') {
    return {
      ...state,
      lengthIneq: action.payload
    }
  } else if (action.type === 'SURFACE_AREA_CHANGE') {
    return {
      ...state,
      surfaceArea: action.payload ? action.payload : null
    }
  } else if (action.type === 'SURFACE_AREA_INEQ_CHANGE') {
    return {
      ...state,
      surfaceAreaIneq: action.payload
    }
  } else if (action.type === 'TUBE_DIAMETER_CHANGE') {
    return {
      ...state,
      tubeDiameter: action.payload ? action.payload : null
    }
  } else if (action.type === 'TUBE_DIAMETER_INEQ_CHANGE') {
    return {
      ...state,
      tubeDiameterIneq: action.payload
    }
  } else if (action.type === 'CROSS_SECTIONAL_AREA_CHANGE') {
    return {
      ...state,
      crossSectionalArea: action.payload ? action.payload : null
    }
  } else if (action.type === 'CROSS_SECTIONAL_AREA_INEQ_CHANGE') {
    return {
      ...state,
      crossSectionalAreaIneq: action.payload
    }
  } else if (action.type === 'TUBE_LENGTH_CHANGE') {
    return {
      ...state,
      tubeLength: action.payload ? action.payload : null
    }
  } else if (action.type === 'TUBE_LENGTH_INEQ_CHANGE') {
    return {
      ...state,
      tubeLengthIneq: action.payload
    }
  } else if (action.type === 'LENGTH_OF_HEATED_REGION_CHANGE') {
    return {
      ...state,
      lengthOfHeatedRegion: action.payload ? action.payload : null
    }
  } else if (action.type === 'LENGTH_OF_HEATED_REGION_INEQ_CHANGE') {
    return {
      ...state,
      lengthOfHeatedRegionIneq: action.payload
    }
  } else if (action.type === 'PREP_NAME_CHANGE') {
    return {
      ...state,
      prepName: action.payload ? action.payload : null
    }
  } else if (action.type === 'DURATION_CHANGE') {
    return {
      ...state,
      duration: action.payload ? action.payload : null
    }
  } else if (action.type === 'DURATION_INEQ_CHANGE') {
    return {
      ...state,
      durationIneq: action.payload
    }
  } else if (action.type === 'FURNACE_TEMPERATURE_CHANGE') {
    return {
      ...state,
      furnaceTemperature: action.payload ? action.payload : null
    }
  } else if (action.type === 'FURNACE_TEMPERATURE_INEQ_CHANGE') {
    return {
      ...state,
      furnaceTemperatureIneq: action.payload
    }
  } else if (action.type === 'FURNACE_PRESSURE_CHANGE') {
    return {
      ...state,
      furnacePressure: action.payload ? action.payload : null
    }
  } else if (action.type === 'FURNACE_PRESSURE_INEQ_CHANGE') {
    return {
      ...state,
      furnacePressureIneq: action.payload
    }
  } else if (action.type === 'SAMPLE_LOCATION_CHANGE') {
    return {
      ...state,
      sampleLocation: action.payload ? action.payload : null
    }
  } else if (action.type === 'SAMPLE_LOCATION_INEQ_CHANGE') {
    return {
      ...state,
      sampleLocationIneq: action.payload
    }
  } else if (action.type === 'HELIUM_FLOW_RATE_CHANGE') {
    return {
      ...state,
      heliumFlowRate: action.payload ? action.payload : null
    }
  } else if (action.type === 'HELIUM_FLOW_RATE_INEQ_CHANGE') {
    return {
      ...state,
      heliumFlowRateIneq: action.payload
    }
  } else if (action.type === 'HYDROGEN_FLOW_RATE_CHANGE') {
    return {
      ...state,
      hydrogenFlowRate: action.payload ? action.payload : null
    }
  } else if (action.type === 'HYDROGEN_FLOW_RATE_INEQ_CHANGE') {
    return {
      ...state,
      hydrogenFlowRateIneq: action.payload
    }
  } else if (action.type === 'CARBON_SOURCE_CHANGE') {
    return {
      ...state,
      carbonSource: action.payload ? action.payload : null
    }
  } else if (action.type === 'CARBON_SOURCE_FLOW_RATE_CHANGE') {
    return {
      ...state,
      carbonSourceFlowRate: action.payload ? action.payload : null
    }
  } else if (action.type === 'CARBON_SOURCE_FLOW_RATE_INEQ_CHANGE') {
    return {
      ...state,
      carbonSourceFlowRateIneq: action.payload
    }
  } else if (action.type === 'ARGON_FLOW_RATE_CHANGE') {
    return {
      ...state,
      argonFlowRate: action.payload ? action.payload : null
    }
  } else if (action.type === 'ARGON_FLOW_RATE_INEQ_CHANGE') {
    return {
      ...state,
      argonFlowRateIneq: action.payload
    }
  } else if (action.type === 'COOLING_RATE_CHANGE') {
    return {
      ...state,
      coolingRate: action.payload ? action.payload : null
    }
  } else if (action.type === 'COOLING_RATE_INEQ_CHANGE') {
    return {
      ...state,
      coolingRateIneq: action.payload
    }
  }


  throw new Error("No matching action type.");
};

export default toolReducer;