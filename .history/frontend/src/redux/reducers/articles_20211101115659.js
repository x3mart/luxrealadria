import {
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAIL,
  GET_ARTICLES_BY_PAGE_SUCCESS,
  GET_ARTICLES_BY_PAGE_FAIL,
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_FAIL,
} from '../actions/types'

const initialState = {
  article: {},
  articles: [],
  error: null,
}

const article = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: payload,
      }
    case GET_ARTICLES_BY_PAGE_SUCCESS:
      return {
        ...state,
        articles: payload,
      }
    case GET_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: payload,
      }
    case GET_ALL_ARTICLES_FAIL:
    case GET_ARTICLES_BY_PAGE_FAIL:
    case GET_SINGLE_ARTICLE_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
