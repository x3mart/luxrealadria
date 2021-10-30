import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { type } from '../../../data/category.json'
import { connect } from 'react-redux'

const Categories = ({ home_page }) => {

  const [types, setTypes] = useState([])

  useEffect(() => {
    if (home_page) {
      setTypes(home_page.categories)
    }
  }, [home_page])


  return (
    <div className='section section-padding'>
      <div className='container'>
        <div className='section-title-wrap section-header'>
          <h5 className='custom-primary'>Категории</h5>
          <h2 className='title'>Просмотр по типам</h2>
        </div>
        <div className='row'>
          {types &&
            types.map((item, i) => (
              <div key={i} className='col-lg-4 col-md-6'>
                <div className='acr-category'>
                  <div className='acr-category-thumb'>
                    <i className={'flaticon-' + item.icon + ''} />
                    <Link to='#'>
                      <img src={item.image} alt={item.name} />
                    </Link>
                    <div className='acr-category-body'>
                      <h5>
                        {' '}
                        <Link to='#'>{item.name}</Link>{' '}
                      </h5>
                      {/* <span>{item.numberofitem} Объектов</span> */}
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
