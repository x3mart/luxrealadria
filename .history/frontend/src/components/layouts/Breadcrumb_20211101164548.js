import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ цфддзфзукбешеду }) => {
  return (
    <div
      className='subheader bg-cover bg-center dark-overlay'
      style={{ backgroundImage: 'url(' + page.image + ')' }}
    >
      <div className='container'>
        <div className='subheader-inner'>
          <h1 className='text-white'>{page.title}</h1>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/'>
                  {' '}
                  <i className='fas fa-home' />{' '}
                </Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                {page.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb;