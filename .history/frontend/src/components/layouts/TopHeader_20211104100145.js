import React from 'react'
import { Link } from 'react-router-dom'

const Topheader = ({ contacts }) => {
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
            <a href='http://luxrealadria.com/admin/' target={_blank}> Вход для агентов</a>{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Topheader
