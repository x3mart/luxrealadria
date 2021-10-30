import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../../redux/actions/auth'
import { load_register_page } from '../../../redux/actions/pages'

const Content = ({signup, load_register_page, register_page, ...props}) => {

  useEffect(() => {
    load_register_page()
  }, [])

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
        console.log(props.error.message)
      }
  }

  const handleChange = event => {
    const { name, value } = event.target

    setState({ ...state, [name]: value })
  }

  const { displayName, email, password, confirmPassword } = state

    return (
      <div className='acr-auth-container'>
        <div className='acr-auth-content'>
          <form onSubmit={handleSubmit}>
            <div className='auth-text'>
              <h3>Регистрация на сайте</h3>
              <p>
                Для получения возможности добавлять объекты недвижимости на
                сайт, зарегистрируйтесь и дождитесь подтверждения
                администратора.
              </p>
            </div>
            <div className='form-group'>
              <label>Фамилия, имя и отчество</label>
              <input
                type='text'
                className='form-control form-control-light'
                placeholder='Полное имя'
                name='displayName'
                onChange={handleChange}
                value={displayName}
              />
            </div>
            <div className='form-group'>
              <label>Адрес электронной почты</label>
              <input
                type='email'
                className='form-control form-control-light'
                placeholder='Email'
                name='email'
                onChange={handleChange}
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
                onChange={handleChange}
                value={password}
              />
            </div>
            <div className='form-group'>
              <label>Подтвердите пароль</label>
              <input
                type='password'
                className='form-control form-control-light'
                placeholder='Пароль еще раз'
                name='confirmPassword'
                onChange={handleChange}
                value={confirmPassword}
              />
            </div>
            <button type='submit' className='btn-custom secondary btn-block'>
              Регистрация
            </button>
            <div className='auth-seperator'>
              <span></span>
            </div>

            <p className='text-center mb-0'>
              Уже зарегистрированы? <Link to='/login'>Войдите</Link>{' '}
            </p>
          </form>
        </div>
        <div
          className='acr-auth-bg'
          style={{ backgroundImage: `url(${register_page.wallpaper})`, backgroundSize }}
        ></div>
      </div>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  register_page: state.pages.register_page,
})

export default connect(mapStateToProps, { signup, load_register_page })(Content)
