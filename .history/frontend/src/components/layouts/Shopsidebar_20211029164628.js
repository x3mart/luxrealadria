import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Calculator from './Calculator'
import Select2 from 'react-select2-wrapper'
import listing from '../../data/listings.json'
import {
  locationlist,
  statuslist,
  pricerangelist,
  bedslist,
  bathroomslist,
  typelist,
} from '../../data/select.json'
import { Collapse } from 'react-bootstrap'

import { numberWithSpaces } from '../../helper/helper'

const Shopsidebar = ({filters, vals, setvals}) => {

  const [regions, setRegions] = useState([])
  const [statuses, setStatuses] = useState([])
  const [purposes, setPurposes] = useState([])
  const [types, setTypes] = useState([])
  const [beds, setBeds] = useState([])
  const [baths, setBaths] = useState([])

  const [regionsValue, setRegionsValue] = useState([])
  const [statusesValue, setStatusesValue] = useState([])
  const [purposesValue, setPurposesValue] = useState([])
  const [typesValue, setTypesValue] = useState([])
  const [bedsValue, setBedsValue] = useState([])
  const [bathsValue, setBathsValue] = useState([])

  
  const [rangeValue, setRangeValue] = useState(null)
  
  const [priceValue, setPriceValue] = useState(null)

  const [searchFilter, setSearchFilter] = useState([])

  const [values, setValues] = useState({
    categories: '',
    regions: '',
    statuses: '',
    purposes: '',
    beds: '',
    baths: '',
  })

  const handleFilterChange = e => {
    let value = e.target.value.slice(0,3)
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    setvals(values)
  }


  useEffect(() => {
    if(vals){
      setValues(vals)
    }
  }, [vals])

  useEffect(() => {
    if (filters && filters.regions) {
      setRegions(
        filters.regions.map(item => (item.title))
      )
    }
    if (filters && filters.statuses) {
      setStatuses(filters.statuses.map(item => item.title))
    }
    if (filters && filters.purposes) {
      setPurposes(filters.purposes.map(item => item.title))
    }
    if (filters && filters.categories) {
      setTypes(filters.categories.map(item => item.title))
    }
    if (filters && filters.rooms) {
      setBeds(filters.rooms)
    }
    if (filters && filters.closets) {
      setBaths(filters.closets)
    }
  }, [filters])

const action = ({target}) => {
    if (target && target.value) {
         console.log(1, target.value)
        if (searchFilter.length === 0){
            console.log(2)
            setSearchFilter([{ name: target.name, value: target.value }])
            console.log(3)
        }else{

            let counter = 0
            console.log(4, counter)
            setSearchFilter(searchFilter.map(item => {
              if (item.name === target.name) {
                counter++
                console.log(5, counter)
                return (item = { name: target.name, value: target.value })
              } else {
                console.log(6, item)
                return item
              }
            }))
            if (counter === 0) {
                console.log(7)
              setSearchFilter([
                ...searchFilter,
                { name: target.name, value: target.value },
              ])
              counter = 0
            }

        }
        
        
    }

    
}


  const handleRange = ({target}) => {
    setPriceValue(target.value)
  }

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
                    value={values.regions}
                    name='regions'
                    data={regions && ['Любой регион', ...regions]}
                    options={{
                      placeholder: 'Любой регион',
                    }}
                    onChange={e => setRegionsValue(e.target.value)}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Назначение: </label>
                  <Select2
                    value={values.purposes}
                    name='purposes'
                    data={purposes && ['Любое назначение', ...purposes]}
                    options={{
                      placeholder: 'Любое назначение',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Спальни: </label>
                  <Select2
                    value={values.beds}
                    name='beds'
                    data={beds && ['Любое кол-во', ...beds]}
                    options={{
                      placeholder: 'Любое кол-во',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Санузлы: </label>
                  <Select2
                    value={values.baths}
                    name='baths'
                    data={baths && ['Любое кол-во', ...baths]}
                    options={{
                      placeholder: 'Любое кол-во',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Тип: </label>
                  <Select2
                    value={values.categories}
                    name='categories'
                    data={types && ['Любой тип', ...types]}
                    options={{
                      placeholder: 'Любой тип',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <label>Статус: </label>
                  <Select2
                    value={values.statuses}
                    name='statuses'
                    data={statuses && ['Любой статус', ...statuses]}
                    options={{
                      placeholder: 'Любой статус',
                    }}
                    onChange={action}
                  />
                </div>
                <div className='acr-custom-select form-group'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      От €{numberWithSpaces(rangeValue && rangeValue.lowest)}
                    </div>
                    <div>До €{numberWithSpaces(priceValue)}</div>
                  </div>
                  <input
                    type='range'
                    name='propertyPrice'
                    class='form-range'
                    min={rangeValue && rangeValue.lowest}
                    max={rangeValue && rangeValue.highest}
                    step='10000'
                    id='customRange3'
                    value={priceValue}
                    onChange={handleRange}
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

export default Shopsidebar
