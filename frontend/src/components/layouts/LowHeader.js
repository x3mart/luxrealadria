import React from 'react'
import Menu from '../layouts/Menu'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactCountryFlag from 'react-country-flag'
import { set_user_language } from '../../redux/actions/language'

const LowHeader = ({
  navtoggleClass,
  contacts,
  language,
  set_user_language,
}) => {
  const handleLanguageSelect = (e, str) => {
    e.preventDefault()
    set_user_language(str)
    window.location.reload()
  }

  const Phone = () => {
    if (contacts && contacts.phone_basic) {
      return (
        <div>
          <a
            href={`tel:${contacts.phone_basic}`}
            style={{ color: '#000000', fontSize: 20 }}
          >
            {contacts.phone_basic}
          </a>
        </div>
      )
    } else {
      return <div></div>
    }
  }
  const Messengers = () => {
    if (contacts && contacts.messengers) {
      return (
        <div className='pr-2'>
          {contacts &&
            contacts.messengers &&
            contacts.messengers.map(item => (
              <a
                key={item.id}
                href={item.link}
                style={{ color: '#000000', fontSize: 20 }}
              >
                <i className={`${item.icon} pr-2`}></i>
              </a>
            ))}
        </div>
      )
    } else {
      return <div></div>
    }
  }
  const LanguageSelector = () => {
    return (
      <div className='pr-2'>
        <li className='menu-item menu-item-has-children'>
          <div
            style={{
              color: '#000',
              fontSize: '20px',
              marginLeft: 30,
              cursor: 'pointer',
            }}
          >
            <ReactCountryFlag
              countryCode={
                language === 'mn' ? 'ME' : language === 'ru' ? 'RU' : 'GB'
              }
              svg
              style={{
                width: '1.5em',
                height: '1.5em',
                margin: '0 10px 5px 0',
              }}
            />
            {language === 'mn' ? 'CG' : language === 'ru' ? 'РУС' : 'ENG'}
          </div>
          <ul className='submenu'>
            <li className='menu-item'>
              {' '}
              <Link
                to='#'
                className={`flag-icon flag-icon-gb mr-2`}
                onClick={e => handleLanguageSelect(e, 'en')}
              >
                <ReactCountryFlag
                  countryCode='GB'
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    margin: '0 10px 0 0',
                  }}
                />
                English
              </Link>{' '}
            </li>
            <li className='menu-item'>
              {' '}
              <Link
                to='#'
                className={`flag-icon flag-icon-ru mr-2`}
                onClick={e => handleLanguageSelect(e, 'ru')}
              >
                <ReactCountryFlag
                  countryCode='RU'
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    margin: '0 10px 0 0',
                  }}
                />
                Русский
              </Link>{' '}
            </li>
            <li className='menu-item'>
              {' '}
              <Link
                to='#'
                className={`flag-icon flag-icon-me mr-2`}
                onClick={e => handleLanguageSelect(e, 'mn')}
              >
                <ReactCountryFlag
                  countryCode='ME'
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    margin: '0 10px 0 0',
                  }}
                />
                Crnagorski
              </Link>{' '}
            </li>
          </ul>
        </li>
      </div>
    )
  }
  return (
    <nav className='navbar'>
      {/* Menu */}
      <Menu />
      <div className='header-controls'>
        <ul className='header-controls-inner d-none d-lg-flex'>
          <li>
            <Messengers />
          </li>
          <li>
            <Phone />
          </li>
        </ul>
        <LanguageSelector />
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

const mapStateToProps = state => ({
  language: state.language.language,
})

export default connect(mapStateToProps, { set_user_language })(LowHeader)
