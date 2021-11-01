import React, { useState, useEffect, Fragment } from 'react'
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/listinglist/Content';
import { connect } from 'react-redux'
import { load_properties_page } from '../../redux/actions/pages';

const Listinglist = ({ load_properties_page, properties_page }) => {
  useEffect(() => {
    load_properties_page()
  }, [])
  const [wallpaper, setWallpaper] = useState('')

  const [title, setTitle] = useState('')
  useEffect(() => {
    if (properties_page) {
      setWallpaper(properties_page.wallpaper)
      setTitle(properties_page.title)
    }
  }, [properties_page])
  return (
    <Fragment>
      <MetaTags>
        <title>LuxRealAdria | Объекты недвижимости</title>
        <meta name='description' content='#' />
      </MetaTags>
      <Breadcrumb
        breadcrumb={{ pagename: 'Объекты недвижимости' }}
        title={title}
        wallpaper={wallpaper}
      />
      <Content />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  properties_page: state.pages.properties_page,
})

export default connect(mapStateToProps, { load_properties_page })(Listinglist)