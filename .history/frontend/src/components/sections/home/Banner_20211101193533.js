import React, { useState, useEffect } from 'react'
import Select2 from 'react-select2-wrapper'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { update_filters } from '../../../redux/actions/filters'

const Banner = ({ filters, home_page, update_filters }) => {
  const [advancesearch, setAdvancesearch] = useState(false)

  const [homePage, setHomePage] = useState([])
  const [homeRegion__title, setHomeRegion__title] = useState([])
  const [homeCategor, setHomeCategor] = useState([])
  const [homeStatuses, setHomeStatuses] = useState([])
  const [homePurposes, setHomePurposes] = useState([])

  const [priceValue, setPriceValue] = useState(0)

  useEffect(() => {
    if (home_page) {
      setHomePage(home_page)
    }
  }, [home_page])

  useEffect(() => {
    if(filters && filters.max_price){
      setPriceValue(filters.max_price)
    }
  }, [])

  useEffect(() => {
    if (filters) {
      if (filters.region__title) {
        setHomeRegion__title(filters.region__title.map(item => item.title))
      }
      if (filters.categor) {
        setHomeCategor(filters.categor.map(item => item.title))
      }
      if (filters.statuses) {
        setHomeStatuses(filters.statuses.map(item => item.title))
      }
      if (filters.purposes) {
        setHomePurposes(filters.purposes.map(item => item.title))
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
    if(e.target.title === 'price_range') {
      setPriceValue(e.target.value)
    }
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
              <form method='post'>
                <div className='row'>
                  <div className='col-lg-3 col-md-6'>
                    <div className='form-group acr-custom-select'>
                      <label>Регион: </label>
                      <Select2
                        onChange={handleFilterChange}
                        title='region'
                        name='Регион'
                        data={
                          filters &&
                          filters.region__title && ['Любой регион', ...homeRegion__title]
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
                        title='purpose'
                        name='Назначение'
                        data={
                          filters &&
                          filters.purposes && [
                            'Любое назначение',
                            ...homePurposes,
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
                        value={priceValue}
                        onChange={handleFilterChange}
                      ></input>
                    </div>
                  </div>
                  <div className='submit-btn col-lg-2 col-md-6'>
                    <div className='form-group'>
                      <button
                        type='submit'
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
                          onChange={handleFilterChange}
                          title='category'
                          name='Тип'
                          data={
                            filters &&
                            filters.categor && [
                              'Любой тип',
                              ...homeCategor,
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
                          onChange={handleFilterChange}
                          title='statuses'
                          name='Статус'
                          data={
                            filters &&
                            filters.statuses && [
                              'Любой статус',
                              ...homeStatuses,
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
})

export default connect(mapStateToProps, { update_filters })(Banner)
