import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  auth
} from '../../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { login } from '../../../redux/actions/auth'
import {load_login_page} from '../../../redux/actions/pages'

const Content = ({ login_page, isAuthenticated,
login,
load_login_page, }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = state

    login(email, password)
  }

  const handleChange = event => {
    const { name, value } = event.target

    setState({ ...state, [name]: value })
  }

  if (this.props.isAuthenticated) return <Redirect to='/' />

  const { email, password } = state

  return (
    <div className='acr-auth-container'>
      <div className='acr-auth-content'>
        <form onSubmit={this.handleSubmit}>
          <div className='auth-text'>
            <h3>Вход на сайт</h3>
            <p>
              Для получения возможности добавлять объекты недвижимости на сайт,
              зарегистрируйтесь и дождитесь подтверждения администратора.
            </p>
          </div>
          <div className='form-group'>
            <label>Адрес электронной почты</label>
            <input
              type='email'
              className='form-control form-control-light'
              placeholder='Email'
              name='email'
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div className='form-group'>
            <label>Пароль</label>
            <input
              type='password'
              className='form-control form-control-light'
              placeholder='Пароль'
              name='password'
              onChange={this.handleChange}
              value={password}
            />
          </div>
          <button type='submit' className='btn-custom secondary btn-block'>
            Вход
          </button>
          <div className='auth-seperator'>
            <span></span>
          </div>
          <p className='text-center mb-0'>
            Нет учетной записи? <Link to='/register'>Зарегистрируйтесь</Link>{' '}
          </p>
        </form>
      </div>
      <div
        className='acr-auth-bg'
        style={{ backgroundImage: `url(${login_page.wallpaper})` }}
      ></div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login_page: state.pages.login_page,
})

export default connect(mapStateToProps, { login, load_login_page })(Content)
