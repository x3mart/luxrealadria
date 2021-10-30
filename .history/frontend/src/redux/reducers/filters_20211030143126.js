import {
  GET_ALL_FILTERS_SUCCESS,
  GET_ALL_FILTERS_FAIL,
  UPDATE_VALUES_SUCCESS
} from '../actions/types'

const initialState = {
  filters: [],
  values: [
    {
      title: 'categories',
      name: 'Тип',
      value: '',
    },
    {
      title: 'regions',
      name: 'Регион',
      value: '',
    },
    {
      title: 'statuses',
      name: 'Статус',
      value: '',
    },
    {
      title: 'purposes',
      name: 'Назначение',
      value: '',
    },
    {
      title: 'beds',
      name: 'Спальни',
      value: '',
    },
    {
      title: 'baths',
      name: 'Санузлы',
      value: '',
    },
    {
      title: 'price_range',
      name: 'Диапазон цен',
      value: {min: '',
    },
    },
  ],
  error: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_FILTERS_SUCCESS:
      return {
        ...state,
        filters: payload,
      }
    case UPDATE_VALUES_SUCCESS:
      return {
        ...state,
        values: state.values.map(item => (item.title == payload.title ? payload : item)),
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
