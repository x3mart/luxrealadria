import React, { Component } from 'react'

const Content = ({contact}) => {
  console.log(contact)
  return (
    <div className='section'>
      <div className='container'>
        {contact && contact.phone_basic && (
          <div className='row pb-3 pt-3' style={{ borderBottom: '1px solid grey' }}>
            <div className='col-4'>Основной телефон:</div>
            <div className='col-8'>{contact.phone_basic}</div>
          </div>
        )}
        {contact && contact.phone_additional && (
          <div className='row pb-3 pt-3' style={{ borderBottom: '1px solid grey' }}>
            <div className='col-4'>Дополнительный телефон:</div>
            <div className='col-8'>{contact.phone_additional}</div>
          </div>
        )}
        {contact && contact.address_basic && (
          <div className='row pb-3 pt-3' style={{ borderBottom: '1px solid grey' }}>
            <div className='col-4'>Основной адрес:</div>
            <div className='col-8'>{contact.address_basic}</div>
          </div>
        )}
        {contact && contact.address_additional && (
          <div className='row pb-3 pt-3' style={{ borderBottom: '1px solid grey' }}>
            <div className='col-4'>Филиал:</div>
            <div className='col-8'>{contact.address_additional}</div>
          </div>
        )}
        {contact && contact.email && (
          <div className='row pb-3 pt-3' style={{ borderBottom: '1px solid grey' }}>
            <div className='col-4'>"Электронная почта":</div>
            <div className='col-8'>{contact.email}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Content
