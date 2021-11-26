import axios from 'axios'
import {
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAIL,
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_FAIL,
  GET_ARTICLES_BY_PAGE_SUCCESS,
  GET_ARTICLES_BY_PAGE_FAIL,
} from './types'

export const load_all_articles = () => async dispatch => {
  const lang = localStorage.getItem('language')
  const config = {
    headers: {
      'Accept-Language': lang,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/articles/`,
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

export const load_articles_by_page = n => async dispatch => {
  const lang = localStorage.getItem('language')
  const config = {
    headers: {
      'Accept-Language': lang,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/articles/?page=${n}`,
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

export const load_single_article = id => async dispatch => {
  const lang = localStorage.getItem('language')
  const config = {
    headers: {
      'Accept-Language': lang,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/articles/${id}/`,
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
