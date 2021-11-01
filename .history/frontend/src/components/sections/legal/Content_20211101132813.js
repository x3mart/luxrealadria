import React, { Component } from 'react'

const Content = ({ items }) => {
  return (
    <div className='section'>
      <div className='container'>
        {items && items.map(item => 
          (<div
            className='row pb-3 pt-3'
            style={{ borderBottom: '1px solid grey' }}
          >
            <div className='col-4'>{item.title}</div>
            <div className='col-8' dangerouslySetInnerHTML={{ __html: item.body}} />
          </div>)
        )}
        
      </div>
    </div>
  )
}

export default Content
