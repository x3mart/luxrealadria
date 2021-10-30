import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'


const Topheader = ({ user, action, contacts }) => {

  return (
    <div className='top-header'>
      <div className='top-header-inner'>
        <ul className='social-media'>
          {contacts &&
            contacts.socials &&
            contacts.socials.map(item => 
              <li>
                {' '}
                <a href={contacts.Facebook} target='_blank' rel='noreferrer'>
                  {' '}
                  <i className='fab fa-facebook-f pr-2' />
                  Facebook
                </a>
              </li>
            )}
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
          {user ? (
            <li>
              {' '}
              <div
                style={{ color: '#efefef', cursor: 'pointer' }}
                onClick={() => action()}
              >
                {' '}
                Выход
              </div>{' '}
            </li>
          ) : (
            <li>
              {' '}
              <Link to='/login'> Вход для агентов</Link>{' '}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Topheader;
