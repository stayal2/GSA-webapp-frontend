export const defaultState = {
  filters: [],
  environmentalConditions: [],
  environmentalConditionFilters: [],
  furnaces: [],
  furnaceFilters: [],
  preparationStep: [],
  preparationStepFilters: [],
  properties: [],
  propertyFilters: [],
  recipes: [],
  recipeFilters: [],
  substrates: [],
  substrateFilters: [],

  catalyst: null,
  tubeDiameter: null,
  tubeDiameterIneq: 'eq',
  crossSectionalArea: null,
  crossSectionalAreaIneq: 'eq',
  tubeLength: null,
  tubeLengthIneq: 'eq',
  basePressure: null,
  basePressureIneq: 'eq',
  thickness: null,
  thicknessIneq: 'eq',
  diameter: null,
  diameterIneq: 'eq',
  length: null,
  lengthIneq: 'eq',
  surfaceArea: null,
  surfaceAreaIneq: 'eq',
  dewPoint: null,
  dewPointIneq: null,
  lengthOfHeatedRegion: null,
  lengthOfHeatedRegionIneq: 'eq',
  prepName: null,
  duration: null,
  durationIneq: 'eq',
  furnaceTemperature: null,
  furnaceTemperatureIneq: 'eq',
  furnacePressure: null,
  furnacePressureIneq: 'eq',
  sampleLocation: null,
  sampleLocationIneq: 'eq',
  heliumFlowRate: null,
  heliumFlowRateIneq: 'eq',
  hydrogenFlowRate: null,
  hydrogenFlowRateIneq: 'eq',
  carbonSource: null,
  carbonSourceFlowRate: null,
  carbonSourceFlowRateIneq: 'eq',
  argonFlowRate: null,
  argonFlowRateIneq: 'eq',
  coolingRate: null,
  coolingRateIneq: 'eq',
  growthCoverage: null,
  growthCoverageIneq: 'eq',
  shape: null,
  averageThicknessOfGrowth: null,
  averageThicknessOfGrowthIneq: 'eq',
  stdDevOfGrowth: null,
  stdDevOfGrowthIneq: 'eq',
  numberOfLayers: null,
  numberOfLayersIneq: 'eq',
  domainSize: null,
  domainSizeIneq: 'eq',
  lastname: null,
  firstname: null,
  institution: null
}

const toolReducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const data = action.payload
      return {
        ...state,
        environmentalConditions: data.environmental_conditions,
        furnaces: data.furnaces,
        preparationSteps: data.preparations_stpes,
        properties: data.properties,
        recipes: data.recipes,
        substrates: data.substrates
      }
    }
    case 'ADD_ENVIRONMENTAL_CONDITION_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.environmentalConditions[idx]
      return {
        ...state,
        environmentalConditionFilters: [...state.environmentalConditionFilters, newFilter]
      }
    }
    case 'DEL_ENVIRONMENTAL_CONDITION_FILTER': {
      console.log('del')
      const newFilters = [...state.environmentalConditionFilters]
      const idx = action.payload.idx
      newFilters.splice(idx, 1)
      return {
        ...state,
        environmentalConditionFilters: newFilters
      }
    }
    case 'ADD_FURNACE_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.furnaces[idx]
      return {
        ...state,
        furnaceFilters: [...state.furnaceFilters, newFilter]
      }
    }
    case 'DEL_FURNACE_FILTER': {
      const newFilters = [...state.furnaceFilters]
      const idx = action.payload.idx
      newFilters.splice(idx, 1)
      return {
        ...state,
        furnaceFilters: newFilters
      }
    }
    case 'ADD_SUBSTRATE_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.substrates[idx]
      return {
        ...state,
        substrateFilters: [...state.substrateFilters, newFilter]
      }
    }
    case 'DEL_SUBSTRATE_FILTER': {
      const newFilters = [...state.substrateFilters]
      const idx = action.payload.idx
      newFilters.splice(idx, 1)
      return {
        ...state,
        substrateFilters: newFilters
      }
    }
    case 'ADD_RECIPE_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.recipes[idx]
      return {
        ...state,
        recipeFilters: [...state.recipeFilters, newFilter]
      }
    }
    case 'DEL_RECIPE_FILTER': {
      const newFilters = [...state.recipeFilters]
      const idx = action.payload.idx
      newFilters.splice(idx, 1)
      return {
        ...state,
        recipeFilters: newFilters
      }
    }
    case 'ADD_EXPERIMENTAL_CONDITIONS_FILTERS': {
      const newFilters = []
      if (state.catalyst) {
        newFilters.push({
          field: 'Catalyst',
          code: 'sc',
          value: state.catalyst
        })
      }
      if (state.tubeDiameter) {
        newFilters.push({
          field: 'Tube Diameter',
          code: 'ftd',
          value: state.tubeDiameter,
          ineq: state.tubeDiameterIneq,
          unit: 'mm'
        })
      }
      if (state.crossSectionalArea) {
        newFilters.push({
          field: 'Cross Sectional Area',
          code: 'fcsa',
          value: state.crossSectionalArea,
          ineq: state.crossSectionalAreaIneq,
          unit: 'mm&sup2;'
        })
      }
      if (state.tubeLength) {
        newFilters.push({
          field: 'Tube Length',
          code: 'ftl',
          value: state.tubeLength,
          ineq: state.tubeLengthIneq,
          unit: 'mm'
        })
      }
      if (state.basePressure) {
        newFilters.push({
          field: 'Base Pressure',
          code: 'rbp',
          value: state.basePressure,
          ineq: state.basePressureIneq,
          unit: 'Torr'
        })
      }
      if (state.thickness) {
        newFilters.push({
          field: 'Thickness',
          code: 'st',
          value: state.thickness,
          ineq: state.thicknessIneq,
          unit: 'um'
        })
      }
      if (state.diameter) {
        newFilters.push({
          field: 'Diameter',
          code: 'sd',
          value: state.diameter,
          ineq: state.diameterIneq,
          unit: 'um'
        })
      }
      if (state.length) {
        newFilters.push({
          field: 'Length',
          code: 'sl',
          value: state.length,
          ineq: state.lengthIneq,
          unit: 'mm&sup2;'
        })
      }
      if (state.surfaceArea) {
        newFilters.push({
          field: 'Sample Surface Area',
          code: 'ssa',
          value: state.surfaceArea,
          ineq: state.surfaceAreaIneq,
          unit: 'mm&sup2;'
        })
      }
      if (state.dewPoint) {
        newFilters.push({
          field: 'Dew Point',
          code: 'edp',
          value: state.dewPoint,
          ineq: state.dewPointIneq,
          unit: 'mm&sup2;'
        })
      }
      return {
        ...state,
        catalyst: null,
        tubeDiameter: null,
        tubeDiameterIneq: 'eq',
        crossSectionalArea: null,
        crossSectionalAreaIneq: 'eq',
        tubeLength: null,
        tubeLengthIneq: 'eq',
        basePressure: null,
        basePressureIneq: 'eq',
        thickness: null,
        thicknessIneq: 'eq',
        diameter: null,
        diameterIneq: 'eq',
        length: null,
        lengthIneq: 'eq',
        surfaceArea: null,
        surfaceAreaIneq: 'eq',
        dewPoint: null,
        dewPointIneq: 'eq',
        filters: [...state.filters, ...newFilters]
      }
    } case 'ADD_PREPARATION_FILTERS': {
      const newFilters = []
      if (state.prepName) {
        newFilters.push({
          field: 'Name',
          code: 'psn',
          value: state.prepName
        })
      }
      if (state.duration) {
        newFilters.push({
          field: 'Duration',
          code: 'psd',
          value: state.duration,
          ineq: state.durationIneq,
          unit: 'min'
        })
      }
      if (state.furnaceTemperature) {
        newFilters.push({
          field: 'Furnace Temperature',
          code: 'psft',
          value: state.furnaceTemperature,
          ineq: state.furnaceTemperatureIneq,
          unit: '&degC'
        })
      }
      if (state.furnacePressure) {
        newFilters.push({
          field: 'Furnace Pressure',
          code: 'psfp',
          value: state.furnacePressure,
          ineq: state.furnacePressureIneq,
          unit: 'Torr'
        })
      }
      if (state.sampleLocation) {
        newFilters.push({
          field: 'Sample Location',
          code: 'pssl',
          value: state.sampleLocation,
          ineq: state.sampleLocationIneq,
          unit: 'mm'
        })
      }
      if (state.heliumFlowRate) {
        newFilters.push({
          field: 'Helium Flow Rate',
          code: 'pshelfr',
          value: state.heliumFlowRate,
          ineq: state.heliumFlowRateIneq,
          unit: 'sccm'
        })
      }
      if (state.hydrogenFlowRate) {
        newFilters.push({
          field: 'Hydrogen Flow Rate',
          code: 'pshydfr',
          value: state.hydrogenFlowRate,
          ineq: state.hydrogenFlowRateIneq,
          unit: 'sccm'
        })
      }
      if (state.carbonSource) {
        newFilters.push({
          field: 'Carbon Source',
          code: 'rcs',
          value: state.carbonSource
        })
      }
      if (state.carbonSourceFlowRate) {
        newFilters.push({
          field: 'Carbon Source Flow Rate',
          code: 'pscsfr',
          value: state.carbonSourceFlowRate,
          ineq: state.carbonSourceFlowRateIneq,
          unit: 'sccm'
        })
      }
      if (state.argonFlowRate) {
        newFilters.push({
          field: 'Argon Flow Rate',
          code: 'psafr',
          value: state.argonFlowRate,
          ineq: state.argonFlowRateIneq,
          unit: 'sccm'
        })
      }
      if (state.coolingRate) {
        newFilters.push({
          field: 'Cooling Rate',
          code: 'pscr',
          value: state.coolingRate,
          ineq: state.coolingRateIneq,
          unit: '&deg;/min'
        })
      }
      return {
        ...state,
        prepName: null,
        duration: null,
        durationIneq: 'eq',
        furnaceTemperature: null,
        furnaceTemperatureIneq: 'eq',
        furnacePressure: null,
        furnacePressureIneq: 'eq',
        sampleLocation: null,
        sampleLocationIneq: 'eq',
        heliumFlowRate: null,
        heliumFlowRateIneq: 'eq',
        hydrogenFlowRate: null,
        hydrogenFlowRateIneq: 'eq',
        carbonSource: null,
        carbonSourceFlowRate: null,
        carbonSourceFlowRateIneq: 'eq',
        argonFlowRate: null,
        argonFlowRateIneq: 'eq',
        coolingRate: null,
        coolingRateIneq: 'eq',
        filters: [...state.filters, ...newFilters]
      }
    } case 'ADD_PROPERTIES_FILTERS': {
      const newFilters = []
      if (state.growthCoverage) {
        newFilters.push({
          field: 'Growth Coverage',
          code: 'pgc',
          value: state.growthCoverage,
          ineq: state.growthCoverageIneq,
          unit: '%'
        })
      }
      if (state.shape) {
        newFilters.push({
          field: 'Shape',
          code: 'ps',
          value: state.duration
        })
      }
      if (state.averageThicknessOfGrowth) {
        newFilters.push({
          field: 'Average Thickness of Growth',
          code: 'patog',
          value: state.averageThicknessOfGrowth,
          ineq: state.averageThicknessOfGrowthIneq
        })
      }
      if (state.stdDevOfGrowth) {
        newFilters.push({
          field: 'Std. Dev. of Growth',
          code: 'psdog',
          value: state.stdDevOfGrowth,
          ineq: state.stdDevOfGrowthIneq
        })
      }
      if (state.numberOfLayers) {
        newFilters.push({
          field: 'Number of Layers',
          code: 'pnol',
          value: state.numberOfLayers,
          ineq: state.numberOfLayersIneq
        })
      }
      if (state.domainSize) {
        newFilters.push({
          field: 'Domain Size',
          code: 'pds',
          value: state.domainSize,
          ineq: state.domainSizeIneq
        })
      }
      return {
        ...state,
        growthCoverage: null,
        growthCoverageIneq: 'eq',
        shape: null,
        averageThicknessOfGrowth: null,
        averageThicknessOfGrowthIneq: 'eq',
        stdDevOfGrowth: null,
        stdDevOfGrowthIneq: 'eq',
        numberOfLayers: null,
        numberOfLayersIneq: 'eq',
        domainSize: null,
        domainSizeIneq: 'eq',
        filters: [...state.filters, ...newFilters]
      }
    } case 'ADD_PROVENANCE_INFORMATION_FILTERS': {
      const newFilters = []
      if (state.lastname) {
        newFilters.push({
          field: 'Last Name',
          code: 'aln',
          value: state.lastname
        })
      }
      if (state.firstname) {
        newFilters.push({
          field: 'First Name',
          code: 'afn',
          value: state.firstname
        })
      }
      if (state.institution) {
        newFilters.push({
          field: 'Institution',
          code: 'ainst',
          value: state.institution
        })
      }
      return {
        ...state,
        lastname: null,
        firstname: null,
        institution: null,
        filters: [...state.filters, ...newFilters]
      }
    } case 'BASE_PRESSURE_CHANGE': {
      return {
        ...state,
        basePressure: action.payload ? action.payload : null
      }
    } case 'BASE_PRESSURE_INEQ_CHANGE': {
      return {
        ...state,
        basePressureIneq: action.payload
      }
    } case 'CATALYST_CHANGE': {
      return {
        ...state,
        catalyst: action.payload ? action.payload : null
      }
    } case 'THICKNESS_CHANGE': {
      return {
        ...state,
        thickness: action.payload ? action.payload : null
      }
    } case 'THICKNESS_INEQ_CHANGE': {
      return {
        ...state,
        thicknessIneq: action.payload
      }
    } case 'DIAMETER_CHANGE': {
      return {
        ...state,
        diameter: action.payload ? action.payload : null
      }
    } case 'DIAMETER_INEQ_CHANGE': {
      return {
        ...state,
        diameterIneq: action.payload
      }
    } case 'LENGTH_CHANGE': {
      return {
        ...state,
        length: action.payload ? action.payload : null
      }
    } case 'LENGTH_INEQ_CHANGE': {
      return {
        ...state,
        lengthIneq: action.payload
      }
    } case 'SURFACE_AREA_CHANGE': {
      return {
        ...state,
        surfaceArea: action.payload ? action.payload : null
      }
    } case 'SURFACE_AREA_INEQ_CHANGE': {
      return {
        ...state,
        surfaceAreaIneq: action.payload
      }
    } case 'DEW_POINT_CHANGE': {
      return {
        ...state,
        dewPoint: action.payload ? action.payload : null
      }
    } case 'DEW_POINT_INEQ_CHANGE': {
      return {
        ...state,
        dewPointIneq: action.payload
      }
    } case 'TUBE_DIAMETER_CHANGE': {
      return {
        ...state,
        tubeDiameter: action.payload ? action.payload : null
      }
    } case 'TUBE_DIAMETER_INEQ_CHANGE': {
      return {
        ...state,
        tubeDiameterIneq: action.payload
      }
    } case 'CROSS_SECTIONAL_AREA_CHANGE': {
      return {
        ...state,
        crossSectionalArea: action.payload ? action.payload : null
      }
    } case 'CROSS_SECTIONAL_AREA_INEQ_CHANGE': {
      return {
        ...state,
        crossSectionalAreaIneq: action.payload
      }
    } case 'TUBE_LENGTH_CHANGE': {
      return {
        ...state,
        tubeLength: action.payload ? action.payload : null
      }
    } case 'TUBE_LENGTH_INEQ_CHANGE': {
      return {
        ...state,
        tubeLengthIneq: action.payload
      }
    } case 'LENGTH_OF_HEATED_REGION_CHANGE': {
      return {
        ...state,
        lengthOfHeatedRegion: action.payload ? action.payload : null
      }
    } case 'LENGTH_OF_HEATED_REGION_INEQ_CHANGE': {
      return {
        ...state,
        lengthOfHeatedRegionIneq: action.payload
      }
    } case 'PREP_NAME_CHANGE': {
      return {
        ...state,
        prepName: action.payload ? action.payload : null
      }
    } case 'DURATION_CHANGE': {
      return {
        ...state,
        duration: action.payload ? action.payload : null
      }
    } case 'DURATION_INEQ_CHANGE': {
      return {
        ...state,
        durationIneq: action.payload
      }
    } case 'FURNACE_TEMPERATURE_CHANGE': {
      return {
        ...state,
        furnaceTemperature: action.payload ? action.payload : null
      }
    } case 'FURNACE_TEMPERATURE_INEQ_CHANGE': {
      return {
        ...state,
        furnaceTemperatureIneq: action.payload
      }
    } case 'FURNACE_PRESSURE_CHANGE': {
      return {
        ...state,
        furnacePressure: action.payload ? action.payload : null
      }
    } case 'FURNACE_PRESSURE_INEQ_CHANGE': {
      return {
        ...state,
        furnacePressureIneq: action.payload
      }
    } case 'SAMPLE_LOCATION_CHANGE': {
      return {
        ...state,
        sampleLocation: action.payload ? action.payload : null
      }
    } case 'SAMPLE_LOCATION_INEQ_CHANGE': {
      return {
        ...state,
        sampleLocationIneq: action.payload
      }
    } case 'HELIUM_FLOW_RATE_CHANGE': {
      return {
        ...state,
        heliumFlowRate: action.payload ? action.payload : null
      }
    } case 'HELIUM_FLOW_RATE_INEQ_CHANGE': {
      return {
        ...state,
        heliumFlowRateIneq: action.payload
      }
    } case 'HYDROGEN_FLOW_RATE_CHANGE': {
      return {
        ...state,
        hydrogenFlowRate: action.payload ? action.payload : null
      }
    } case 'HYDROGEN_FLOW_RATE_INEQ_CHANGE': {
      return {
        ...state,
        hydrogenFlowRateIneq: action.payload
      }
    } case 'CARBON_SOURCE_CHANGE': {
      return {
        ...state,
        carbonSource: action.payload ? action.payload : null
      }
    } case 'CARBON_SOURCE_FLOW_RATE_CHANGE': {
      return {
        ...state,
        carbonSourceFlowRate: action.payload ? action.payload : null
      }
    } case 'CARBON_SOURCE_FLOW_RATE_INEQ_CHANGE': {
      return {
        ...state,
        carbonSourceFlowRateIneq: action.payload
      }
    } case 'ARGON_FLOW_RATE_CHANGE': {
      return {
        ...state,
        argonFlowRate: action.payload ? action.payload : null
      }
    } case 'ARGON_FLOW_RATE_INEQ_CHANGE': {
      return {
        ...state,
        argonFlowRateIneq: action.payload
      }
    } case 'COOLING_RATE_CHANGE': {
      return {
        ...state,
        coolingRate: action.payload ? action.payload : null
      }
    } case 'COOLING_RATE_INEQ_CHANGE': {
      return {
        ...state,
        coolingRateIneq: action.payload
      }
    } case 'GROWTH_COVERAGE_CHAGNE': {
      return {
        ...state,
        growthCoverage: action.payload
      }
    } case 'GROWTH_COVERAGE_INEQ_CHANGE': {
      return {
        ...state,
        growthCoverageIneq: action.payload
      }
    } case 'SHAPE_CHANGE': {
      return {
        ...state,
        shape: action.payload
      }
    } case 'AVERAGE_THICKNESS_OF_GROWTH_CHANGE': {
      return {
        ...state,
        averageThicknessOfGrowth: action.payload
      }
    } case 'AVERAGE_THICKNESS_OF_GROWTH_INEQ_CHANGE': {
      return {
        ...state,
        averageThicknessOfGrowthIneq: action.payload
      }
    } case 'STD_DEV_OF_GROWTH_CHANGE': {
      return {
        ...state,
        stdDevOfGrowth: action.payload
      }
    } case 'STD_DEV_OF_GROWTH_INEQ_CHANGE': {
      return {
        ...state,
        stdDevOfGrowthIneq: action.payload
      }
    } case 'NUMBER_OF_LAYERS_CHANGE': {
      return {
        ...state,
        numberOfLayers: action.payload
      }
    } case 'NUMBER_OF_LAYERS_INEQ_CHANGE': {
      return {
        ...state,
        numberOfLayersIneq: action.payload
      }
    } case 'DOMAIN_SIZE_CHANGE': {
      return {
        ...state,
        domainSize: action.payload
      }
    } case 'DOMAIN_SIZE_INEQ_CHANGE': {
      return {
        ...state,
        domainSizeIneq: action.payload
      }
    } case 'LASTNAME_CHANGE': {
      return {
        ...state,
        lastname: action.payload
      }
    } case 'FIRSTNAME_CHANGE': {
      return {
        ...state,
        firstname: action.payload
      }
    } case 'INSTITUTION_CHANGE': {
      return {
        ...state,
        institution: action.payload
      }
    } case 'REMOVE_FILTER': {
      const filters = state.filters
      const removeIdx = action.payload
      const newFilters = filters.filter((el, i) => i !== removeIdx)
      return {
        ...state,
        filters: newFilters
      }
    }
    default: {
      throw new Error('No matching action type.')
    }
  }
}

export default toolReducer
