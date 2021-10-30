import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { blogblock } from '../../../data/blog.json';
import Sidebar from '../../layouts/Blogsidebar';
import classNames from 'classnames';
import Loader from '../../layouts/Loader';

const Content = () => {

    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    load_all_properties()

    let timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleClick = n => {
    let data = load_properties_by_page(n)
    setCurrentPage(n)
    // let paginationContent = event.target.closest('.pagination-content')

    if (data) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

    // const handleClick(event) {
    //     var paginationContent = event.target.closest('.pagination-content');

    //     if (paginationContent) {
    //         paginationContent.scrollIntoView();
    //     }

    //     setLoading(true)
    //     setTimeout(() => {
    //         this.setState({
    //             currentPage: Number(event.target.getAttribute('data-page')),
    //             loading: false
    //         });
    //     }, 1000);

    // }
    render() {
        
    }
}

export default Content;