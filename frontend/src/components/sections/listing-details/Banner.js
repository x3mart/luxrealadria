import React, { Component } from 'react'

import { numberWithSpaces } from '../../../helper/helper'

const Banner = ({ listing }) => {
  return (
    <>
      {listing && (
        <div
          className='subheader subheader-2 bg-cover bg-center dark-overlay'
          style={{
            backgroundImage: 'url(' + listing.wallpaper + ')',
          }}
        >
          <div className='container'>
            <div className='subheader-inner'>
              <span className='listing-badge rent'>
                {listing.purpose && listing.purpose.title}
              </span>
              <h1 className='text-white'>{listing.name}</h1>
              <h2 className='text-white'>€ {numberWithSpaces(listing.price)}</h2>
              {listing.address && (
                <span className='listing-address'>
                  {' '}
                  <i className='fas fa-map-marker-alt' /> {listing.address}{' '}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Banner
