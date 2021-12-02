import React, { useState, useEffect } from 'react'
import Select2 from 'react-select2-wrapper'
import { Collapse } from 'react-bootstrap'
import { connect } from 'react-redux'
import { update_filters } from '../../redux/actions/filters'

import { numberWithSpaces } from '../../helper/helper'

const Shopsidebar = ({
  filters,
  update_filters,
  filter_values,
  // vals,
  setvals,
  title,
}) => {

  const [region__title, setRegion__title] = useState([])
  const [statuses__title, setStatuses__title] = useState([])
  const [purpose__title, setPurpose__title] = useState([])
  const [types, setTypes] = useState([])
  const [rooms, setrooms] = useState([])
  const [closets, setclosets] = useState([])

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
    if (filter_values && filter_values.length > 0) {
      setValues({
        category__title: filter_values.filter(
          item => item.title === 'category__title'
        )[0].value,
        region__title: filter_values.filter(item => item.title === 'region__title')[0]
          .value,
        statuses__title: filter_values.filter(
          item => item.title === 'statuses__title'
        )[0].value,
        purpose__title: filter_values.filter(item => item.title === 'purpose__title')[0]
          .value,
        rooms: filter_values.filter(item => item.title === 'rooms')[0].value,
        closets: filter_values.filter(item => item.title === 'closets')[0].value,
        price_range: filter_values.filter(item => item.title === 'price_range')[0].value,
      })
    }
  }, [filter_values])

  const handleFilterChange = e => {
    let value = ''
    if (
      e.target.value.slice(0, 4) == 'Любо' ||
      e.target.value.slice(0, 3) == 'Any' ||
      e.target.value.slice(0, 3) == 'Bil'
    ) {
      value = ''
    } else {
      value = e.target.value
    }
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

  useEffect(() => {
    if (filters && filters.regions) {
      setRegion__title(filters.regions.map(item => item.title))
    }
    if (filters && filters.statuses) {
      setStatuses__title(filters.statuses.map(item => item.title))
    }
    if (filters && filters.purposes) {
      setPurpose__title(filters.purposes.map(item => item.title))
    }
    if (filters && filters.categories) {
      setTypes(filters.categories.map(item => item.title))
    }
    if (filters && filters.rooms) {
      setrooms(filters.rooms)
    }
    if (filters && filters.closets) {
      setclosets(filters.closets)
    }
  }, [filters])

  // const handleRange = ({ target }) => {
  //   setPriceValue(target.value)
  // }

  const [open, setOpen] = useState(true)
  return (
    <div className='sidebar sidebar-left'>
      <div className='sidebar-widget'>
        <div
          className='acr-collapse-trigger acr-custom-chevron-wrapper'
          onClick={() => setOpen(!open)}
        >
          <h5>{title}</h5>
          <div className='acr-custom-chevron'>
            <span />
            <span />
          </div>
        </div>
        <Collapse in={open}>
          <div className='acr-collapsable'>
            <div className='acr-filter-form'>
              <form onSubmit={e => e.preventDefault()}>
                <div className='acr-custom-select form-group'>
                  <label>
                    {filters && filters.regions_title
                      ? filters.regions_title
                      : 'Регион'}
                    :{' '}
                  </label>
                  <Select2
                    value={values.region__title}
                    onChange={handleFilterChange}
                    title='region__title'
                    name={
                      filters && filters.regions_title
                        ? filters.regions_title
                        : 'Регион'
                    }
                    data={
                      region__title &&
                      filters &&
                      filters.regions && [
                        filters && filters.regions_any
                          ? filters.regions_any
                          : 'Любой регион',
                        ...region__title,
                      ]
                    }
                    options={{
                      placeholder:
                        filters && filters.regions_any
                          ? filters.regions_any
                          : 'Любой регион',
                    }}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>
                    {filters && filters.purposes_title
                      ? filters.purposes_title
                      : 'Назначение'}
                    :{' '}
                  </label>
                  <Select2
                    onChange={handleFilterChange}
                    value={values.purpose__title}
                    title='purpose__title'
                    name={
                      filters && filters.purposes_title
                        ? filters.purposes_title
                        : 'Назначение'
                    }
                    data={
                      purpose__title &&
                      filters &&
                      filters.purposes && [
                        filters && filters.purposes_any
                          ? filters.purposes_any
                          : 'Любое назначение',
                        ...purpose__title,
                      ]
                    }
                    options={{
                      placeholder:
                        filters && filters.purposes_any
                          ? filters.purposes_any
                          : 'Любое назначение',
                    }}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>
                    {filters && filters.room_title
                      ? filters.room_title
                      : 'Спальни'}
                    :{' '}
                  </label>
                  <Select2
                    onChange={handleFilterChange}
                    value={values.rooms}
                    title='rooms'
                    name={
                      filters && filters.room_title
                        ? filters.room_title
                        : 'Спальни'
                    }
                    data={
                      rooms &&
                      filters &&
                      filters.rooms && [
                        filters && filters.room_any
                          ? filters.room_any
                          : 'Любое кол-во',
                        ...rooms,
                      ]
                    }
                    options={{
                      placeholder:
                        filters && filters.room_any
                          ? filters.room_any
                          : 'Любое кол-во',
                    }}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>
                    {filters && filters.closets_title
                      ? filters.closets_title
                      : 'Санузлы'}
                    :{' '}
                  </label>
                  <Select2
                    value={values.closets}
                    onChange={handleFilterChange}
                    title='closets'
                    name={
                      filters && filters.closets_title
                        ? filters.closets_title
                        : 'Санузлы'
                    }
                    data={
                      closets &&
                      filters &&
                      filters.closets && [
                        filters && filters.closets_any
                          ? filters.closets_any
                          : 'Любое кол-во',
                        ...closets,
                      ]
                    }
                    options={{
                      placeholder:
                        filters && filters.closets_any
                          ? filters.closets_any
                          : 'Любое кол-во',
                    }}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>
                    {filters && filters.categories_title
                      ? filters.categories_title
                      : 'Тип'}
                    :{' '}
                  </label>
                  <Select2
                    value={values.category__title}
                    onChange={handleFilterChange}
                    title='category__title'
                    name={
                      filters && filters.categories_title
                        ? filters.categories_title
                        : 'Тип'
                    }
                    data={
                      types &&
                      filters &&
                      filters.categories && [
                        filters && filters.categories_any
                          ? filters.categories_any
                          : 'Любой тип',
                        ...types,
                      ]
                    }
                    options={{
                      placeholder:
                        filters && filters.categories_any
                          ? filters.categories_any
                          : 'Любой тип',
                    }}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>
                    {filters && filters.statuses_title
                      ? filters.statuses_title
                      : 'Статус'}
                    :{' '}
                  </label>
                  <Select2
                    value={values.statuses__title}
                    onChange={handleFilterChange}
                    title='statuses__title'
                    name={
                      filters && filters.statuses_title
                        ? filters.statuses_title
                        : 'Статус'
                    }
                    data={
                      statuses__title &&
                      filters &&
                      filters.statuses && [
                        filters && filters.statuses_any
                          ? filters.statuses_any
                          : 'Любой статус',
                        ...statuses__title,
                      ]
                    }
                    options={{
                      placeholder:
                        filters && filters.statuses_any
                          ? filters.statuses_any
                          : 'Любой статус',
                    }}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      {filters && filters.price_range_from
                        ? filters.price_range_from
                        : 'От'}{' '}
                      €{numberWithSpaces(filters.min_price)}
                    </div>
                    <div>
                      {filters && filters.price_range_to
                        ? filters.price_range_to
                        : 'До'}{' '}
                      €
                      {numberWithSpaces(
                        values.price_range
                          ? values.price_range
                          : filters.max_price
                      )}
                    </div>
                  </div>
                  <input
                    type='range'
                    title='price_range'
                    name='Диапазон цен'
                    className='form-range'
                    min={filters.min_price}
                    max={filters.max_price + 1}
                    step='10000'
                    id='customRange3'
                    value={
                      values.price_range
                        ? values.price_range
                        : filters.max_price
                    }
                    onChange={handleFilterChange}
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  filter_values: state.filters.values,
})

export default connect(mapStateToProps, { update_filters })(Shopsidebar)
