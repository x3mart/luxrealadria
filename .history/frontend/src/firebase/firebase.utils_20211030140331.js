import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCfHs-4t4bTHGY787Qy4qGWTGBH6Q5DiOQ',
  authDomain: 'luxrealadria-2ac70.firebaseapp.com',
  projectId: 'luxrealadria-2ac70',
  storageBucket: 'luxrealadria-2ac70.appspot.com',
  messagingSenderId: '722432036697',
  appId: '1:722432036697:web:a146934b3543ce6bde0648',
  measurementId: 'G-585VXNT6E6',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = getFirestore();
export const firestore = firebase.firestore()

export default firebase
