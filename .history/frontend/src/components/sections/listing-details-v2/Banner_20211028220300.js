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
            <span className='listing-badge rent'>{listing.name}</span>
            <h1 className='text-white'>{listing.name}</h1>
            <span className='listing-address'>
              {' '}
              <i className='fas fa-map-marker-alt' /> Iris Watson P.O. Box 283
              8562 Fusce Rd. Frederick Nebraska 20620{' '}
            </span>
          </div>
        </div>
      </div>
    )
}

export default Banner;