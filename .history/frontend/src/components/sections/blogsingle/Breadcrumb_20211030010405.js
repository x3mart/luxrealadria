import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
          <div
            className='subheader subheader-2 bg-cover bg-center dark-overlay'
            style={{
              backgroundImage:
                'url(' + this.props.wallpaper + ')',
            }}
          >
            <div className='container'>
              <div className='subheader-inner'>
                <h1 className='text-white'>{this.props.title}</h1>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to='/'>
                        {' '}
                        <i className='fas fa-home' />{' '}
                      </Link>
                    </li>
                    <li className='breadcrumb-item'>
                      <Link to='/articles'>Полезные статьи</Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      {this.props.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        )
    }
}

export default Breadcrumb;