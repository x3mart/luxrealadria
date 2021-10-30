import React, { Component } from 'react'

const Content = ({ items }) => {
  console.log(items)
  return (
    <div className='section'>
      <div className='container'>
        {items && items.map(
          <div
            className='row pb-3 pt-3'
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className='col-4'>Основной телефон:</div>
            <div className='col-8'>{items.phone_basic}</div>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Content
