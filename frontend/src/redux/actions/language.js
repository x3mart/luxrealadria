import {
  SET_USER_LANGUAGE,
} from './types'

export const set_user_language = (str) => dispatch => {

  dispatch({
    type: SET_USER_LANGUAGE,
    payload: str,
  })
}