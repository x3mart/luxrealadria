import React, { useEffect, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Content from '../sections/home/Content'
import { connect } from 'react-redux'


const Home = () => {
  

  return (
    <Fragment>
      <MetaTags>
        <title>LuxRealAdria | Главная</title>
        <meta name='description' content='#' />
      </MetaTags>
      
      <Content />
      
    </Fragment>
  )
}

export default connect(null,)(Home)
