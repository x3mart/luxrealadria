import axios from 'axios'
import {
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_FAIL,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAIL,
  GET_ARTICLES_BY_PAGE_SUCCESS,
  GET_ARTICLES_BY_PAGE_FAIL,
} from './types'

export const load_all_ARTICLES = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ARTICLES/`,
      config
    )

    dispatch({
      type: GET_ALL_ARTICLES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_ARTICLES_FAIL,
    })
  }
}

export const load_ARTICLES_by_page = n => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ARTICLES/?page=${n}`,
      config
    )

    dispatch({
      type: GET_ARTICLES_BY_PAGE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ARTICLES_BY_PAGE_FAIL,
    })
  }
}

export const load_single_ARTICLE = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/ARTICLES/${id}/`,
      config
    )

    dispatch({
      type: GET_SINGLE_ARTICLE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_ARTICLE_FAIL,
    })
  }
}
