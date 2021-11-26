import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  OverlayTrigger,
  Tooltip,
  Dropdown,
  NavLink,
  Accordion,
  Card,
} from 'react-bootstrap'
import $ from 'jquery'
import 'magnific-popup'
import classNames from 'classnames'
import Slider from 'react-slick'

const gallerytip = <Tooltip>Gallery</Tooltip>
const bedstip = <Tooltip>Beds</Tooltip>
const bathstip = <Tooltip>Bathrooms</Tooltip>
const areatip = <Tooltip>Square Feet</Tooltip>


class Listingwrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showmore: false,
      nav1: null,
      nav2: null,
    }
    this.showmoretoggle = this.showmoretoggle.bind(this)
  }
  showmoretoggle() {
    this.setState({
      showmore: !this.state.showmore,
    })
  }
  componentDidMount() {
    function popup() {
      $('.gallery-thumb').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        },
      })
    }
    if (this.props.mainslide && this.props.thumbslider) {
      popup()
    }
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }
  render() {
    const { mainslider, thumbslider, listing, recent } = this.props
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    }

    const settingsthumb = {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }
    return (
      <div className='section listing-wrapper'>
        <div className='container'>
          <div className='row'>
            {/* Listings Start */}
            <div className='col-lg-8'>
              <div className='listing-thumbnail'>
                <Slider
                  className='listing-thumbnail-slider-main col-12'
                  asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}
                  {...settings}
                >
                  {mainslider.map((item, i) => (
                    <img src={item.img} alt='listing' />
                  ))}
                </Slider>
                <Slider
                  className='listing-thumbnail-slider-nav'
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  {...settingsthumb}
                >
                  {thumbslider.map((item, i) => (
                    <div key={i} className='slider-thumbnail-item col-12'>
                      <img src={item.img} alt='listing' />
                    </div>
                  ))}
                </Slider>
              </div>
              {/* Content Start */}
              <div className='listing-content'>
                <h4>Описание объекта</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: listing.description,
                  }}
                />
              </div>
              {/* Content End */}

              <div className='section section-padding acr-listing-features'>
                <h4>Характеристики</h4>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='listing-feature-wrapper'>
                      <div className='listing-feature'>
                        <i className='flaticon-picture' />
                        <h6 className='listing-feature-label'>Тип объекта</h6>
                        <span className='listing-feature-value'>
                          {listing &&
                            listing.category &&
                            listing.category.title &&
                            listing.category.title}
                        </span>
                      </div>
                      <div className='listing-feature'>
                        <i className='flaticon-ruler' />
                        <h6 className='listing-feature-label'>Метраж</h6>
                        <span className='listing-feature-value'>
                          {listing && listing.area && listing.area}
                        </span>
                      </div>
                      <div className='listing-feature'>
                        <i className='flaticon-key' />
                        <h6 className='listing-feature-label'>Id объекта</h6>
                        <span className='listing-feature-value'>
                          {listing && listing.unique_id && listing.unique_id}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='listing-feature-wrapper'>
                      <div className='listing-feature'>
                        <i className='flaticon-bathroom' />
                        <h6 className='listing-feature-label'>Санузлов</h6>
                        <span className='listing-feature-value'>
                          {listing && listing.closets && listing.closets}
                        </span>
                      </div>
                      <div className='listing-feature'>
                        <i className='flaticon-pillow' />
                        <h6 className='listing-feature-label'>Спален</h6>
                        <span className='listing-feature-value'>
                          {listing && listing.rooms && listing.rooms}
                        </span>
                      </div>
                      <div className='listing-feature'>
                        <i className='flaticon-mailbox' />
                        <h6 className='listing-feature-label'>Регион</h6>
                        <span className='listing-feature-value'>
                          {listing &&
                            listing.region &&
                            listing.region.title &&
                            listing.region.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {listing && listing.video && (
                <div className='section pt-0'>
                  <h4>Видео объекта</h4>

                  <div className='embed-responsive embed-responsive-21by9'>
                    <iframe
                      title='video'
                      className='embed-responsive-item'
                      src={`https://www.youtube.com/embed/${listing.video}`}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Listings End */}
            {/* Sidebar Start */}
            <div className='col-lg-4'>
              <div className='sidebar sticky-sidebar'>
                <div className='sidebar-widget'>
                  <h5>Новые объекты</h5>
                  {/* Listing Start */}
                  {recent &&
                    recent.map((item, i) => (
                      <div key={i} className='listing listing-list'>
                        <div className='listing-thumbnail'>
                          <Link to={`/listing/${item.id}`}>
                            <img src={item.tmb_wallpaper} alt='listing' />
                          </Link>
                        </div>
                        <div className='listing-body'>
                          <h6 className='listing-title'>
                            {' '}
                            <Link to={`/listing/${item.id}`} title={item.name}>
                              {item.name}
                            </Link>{' '}
                          </h6>
                          <span className='listing-price'>
                            {`€${item.price}`}
                            {item.purpose.title == 'Посуточная аренда'
                              ? '/день'
                              : item.purpose.title == 'Продажа'
                              ? ''
                              : '/месяц'}
                          </span>
                        </div>
                      </div>
                    ))}
                  {/* Listing End */}
                </div>
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
    )
  }
}

export default Listingwrapper
