import React, { useState, useEffect } from 'react'
import Select2 from 'react-select2-wrapper'
import { Collapse } from 'react-bootstrap'
import { connect } from 'react-redux'
import { update_filters } from '../../redux/actions/filters'

import { numberWithSpaces } from '../../helper/helper'

const Shopsidebar = ({
  filters,
  update_filters,
  // filter_values,
  vals,
  setvals,
}) => {
  const [region, setRegion] = useState([])
  const [statuses, setStatuses] = useState([])
  const [purpose, setPurpose] = useState([])
  const [types, setTypes] = useState([])
  const [rooms, setrooms] = useState([])
  const [baths, setBaths] = useState([])

  const [regionValue, setRegionValue] = useState([])
  const [statusesValue, setStatusesValue] = useState([])
  const [purposeValue, setPurposeValue] = useState([])
  const [typesValue, setTypesValue] = useState([])
  const [roomsValue, setroomsValue] = useState([])
  const [bathsValue, setBathsValue] = useState([])

  const [rangeValue, setRangeValue] = useState(null)

  const [priceValue, setPriceValue] = useState(null)

  const [searchFilter, setSearchFilter] = useState([])

  const [values, setValues] = useState({
    category: '',
    region: '',
    statuses: '',
    purpose: '',
    rooms: '',
    baths: '',
    price_range: 0,
  })

  useEffect(() => {
    if (vals && vals.length > 0) {
      setValues({
        category: vals.filter(item => item.title === 'category')[0].value,
        region: vals.filter(item => item.title === 'region')[0].value,
        statuses: vals.filter(item => item.title === 'statuses')[0].value,
        purpose: vals.filter(item => item.title === 'purpose')[0].value,
        rooms: vals.filter(item => item.title === 'rooms')[0].value,
        baths: vals.filter(item => item.title === 'baths')[0].value,
        price_range: vals.filter(item => item.title === 'price_range')[0].value,
      })
    }
  }, [vals])

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

  useEffect(() => {
    if (filters && filters.region) {
      setRegion(filters.region.map(item => item.title))
    }
    if (filters && filters.statuses) {
      setStatuses(filters.statuses.map(item => item.title))
    }
    if (filters && filters.purpose) {
      setPurpose(filters.purpose.map(item => item.title))
    }
    if (filters && filters.category) {
      setTypes(filters.category.map(item => item.title))
    }
    if (filters && filters.rooms) {
      setrooms(filters.rooms)
    }
    if (filters && filters.closets) {
      setBaths(filters.closets)
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
          <h5>Фильтр объектов</h5>
          <div className='acr-custom-chevron'>
            <span />
            <span />
          </div>
        </div>
        <Collapse in={open}>
          <div className='acr-collapsable'>
            <div className='acr-filter-form'>
              <form>
                <div className='acr-custom-select form-group'>
                  <label>Регион: </label>
                  <Select2
                    title='region'
                    value={values.region}
                    name='Регион'
                    data={region && ['Любой регион', ...region]}
                    options={{
                      placeholder: 'Любой регион',
                    }}
                    onChange={handleFilterChange}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Назначение: </label>
                  <Select2
                    title='purpose'
                    value={values.purpose}
                    name='Назначение'
                    data={purpose && ['Любое назначение', ...purpose]}
                    options={{
                      placeholder: 'Любое назначение',
                    }}
                    onChange={e => handleFilterChange(e)}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Спальни: </label>
                  <Select2
                    title='rooms'
                    value={values.rooms}
                    name='Спальни'
                    data={rooms && ['Любое кол-во', ...rooms]}
                    options={{
                      placeholder: 'Любое кол-во',
                    }}
                    onChange={e => handleFilterChange(e)}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Санузлы: </label>
                  <Select2
                    title='baths'
                    value={values.baths}
                    name='Санузлы'
                    data={baths && ['Любое кол-во', ...baths]}
                    options={{
                      placeholder: 'Любое кол-во',
                    }}
                    onChange={e => handleFilterChange(e)}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Тип: </label>
                  <Select2
                    title='category'
                    value={values.category}
                    name='Тип'
                    data={types && ['Любой тип', ...types]}
                    options={{
                      placeholder: 'Любой тип',
                    }}
                    onChange={e => handleFilterChange(e)}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Статус: </label>
                  <Select2
                    title='statuses'
                    value={values.statuses}
                    name='Статус'
                    data={statuses && ['Любой статус', ...statuses]}
                    options={{
                      placeholder: 'Любой статус',
                    }}
                    onChange={e => handleFilterChange(e)}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <div className='d-flex justify-content-between'>
                    <div>От €{numberWithSpaces(filters.min_price)}</div>
                    <div>
                      До €
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
                    max={filters.max_price}
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
                <button
                  type='submit'
                  className='btn-block btn-custom'
                  name='button'
                >
                  Применить
                </button>
              </form>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

// const mapStateToProps = state => ({
//   // filter_values: state.filters.values,
// })

export default connect(null, { update_filters })(Shopsidebar)
