import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  auth,
  createUserProfileDocument,
} from '../../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { signup } from '../../../redux/actions/auth'

const Content = ({signup, ...props}) => {

  const [state, setState] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      is_superuser: false,
      is_active: false,
    })
  

  const handleSubmit = async event => {
    event.preventDefault()

    const {
      displayName,
      email,
      password,
      confirmPassword,
      is_superuser,
      is_active,
    } = state

    if (password !== confirmPassword) {
      alert('Пароли не совпадают!')
      return
    }
    signup(
      email,
      password,
      confirmPassword,
      displayName,
      is_superuser,
      is_active
    )


      setState({
        ...state,
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })

      if(!props.error){
        props.action()
      } else {
        console.log(this.props.error.message)
      }
  }

  const handleChange = event => {
    const { name, value } = event.target

    setState({ ...state, [name]: value })
  }

  render() {
    
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
})

export default connect(mapStateToProps, { signup })(Content)
