export const defaultState = {
  carbonSource: null,
  basePressure: null,
  bpIneq: null,
  catalyst: null,
  thickness: null,
  thIneq: null,
  diameter: null,
  dmIneq: null,
  length: null,
  lenIneq: null,
  surfaceArea: null,
  saIneq: null,
  tubeDiameter: null,
  tdIneq: null,
  crossSectionalArea: null,
  csaIneq: null,
  tubeLength: null,
  tlIneq: null,
  lengthOfHeatedRegion: null,
  lhrIneq: null
};

const toolReducer = (state, action) => {
  if (action.type == 'CARBON_SOURCE_CHANGE') {
    return {
      ...state,
      carbonSource: action.payload ? action.payload : null
    }
  } else if (action.type == 'BASE_PRESSURE_CHANGE') {
    return {
      ...state,
      basePressure: action.payload ? action.payload : null
    }
  } else if (action.type == 'BASE_PRESSURE_INEQ_CHANGE') {
    return {
      ...state,
      bpIneq: action.payload
    }
  } else if (action.type == 'CATALYST_CHANGE') {
    return {
      ...state,
      catalyst: action.payload ? action.payload : null
    }
  } else if (action.type == 'THICKNESS_CHANGE') {
    return {
      ...state,
      thickness: action.payload ? action.payload : null
    }
  } else if (action.type == 'THICKNESS_INEQ_CHANGE') {
    return {
      ...state,
      thIneq: action.payload
    }
  } else if (action.type == 'DIAMETER_CHANGE') {
    return {
      ...state,
      diameter: action.payload ? action.payload : null
    }
  } else if (action.type == 'DIAMETER_INEQ_CHANGE') {
    return {
      ...state,
      dmIneq: action.payload
    }
  } else if (action.type == 'LENGTH_CHANGE') {
    return {
      ...state,
      length: action.payload ? action.payload : null
    }
  } else if (action.type == 'LENGTH_INEQ_CHANGE') {
    return {
      ...state,
      lenIneq: action.payload
    }
  } else if (action.type == 'SURFACE_AREA_CHANGE') {
    return {
      ...state,
      surfaceArea: action.payload ? action.payload : null
    }
  } else if (action.type == 'SURFACE_AREA_INEQ_CHANGE') {
    return {
      ...state,
      saIneq: action.payload
    }
  } else if (action.type == 'TUBE_DIAMETER_CHANGE') {
    return {
      ...state,
      tubeDiameter: action.payload ? action.payload : null
    }
  } else if (action.type == 'TUBE_DIAMETER_INEQ_CHANGE') {
    return {
      ...state,
      tdIneq: action.payload
    }
  } else if (action.type == 'CROSS_SECTIONAL_AREA_CHANGE') {
    return {
      ...state,
      crossSectionalArea: action.payload ? action.payload : null
    }
  } else if (action.type == 'CROSS_SECTIONAL_AREA_INEQ_CHANGE') {
    return {
      ...state,
      csaIneq: action.payload
    }
  } else if (action.type == 'TUBE_LENGTH_CHANGE') {
    return {
      ...state,
      tubeLength: action.payload ? action.payload : null
    }
  } else if (action.type == 'TUBE_LENGTH_INEQ_CHANGE') {
    return {
      ...state,
      tlIneq: action.payload
    }
  } else if (action.type == 'LENGTH_OF_HEATED_REGION_CHANGE') {
    return {
      ...state,
      lengthOfHeatedRegion: action.payload ? action.payload : null
    }
  } else if (action.type == 'LENGTH_OF_HEATED_REGION_INEQ_CHANGE') {
    return {
      ...state,
      lhrIneq: action.payload
    }
  }

  throw new Error("No matching action type.");
};

export default toolReducer;