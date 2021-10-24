import React, { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from 'react-bootstrap'
import Sidebar from '../../layouts/Shopsidebar'
import listing from '../../../data/listings.json'
import classNames from 'classnames'
import Loader from '../../layouts/Loader'
import { connect } from 'react-redux'

const gallerytip = <Tooltip>Gallery</Tooltip>
const gridtip = <Tooltip>Grid</Tooltip>
const listtip = <Tooltip>List</Tooltip>
const maptip = <Tooltip>Map</Tooltip>
const bedstip = <Tooltip>Спальни</Tooltip>
const bathstip = <Tooltip>Санузлы</Tooltip>
const areatip = <Tooltip>Площадь</Tooltip>

const Content = ({
  regions,
  statuses,
  purposes,
  types,
  range,
  beds,
  baths,
}) => {

  const [filterValue, setFilterValue] = useState([])


  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState([])
  const [loading, setLoading] = useState([])

  const [regionsValue, setRegionsValue] = useState([])
  const [statusesValue, setStatusesValue] = useState([])
  const [purposesValue, setPurposesValue] = useState([])
  const [typesValue, setTypesValue] = useState([])
  const [rangeValue, setRangeValue] = useState(null)
  const [bedsValue, setBedsValue] = useState([])
  const [bathsValue, setBathsValue] = useState([])

  const [filter, setFilter] = useState({})

  const [priceValue, setPriceValue] = useState(null)


  useEffect(() => {
    if (regions) {
      let arr = []
      regions.map(item => arr.push(item.name))
      setRegionsValue(arr)
      setFilter({...filter, regions: arr})
    }
  }, [regions])

  useEffect(() => {
    if (statuses) {
      let arr = []
      statuses.map(item => arr.push(item.name))
      setStatusesValue(arr)
      setFilter({ ...filter, statuses: arr })
    }
  }, [statuses])

  useEffect(() => {
    if (purposes) {
      let arr = []
      purposes.map(item => arr.push(item.name))
      setPurposesValue(arr)
      setFilter({ ...filter, purposes: arr })
    }
  }, [purposes])

  useEffect(() => {
    if (types) {
      let arr = []
      types.map(item => arr.push(item.name))
      setTypesValue(arr)
      setFilter({ ...filter, types: arr })
    }
  }, [types])

  useEffect(() => {
    if (range) {
      setRangeValue(range)
      setFilter({ ...filter, range: range })
    }
  }, [range])

  useEffect(() => {
    if (beds) {
      let arr = []
      for (let i = parseInt(beds); i >= 1; i--) {
        arr.push(i)
      }

      setBedsValue(
        arr.sort(function (a, b) {
          return b - a
        })
      )
      setFilter({ ...filter, beds: arr })
    }
  }, [beds])

  useEffect(() => {
    if (baths) {
      let arr = []
      for (let i = parseInt(baths); i >= 1; i--) {
        arr.push(i)
      }

      setBathsValue(
        arr.sort(function (a, b) {
          return b - a
        })
      )
      setFilter({ ...filter, baths: arr })
    }
  }, [baths])

  const handleRange = e => {
    setPriceValue(e.target.value)
  }

  const handleClick = event => {
    let paginationContent = event.target.closest('.pagination-content')

    if (paginationContent) {
      paginationContent.scrollIntoView()
    }

    setLoading(true)

    setTimeout(() => {
      setCurrentPage(Number(event.target.getAttribute('data-page')))
      setLoading(false)
    }, 2000)
  }

  // Logic for displaying items
  const indexOfLastitem = currentPage * itemsPerPage
  const indexOfFirstitem = indexOfLastitem - itemsPerPage
  const currentitems = items.slice(indexOfFirstitem, indexOfLastitem)

  const renderitems = currentitems.map((item, i) => {
    return (
      <div key={i} className='listing listing-list'>
        <div className='listing-thumbnail'>
          <Link to='/listing/1'>
            <img
              src={process.env.PUBLIC_URL + '/' + item.listimg}
              alt='listing'
            />
          </Link>
          <div className='listing-badges'>
            {item.star === true ? (
              <span className='listing-badge featured'>
                {' '}
                <i className='fas fa-star' />{' '}
              </span>
            ) : (
              ''
            )}
            {item.sale === true ? (
              <span className='listing-badge sale'>On Sale</span>
            ) : (
              ''
            )}
            {item.pending === true ? (
              <span className='listing-badge pending'> Pending</span>
            ) : (
              ''
            )}
            {item.rental === true ? (
              <span className='listing-badge rent'> Rental</span>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='listing-body'>
          <h5 className='listing-title'>
            {' '}
            <Link to='/listing/1' title={item.title}>
              {item.title}
            </Link>{' '}
          </h5>
          <span className='listing-price'>
            €{item.monthlyprice} <span>/month</span>{' '}
          </span>
          <p className='listing-text'>{item.text}</p>
          <div className='acr-listing-icons'>
            <OverlayTrigger overlay={bedstip}>
              <div className='acr-listing-icon'>
                <i className='flaticon-bedroom' />
                <span className='acr-listing-icon-value'>{item.beds}</span>
              </div>
            </OverlayTrigger>
            <OverlayTrigger overlay={bathstip}>
              <div className='acr-listing-icon'>
                <i className='flaticon-bathroom' />
                <span className='acr-listing-icon-value'>{item.bathrooms}</span>
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
  // Logic for displaying page numbers
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  const renderPagination = pageNumbers.map(number => {
    const activeCondition = currentPage === number ? 'active' : ''
    return (
      <Fragment key={number}>
        {pageNumbers.length > 1 ? (
          <li className={classNames('page-item', { active: activeCondition })}>
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
  return (
    <div className='section pagination-content'>
      <div className='container'>
        <div className='row'>
          {/* Sidebar Start */}
          <div className='col-lg-4'>
            <Sidebar
            filters={filter}
            // action={}
            />
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
              {loading === false ? renderitems : <Loader />}
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
                {renderPagination}
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
  regions: state.filters.regions,
  statuses: state.filters.statuses,
  purposes: state.filters.purposes,
  types: state.filters.types,
  range: state.filters.range,
  beds: state.filters.beds,
  baths: state.filters.baths,
})

export default connect(mapStateToProps)(Content)
