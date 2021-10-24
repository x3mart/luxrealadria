import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore'
import {
  auth,
  createUserProfileDocument,
  db,
} from '../../firebase/firebase.utils'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
} from './types'

export const checkAuthenticated = () => async dispatch => {
  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch({
        type: AUTHENTICATED_SUCCESS,
        payload: true,
      })
    } else {
      dispatch({
        type: AUTHENTICATED_FAIL,
        payload: false,
      })
    }
  })
}

export const login = (email, password) => async dispatch => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        console.log(userCredential)
      const user = query(
        collection(db, 'users'),
        where('uid', '==', userCredential.user.uid)
      )
      console.log(1)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      })
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      })
    })
}

export const register = (email, password, displayName, is_superuser, is_active) => async dispatch => {
    try {
        console.log(1)
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
    await createUserProfileDocument(user, {
      displayName,
      is_superuser,
      is_active,
    })
    dispatch({
      type: REGISTER_SUCCESS,
    })
    }
    catch (error) {
      dispatch({
        type: LOGOUT_FAIL,
        payload: error,
      })
    }
}

export const logout = () => async dispatch => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    })
    .catch(error => {
      dispatch({
        type: LOGOUT_FAIL,
        payload: error,
      })
    })
}
