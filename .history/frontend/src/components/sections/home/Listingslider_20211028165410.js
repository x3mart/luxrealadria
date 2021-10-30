import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import Slider from 'react-slick';
import listing from '../../../data/listings.json';
import { connect } from 'react-redux'

const bedstip = <Tooltip>Спальни</Tooltip>
const bathstip = <Tooltip>Санузлы</Tooltip>
const areatip = <Tooltip>Кв. метров</Tooltip>

class Listingslider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
      const { home_page } = this.props
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
        return (
          <div className='section section-padding listings'>
            <div className='container'>
              <div className='section-title-wrap section-header flex-header'>
                <div className='section-title-text'>
                  <h5 className='custom-primary'>Недавно добавленные</h5>
                  <h2 className='title'>Новые предложения</h2>
                </div>
                <div className='acr-arrows primary-arrows'>
                  <i
                    className='slider-prev fas fa-arrow-left slick-arrow'
                    onClick={this.previous}
                  />
                  <i
                    className='slider-next fas fa-arrow-right slick-arrow'
                    onClick={this.next}
                  />
                </div>
              </div>
              <Slider
                className='listings-slider'
                ref={c => (this.slider = c)}
                {...settings}
              >
                {/* Listing Start */}
                {home_page.recently_added.map((item, i) => (
                  <div key={i} className='col-12'>
                    <div className='listing'>
                      <div className='listing-thumbnail'>
                        <Link to={`/listing/${item.id}`}>
                          <img src={item.tmb_wallpaper} alt={item.name} />
                        </Link>
                        <div className='listing-badges'></div>
                          {item.is_trend ? (
                            <span className='listing-badge rent'>В тренде</span>
                          ) : (
                            ''
                          )}
                          {item.statuses && item.statuses.map(status => ())}
                          {item.pending === true ? (
                            <span className='listing-badge pending'>
                              {' '}
                              Pending
                            </span>
                          ) : (
                            ''
                          )}
                          {item.rental === true ? (
                            <span className='listing-badge rent'> Rental</span>
                          ) : (
                            ''
                          )}
                        </div>
                        <div className='listing-controls'>
                          <Link to='#' className='favorite'>
                            <i className='far fa-heart' />
                          </Link>
                          <Link to='#' className='compare'>
                            <i className='fas fa-sync-alt' />
                          </Link>
                        </div>
                      </div>
                      <div className='listing-body'>
                        <div className='listing-author'>
                          <img
                            src={process.env.PUBLIC_URL + '/' + item.authorimg}
                            alt='author'
                          />
                          <div className='listing-author-body'>
                            <p>
                              {' '}
                              <Link to='#'>{item.authorname}</Link>{' '}
                            </p>
                            <span className='listing-date'>
                              {item.postdate}
                            </span>
                          </div>
                          <Dropdown className='options-dropdown'>
                            <Dropdown.Toggle as={NavLink}>
                              <i className='fas fa-ellipsis-v' />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dropdown-menu-right'>
                              <ul>
                                <li>
                                  {' '}
                                  <Link to='tel:+123456789'>
                                    {' '}
                                    <i className='fas fa-phone' /> Call Agent
                                  </Link>{' '}
                                </li>
                                <li>
                                  {' '}
                                  <Link to='mailto:+123456789'>
                                    {' '}
                                    <i className='fas fa-envelope' /> Send
                                    Message
                                  </Link>{' '}
                                </li>
                                <li>
                                  {' '}
                                  <Link to='/listing-details-v1'>
                                    {' '}
                                    <i className='fas fa-bookmark' /> Book Tour
                                  </Link>{' '}
                                </li>
                              </ul>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <h5 className='listing-title'>
                          {' '}
                          <Link to='/listing-details-v1' title={item.title}>
                            {item.title}
                          </Link>{' '}
                        </h5>
                        <span className='listing-price'>
                          {new Intl.NumberFormat().format(
                            item.monthlyprice.toFixed(2)
                          )}
                          $ <span>/month</span>{' '}
                        </span>
                        <p className='listing-text'>{item.text}</p>
                        <div className='acr-listing-icons'>
                          <OverlayTrigger overlay={bedstip}>
                            <div className='acr-listing-icon'>
                              <i className='flaticon-bedroom' />
                              <span className='acr-listing-icon-value'>
                                {item.beds}
                              </span>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={bathstip}>
                            <div className='acr-listing-icon'>
                              <i className='flaticon-bathroom' />
                              <span className='acr-listing-icon-value'>
                                {item.bathrooms}
                              </span>
                            </div>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={areatip}>
                            <div className='acr-listing-icon'>
                              <i className='flaticon-ruler' />
                              <span className='acr-listing-icon-value'>
                                {new Intl.NumberFormat().format(item.area)}
                              </span>
                            </div>
                          </OverlayTrigger>
                        </div>
                        <div className='listing-gallery-wrapper'>
                          <Link
                            to='/listing-details-v1'
                            className='btn-custom btn-sm secondary'
                          >
                            View Details
                          </Link>
                          <OverlayTrigger overlay={gallerytip}>
                            <Link to='#' className='listing-gallery'>
                              {' '}
                              <i className='fas fa-camera' />{' '}
                            </Link>
                          </OverlayTrigger>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Listing End */}
              </Slider>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Listingslider)
