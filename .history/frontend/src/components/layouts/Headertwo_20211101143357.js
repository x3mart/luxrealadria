import React, { Fragment } from 'react';
import Mobilemenu from './Mobilemenu';
import HeaderComponent from '../../helper/Navigationhelper';
import classNames from 'classnames';
import Topheader from './TopHeader';
import LowHeader from './LowHeader';

class Headerfive extends HeaderComponent {
    render() {
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
            <header className='main-header header-fw'>
              {/* Top Header Start */}
              <Topheader />
              {/* Top Header End */}
              <LowHeader
                navtoggleClass={this.navtoggleClass}
                user={this.props.user}
              />
            </header>
            {/* Header End */}
          </Fragment>
        )
    }
}

export default Headerfive;