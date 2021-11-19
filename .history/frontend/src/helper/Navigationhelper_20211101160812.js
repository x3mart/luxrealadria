import React, { Component, Fragment } from 'react'

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
          isTop: window.scrollY > 49,
        })
      },
      false
    )
  }

  
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
