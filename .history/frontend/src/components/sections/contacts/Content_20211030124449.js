import React, { Component } from 'react'

const Content = ({contact}) => {
  console.log(contact)
  return (
    <div className='section'>
      <div className='container'>
        {contact && contact(<div className='row' style={{borderBottom: '1px solid grey'}}>
          <div className='lg-col-4'>

          </div>
          <div className='lg-col-8'>

          </div>

        </div>)}
      </div>
    </div>
  )
}

export default Content
