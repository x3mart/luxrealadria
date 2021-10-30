import React, { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap'
import Sidebar from '../../layouts/Shopsidebar'
import listing from '../../../data/listings.json'
import classNames from 'classnames'
import Loader from '../../layouts/Loader'
import { connect } from 'react-redux'
import { load_all_properties } from '../../../redux/actions/listings'

const gallerytip = <Tooltip>Gallery</Tooltip>
const gridtip = <Tooltip>Grid</Tooltip>
const listtip = <Tooltip>List</Tooltip>
const maptip = <Tooltip>Map</Tooltip>
const bedstip = <Tooltip>Спальни</Tooltip>
const bathstip = <Tooltip>Санузлы</Tooltip>
const areatip = <Tooltip>Площадь</Tooltip>

const Content = ({ filters, load_all_properties, listings }) => {
  const [filterValue, setFilterValue] = useState([])

  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(null)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [loading, setLoading] = useState([])

  const [listingFilter, setListingFilter] = useState([])

  const [priceValue, setPriceValue] = useState(null)

  useEffect(() => {
    if (filters) {
      setListingFilter(filters)
    }
  }, [filters])

  useEffect(() => {
    if (listings) {
      setItems(listings.results)
    }
  }, [listings])

  console.log(loading)
  console.log(currentPage)

  useEffect(() => {
    setLoading(true)
    load_all_properties()

    let timer = setTimeout(() => {
      setCurrentPage(1)
      setLoading(false)
    }, 2000)
    return () => {clearTimeout(timer)}
  }, [])

  const handleRange = e => {
    setPriceValue(e.target.value)
  }

  const truncate = (str) => {
    return str.length > 40 ? str.substring(0, 37) + "..." : str;
}

  const handleClick = event => {
    let paginationContent = event.target.closest('.pagination-content')

    if (paginationContent) {
      paginationContent.scrollIntoView()
    }

    
  }

  const RenderedItems = () => {
    if(items) {
      return items.map((item, i) => {
        return (
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
                    <span className='acr-listing-icon-value'>{item.rooms}</span>
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
                    <span className='acr-listing-icon-value'>{item.area}</span>
                  </div>
                </OverlayTrigger>
              </div>
              <div className='listing-gallery-wrapper'>
                <Link to='/listing/1' className='btn-custom btn-sm secondary'>
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  const pageNumbers = []
  if (listings) {

    for (let i = 1; i <= Math.ceil(listings.count / itemsPerPage); i++) {
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
                  onClick={handleClick}
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

  // Logic for displaying items
  // const indexOfLastitem = currentPage * itemsPerPage
  // const indexOfFirstitem = indexOfLastitem - itemsPerPage
  // const currentitems = items.slice(indexOfFirstitem, indexOfLastitem)

  // const renderitems = currentitems.map((item, i) => {
  // const renderitems = 
  // Logic for displaying page numbers
  
  return (
    <div className='section pagination-content'>
      <div className='container'>
        <div className='row'>
          {/* Sidebar Start */}
          <div className='col-lg-4'>
            {/* <Sidebar
              filters={listingFilter}
              // action={}
            /> */}
          </div>
          {/* Sidebar End */}
          {/* Posts Start */}
          <div className='col-lg-8'>
            {/* Controls Start */}
            <div className='acr-global-listing-controls'>
              <div className='acr-listing-active-filters'>
                {filterValue &&
                  filterValue.map((item, i) => (
                    <Link key={i} to='#'>
                      <div className='close-btn close-dark'>
                        <span />
                        <span />
                      </div>
                      {item.filter}: {item.value}
                    </Link>
                  ))}
              </div>
            </div>
            {/* Controls End */}
            <div className='row'>
              {/* Listing Start */}
              {loading ? <Loader /> : <RenderedItems />}
              {/* Listing End */}
            </div>
            {/* Pagination Start */}
            {pageNumbers.length > 1 ? (
              <ul className='pagination'>
                {/* Prev */}
                {/* to show previous, we need to be on the 2nd or more page */}
                {pageNumbers.length > 1 && currentPage !== 1 ? (
                  <li className='page-item'>
                    <Link
                      className='page-link'
                      to='#'
                      data-page={currentPage - 1}
                      onClick={handleClick}
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
                {pageNumbers.length > 1 &&
                currentPage !== pageNumbers.length ? (
                  <li className='page-item'>
                    <Link
                      className='page-link'
                      to='#'
                      data-page={parseInt(currentPage + 1)}
                      onClick={handleClick}
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
  filters: state.filters.filters,
  listings: state.listings.listings,
})

export default connect(mapStateToProps, { load_all_properties })(Content)