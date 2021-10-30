import React, { useState, useEffect, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footerthree'
import Content from '../sections/contacts/Content'
import { connect } from 'react-redux'

class Contacts extends Component {

  const [contacts, setContacts] = useState({})

  useEffect(() => {

  })

  render() {
    
  }
}

const mapStateToProps = state => ({
  home_page: state.home.home_page,
})

export default connect(mapStateToProps, )(Contacts)
