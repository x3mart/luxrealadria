import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap';
import Slider from 'react-slick';
import { connect } from 'react-redux'
import { load_single_property } from '../../../redux/actions/listings'


const bedstip = (
    <Tooltip>
        Спальни
    </Tooltip>
);
const bathstip = (
    <Tooltip>
        Санузлы
    </Tooltip>
);
const areatip = (
    <Tooltip>
        Кв. метров
    </Tooltip>
);

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
  load_listing_data = id => {
    load_single_property(id)
  }
  render() {
    const { home_page } = this.props
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
            <h5 className='custom-primary'>В тренде</h5>
            <h2 className='title'>Наши лучшие объекты</h2>
          </div>
          <Slider
            className='top-listings-slider col-12'
            ref={c => (this.slider = c)}
            {...settings}
          >
            {/* Top Item Start */}
            {home_page.trends.map((item, i) => (
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
                              onClick={() => this.load_listing_data(item.id)}
                            >
                              {item.name}
                            </Link>{' '}
                          </h5>

                          <span className='listing-price'>
                            {`€${item.price}`}
                            <span>
                              {item.purpose.title == 'Посуточная аренда'
                                ? '/день'
                                : item.purpose.title == 'Продажа'
                                ? ''
                                : '/месяц'}
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
                                    {new Intl.NumberFormat().format(item.area)}
                                  </span>
                                </div>
                              </OverlayTrigger>
                            )}
                          </div>
                          <div className='listing-gallery-wrapper'>
                            <Link
                              to={`/listing/${item.id}`}
                              className='btn-custom btn-sm secondary'
                              onClick={() => this.load_listing_data(item.id)}
                            >
                              Подробнее
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
})

export default connect(mapStateToProps, { load_single_property })(Toplistings)
