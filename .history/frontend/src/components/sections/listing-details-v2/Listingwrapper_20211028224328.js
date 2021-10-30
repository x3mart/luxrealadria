import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Dropdown, NavLink, Accordion, Card } from 'react-bootstrap';
import listing from '../../../data/listings.json';
import Calculator from '../../layouts/Calculator';
import $ from 'jquery';
import 'magnific-popup'
import classNames from 'classnames';
import Slider from 'react-slick';

const gallerytip = (
    <Tooltip>
        Gallery
    </Tooltip>
);
const bedstip = (
    <Tooltip>
        Beds
    </Tooltip>
);
const bathstip = (
    <Tooltip>
        Bathrooms
    </Tooltip>
);
const areatip = (
    <Tooltip>
        Square Feet
    </Tooltip>
);

// const mainslider = [
//     { img: 'assets/img/listing-single/2.jpg' },
//     { img: 'assets/img/listing-single/3.jpg' },
//     { img: 'assets/img/listing-single/4.jpg' },
//     { img: 'assets/img/listing-single/5.jpg' },
//     { img: 'assets/img/listing-single/6.jpg' },
// ];
// const thumbslider = [
//     { img: 'assets/img/listing-single/2-2.jpg' },
//     { img: 'assets/img/listing-single/3-2.jpg' },
//     { img: 'assets/img/listing-single/4-2.jpg' },
//     { img: 'assets/img/listing-single/5-2.jpg' },
//     { img: 'assets/img/listing-single/6-2.jpg' },
// ];

class Listingwrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showmore: false,
            nav1: null,
            nav2: null
        }
        this.showmoretoggle = this.showmoretoggle.bind(this)
    }
    showmoretoggle() {
        this.setState({
            showmore: !this.state.showmore
        })
    }
    componentDidMount() {
        function popup() {
            $('.gallery-thumb').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
            });
        }
        popup();
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    };
    render() {
        const {listing} = this.props

        const mainslider = listing.property_gallary.map(item => ({
            img: item.image
        }))
        const thumbslider = listing.property_gallary.map(item => ({
          img: item.tmb_image,
        }))


        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
        };
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
                    }
                },
            ]
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
                        <Link
                          key={i}
                          to={item.img}
                          className='slider-thumbnail-item gallery-thumb'
                        >
                          <img src={item.img} alt='listing' />
                        </Link>
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
                    <h4>Property Overview</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
                      <Link to='#'>Lorem Ipsum has been the industry's</Link>{' '}
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  {/* Content End */}

                  <div className='section section-padding pt-0 acr-listing-features'>
                    <h4>Features</h4>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6'>
                        <div className='listing-feature-wrapper'>
                          <div className='listing-feature'>
                            <i className='flaticon-picture' />
                            <h6 className='listing-feature-label'>
                              Propery Type
                            </h6>
                            <span className='listing-feature-value'>House</span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-bone' />
                            <h6 className='listing-feature-label'>
                              Pet Friendly
                            </h6>
                            <span className='listing-feature-value'>Yes</span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-chair' />
                            <h6 className='listing-feature-label'>Furnished</h6>
                            <span className='listing-feature-value'>Yes</span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-fan' />
                            <h6 className='listing-feature-label'>Cooling</h6>
                            <span className='listing-feature-value'>Yes</span>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='listing-feature-wrapper'>
                          <div className='listing-feature'>
                            <i className='flaticon-bathroom' />
                            <h6 className='listing-feature-label'>Bathrooms</h6>
                            <span className='listing-feature-value'>3</span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-pillow' />
                            <h6 className='listing-feature-label'>Bed Rooms</h6>
                            <span className='listing-feature-value'>4</span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-mailbox' />
                            <h6 className='listing-feature-label'>Mail box</h6>
                            <span className='listing-feature-value'>Yes</span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-ruler' />
                            <h6 className='listing-feature-label'>
                              Property Size
                            </h6>
                            <span className='listing-feature-value'>
                              3,000 Sqft
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type='button'
                      className={classNames(
                        'load-more-features btn-custom-2 light-grey btn-block',
                        { 'd-none': this.state.showmore }
                      )}
                      onClick={this.showmoretoggle}
                    >
                      Show More
                    </button>
                    <div
                      className={classNames('hidden-listing-features', {
                        'd-block': this.state.showmore,
                      })}
                    >
                      <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                          <div className='listing-feature'>
                            <i className='flaticon-key' />
                            <h6 className='listing-feature-label'>
                              Property Id
                            </h6>
                            <span className='listing-feature-value'>
                              BPFXQEI
                            </span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-garage' />
                            <h6 className='listing-feature-label'>Parking</h6>
                            <span className='listing-feature-value'>Yes</span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-history' />
                            <h6 className='listing-feature-label'>
                              Year Built
                            </h6>
                            <span className='listing-feature-value'>1979</span>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                          <div className='listing-feature'>
                            <i className='flaticon-new' />
                            <h6 className='listing-feature-label'>Condition</h6>
                            <span className='listing-feature-value'>New</span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-ruler' />
                            <h6 className='listing-feature-label'>Lot Size</h6>
                            <span className='listing-feature-value'>
                              89 Acres
                            </span>
                          </div>
                          <div className='listing-feature'>
                            <i className='flaticon-eye' />
                            <h6 className='listing-feature-label'>View</h6>
                            <span className='listing-feature-value'>
                              City View
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='section pt-0'>
                    <h4>Property Video</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap
                    </p>
                    <div className='embed-responsive embed-responsive-21by9'>
                      <iframe
                        title='video'
                        className='embed-responsive-item'
                        src={`https://www.youtube.com/embed/Sz_1tkcU0Co`}
                      />
                    </div>
                  </div>
                </div>
                {/* Listings End */}
                {/* Sidebar Start */}
                <div className='col-lg-4'>
                  <div className='sidebar sticky-sidebar'></div>
                </div>
                {/* Sidebar End */}
              </div>
            </div>
          </div>
        )
    }
}

export default Listingwrapper;