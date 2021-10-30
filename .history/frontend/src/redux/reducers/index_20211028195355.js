import { combineReducers } from 'redux'
import auth from './auth'
import home from './home'
import filters from './filters'
import GET_SINGLE_PROPERTY_SUCCESSs from './GET_SINGLE_PROPERTY_FAILs'

export default combineReducers({
  auth,
  home,
  filters,
})
