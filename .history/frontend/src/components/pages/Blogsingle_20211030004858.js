import React, { useEffect, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../sections/blogsingle/Breadcrumb';
import Content from '../sections/blogsingle/Content';
import { connect } from 'react-redux'
import { load_single_article } from '../../redux/actions/articles'

const Blogsingle = ({
  article,
load_single_article,
}) => {

  useEffect(() => {
    load_single_article()
  }, [])
    return (
      <Fragment>
        <MetaTags>
          <title>LuxRealAdria | Название статьи</title>
          <meta name='description' content='#' />
        </MetaTags>
        {article && <Breadcrumb title={article.title} wallpaper={article.image} />}
        {<Content />}
      </Fragment>
    )
}

const mapStateToProps = state => ({
  article: state.articles.article,
})

export default connect(mapStateToProps, { load_single_article })(Blogsingle)
