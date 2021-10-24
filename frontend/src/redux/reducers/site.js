import {
  ADD_CONTACTS_SUCCESS,
  ADD_CONTACTS_FAIL,
  UPDATE_CONTACTS_SUCCESS,
  UPDATE_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  ADD_FAQS_SUCCESS,
  ADD_FAQS_FAIL,
  UPDATE_FAQS_SUCCESS,
  UPDATE_FAQS_FAIL,
  GET_FAQS_SUCCESS,
  GET_FAQS_FAIL,
  ADD_ARTICLES_SUCCESS,
  ADD_ARTICLES_FAIL,
  UPDATE_ARTICLES_SUCCESS,
  UPDATE_ARTICLES_FAIL,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  ADD_LEGAL_SUCCESS,
  ADD_LEGAL_FAIL,
  UPDATE_LEGAL_SUCCESS,
  UPDATE_LEGAL_FAIL,
  GET_LEGAL_SUCCESS,
  GET_LEGAL_FAIL,
} from '../actions/types'

const initialState = {
  contacts: [],
  faqs: [],
  articles: [],
  legals: [],
  error: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      }
    case UPDATE_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map(item => {
          if (item.uid === payload.uid) {
            return payload
          } else {
            return item
          }
        }),
      }
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: payload,
      }
    case ADD_FAQS_SUCCESS:
      return {
        ...state,
        faqs: [...state.faqs, payload],
      }
    case UPDATE_FAQS_SUCCESS:
      return {
        ...state,
        faqs: state.faqs.map(item => {
          if (item.uid === payload.uid) {
            return payload
          } else {
            return item
          }
        }),
      }
    case GET_FAQS_SUCCESS:
      return {
        ...state,
        faqs: payload,
      }
    case ADD_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, payload],
      }
    case UPDATE_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: state.articles.map(item => {
          if (item.uid === payload.uid) {
            return payload
          } else {
            return item
          }
        }),
      }
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: payload,
      }
    case ADD_LEGAL_SUCCESS:
      return {
        ...state,
        legals: [...state.legals, payload],
      }
    case UPDATE_LEGAL_SUCCESS:
      return {
        ...state,
        legals: state.legals.map(item => {
          if (item.uid === payload.uid) {
            return payload
          } else {
            return item
          }
        }),
      }
    case GET_LEGAL_SUCCESS:
      return {
        ...state,
        legals: payload,
      }
    case ADD_CONTACTS_FAIL:
    case UPDATE_CONTACTS_FAIL:
    case GET_CONTACTS_FAIL:
    case ADD_FAQS_FAIL:
    case UPDATE_FAQS_FAIL:
    case GET_FAQS_FAIL:
    case ADD_ARTICLES_FAIL:
    case UPDATE_ARTICLES_FAIL:
    case GET_ARTICLES_FAIL:
    case ADD_LEGAL_FAIL:
    case UPDATE_LEGAL_FAIL:
    case GET_LEGAL_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
