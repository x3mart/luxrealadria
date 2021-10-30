import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'magnific-popup';

const Content  = () => {
    
    return (
      <div className='section blog-wrapper'>
        <div className='container'>
          <div className='row'>
            {/* Post Start */}
            <div>
              {/* Content Start */}
              <article className='post-single'>
                <div className='post-content'>
                    <div dangerouslySetInnerHTML={ __html: }/>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <h4>Into the subject</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{' '}
                    <Link to='#'>Lorem Ipsum has been the industry's</Link>{' '}
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/img/blog/4.jpg'}
                    alt='post'
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                  </p>
                  <blockquote>
                    <h5>Real estate is booming</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </blockquote>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className='row'>
                    <div className='col-md-6'>
                      <Link
                        to='assets/img/blog/9.jpg'
                        className='gallery-thumb'
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + '/assets/img/blog/9.jpg'
                          }
                          alt='post'
                        />
                      </Link>
                    </div>
                    <div className='col-md-6'>
                      <Link
                        to='assets/img/blog/7.jpg'
                        className='gallery-thumb'
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + '/assets/img/blog/7.jpg'
                          }
                          alt='post'
                        />
                      </Link>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Content;