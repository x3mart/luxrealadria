import {
  GET_ALL_FILTERS_SUCCESS,
  GET_ALL_FILTERS_FAIL,
} from '../actions/types'

const initialState = {
  filters: [],
  values:[
    {
      title: 'categories',
      name: 'Тип',
      value: ''
    },
    {
      title: 'regions',
      name: 'Регион',
      value: ''
    },
    {
      title: 'statuses',
      name: 'типы',
      value: ''
    },
    {
      title: 'purposes',
      name: 'типы',
      value: ''
    },
    {
      title: 'beds',
      name: 'типы',
      value: ''
    },
    {
      title: 'baths',
      name: 'типы',
      value: ''
    },
    {
      title: 'range',
      name: 'типы',
      value: ''
    },
  ],
  error: null
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_FILTERS_SUCCESS:
      return {
        ...state,
        filters: payload,
      }
    case GET_ALL_FILTERS_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
