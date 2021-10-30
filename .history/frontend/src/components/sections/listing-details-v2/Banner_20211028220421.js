import React, { Component } from 'react';

const Banner = ({listing}) => {
    return (
      <div
        className='subheader subheader-2 bg-cover bg-center dark-overlay'
        style={{
          backgroundImage: 'url(' + listing.wallpaper + ')',
        }}
      >
        <div className='container'>
          <div className='subheader-inner'>
            <span className='listing-badge rent'>{listing.purpose.title}</span>
            <h1 className='text-white'>{listing.name}</h1>
            {listing.address}
            <span className='listing-address'>
              {' '}
              <i className='fas fa-map-marker-alt' /> {listing.address}{' '}
            </span>
          </div>
        </div>
      </div>
    )
}

export default Banner;