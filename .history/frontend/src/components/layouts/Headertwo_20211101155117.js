import React, { Fragment } from 'react';
import Mobilemenu from './Mobilemenu';
import HeaderComponent from '../../helper/Navigationhelper';
import classNames from 'classnames';
import Topheader from './TopHeader';
import LowHeader from './LowHeader';
import { connect } from 'react-redux'

class Headertwo extends HeaderComponent {
    render() {
      const stickyheader = this.state.isTop ? 'sticky' : ''
      const {home_page} = this.props
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
                  <h4>Меню</h4>
                  <div
                    className='close-btn close-dark'
                    onClick={this.navtoggleClass}
                  >
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              {home_page && <Mobilemenu contact={home_page.contact} action={this.navtoggleClass}/>}
            </aside>
            <div
              className='aside-overlay aside-trigger'
              onClick={this.navtoggleClass}
            />
            {/* Header Start */}
            <header
          className={`main-header header-fw can-sticky ${stickyheader}`}
        >

        {/* </header>
            <header className='main-header header-fw'> */}
              {/* Top Header Start */}
              <Topheader />
              {/* Top Header End */}
              <LowHeader
                navtoggleClass={this.navtoggleClass}
                user={this.props.user}
              />
            </header>
            {/* Header End */}
            <div style={``}>

            </div>
          </Fragment>
        )
    }
}

const mapStateToProps = state => ({
  home_page: state.home.home
})

export default connect(mapStateToProps)(Headertwo)