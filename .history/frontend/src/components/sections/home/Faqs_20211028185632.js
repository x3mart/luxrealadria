import React, {  } from 'react'
import { Accordion, Card, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import contactinfo from '../../../data/contactinfo.json'
import { connect } from 'react-redux'

const Faqs = ({ home_page }) => {
  return (
    {)}
  )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Faqs)

