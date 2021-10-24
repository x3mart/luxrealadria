import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../../firebase/firebase.utils'
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

} from './types'

export const get_all_filters = () => {
  get_all_contacts()
  get_all_faqs()
  get_all_articles()
  get_all_legals()
}

export const add_contacts = (phone, email, facebook, address) => async dispatch => {
  const docRef = await addDoc(collection(db, 'contacts'), {
    phone: phone,
    email: email,
    facebook: facebook,
    address: address,
  })
  if (docRef && docRef.id) {
    console.log(21)
    dispatch({
      type: ADD_CONTACTS_SUCCESS,
      payload: docRef,
    })
  } else {
    console.log(22)
    dispatch({
      type: ADD_CONTACTS_FAIL,
      payload: 'При записи контактов произошла ошибка. Повторите попытку позже',
    })
  }
}

export const update_contact =
  (id, phone, email, facebook, address) => async dispatch => {

    const contactRef = doc(db, 'contacts', id)

    if (phone) {
        await updateDoc(contactRef, {
          phone: phone,
        })
    }
    if (email) {
      await updateDoc(contactRef, {
        email: email,
      })
    }
    if (facebook) {
      await updateDoc(contactRef, {
        facebook: facebook,
      })
    }
    if (address) {
      await updateDoc(contactRef, {
        address: address,
      })
    }
      
    if (contactRef && contactRef.id) {
      console.log(21)
      dispatch({
        type: UPDATE_CONTACTS_SUCCESS,
        payload: contactRef,
      })
    } else {
      console.log(22)
      dispatch({
        type: UPDATE_CONTACTS_FAIL,
        payload:
          'При обновлении контактов произошла ошибка. Повторите попытку позже',
      })
    }
  }

export const get_all_contacts = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'contacts'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: arr,
    })
  } catch (error) {
    dispatch({
      type: GET_CONTACTS_FAIL,
      payload: error,
    })
  }
}

export const add_faqs =
  (question, answer) => async dispatch => {
    const docRef = await addDoc(collection(db, 'faqs'), {
      question: question,
      answer: answer,
      
    })
    if (docRef && docRef.id) {
      console.log(21)
      dispatch({
        type: ADD_FAQS_SUCCESS,
        payload: docRef,
      })
    } else {
      console.log(22)
      dispatch({
        type: ADD_FAQS_FAIL,
        payload:
          'При записи контактов произошла ошибка. Повторите попытку позже',
      })
    }
  }

export const update_faq = (id, question, answer) => async dispatch => {
  const faqRef = doc(db, 'faqs', id)

  if (question) {
    await updateDoc(faqRef, {
      question: question,
    })
  }
  if (answer) {
    await updateDoc(faqRef, {
      answer: answer,
    })
  }
  
  if (faqRef && faqRef.id) {
    console.log(21)
    dispatch({
      type: UPDATE_FAQS_SUCCESS,
      payload: faqRef,
    })
  } else {
    console.log(22)
    dispatch({
      type: UPDATE_FAQS_FAIL,
      payload:
        'При обновлении ЧаВо произошла ошибка. Повторите попытку позже',
    })
  }
}

export const get_all_faqs = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'faqs'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_FAQS_SUCCESS,
      payload: arr,
    })
  } catch (error) {
    dispatch({
      type: GET_FAQS_FAIL,
      payload: error,
    })
  }
}

export const add_articles = (name, text) => async dispatch => {
  const docRef = await addDoc(collection(db, 'articles'), {
    name: name,
    text: text,
  })
  if (docRef && docRef.id) {
    console.log(21)
    dispatch({
      type: ADD_ARTICLES_SUCCESS,
      payload: docRef,
    })
  } else {
    console.log(22)
    dispatch({
      type: ADD_ARTICLES_FAIL,
      payload: 'При записи статьи произошла ошибка. Повторите попытку позже',
    })
  }
}

export const update_article = (id, name, text) => async dispatch => {
  const articleRef = doc(db, 'articles', id)

  if (name) {
    await updateDoc(articleRef, {
      name: name,
    })
  }
  if (text) {
    await updateDoc(articleRef, {
      text: text,
    })
  }

  if (articleRef && articleRef.id) {
    console.log(21)
    dispatch({
      type: UPDATE_ARTICLES_SUCCESS,
      payload: articleRef,
    })
  } else {
    console.log(22)
    dispatch({
      type: UPDATE_ARTICLES_FAIL,
      payload:
        'При обновлении статьи произошла ошибка. Повторите попытку позже',
    })
  }
}

export const get_all_articles = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'articles'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: arr,
    })
  } catch (error) {
    dispatch({
      type: GET_ARTICLES_FAIL,
      payload: error,
    })
  }
}

export const add_legals = (name, text) => async dispatch => {
  const docRef = await addDoc(collection(db, 'legals'), {
    name: name,
    text: text,
  })
  if (docRef && docRef.id) {
    console.log(21)
    dispatch({
      type: ADD_LEGAL_SUCCESS,
      payload: docRef,
    })
  } else {
    console.log(22)
    dispatch({
      type: ADD_LEGAL_FAIL,
      payload: 'При записи статьи произошла ошибка. Повторите попытку позже',
    })
  }
}

export const update_legal = (id, name, text) => async dispatch => {
  const legalRef = doc(db, 'legals', id)

  if (name) {
    await updateDoc(legalRef, {
      name: name,
    })
  }
  if (text) {
    await updateDoc(legalRef, {
      text: text,
    })
  }

  if (legalRef && legalRef.id) {
    console.log(21)
    dispatch({
      type: UPDATE_LEGAL_SUCCESS,
      payload: legalRef,
    })
  } else {
    console.log(22)
    dispatch({
      type: UPDATE_LEGAL_FAIL,
      payload:
        'При обновлении статьи произошла ошибка. Повторите попытку позже',
    })
  }
}

export const get_all_legals = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'legals'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_LEGAL_SUCCESS,
      payload: arr,
    })
  } catch (error) {
    dispatch({
      type: GET_LEGAL_FAIL,
      payload: error,
    })
  }
}
