import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ page }) => {
  return (
    <div
      className='subheader bg-cover bg-center dark-overlay'
      style={{ backgroundImage: 'url(' + page.image + ')' }}
    >
      <div className='container'>
        <div className='subheader-inner'>
          <h1 className='text-white'>{this.props.breadcrumb.pagename}</h1>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/'>
                  {' '}
                  <i className='fas fa-home' />{' '}
                </Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                {this.props.breadcrumb.pagename}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb;