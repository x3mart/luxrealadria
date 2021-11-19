import {
  GET_ALL_FILTERS_SUCCESS,
  GET_ALL_FILTERS_FAIL,
  UPDATE_VALUES_SUCCESS
} from '../actions/types'

const initialState = {
  filters: [],
  values: [
    {
      title: 'category__title',
      name: 'Тип',
      value: '',
    },
    {
      title: 'region__title',
      name: 'Регион',
      value: '',
    },
    {
      title: 'statuses__title',
      name: 'Статус',
      value: '',
    },
    {
      title: 'purpose__title',
      name: 'Назначение',
      value: '',
    },
    {
      title: 'rooms',
      name: 'Спальни',
      value: '',
    },
    {
      title: 'closets',
      name: 'Санузлы',
      value: '',
    },
    {
      title: 'price_range',
      name: 'Диапазон цен',
      value: '',
    },
  ],
  error: null,
}

const filters = (state = initialState, action) => {
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
        values: state.values.map(item => (item.title === payload.title ? payload : item)),
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

export default filters
