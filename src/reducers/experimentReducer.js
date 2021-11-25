export const defaultState = {
  experiment: null
}

const experimentReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXPERIMENT': {
      console.log(action.payload)
      return {
        ...state,
        experiment: action.payload
      }
    }
    default: {
      throw new Error('No matching action type.')
    }
  }
}

export default experimentReducer
