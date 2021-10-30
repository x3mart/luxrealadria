import React, { useEffect, useState, Fragment } from 'react'
import Banner from './Banner'
import Listingwrapper from './Listingwrapper'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_single_property } from '../../../redux/actions/listings'

const Content = ({ load_single_property, listing }) => {
  console.log(1)

  const [singleProperty, setSingleProperty] = useState({})
  const [propertyImages, setPropertyImages] = useState([])
  const [propertyThumbs, setPropertyThumbs] = useState([])
  const location = useLocation()

  useEffect(() => {
      const id = location.pathname.split('/')[location.pathname.split('/').length - 1]
      load_single_property(id)
  }, [])

  useEffect(() => {
      if(listing){
          setSingleProperty(listing)
          setPropertyImages(listing.property_gallary.map(item => ({
              i
          })))
      }
  }, [listing])


  return (
    <Fragment>
      {singleProperty && (
      <>
      <Banner listing={singleProperty}/>
      <Listingwrapper listing={singleProperty}/>
      </>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
  listing: state.listings.listing 
})

export default connect(mapStateToProps, { load_single_property })(Content)
