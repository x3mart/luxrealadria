import React from 'react';
import Menu from '../layouts/Menu'
import { Link } from 'react-router-dom'

const LowHeader = ({ navtoggleClass, user, logged, contacts }) => {

  const Phone = () => {
    if(contacts && contacts.phone_basic) {
      return (
        <div>
          <a href={`tel:${contacts.phone_basic}`} style={{color:'#000000', fontSize:20}}>
          {contacts.phone_basic}
          </a>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
  return (
    <nav className='navbar'>
      {/* Menu */}
      <Menu user={user} />
      <div className='header-controls'>
        <ul className='header-controls-inner d-none d-lg-flex'>
          <li>
            {logged && user && user.is_active ? (
              <Link to='/submit-listing' className='btn-custom primary'>
                Добавить объект <i className='fas fa-plus' />{' '}
              </Link>
            ) : (
              <Phone/>
            )}
          </li>
        </ul>
        {/* Toggler */}
        <div className='aside-toggler aside-trigger' onClick={navtoggleClass}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  )
}

export default LowHeader;


