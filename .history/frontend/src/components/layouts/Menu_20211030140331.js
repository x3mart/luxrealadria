import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'

class Menu extends Component {
    render() {
      const { user } = this.props
        return (
          <Fragment>
            {/* Logo */}
            <Link className='navbar-brand' to='/'>
              <Logo />
            </Link>
            {/* Menu */}
            <ul className='navbar-nav'>
              <li className='menu-item'>
                <Link to='/'>Главная</Link>
              </li>
              <li className='menu-item'>
                <Link to='/listing'>Недвижимость</Link>
              </li>
              <li className='menu-item'>
                <Link to='/articles'>Полезные статьи</Link>
              </li>
              <li className='menu-item menu-item-has-children'>
                <Link to='#'>О нас</Link>
                <ul className='submenu'>
                  <li className='menu-item'>
                    {' '}
                    <Link to='/legal'>Правовая информация</Link>{' '}
                  </li>
                  <li className='menu-item'>
                    {' '}
                    <Link to='/contacts'>Контакты</Link>{' '}
                  </li>
                </ul>
              </li>
              {user  && user.is_superuser &&
              <li className='menu-item menu-item-has-children'>
                <Link to='/site-admin'>Управление сайтом</Link>
              </li>}
            </ul>
          </Fragment>
        )
    }
}

export default Menu;