import React, { Component, Fragment } from 'react'
// import { auth, createUserProfileDocument, db } from '../firebase/firebase.utils'
// import { collection, getDocs, query } from 'firebase/firestore'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Nav toggle
      navtoggle: false,
      
    }
    // Nav toggle
    this.navtoggleClass = this.navtoggleClass.bind(this)
  }

  // fetchContacts = async () => {
  //   const q = query(collection(db, 'Contacts'))
  //   const querySnapshot = await getDocs(q)
  //   querySnapshot.forEach(doc => {
  //     this.setState({ contacts: doc.data() })
  //   })
  // }

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)

    //     userRef.onSnapshot(snapShot => {
    //       this.setState({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data(),
    //         },
    //         is_logged: true,
    //       })
    //     })
    //   }

    //   this.setState({ currentUser: userAuth, is_logged: false })
    // })

    // this.fetchContacts()

    // if (!this.state.currentUser) {
    //   this.setState({
    //     is_logged: false,
    //   })
    // }
    window.addEventListener(
      'scroll',
      () => {
        this.setState({
          isTop: window.scrollY > 100,
        })
      },
      false
    )
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth()
  // }
  // Nav toggle
  navtoggleClass() {
    this.setState({
      navtoggle: !this.state.navtoggle,
    })
  }
  // Sticky header

  render() {
    return <Fragment />
  }
}

export default HeaderComponent
