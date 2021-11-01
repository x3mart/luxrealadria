import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Categories = ({ home_page }) => {

  const [types, setTypes] = useState([])

  useEffect(() => {
    if (home_page) {
      setTypes(home_page.categories)
    }
  }, [home_page])

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
    <div className='section section-padding'>
      <div className='container mt-5 pt-5 mt-md-0 pt-md-0'>
        <div className='section-title-wrap section-header mt-5 pt-5 mt-md-0 pt-md-0'>
          <h5 className='custom-primary'>Категории</h5>
          <h2 className='title'>Просмотр по типам</h2>
        </div>
        <div className='row'>
          {types &&
            types.map((item, i) => (
              <div key={i} className='col-lg-4 col-md-6'>
                <div className='acr-category'>
                  <div className='acr-category-thumb'>
                    <i className={item.icon} />
                    <Link to='/listing'>
                      <img src={item.image} alt={item.name} />
                    </Link>
                    <div className='acr-category-body'>
                      <h5>
                        {' '}
                        <Link to='#'>{item.title}</Link>{' '}
                      </h5>
                      <span>{item.properties_count} Объектов</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Categories)
