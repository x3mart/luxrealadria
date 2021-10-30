import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  auth,
  createUserProfileDocument,
} from '../../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { signup } from '../../../redux/actions/auth'

const Content = ({signup, }) => {

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
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })

      if(!this.props.error){
        this.props.action()
      } else {
        console.log(this.props.error.message)
      }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='acr-auth-container'>
        <div className='acr-auth-content'>
          <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
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
            <div className='form-group'>
              <label>Подтвердите пароль</label>
              <input
                type='password'
                className='form-control form-control-light'
                placeholder='Пароль еще раз'
                name='confirmPassword'
                onChange={this.handleChange}
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
          style={{ backgroundImage: `url('assets/img/coming-soon/1.jpg')` }}
        ></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
})

export default connect(mapStateToProps, { signup })(Content)
