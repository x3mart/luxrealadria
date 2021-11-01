import React, { useState, useEffect, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/bloglist/Content';
import { connect } from 'react-redux'
import { load_articles_page } from '../../redux/actions/pages'

const Bloglist = ({ articles_page, load_articles_page }) => {
  const [articlesPage, setArticlesPage] = useState({})
  const [wallpaper, setWallpaper] = useState('')
  const [title, setTitle] = useState('')
  useEffect(() => {
    load_articles_page()
  }, [])

  useEffect(() => {
    if (articles_page) {
      setArticlesPage(articles_page)
      setWallpaper(articles_page.image)
      setTitle(articles_page.title)
    }
  }, [articles_page])
  return (
    <Fragment>
      <MetaTags>
        <title>LuxRealAdria | Полезные статьи</title>
        <meta name='description' content='#' />
      </MetaTags>
      {articlesPage && (
        <>
          <Breadcrumb title={title} wallpaper={wallpaper} />
          <Content page={articlesPage} />
        </>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  articles_page: state.pages.articles_page,
})

export default connect(mapStateToProps, { load_articles_page })(Bloglist)
