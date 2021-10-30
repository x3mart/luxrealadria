import React, { useEffect, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../sections/blogsingle/Breadcrumb';
import Content from '../sections/blogsingle/Content';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_single_article } from '../../redux/actions/articles'

const Blogsingle = ({
  article,
load_single_article,
}) => {

  const location = useLocation()

  useEffect(() => {
    const id =
      location.pathname.split('/')[location.pathname.split('/').length - 1]
    load_single_article(id)
  }, [location])

    return (
      <Fragment>
        <MetaTags>
          <title>LuxRealAdria | Название статьи</title>
          <meta name='description' content='#' />
        </MetaTags>
        {article && (
          <Breadcrumb title={article.title} wallpaper={article.image} />
        )}
        {article && <Content article={article.body} />}
      </Fragment>
    )
}

const mapStateToProps = state => ({
  article: state.articles.article,
})

export default connect(mapStateToProps, { load_single_article })(Blogsingle)
