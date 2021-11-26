
import {
  SET_USER_LANGUAGE,
} from '../actions/types'

const initialState = {
  language: '',
}

const language = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_USER_LANGUAGE:
        localStorage.setItem('language', payload)
      return {
        ...state,
        language: payload,
      }
    default:
      return state
  }
}

export default language

