import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Mobilemenu = ({ contact, action, home_page }) => {
  const getNextSibling = (elem, selector) => {
    // Get the next sibling element
    var sibling = elem.nextElementSibling
    // If there's no selector, return the first sibling
    if (!selector) return sibling
    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling
      sibling = sibling.nextElementSibling
    }
  }
  const triggerChild = e => {
    let subMenu = ''
    subMenu =
      getNextSibling(e.target, '.submenu') !== undefined
        ? getNextSibling(e.target, '.submenu')
        : null
    if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
      subMenu.classList = subMenu.classList.contains('d-block')
        ? 'submenu'
        : 'submenu d-block'
    }
  }
  return (
    <div className='aside-scroll'>
      <ul>
        {home_page &&
          home_page.menu_items &&
          home_page.menu_items.map(item => (
            <li
              className={`menu-item ${
                item.submenu_items.length > 0 && 'menu-item-has-children'
              }`}
              onClick={item.submenu_items.length > 0 ? triggerChild : null}
            >
              <Link to={item.link} onClick={action}>
                {item.title}
              </Link>
              {item.submenu_items.length > 0 && (
                <ul className='submenu' role='menu'>
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

        {/* Social Media Start */}
        <li className='menu-section-title'>Соцсети</li>
        <ul>
          {contact &&
            contact.socials &&
            contact.socials.map(item => (
              <li className='menu-item' key={item.id}>
                {' '}
                <Link to={item.link}>
                  {' '}
                  <i className={item.icon} />
                  {item.title}
                </Link>{' '}
              </li>
            ))}
        </ul>
        {/* Social Media End */}
        <li className='menu-section-title'>Мессенджеры</li>
        <ul>
          {contact &&
            contact.messengers &&
            contact.messengers.map(item => (
              <li className='menu-item' key={item.id}>
                {' '}
                <Link to={item.link}>
                  {' '}
                  <i className={item.icon} />
                  {item.title}
                </Link>{' '}
              </li>
            ))}
        </ul>
      </ul>
    </div>
  )
}

const MapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(MapStateToProps)(Mobilemenu)