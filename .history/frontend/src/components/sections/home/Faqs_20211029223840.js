import React from 'react'
import { Accordion, Card, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import contactinfo from '../../../data/contactinfo.json'
import { connect } from 'react-redux'

const Faqs = ({ home_page }) => {
  return (
    <div>
      {home_page && home_page.faq && home_page.faq.faq_items.length > 0 && (
        <div className='section'>
          <div className='container'>
            <div className='section-title-wrap section-header'>
              <h5 className='custom-primary'>ЧаВо</h5>
              <h2 className='title'>Часто задаваемые вопросы</h2>
            </div>
            <div className='row'>
              <div className='col-lg-8 mb-lg-30'>
                <Accordion defaultActiveKey='0' className='with-gap'>
                  {home_page &&
                    home_page.faq &&
                    home_page.faq.faq_items.map(item => (
                      <Card key={item.id}>
                        <Accordion.Collapse
                          eventKey={item.id}
                          className='collapseparent'
                        >
                          <Card.Body>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.answer,
                              }}
                            />
                          </Card.Body>
                        </Accordion.Collapse>
                        <Card.Header>
                          <Accordion.Toggle
                            as={NavLink}
                            variant='link'
                            eventKey={item.id}
                          >
                            {item.question}
                          </Accordion.Toggle>
                        </Card.Header>
                      </Card>
                    ))}

                  <Card>
                    <Accordion.Collapse eventKey='1' className='collapseparent'>
                      <Card.Body>
                        <p>
                          {' '}
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </p>
                        <p>
                          {' '}
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod.
                        </p>
                        <ul className='acr-list mb-0'>
                          <li>
                            {' '}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{' '}
                          </li>
                          <li>
                            {' '}
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum{' '}
                          </li>
                          <li>
                            {' '}
                            There are many variations of passages of Lorem Ipsum{' '}
                          </li>
                          <li>
                            {' '}
                            Internet tend to repeat predefined chunks as
                            necessary{' '}
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header>
                      <Accordion.Toggle
                        as={NavLink}
                        variant='link'
                        eventKey='1'
                      >
                        Is the service free?
                      </Accordion.Toggle>
                    </Card.Header>
                  </Card>
                  <Card>
                    <Accordion.Collapse eventKey='2' className='collapseparent'>
                      <Card.Body>
                        <p>
                          {' '}
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                        </p>
                        <p>
                          {' '}
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod.
                        </p>
                        <ul className='acr-list mb-0'>
                          <li>
                            {' '}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{' '}
                          </li>
                          <li>
                            {' '}
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum{' '}
                          </li>
                          <li>
                            {' '}
                            There are many variations of passages of Lorem Ipsum{' '}
                          </li>
                          <li>
                            {' '}
                            Internet tend to repeat predefined chunks as
                            necessary{' '}
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header>
                      <Accordion.Toggle
                        as={NavLink}
                        variant='link'
                        eventKey='2'
                      >
                        How many agents can I have at once?
                      </Accordion.Toggle>
                    </Card.Header>
                  </Card>
                </Accordion>
              </div>
              <div className='col-lg-4 infographics-5'>
                <div className='acr-infographic-item'>
                  <i className='flaticon-telephone' />
                  <div className='acr-infographic-item-body'>
                    <h5>Все просто!</h5>
                    <p>
                      У вас возникли вопросы, жалобы, или предложения? Просто
                      позвоните нам.
                    </p>
                    <a
                      href='tel:+79778108080'
                      className='btn-custom secondary btn-sm'
                    >
                      Позвонить
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Faqs)
