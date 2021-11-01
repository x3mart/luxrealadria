import React, { useState, useEffect } from 'react'
import Select2 from 'react-select2-wrapper'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { update_filters } from '../../../redux/actions/filters'
import { Redirect } from 'react-router-dom'

const Banner = ({ filters, home_page, update_filters, filter_values }) => {
  const [advancesearch, setAdvancesearch] = useState(false)

  const [homePage, setHomePage] = useState([])
  const [homeRegion__title, setHomeRegion__title] = useState([])
  const [homeCategory__title, setHomeCategory__title] = useState([])
  const [homeStatuses__title, setHomeStatuses__title] = useState([])
  const [homePurpose__title, setHomePurpose__title] = useState([])

  const [priceValue, setPriceValue] = useState(0)

  const [values, setValues] = useState({
    category__title: '',
    region__title: '',
    statuses__title: '',
    purpose__title: '',
    rooms: '',
    closets: '',
    price_range: 0,
  })

  useEffect(() => {
    setValues({
      category__title: filter_values.filter(
        item => item.title === 'category__title'
      )[0].value,
      region__title: filter_values.filter(
        item => item.title === 'region__title'
      )[0].value,
      statuses__title: filter_values.filter(
        item => item.title === 'statuses__title'
      )[0].value,
      purpose__title: filter_values.filter(
        item => item.title === 'purpose__title'
      )[0].value,
      rooms: filter_values.filter(item => item.title === 'rooms')[0].value,
      closets: filter_values.filter(item => item.title === 'closets')[0].value,
      price_range: filter_values.filter(item => item.title === 'price_range')[0]
        .value,
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    return Redirect to=''
  }


  useEffect(() => {
    if (home_page) {
      setHomePage(home_page)
    }
  }, [home_page])

  useEffect(() => {
    if (filters && filters.max_price && values.price_range === 0) {
      setValues({...values, price_range: filters.max_price})
    }
  }, [])

  useEffect(() => {
    if (filters) {
      if (filters.regions) {
        setHomeRegion__title(filters.regions.map(item => item.title))
      }
      if (filters.categories) {
        setHomeCategory__title(filters.categories.map(item => item.title))
      }
      if (filters.statuses) {
        setHomeStatuses__title(filters.statuses.map(item => item.title))
      }
      if (filters.purposes) {
        setHomePurpose__title(filters.purposes.map(item => item.title))
      }
    }
  }, [filters])

  const advancetoggle = () => {
    setAdvancesearch(!advancesearch)
  }

  const handleFilterChange = e => {
    let value = e.target.value.slice(0, 4) !== 'Любо' ? e.target.value : ''
    let obj = {
      title: e.target.title,
      name: e.target.name,
      value: value,
    }
    update_filters(obj)
    setValues({
      ...values,
      [e.target.title]: value,
    })
  }

  return (
    <div
      className='banner dark-overlay bg-cover bg-center'
      style={{
        backgroundImage: 'url(' + homePage.wallpaper + ')',
      }}
    >
      <div className='container'>
        <div className='banner-item'>
          <div className='banner-inner'>
            <div className='banner-text'>
              <h1 className='title text-white'>{homePage && homePage.title}</h1>
              <p className='subtitle text-white'>
                {homePage && homePage.subtitle}
              </p>
            </div>
            <div className='acr-filter-form'>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-lg-3 col-md-6'>
                    <div className='form-group acr-custom-select'>
                      <label>Регион: </label>
                      <Select2
                      value={values.region__title}
                        onChange={handleFilterChange}
                        title='region__title'
                        name='Регион'
                        data={
                          filters &&
                          filters.regions && [
                            'Любой регион',
                            ...homeRegion__title,
                          ]
                        }
                        options={{
                          placeholder: 'Любой регион',
                        }}
                        // onChange={e => console.log(e.target)}
                      />
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6'>
                    <div className='form-group acr-custom-select'>
                      <label>Назначение: </label>
                      <Select2
                        onChange={handleFilterChange}
                        value={values.purpose__title}
                        title='purpose__title'
                        name='Назначение'
                        data={
                          filters &&
                          filters.purposes && [
                            'Любое назначение',
                            ...homePurpose__title,
                          ]
                        }
                        options={{
                          placeholder: 'Любое назначение',
                        }}
                      />
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='form-group acr-custom-select'>
                      <div className='d-flex justify-content-between'>
                        <div>От €{filters.min_price}</div>

                        <div>До €{priceValue}</div>
                      </div>
                      <input
                        title='price_range'
                        name='Диапазон цен'
                        type='range'
                        className='form-range'
                        min={filters.min_price}
                        max={filters.max_price}
                        step='10000'
                        id='customRange3'
                        value={values.price_range}
                        onChange={handleFilterChange}
                      ></input>
                    </div>
                  </div>
                  <div className='submit-btn col-lg-2 col-md-6'>
                    <div className='form-group'>
                      <button
                        type='button'
                        className='btn-custom secondary btn-block'
                        name='button'
                      >
                        Поиск объектов
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames('advanced-search', {
                    'd-block': advancesearch,
                  })}
                >
                  <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                      <div className='acr-custom-select form-group'>
                        <label>Спальни: </label>
                        <Select2
                          onChange={handleFilterChange}
                          value={values.rooms}
                          title='rooms'
                          name='Спальни'
                          data={
                            filters &&
                            filters.rooms && ['Любое кол-во', ...filters.rooms]
                          }
                          options={{
                            placeholder: 'Любое кол-во',
                          }}
                        />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='acr-custom-select form-group'>
                        <label>Санузлы: </label>
                        <Select2
                        value={values.closets}
                          onChange={handleFilterChange}
                          title='closets'
                          name='Санузлы'
                          data={
                            filters &&
                            filters.closets && [
                              'Любое кол-во',
                              ...filters.closets,
                            ]
                          }
                          options={{
                            placeholder: 'Любое кол-во',
                          }}
                        />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='acr-custom-select form-group'>
                        <label>Тип: </label>
                        <Select2
                        value={values.category__title}
                          onChange={handleFilterChange}
                          title='category__title'
                          name='Тип'
                          data={
                            filters &&
                            filters.categories && [
                              'Любой тип',
                              ...homeCategory__title,
                            ]
                          }
                          options={{
                            placeholder: 'Любой тип',
                          }}
                        />
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='form-group acr-custom-select'>
                        <label>Статус: </label>
                        <Select2
                        value={values.statuses__title}
                          onChange={handleFilterChange}
                          title='statuses__title'
                          name='Статус'
                          data={
                            filters &&
                            filters.statuses && [
                              'Любой статус',
                              ...homeStatuses__title,
                            ]
                          }
                          options={{
                            placeholder: 'Любой статус',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div
                className={classNames('advanced-search-trigger semi-circle', {
                  active: advancesearch,
                })}
                onClick={advancetoggle}
              >
                <i className='fas fa-chevron-down' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
  filters: state.filters.filters,
  filter_values: state.filters.values,
})

export default connect(mapStateToProps, { update_filters })(Banner)
