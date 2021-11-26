import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { connect } from 'react-redux'

const Menu = ({ home_page }) => {
  return (
    <Fragment>
      {/* Logo */}
      <Link className='navbar-brand' to='/'>
        <Logo />
      </Link>
      {/* Menu */}
      <ul className='navbar-nav'>
        {home_page &&
          home_page.menu_items &&
          home_page.menu_items.map(item => (
            <li
              className={`menu-item ${
                item.submenu_items.length > 0 && 'menu-item-has-children'
              }`}
            >
              <Link to={item.link}>{item.title}</Link>
              {item.submenu_items.length > 0 && (
                <ul className='submenu'>
                  {item.submenu_items.length > 0 &&
                    item.submenu_items.map(sub_item => (
                      <li className='menu-item'>
                        {' '}
                        <Link to={sub_item.link}>{sub_item.title}</Link>{' '}
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </Fragment>
  )
}

const MapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(MapStateToProps)(Menu)
