import React, { Component, Fragment } from 'react'
// import { auth, createUserProfileDocument, db } from '../firebase/firebase.utils'
// import { collection, getDocs, query } from 'firebase/firestore'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
      navtoggle: false,
      
    }
    
    this.navtoggleClass = this.navtoggleClass.bind(this)
  }

  
  componentDidMount() {
    
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
