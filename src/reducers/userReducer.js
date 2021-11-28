export const userDefaultState = {
  signedIn: false,
  email: null,
  authorId: null,
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        signedIn: true,
        email: action.payload.email,
        authorId: action.payload.authorId,
      }
    }
    case 'SIGN_OUT': {
      return {
        ...state,
        signedIn: false,
        email: null,
        authorId: null
      }
    }
    default: {
      throw new Error('No matching type.')
    }
  }
}
export default userReducer