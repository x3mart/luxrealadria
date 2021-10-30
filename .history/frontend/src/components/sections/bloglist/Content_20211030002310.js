import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { blogblock } from '../../../data/blog.json';
import Sidebar from '../../layouts/Blogsidebar';
import classNames from 'classnames';
import Loader from '../../layouts/Loader';

const Content = () => {

    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    load_all_properties()

    let timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleClick = n => {
    let data = load_properties_by_page(n)
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
              <Link to={``}'1'>{item.title}</Link>{' '}
            </h5>
            <p className='post-text'>{item.text}</p>
            <div className='post-controls'>
              <Link to='/articles/1' className='btn-custom secondary btn-sm'>
                Подробнее
              </Link>
            </div>
          </div>
        </article>









            <div key={i} className='listing listing-list w-100'>
              <div className='listing-thumbnail'>
                <Link to={`/listing/${item.id}`}>
                  <img
                    src={item.tmb_wallpaper}
                    alt={item.name}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Link>
                <div className='listing-badges'>
                  {item.is_trend ? (
                    <span className='listing-badge rent'>В тренде</span>
                  ) : (
                    ''
                  )}
                  {item.statuses &&
                    item.statuses.map(status => (
                      <span
                        key={status.id}
                        className='listing-badge'
                        style={{ backgroundColor: status.color }}
                      >
                        {' '}
                        {status.title}
                      </span>
                    ))}
                </div>
              </div>
              <div className='listing-body'>
                <h5 className='listing-title'>
                  {' '}
                  <Link to={`/listing/${item.id}`} title={item.name}>
                    {truncate(item.name)}
                  </Link>{' '}
                </h5>
                <span className='listing-price'>
                  {`€${item.price}`}
                  <span>
                    {item.purpose.title == 'Посуточная аренда'
                      ? '/день'
                      : item.purpose.title == 'Продажа'
                      ? ''
                      : '/месяц'}
                  </span>{' '}
                </span>
                <p className='listing-text'>{item.text}</p>
                <div className='acr-listing-icons'>
                  <OverlayTrigger overlay={bedstip}>
                    <div className='acr-listing-icon'>
                      <i className='flaticon-bedroom' />
                      <span className='acr-listing-icon-value'>
                        {item.rooms}
                      </span>
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger overlay={bathstip}>
                    <div className='acr-listing-icon'>
                      <i className='flaticon-bathroom' />
                      <span className='acr-listing-icon-value'>
                        {item.closets}
                      </span>
                    </div>
                  </OverlayTrigger>
                  <OverlayTrigger overlay={areatip}>
                    <div className='acr-listing-icon'>
                      <i className='flaticon-ruler' />
                      <span className='acr-listing-icon-value'>
                        {item.area}
                      </span>
                    </div>
                  </OverlayTrigger>
                </div>
                <div className='listing-gallery-wrapper'>
                  <Link
                    to={`/listing/${item.id}`}
                    className='btn-custom btn-sm secondary'
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }
    }

    const renderitems = currentitems.map((item, i) => {
      return (
        <article key={i} className='post'>
          <div className='post-body'>
            <h5 className='post-title'>
              {' '}
              <Link to='/articles/1'>{item.title}</Link>{' '}
            </h5>
            <p className='post-text'>{item.text}</p>
            <div className='post-controls'>
              <Link to='/articles/1' className='btn-custom secondary btn-sm'>
                Подробнее
              </Link>
            </div>
          </div>
        </article>
      )
    })

    // Logic for displaying page numbers
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i)
    }
    const renderPagination = pageNumbers.map(number => {
      const activeCondition = this.state.currentPage === number ? 'active' : ''
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
                onClick={this.handleClick}
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
    return (
      <div className='section posts pagination-content'>
        <div className='container'>
          <div className='row'>
            {/* Posts Start */}
            <div>
              {/* Post Start */}
              {this.state.loading === false ? renderitems : <Loader />}
              {/* Post End */}
              {/* Pagination Start */}
              {pageNumbers.length > 1 ? (
                <ul className='pagination'>
                  {/* Prev */}
                  {/* to show previous, we need to be on the 2nd or more page */}
                  {pageNumbers.length > 1 && this.state.currentPage !== 1 ? (
                    <li className='page-item'>
                      <Link
                        className='page-link'
                        to='#'
                        data-page={this.state.currentPage - 1}
                        onClick={this.handleClick}
                      >
                        <i className='fas fa-chevron-left' />
                      </Link>
                    </li>
                  ) : (
                    ''
                  )}
                  {/* Prev */}
                  {renderPagination}
                  {/* Next */}
                  {/* to show next, we should not be on the last page */}
                  {pageNumbers.length > 1 &&
                  this.state.currentPage !== pageNumbers.length ? (
                    <li className='page-item'>
                      <Link
                        className='page-link'
                        to='#'
                        data-page={parseInt(this.state.currentPage + 1)}
                        onClick={this.handleClick}
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

export default Content;