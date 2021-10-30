import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  auth
} from '../../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { login } from '../../../redux/actions/auth'
import {load_login_page} from '../../../redux/actions/pages'

const Content = () => {

  const [state, setState] = useState({
      email: '',
      password: '',
    })
  

  const handleSubmit = async event => {
    event.preventDefault()


    const { email, password } = state

    this.props.login(email, password)
  }

  const handleChange = event => {
    const { name, value } = event.target

    setState({...state, [name]: value })
  }

  render() {
      
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login_page: state.pages.login_page,
})

export default connect(mapStateToProps, { login, load_login_page })(Content)
