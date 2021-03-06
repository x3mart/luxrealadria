import React from 'react'
import { Accordion, Card, NavLink } from 'react-bootstrap'
import { connect } from 'react-redux'

const Faqs = ({ home_page }) => {
  return (
    <div>
      {home_page && home_page.faq && home_page.faq.faq_items.length > 0 && (
        <div className='section'>
          <div className='container'>
            <div className='section-title-wrap section-header'>
              <h5 className='custom-primary'>
                {home_page && home_page.faq && home_page.faq.title}
              </h5>
              <h2 className='title'>
                {home_page && home_page.faq && home_page.faq.subtitle}
              </h2>
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
                </Accordion>
              </div>
              <div className='col-lg-4 infographics-5'>
                <div className='acr-infographic-item'>
                  <i className='flaticon-telephone' />
                  <div className='acr-infographic-item-body'>
                    <h5>?????? ????????????!</h5>
                    <p>
                      ?? ?????? ???????????????? ??????????????, ????????????, ?????? ??????????????????????? ????????????
                      ?????????????????? ??????.
                    </p>
                    {home_page &&
                      home_page.contact &&
                      home_page.contact.phone_basic && (
                        <a
                          href={`tel:${home_page.contact.phone_basic}`}
                          className='btn-custom secondary btn-sm'
                        >
                          ??????????????????
                        </a>
                      )}
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
