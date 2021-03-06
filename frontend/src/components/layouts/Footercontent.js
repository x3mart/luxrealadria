import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { connect } from 'react-redux'

class Footercontent extends Component {
    render() {
      const {home_page} = this.props
        return (
          <Fragment>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center'>
                  <div className='footer-logo text-white mr-5'>
                    <Logo className='text-white' />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: home_page.footer_text }}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 footer-widget'>
                  <ul className='social-media'>
                    {home_page.contact &&
                      home_page.contact.socials &&
                      home_page.contact.socials.map(item => (
                        <li key={item.id}>
                          {' '}
                          <a href={item.link} target='_blank' rel='noreferrer'>
                            <i className={`${item.icon} pr-2`} />
                          </a>
                        </li>
                      ))}
                    {home_page.contact && home_page.contact.email && (
                      <li>
                        {' '}
                        <a
                          href={`mailto:${home_page.contact.email}`}
                          // target='_blank'
                          // rel='noreferrer'
                        >
                          {' '}
                          <i className='fas fa-envelope' />{' '}
                        </a>{' '}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className='footer-bottom'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-7'>
                    <p className='m-0'>
                      ?? 2021 - <Link to='/'>LuxRealAdria</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )
    }
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Footercontent);