import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import Slider from 'react-slick';
import { connect } from 'react-redux'

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
      const { home_page, lang } = this.props
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
                {home_page &&
                  home_page.recently_added &&
                  home_page.recently_added.map((item, i) => (
                    <div key={i} className='col-12'>
                      <div className='listing'>
                        <div className='listing-thumbnail'>
                          <Link to={`/listing/${item.id}`}>
                            <img
                              src={item.tmb_wallpaper}
                              alt={item.name}
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </Link>
                          <div className='listing-badges'>
                            {item.is_trend ? (
                              <span className='listing-badge rent'>
                                {trend}
                              </span>
                            ) : (
                              ''
                            )}
                            {item.statuses &&
                              item.statuses.map(status => (
                                <span
                                  key={status.id}
                                  className='listing-badge'
                                  style={{ backgroundColor: status.color }}
                                >
                                  {' '}
                                  {status.title}
                                </span>
                              ))}
                          </div>
                        </div>
                        <div className='listing-body'>
                          <h5 className='listing-title'>
                            {' '}
                            <Link to={`/listing/${item.id}`} title={item.name}>
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
                              to={`/listing/${item.id}`}
                              className='btn-custom btn-sm secondary'
                            >
                              {home_page.more_button}
                            </Link>
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
  lang: state.language.language,
})

export default connect(mapStateToProps)(Listingslider)
