import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap'
import Slider from 'react-slick'
import { connect } from 'react-redux'

class Toplistings extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    const { home_page, lang } = this.props
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
          },
        },
      ],
    }

    let bedstip = <Tooltip>Спальни</Tooltip>
    let bathstip = <Tooltip>Санузлы</Tooltip>
    let areatip = <Tooltip>Площадь</Tooltip>
    let daily = '/день'
    let monthly = '/месяц'
    let trend = 'В тренде'

    if (lang === 'ru') {
      bedstip = <Tooltip>Спальни</Tooltip>
      bathstip = <Tooltip>Санузлы</Tooltip>
      areatip = <Tooltip>Площадь кв м</Tooltip>
      daily = '/день'
      monthly = '/месяц'
      trend = 'В тренде'
    } else if (lang === 'en') {
      bedstip = <Tooltip>Beds</Tooltip>
      bathstip = <Tooltip>Baths</Tooltip>
      areatip = <Tooltip>Area sq/m</Tooltip>
      daily = ' per day'
      monthly = ' per month'
      trend = 'Trendy'
    } else if (lang === 'mn') {
      bedstip = <Tooltip>Beds</Tooltip>
      bathstip = <Tooltip>Baths</Tooltip>
      areatip = <Tooltip>Area sq/m</Tooltip>
      daily = ' dnevno'
      monthly = ' mjesecno'
      trend = 'Trend'
    }

    return (
      <div className='section light-bg'>
        <div className='container top-listings'>
          <div className='acr-arrows'>
            <i
              className='slider-prev fas fa-arrow-left slick-arrow'
              onClick={this.previous}
            />
            <i
              className='slider-next fas fa-arrow-right slick-arrow'
              onClick={this.next}
            />
          </div>
          <div className='section-title-wrap section-header'>
            <h5 className='custom-primary'>
              {home_page && home_page.trend_title}
            </h5>
            <h2 className='title'>{home_page && home_page.trend_subtitle}</h2>
          </div>
          <Slider
            className='top-listings-slider col-12'
            ref={c => (this.slider = c)}
            {...settings}
          >
            {/* Top Item Start */}
            {home_page &&
              home_page.trends &&
              home_page.trends.map((item, i) => (
                <div key={i}>
                  <div
                    className='acr-top-listing-item bg-cover dark-overlay bg-center'
                    style={{
                      backgroundImage: 'url(' + item.wallpaper + ')',
                    }}
                  >
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='acr-top-listing-body listing'>
                          <div className='listing-body'>
                            <h5 className='listing-title'>
                              {' '}
                              <Link
                                to={`/listing/${item.id}`}
                                title={item.name}
                              >
                                {item.name}
                              </Link>{' '}
                            </h5>
                            <span className='listing-price'>
                              {`€${item.price}`}
                              <span>
                                {item.purpose.title == 'Посуточная аренда' ||
                                item.purpose.title == 'Per Day Rent' ||
                                item.purpose.title == 'Najam po danu'
                                  ? daily
                                  : item.purpose.title == 'Продажа' ||
                                    item.purpose.title == 'For Sale' ||
                                    item.purpose.title == 'Na prodaju'
                                  ? ''
                                  : monthly}
                              </span>{' '}
                            </span>
                            {item.short_description && (
                              <div
                                className='listing-text'
                                dangerouslySetInnerHTML={{
                                  __html: item.short_description,
                                }}
                              />
                            )}
                            <div className='acr-listing-icons'>
                              <OverlayTrigger overlay={bedstip}>
                                <div className='acr-listing-icon'>
                                  <i className='flaticon-bedroom' />
                                  <span className='acr-listing-icon-value'>
                                    {item.rooms}
                                  </span>
                                </div>
                              </OverlayTrigger>
                              <OverlayTrigger overlay={bathstip}>
                                <div className='acr-listing-icon'>
                                  <i className='flaticon-bathroom' />
                                  <span className='acr-listing-icon-value'>
                                    {item.closets}
                                  </span>
                                </div>
                              </OverlayTrigger>
                              {item.area && (
                                <OverlayTrigger overlay={areatip}>
                                  <div className='acr-listing-icon'>
                                    <i className='flaticon-ruler' />
                                    <span className='acr-listing-icon-value'>
                                      {new Intl.NumberFormat().format(
                                        item.area
                                      )}
                                    </span>
                                  </div>
                                </OverlayTrigger>
                              )}
                            </div>
                            <div className='listing-gallery-wrapper'>
                              <Link
                                to={`/listing/${item.id}`}
                                className='btn-custom btn-sm secondary'
                              >
                                {home_page.more_button}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {/* Top Item End */}
          </Slider>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  home_page: state.home.home,
  lang: state.language.language,
})

export default connect(mapStateToProps)(Toplistings)
