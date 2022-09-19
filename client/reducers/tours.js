import { SET_TOURS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_TOURS:
      return payload
    default:
      return state
  }
}

export default reducer
