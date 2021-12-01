import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Topheader = ({ home_page }) => {

  const [contacts, setContacts] = useState({})
  const [login_text, setLogin_text] = useState('')

  useEffect(() => {
    if (home_page) {
      setContacts(home_page.contact)
      setLogin_text(home_page.login)
    }
  }, [home_page])

  return (
    <div className='top-header'>
      <div className='top-header-inner'>
        <ul className='social-media'>
          {contacts &&
            contacts.socials &&
            contacts.socials.map(item => (
              <li key={item.id}>
                {' '}
                <a
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                  className='h-100'
                >
                  {' '}
                  <i className={`${item.icon}`} />
                </a>
              </li>
            ))}
          {contacts && contacts.email && (
            <li>
              {' '}
              <a
                href={`mailto:${contacts.email}`}
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <i className='fas fa-envelope pr-2' />
                {contacts.email}
              </a>
            </li>
          )}
        </ul>
        <ul className='top-header-nav'>
          <li>
            {' '}
            <a
              href='http://luxrealadria.com/admin/'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              {login_text}
            </a>{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Topheader)
