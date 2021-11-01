import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json'

class Mobilemenu extends Component {
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.submenu') !== undefined) ? this.getNextSibling(e.target, '.submenu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block';
        }
    }
    render() {
      const {contact} = this.props
        return (
          <div className='aside-scroll'>
            <ul>
              <li className={`menu-item`}>
                <Link to='/'> Главная </Link>
              </li>
              <li className={`menu-item`}>
                <Link to='/listing'> Недвижимость </Link>
              </li>
              <li className={`menu-item`}>
                <Link to='/articles'> Полезные статьи </Link>
              </li>
              <li
                className={`menu-item $menu-item-has-children `}
                onClick={this.triggerChild}
              >
                <Link onClick={e => e.preventDefault()} to='/'>
                  {' '}
                  О нас{' '}
                </Link>
                <ul className='submenu' role='menu'>
                  <li className={`menu-item`}>
                    <Link to='/legal'> Правовая информация </Link>
                    <Link to='/contacts'> Контакты </Link>
                  </li>
                </ul>
              </li>

              {/* Social Media Start */}
              <li className='menu-section-title'>Соцсети</li>
              <ul>
                {contact &&
                  contact.socials &&
                  contact.socials.map(item => (
                    <li className='menu-item' key={item.id}>
                      {' '}
                      <Link to={item.link}>
                        {' '}
                        <i className={item.icon} />
                        {item.title}
                      </Link>{' '}
                    </li>
                  ))}
              </ul>
              {/* Social Media End */}
              <li className='menu-section-title'>Мессенджеры</li>
              <ul>
                {contact &&
                  contact.socials &&
                  contact.socials.map(item => (
                    <li className='menu-item' key={item.id}>
                      {' '}
                      <Link to={item.link}>
                        {' '}
                        <i className={item.icon} />
                        {item.title}
                      </Link>{' '}
                    </li>
                  ))}
              </ul>
            </ul>
          </div>
        )
    }
}

export default Mobilemenu;