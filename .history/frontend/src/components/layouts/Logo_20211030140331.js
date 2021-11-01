import React, { useState, useEffect } from 'react'

const Logo = ({logo, className}) => {

    const [image, setImage] = useState(false)

    useEffect(() => {
        if(logo && logo.img) {
            setImage(true)
        }
    }, [])
    return (
      <div className={`logo-wrapper${className ? ' '+className:''}`}>
        {logo && image ? (
          <img src={logo.img} alt={logo.name} />
        ) : (
          <>
            <div className='main-text'>
              {logo && logo.name ? logo.name : 'LuxRealAdria'}
            </div>
            <div className='sub-text'>
              {logo && logo.subtext ? logo.subtext : 'Real Estate Agency'}
            </div>
          </>
        )}
      </div>
    )
}

export default Logo