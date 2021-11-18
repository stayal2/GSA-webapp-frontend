export const defaultState = {
  experiment: null
}

const toolReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXPERIMENT': {
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

export default toolReducer
