import React, { useEffect, useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
import { connect } from 'react-redux'
import { add_listing } from '../../../redux/actions/listings'


import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'


const features = [
  { id: 1, icon: 'bone', title: 'Можно с животными' },
  { id: 2, icon: 'chair', title: 'Меблировано' },
  { id: 3, icon: 'fan', title: 'Кондиционирование' },
  { id: 4, icon: 'garage', title: 'Паркинг/гараж' },
  { id: 5, icon: 'new', title: 'Новый объект' },
  { id: 6, icon: 'eye', title: 'Вид на море' },
]

function Content(props) {
  const [propertyName, setPropertyName] = useState('')
  const [propertyDescription, setPropertyDescription] = useState('')
  const [propertyPurpose, setPropertyPurpose] = useState('sale')
  const [propertyStatus, setPropertyStatus] = useState('none')
  const [propertyRegion, setPropertyRegion] = useState('')
  const [propertyType, setPropertyType] = useState('commercial')
  const [propertyPrice, setPropertyPrice] = useState('')
  const [propertySpace, setPropertySpace] = useState('')
  const [propertyVideo, setPropertyVideo] = useState('')
  const [propertyFeatures, setPropertyFeatures] = useState([])
  const [propertyId, setPropertyId] = useState('')
  const [propertyBeds, setPropertyBeds] = useState('')
  const [propertyBaths, setPropertyBaths] = useState('')
  const [propertyCondition, setPropertyCondition] = useState('')
  const [propertyBuiltYear, setPropertyBuiltYear] = useState('')
  const [files, setFiles] = useState([])
  const [urls, setUrls] = useState([])
  const [tab2Enabled, setTab2Enabled] = useState(true)
  const [tab3Enabled, setTab3Enabled] = useState(true)
  const [tab4Enabled, setTab4Enabled] = useState(true)

  console.log(urls)


  const handleSubmit = e => {
    e.preventDefault()
    props.add_listing(
      propertyName,
      propertyDescription,
      propertyPurpose,
      propertyStatus,
      propertyType,
      propertyPrice,
      propertySpace,
      propertyVideo,
      propertyFeatures,
      propertyId,
      propertyBeds,
      propertyBaths,
      propertyCondition,
      propertyBuiltYear,
      propertyRegion,
      urls
    )
  }


  // useEffect(() => {
  //   setTab2Enabled(
  //     propertyName && propertyDescription && propertyPrice && propertySpace
  //   )
  // }, [propertyName, propertyDescription, propertyPrice, propertySpace])

  // useEffect(() => {
  //   setTab3Enabled(files.length > 0)
  //   setTab4Enabled(files.length > 0)
  // }, [files])


  const [propertyRentalPeriod, setPropertyRentalPeriod] = useState('')
  const [rentalPeriod, setRentalPeriod] = useState(false)

  useEffect(() => {
    if (propertyPurpose === 'rent') {
      setRentalPeriod(true)
    } else if (propertyPurpose === 'sale') {
      setRentalPeriod(false)
    }
  }, [propertyPurpose])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const thumbs = files.map(file => (
    <div className='thumb' key={file.name}>
      <div className='thumbInner'>
        <img src={file.preview} alt='img' />
      </div>
    </div>
  ))

  const uploadImages = () => {
    files.forEach(file => {
      const storage = getStorage()

      const metadata = {
        contentType: file.type,
      }

      const storageRef = ref(storage, propertyName + '/' + file.name)
      const uploadTask = uploadBytesResumable(storageRef, file, metadata)

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
        },
        error => {
          console.error(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL =>
            setUrls(urls => [...urls, downloadURL]))
        }
      )
    })
  }

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
      
    },
    [files]
  )
  return (
    <div className='section'>
      <div className='container'>
        <div className='row'>
          <Tab.Container defaultActiveKey='tab1'>
            {/* Tabs Start */}
            <div className='col-md-4'>
              <Nav variant='tabs' className='nav nav-tabs tab-cards'>
                <Nav.Item>
                  <Nav.Link eventKey='tab1'>
                    <span>01</span> Основная информация
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='tab2' disabled={!tab2Enabled}>
                    <span>02</span> Галерея
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={uploadImages}
                    eventKey='tab3'
                    disabled={!tab3Enabled}
                  >
                    <span>03</span> Особенности
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='tab4' disabled={!tab4Enabled}>
                    <span>04</span> Детали
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {/* Tabs End */}
            {/* Tab Content Start */}
            <div className='col-md-8'>
              <form onSubmit={e => handleSubmit(e)}>
                <Tab.Content className='m-0'>
                  <Tab.Pane eventKey='tab1'>
                    <div className='row'>
                      <div className='col-md-12 form-group'>
                        <label>Описание объекта</label>
                        <textarea
                          required
                          name='content'
                          rows={4}
                          className='form-control'
                          placeholder='Описание объекта'
                          value={propertyDescription}
                          onChange={e => setPropertyDescription(e.target.value)}
                        />
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Название объекта</label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          placeholder='Название объекта'
                          name='name'
                          value={propertyName}
                          onChange={e => setPropertyName(e.target.value)}
                        />
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Назначение объекта</label>
                        <select
                          required
                          className='form-control'
                          name='purpose'
                          onChange={e => setPropertyPurpose(e.target.value)}
                          value={propertyPurpose}
                        >
                          <option value='sale'>Продажа</option>
                          <option value='rent'>Аренда</option>
                        </select>
                      </div>
                      <div className='col-md-6'>
                        <label>Тип объекта</label>
                        <select
                          required
                          className='form-control'
                          name='type'
                          onChange={e => setPropertyType(e.target.value)}
                          value={propertyType}
                        >
                          <option value='commercial'>Комерческий</option>
                          <option value='house'>Дом</option>
                          <option value='apartment'>Апартаменты</option>
                          <option value='condo'>Квартира</option>
                          <option value='villa'>Вилла</option>
                          <option value='duplex'>Дуплекс</option>
                        </select>
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Стоимость объекта</label>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>€</span>
                          </div>
                          <input
                            required
                            type='text'
                            className='form-control'
                            name='price'
                            placeholder='Стоимость объекта'
                            onChange={e => setPropertyPrice(e.target.value)}
                            value={propertyPrice}
                          />
                        </div>
                      </div>

                      <div className='col-md-6 form-group'>
                        <label>
                          Площадь объекта (м
                          <sup style={{ fontSize: 10 }}>2</sup>)
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          placeholder='Площадь объекта'
                          name='space'
                          onChange={e => setPropertySpace(e.target.value)}
                          value={propertySpace}
                        />
                      </div>
                      {rentalPeriod && (
                        <div className='col-md-6'>
                          <label>Тип аренды</label>
                          <select
                            required={rentalPeriod}
                            className='form-control'
                            name='period'
                            onChange={e =>
                              setPropertyRentalPeriod(e.target.value)
                            }
                            value={propertyRentalPeriod}
                          >
                            <option value='daily'>Посуточная</option>
                            <option value='monthly'>Помесячная</option>
                            <option value='lowSeason'>В межсезонье</option>
                            <option value='yearly'>На год и более</option>
                          </select>
                        </div>
                      )}
                      <div className='col-md-12 form-group'>
                        <label>Видео объекта</label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ссылка на видео'
                          name='video'
                          onChange={e => setPropertyVideo(e.target.value)}
                          value={propertyVideo}
                        />
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey='tab2'>
                    <div className='form-group'>
                      <label>Галерея объекта</label>
                      <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <div className='dropzone-msg dz-message needsclick'>
                          <i className='fas fa-cloud-upload-alt' />
                          <h5 className='dropzone-msg-title'>
                            Перетащите файлы сюда, или кликните для выбора.
                          </h5>
                          <span className='dropzone-msg-desc'>
                            Максимальное количество файлов ограничено{' '}
                            <strong>десятью</strong> штуками.
                          </span>
                        </div>
                      </div>
                      <aside className='thumbsContainer'>{thumbs}</aside>
                      {/* <span className='acr-form-notice'>
                          *You can upload up to 5 images for your listing
                        </span>
                        <span className='acr-form-notice'>
                          *Listing images should be atleast 620x480 in
                          dimensions
                        </span> */}
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey='tab3'>
                    <div className='row'>
                      {features.map((item, i) => (
                        <div key={i} className='col-lg-4 col-md-6 col-sm-6'>
                          <label className='acr-listing-feature'>
                            <input
                              type='checkbox'
                              name={'feature' + item.id + ''}
                              onChange={e => {
                                if (e.target.checked) {
                                  if (
                                    propertyFeatures.includes(e.target.name)
                                  ) {
                                    return
                                  } else {
                                    setPropertyFeatures([
                                      ...propertyFeatures,
                                      e.target.name,
                                    ])
                                  }
                                } else if (!e.target.checked) {
                                  if (
                                    propertyFeatures.includes(e.target.name)
                                  ) {
                                    const arr = propertyFeatures

                                    for (var i = 0; i < arr.length; i++) {
                                      if (arr[i] === e.target.name) {
                                        arr.splice(i, 1)
                                      }
                                    }
                                    setPropertyFeatures(arr)
                                  }
                                }
                              }}
                            />
                            <i className='acr-feature-check fas fa-check' />
                            <i
                              className={
                                'acr-listing-feature-icon flaticon-' +
                                item.icon +
                                ''
                              }
                            />
                            {item.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey='tab4'>
                    <div className='row'>
                      <div className='col-md-6 form-group'>
                        <label>ID объекта</label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          placeholder='ID объекта'
                          name='id'
                          onChange={e => setPropertyId(e.target.value)}
                          value={propertyId}
                        />
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Количество спален</label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          placeholder='Количество спален'
                          name='beds'
                          onChange={e => setPropertyBeds(e.target.value)}
                          value={propertyBeds}
                        />
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Количество санузлов</label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          placeholder='Количество санузлов'
                          name='baths'
                          onChange={e => setPropertyBaths(e.target.value)}
                          value={propertyBaths}
                        />
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Состояние</label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          placeholder='Состояние объекта'
                          name='condition'
                          onChange={e => setPropertyCondition(e.target.value)}
                          value={propertyCondition}
                        />
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Статус объекта</label>
                        <select
                          className='form-control'
                          name='status'
                          onChange={e => setPropertyStatus(e.target.value)}
                          value={propertyStatus}
                        >
                          <option value='none'>без статуса</option>
                          <option value='specialOffer'>
                            Специальное предложение
                          </option>
                          <option value='reduced'>Снижение цены</option>
                          <option value='featured'>В тренде</option>
                          <option value='sold'>Продано</option>
                        </select>
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Год постройки</label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          placeholder='Год постройки'
                          name='built'
                          onChange={e => setPropertyBuiltYear(e.target.value)}
                          value={propertyBuiltYear}
                        />
                      </div>
                      <div className='col-md-6 form-group'>
                        <label>Регион объекта</label>
                        <select
                          required
                          className='form-control'
                          name='status'
                          onChange={e => setPropertyRegion(e.target.value)}
                          value={propertyRegion}
                        >
                          <option value='none'>без статуса</option>
                          <option value='specialOffer'>
                            Специальное предложение
                          </option>
                          <option value='reduced'>Снижение цены</option>
                          <option value='featured'>В тренде</option>
                          <option value='sold'>Продано</option>
                        </select>
                      </div>
                    </div>

                    <button type='submit' className='btn-custom' name='submit'>
                      Добавить объект
                    </button>
                  </Tab.Pane>
                </Tab.Content>
              </form>
            </div>
          </Tab.Container>
          {/* Tab Content End */}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
})

export default connect(mapStateToProps, { add_listing })(Content)
