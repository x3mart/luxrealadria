import React, { Component } from 'react'

const Content = ({contact}) => {
  console.log(contact)
  return (
    <div className='section'>
      <div className='container'>
        {contact && contact.phone_basic && (
          <div className='row pb-3 pt-3' style={{ borderBottom: '1px solid grey' }}>
            <div className='lg-col-4'>Основной телефон:</div>
            <div className='lg-col-8 ml-3'>{contact.phone_basic}</div>
          </div>
        )}
        {contact && contact.phone_additional && (
          <div className='row pb-3 pt-3' style={{ borderBottom: '1px solid grey' }}>
            <div className='lg-col-4'>Основной телефон:</div>
            <div className='lg-col-8 ml-3'>{contact.phone_additional}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Content
