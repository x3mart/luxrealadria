import React from 'react';

const Content  = ({article}) => {
    
    return (
      <div className='section blog-wrapper'>
        <div className='container'>
          <div className='row'>
            {/* Post Start */}
            <div>
              {/* Content Start */}
              <article className='post-single'>
                <div className='post-content'>
                  <div dangerouslySetInnerHTML={{ __html: article }} />
                  
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Content;