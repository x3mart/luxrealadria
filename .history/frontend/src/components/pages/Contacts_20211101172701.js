import React, { useState, useEffect, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Breadcrumb from '../layouts/Breadcrumb'
import Content from '../sections/contacts/Content'
import { connect } from 'react-redux'

const Contacts = ({ home_page }) => {
  const [contact, setContact] = useState({})

  useEffect(() => {
    if (home_page) {
      setContact(home_page.contact)
    }
  }, [home_page])
    
      return (
        <Fragment>
          <MetaTags>
            <title>LuxRealAdria | Контакты</title>
            <meta name='description' content='#' />
          </MetaTags>
          {contact && (
            <>
              <Breadcrumb
                breadcrumb={{ pagename: 'Контакты' }}
                wallpaper={contact.wallpaper}
                title={}={contact.wallpaper}
              />
              <Content contact={contact} />
            </>
          )}
        </Fragment>
      )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps, )(Contacts)
