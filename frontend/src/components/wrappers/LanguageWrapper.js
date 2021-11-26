import React, { useEffect } from 'react'

import detectBrowserLanguage from 'detect-browser-language'

import { connect } from 'react-redux'
import { set_user_language } from '../../redux/actions/language'

const LanguageWrapper = ({ set_user_language }) => {
  const getProperLang = str => {
    return str.split('-')[0]
  }

  useEffect(() => {
    if (localStorage.getItem('language')) {
      set_user_language(getProperLang(localStorage.getItem('language')))
    } else {
      if (
        getProperLang(detectBrowserLanguage()) === 'sr' ||
        getProperLang(detectBrowserLanguage()) === 'hr' ||
        getProperLang(detectBrowserLanguage()) === 'bs' ||
        getProperLang(detectBrowserLanguage()) === 'mk'
      ) {
        set_user_language('mn')
      } else if (
        getProperLang(detectBrowserLanguage()) === 'ru' ||
        getProperLang(detectBrowserLanguage()) === 'uk'
      ) {
        set_user_language('ru')
      } else {
        set_user_language('en')
      }
    }
    console.log(localStorage.getItem('language'))
  }, [])

  return <></>
}

export default connect(null, { set_user_language })(LanguageWrapper)
