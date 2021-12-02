import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { update_filters } from '../../../redux/actions/filters'

const Categories = ({ home_page, update_filters, lang }) => {
  const [types, setTypes] = useState([])
  const [name, setName] = useState('') 

  const handleFilterUpdate = item => {
    update_filters({
      title: 'category__title',
      name: name,
      value: item.title,
    })
  }

  useEffect(() => {
    if (home_page) {
      setTypes(home_page.categories)
    }
  }, [home_page])

  useEffect(() => {
    if (lang === 'ru') {
      setName('Тип')
    }
    if (lang === 'en') {
      setName('Category')
    }
    if (lang === 'mn') {
      setName('Kategorija')
    }
  }, [lang])

  return (
    <div className='section section-padding'>
      <div className='container mt-5 pt-5 mt-md-0 pt-md-0'>
        <div className='section-title-wrap section-header mt-5 pt-5 mt-md-0 pt-md-0'>
          <h5 className='custom-primary'>
            {home_page && home_page.category_title}
          </h5>
          <h2 className='title'>{home_page && home_page.category_subtitle}</h2>
        </div>
        <div className='row'>
          {types &&
            types.map((item, i) => (
              <div key={i} className='col-lg-4 col-md-6'>
                <div className='acr-category'>
                  <div className='acr-category-thumb'>
                    <i className={item.icon} />
                    <Link
                      to='/listing'
                      onClick={() => handleFilterUpdate(item)}
                    >
                      <img src={item.image} alt={item.title} />
                    </Link>
                    <div className='acr-category-body'>
                      <h5>
                        {' '}
                        <Link
                          to='/listing'
                          onClick={() =>
                            update_filters({
                              title: 'category__title',
                              name: name,
                              value: item.title,
                            })
                          }
                        >
                          {item.title}
                        </Link>{' '}
                      </h5>
                      <span>
                        {`${item.properties_count} ${
                          lang === 'ru'
                            ? 'Объектов'
                            : lang === 'en'
                            ? 'Objects'
                            : 'Objekata'
                        }`}
                      </span>
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
  lang: state.language.language,
})

export default connect(mapStateToProps, { update_filters })(Categories)
