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
import {
  auth,
  createUserProfileDocument,
  db,
} from '../../firebase/firebase.utils'
import {
  ADD_LISTING_SUCCESS,
  ADD_LISTING_FAIL,
  GET_ALL_LISTINGS_SUCCESS,
  GET_ALL_LISTINGS_FAIL,
  GET_LISTING_SUCCESS,
  GET_LISTING_FAIL,
  SORT_LISTING_SUCCESS,
} from './types'

const setPrice = async price => {
  const priceRef = await addDoc(collection(db, 'prices'), {
    price: price,
  })
  if (priceRef && priceRef.id) {
    console.log('Цена добавлена')
  } else {
    console.error('Ошибка добавления цены')
  }
}

export const getNumber = async name => {
  let arr = []
  const q = query(collection(db, name))
  try {
    const querySnapshot = await getDocs(q)
    
    querySnapshot.forEach(doc => {
      arr.push({ number: doc.data().number, id: doc.id })
    })
  } catch (error) {
    console.error(error)
  }
  return arr[0]
}

const setNumber = async (name, current) => {
  let previous = await getNumber(name)
  if (parseInt(previous.number) < parseInt(current)) {
    const docRef = doc(db, name, previous.id)
    try {
      await updateDoc(docRef, {
        number: parseInt(current),
      })
      console.log(
        `Количество ${
          name === 'beds' ? 'спален' : name === 'baths' ? 'санузлов' : ''
        } обновлено`
      )
    } catch (err) {
      console.error(
        `Ошибка при обновлении количества ${
          name === 'beds' ? 'спален' : name === 'baths' ? 'санузлов' : ''
        }: `,
        err
      )
    }
  }
}

export const add_listing =
  (
    propertyName,
    propertyDescription,
    propertyPurpose,
    propertyStatus,
    propertyType,
    propertyPrice,
    propertySpace,
    propertyVideo,
    propertyFeatures,
    propertyId,
    propertyBeds,
    propertyBaths,
    propertyCondition,
    propertyBuiltYear,
    urls
  ) =>
  async dispatch => {
    const docRef = await addDoc(collection(db, 'listings'), {
      propertyName: propertyName,
      propertyDescription: propertyDescription,
      propertyPurpose: propertyPurpose,
      propertyStatus: propertyStatus,
      propertyType: propertyType,
      propertyPrice: propertyPrice,
      propertySpace: propertySpace,
      propertyVideo: propertyVideo,
      propertyFeatures: propertyFeatures,
      propertyId: propertyId,
      propertyBeds: propertyBeds,
      propertyBaths: propertyBaths,
      propertyCondition: propertyCondition,
      propertyBuiltYear: propertyBuiltYear,
      urls: urls,
    })
    if (docRef && docRef.id) {
      setPrice(propertyPrice)
      setNumber('beds', propertyBeds)
      setNumber('baths', propertyBaths)

      dispatch({
        type: ADD_LISTING_SUCCESS,
        payload: docRef,
      })
    } else {
      dispatch({
        type: ADD_LISTING_FAIL,
        payload: 'При записи объекта произошла ошибка. Повторите попытку позже',
      })
    }
  }

export const get_all_listings = () => async dispatch => {
  const arr = []
  const q = query(collection(db, 'listings'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      arr.push(doc.data())
    })

    dispatch({
      type: GET_ALL_LISTINGS_SUCCESS,
      payload: arr,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_LISTINGS_FAIL,
      payload: error,
    })
  }
}

export const get_listing = uid => async dispatch => {
  const docRef = doc(db, 'listings', uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    dispatch({
      type: GET_LISTING_SUCCESS,
      payload: docSnap.data(),
    })
  } else {
    dispatch({
      type: GET_LISTING_FAIL,
      payload: 'Объект отсутствует',
    })
  }
}

export const sort_listing =
  (
    propertyPurpose,
    propertyStatus,
    propertyType,
    propertyPrice,
    propertySpace,
    propertyBeds,
    propertyBaths
  ) =>
  async dispatch => {
    const arr = []

    if (propertyPurpose) {
      arr.push({ propertyPurpose: propertyPurpose })
    }

    if (propertyStatus) {
      arr.push({ propertyStatus: propertyStatus })
    }

    if (propertyType) {
      arr.push({ propertyType: propertyType })
    }

    if (propertyPrice) {
      arr.push({ propertyPrice: propertyPrice })
    }

    if (propertySpace) {
      arr.push({ propertySpace: propertySpace })
    }

    if (propertyBeds) {
      arr.push({ propertyBeds: propertyBeds })
    }

    if (propertyBaths) {
      arr.push({ propertyBaths: propertyBaths })
    }

    dispatch({
      type: SORT_LISTING_SUCCESS,
      payload: arr,
    })
  }
