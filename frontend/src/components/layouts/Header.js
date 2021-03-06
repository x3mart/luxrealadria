import React, { Fragment } from 'react'

import Mobilemenu from '../layouts/Mobilemenu'
import HeaderComponent from '../../helper/Navigationhelper'

import classNames from 'classnames'
import Topheader from './TopHeader'
import LowHeader from './LowHeader'
import { connect } from 'react-redux'

class Header extends HeaderComponent {

  render() {
    const { home_page } = this.props
    const stickyheader = this.state.isTop ? 'sticky' : ''
    return (
      <Fragment>
        {/* Aside (Mobile Navigation) */}
        <aside
          className={classNames('main-aside', {
            open: this.state.navtoggle,
          })}
        >
          <div className='aside-title'>
            <div className='aside-controls aside-trigger'>
              <h4>Menu</h4>
              <div
                className='close-btn close-dark'
                onClick={this.navtoggleClass}
              >
                <span />
                <span />
              </div>
            </div>
          </div>
          <Mobilemenu />
        </aside>
        <div
          className='aside-overlay aside-trigger'
          onClick={this.navtoggleClass}
        />
        {/* Header Start */}
        <header
          className={`main-header header-fw can-sticky header-1 ${stickyheader}`}
        >
          {/* Top Header Start */}
          <Topheader
            contacts={home_page.contact}
            login_text={home_page.login}
          />
          {/* Top Header End */}
          <LowHeader
            navtoggleClass={this.navtoggleClass}
            contacts={home_page.contact}
          />
        </header>
        {/* Header End */}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Header)
