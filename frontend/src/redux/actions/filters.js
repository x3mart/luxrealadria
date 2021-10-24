import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
} from 'firebase/firestore'
import { db } from '../../firebase/firebase.utils'
import {
  ADD_REGION_SUCCESS,
  ADD_REGION_FAIL,
  GET_ALL_REGIONS_SUCCESS,
  GET_ALL_REGIONS_FAIL,
  ADD_STATUS_SUCCESS,
  ADD_STATUS_FAIL,
  GET_ALL_STATUSES_SUCCESS,
  GET_ALL_STATUSES_FAIL,
  GET_PRICE_RANGE_SUCCESS,
  GET_PRICE_RANGE_FAIL,
  ADD_PURPOSE_SUCCESS,
  ADD_PURPOSE_FAIL,
  GET_ALL_PURPOSES_SUCCESS,
  GET_ALL_PURPOSES_FAIL,
  ADD_TYPE_SUCCESS,
  ADD_TYPE_FAIL,
  GET_ALL_TYPES_SUCCESS,
  GET_ALL_TYPES_FAIL,
  GET_BEDS_SUCCESS,
  GET_BEDS_FAIL,
  GET_BATHS_SUCCESS,
  GET_BATHS_FAIL,
} from './types'
import { getNumber } from './listings'

export const get_all_filters = () => {
  get_all_regions()
  get_all_statuses()
  get_price_range()
  get_all_purposes()
  get_all_types()
  get_beds()
  get_baths()
}

export const add_region = regionName => async dispatch => {
  const docRef = await addDoc(collection(db, 'locations'), {
    regionName: regionName,
  })
  if (docRef && docRef.id) {
    dispatch({
      type: ADD_REGION_SUCCESS,
      payload: docRef,
    })
  } else {
    dispatch({
      type: ADD_REGION_FAIL,
      payload: 'При записи региона произошла ошибка. Повторите попытку позже',
    })
  }
}

export const get_all_regions = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'locations'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_ALL_REGIONS_SUCCESS,
      payload: arr.sort(function (a, b) {
        return a.name - b.name
      }),
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_REGIONS_FAIL,
      payload: error,
    })
  }
}

export const add_status = statusName => async dispatch => {
  const docRef = await addDoc(collection(db, 'statuses'), {
    statusName: statusName,
  })
  if (docRef && docRef.id) {
    dispatch({
      type: ADD_STATUS_SUCCESS,
      payload: docRef,
    })
  } else {
    dispatch({
      type: ADD_STATUS_FAIL,
      payload: 'При записи статуса произошла ошибка. Повторите попытку позже',
    })
  }
}

export const get_all_statuses = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'statuses'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_ALL_STATUSES_SUCCESS,
      payload: arr,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_STATUSES_FAIL,
      payload: error,
    })
  }
}

export const get_price_range = () => async dispatch => {
  const arrOfObjs = []
  const q = query(collection(db, 'prices'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arrOfObjs.push(doc.data())
    })
    let arr = []
    arrOfObjs.map(item => {
      let n = parseInt(item.price, 10)
      arr.push(n)
      return n
    })

    arr.sort(function (a, b) {
      return a - b
    })

    let range = {
      lowest: arr[0],
      highest: arr.at(-1),
    }

    dispatch({
      type: GET_PRICE_RANGE_SUCCESS,
      payload: range,
    })
  } catch (error) {
    dispatch({
      type: GET_PRICE_RANGE_FAIL,
      payload: error,
    })
  }
}

export const add_purpose = purposeName => async dispatch => {
  const docRef = await addDoc(collection(db, 'purposes'), {
    purpose: purposeName,
  })
  if (docRef && docRef.id) {
    dispatch({
      type: ADD_PURPOSE_SUCCESS,
      payload: docRef,
    })
  } else {
    dispatch({
      type: ADD_PURPOSE_FAIL,
      payload:
        'При записи назначения произошла ошибка. Повторите попытку позже',
    })
  }
}

export const get_all_purposes = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'purposes'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_ALL_PURPOSES_SUCCESS,
      payload: arr,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_PURPOSES_FAIL,
      payload: error,
    })
  }
}

export const add_type = (typeName, typeIcon, typePicture) => async dispatch => {
  const docRef = await addDoc(collection(db, 'types'), {
    type: typeName,
    icon: typeIcon,
    picture: typePicture,
  })
  if (docRef && docRef.id) {
    dispatch({
      type: ADD_TYPE_SUCCESS,
      payload: docRef,
    })
  } else {
    dispatch({
      type: ADD_TYPE_FAIL,
      payload: 'При записи типа произошла ошибка. Повторите попытку позже',
    })
  }
}

export const get_all_types = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'types'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_ALL_TYPES_SUCCESS,
      payload: arr.sort(function (a, b) {
        return new Date(a.created) - new Date(b.created)
      }),
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_TYPES_FAIL,
      payload: error,
    })
  }
}


export const get_beds = () => async dispatch => {
  try {
    let beds = await getNumber('beds')
    dispatch({
      type: GET_BEDS_SUCCESS,
      payload: beds.number,
    })
  } catch (error) {
    dispatch({
      type: GET_BEDS_FAIL,
      payload: error,
    })
  }
}

export const get_baths = () => async dispatch => {
  try {
    let baths = await getNumber('baths')
    dispatch({
      type: GET_BATHS_SUCCESS,
      payload: baths.number,
    })
  } catch (error) {
    dispatch({
      type: GET_BATHS_FAIL,
      payload: error,
    })
  }
}