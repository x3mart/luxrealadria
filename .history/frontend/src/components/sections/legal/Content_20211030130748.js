import React, { Component } from 'react'

const Content = ({ items }) => {
  console.log(items)
  return (
    <div className='section'>
      <div className='container'>
        {items && items.phone_basic && (
          <div
            className='row pb-3 pt-3'
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className='col-4'>Основной телефон:</div>
            <div className='col-8'>{items.phone_basic}</div>
          </div>
        )}
        {items && items.phone_additional && (
          <div
            className='row pb-3 pt-3'
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className='col-4'>Дополнительный телефон:</div>
            <div className='col-8'>{items.phone_additional}</div>
          </div>
        )}
        {items && items.address_basic && (
          <div
            className='row pb-3 pt-3'
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className='col-4'>Основной адрес:</div>
            <div className='col-8'>{items.address_basic}</div>
          </div>
        )}
        {items && items.address_additional && (
          <div
            className='row pb-3 pt-3'
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className='col-4'>Филиал:</div>
            <div className='col-8'>{items.address_additional}</div>
          </div>
        )}
        {items && items.email && (
          <div
            className='row pb-3 pt-3'
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className='col-4'>Электронная почта:</div>
            <div className='col-8'>{items.email}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Content
