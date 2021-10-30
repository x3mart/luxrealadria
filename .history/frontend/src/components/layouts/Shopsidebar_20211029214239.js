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
import { connect } from 'react-redux'
import { update_filters } from '../../redux/actions/filters'

import { numberWithSpaces } from '../../helper/helper'

const Shopsidebar = ({
  filters,
  update_filters,
  filter_values,
  vals,
  setvals,
}) => {
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

  // const [values, setValues] = useState([])

  // useEffect(() => {
  //   if (filter_values) {
  //     setValues(filter_values)
  //   }
  // }, [])

  // console.log(values.filter(item => item.title === 'regions')[0].value)

  const [activeFilters, setActiveFilters] = useState([])

  const handleFilterChange = e => {
    if (e && e.target) {
      let value = e.target.value.slice(0, 4) !== 'Любо' ? e.target.value : ''
      let obj = {
        title: e.target.title,
        name: e.target.name,
        value: value,
      }
      update_filters(obj)
      setValues({
        ...values,
        [e.target.name]: value,
      })
    }
  }

  // const handleFilterChange = e => {
  //   let value = e.target.value.slice(0,4) !== 'Любо' ? e.target.value : ''
  // setValues({
  //   ...values,
  //   [e.target.name]: value
  // })
  //   setvals(values)
  // }

  // const getValue = e => {
    // if (values){
    //   return values.filter(item => item.title === e.target.title)[0].value
    // }
  // }

  useEffect(() => {
    if (filters && filters.regions) {
      setRegions(filters.regions.map(item => item.title))
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

  // const action = ({ target }) => {
  //   if (target && target.value) {
  //     console.log(1, target.value)
  //     if (searchFilter.length === 0) {
  //       console.log(2)
  //       setSearchFilter([{ name: target.name, value: target.value }])
  //       console.log(3)
  //     } else {
  //       let counter = 0
  //       console.log(4, counter)
  //       setSearchFilter(
  //         searchFilter.map(item => {
  //           if (item.name === target.name) {
  //             counter++
  //             console.log(5, counter)
  //             return (item = { name: target.name, value: target.value })
  //           } else {
  //             console.log(6, item)
  //             return item
  //           }
  //         })
  //       )
  //       if (counter === 0) {
  //         console.log(7)
  //         setSearchFilter([
  //           ...searchFilter,
  //           { name: target.name, value: target.value },
  //         ])
  //         counter = 0
  //       }
  //     }
  //   }
  // }

  const handleRange = ({ target }) => {
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
              {values && (
                
              )}
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
