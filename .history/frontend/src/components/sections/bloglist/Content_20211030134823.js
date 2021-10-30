import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { blogblock } from '../../../data/blog.json'
import Sidebar from '../../layouts/Blogsidebar'
import classNames from 'classnames'
import Loader from '../../layouts/Loader'
import { connect } from 'react-redux'
import {
  load_all_articles,
  load_articles_by_page,
} from '../../../redux/actions/articles'

const Content = ({ load_all_articles, load_articles_by_page, articles }) => {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    load_all_articles()

    let timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if()
  })

  const handleClick = n => {
    let data = load_articles_by_page(n)
    setCurrentPage(n)
    // let paginationContent = event.target.closest('.pagination-content')

    if (data) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  // const handleClick(event) {
  //     var paginationContent = event.target.closest('.pagination-content');

  //     if (paginationContent) {
  //         paginationContent.scrollIntoView();
  //     }

  //     setLoading(true)
  //     setTimeout(() => {
  //         this.setState({
  //             currentPage: Number(event.target.getAttribute('data-page')),
  //             loading: false
  //         });
  //     }, 1000);

  // }

  // Logic for displaying items
  const indexOfLastitem = currentPage * itemsPerPage
  const indexOfFirstitem = indexOfLastitem - itemsPerPage
  const currentitems = items.slice(indexOfFirstitem, indexOfLastitem)

  const RenderedItems = () => {
    if (items) {
      return items.map((item, i) => {
        return (
          <article key={i} className='post'>
            <div className='post-body'>
              <h5 className='post-title'>
                {' '}
                <Link to={`/articles/${item.id}`}>{item.title}</Link>{' '}
              </h5>
              <p className='post-text'>{item.text}</p>
              <div className='post-controls'>
                <Link
                  to={`/articles/${item.id}`}
                  className='btn-custom secondary btn-sm'
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </article>
        )
      })
    }
  }

  const pageNumbers = []
  if (articles) {
    for (let i = 1; i <= Math.ceil(articles.count / itemsPerPage); i++) {
      pageNumbers.push(i)
    }
  }
  const RenderPagination = () => {
    const renderPagination = pageNumbers.map(number => {
      const activeCondition = currentPage === number ? 'active' : ''
      return (
        <Fragment key={number}>
          {pageNumbers.length > 1 ? (
            <li
              className={classNames('page-item', { active: activeCondition })}
            >
              <Link
                className='page-link'
                to='#'
                data-page={number}
                onClick={() => handleClick(number)}
              >
                {number}
              </Link>
            </li>
          ) : (
            ''
          )}
        </Fragment>
      )
    })

    return renderPagination
  }

  return (
    <div className='section posts pagination-content'>
      <div className='container'>
        <div className='row'>
          {/* Posts Start */}
          <div>
            {/* Post Start */}
            {loading === false ? <RenderedItems /> : <Loader />}
            {/* Post End */}
            {/* Pagination Start */}
            {pageNumbers.length > 1 ? (
              <ul className='pagination'>
                {/* Prev */}
                {/* to show previous, we need to be on the 2nd or more page */}
                {articles && articles.previous ? (
                  <li className='page-item'>
                    <Link
                      className='page-link'
                      to='#'
                      data-page={currentPage - 1}
                      onClick={() => handleClick(currentPage - 1)}
                    >
                      <i className='fas fa-chevron-left' />
                    </Link>
                  </li>
                ) : (
                  ''
                )}
                {/* Prev */}
                <RenderPagination />
                {/* Next */}
                {/* to show next, we should not be on the last page */}
                {articles && articles.next ? (
                  <li className='page-item'>
                    <Link
                      className='page-link'
                      to='#'
                      data-page={parseInt(currentPage + 1)}
                      onClick={() => handleClick(currentPage + 1)}
                    >
                      <i className='fas fa-chevron-right' />
                    </Link>
                  </li>
                ) : (
                  ''
                )}
                {/* Next */}
              </ul>
            ) : (
              ''
            )}
            {/* Pagination End */}
          </div>
          {/* Posts End */}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.listings.articles,
})

export default connect(mapStateToProps, {
  load_all_articles,
  load_articles_by_page,
})(Content)
