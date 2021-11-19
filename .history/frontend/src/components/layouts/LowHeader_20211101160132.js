import React from 'react';
import Menu from '../layouts/Menu'

const LowHeader = ({ navtoggleClass, contacts }) => {

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
  const Messengers = () => {
    if(contacts && contacts.messengers) {
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
      <Menu />
      <div className='header-controls'>
        <ul className='header-controls-inner d-none d-lg-flex'>
          <li>
            <Phone />
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


