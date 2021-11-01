import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import MainLayout from './components/layouts/MainLayout'

// Preloader
const Preloader = React.lazy(() => import('./components/layouts/Preloader'))

// Home Pages
const Home = React.lazy(() => import('./components/pages/Home'))
const Bloglist = React.lazy(() => import('./components/pages/Bloglist'))
const Blogsingle = React.lazy(() => import('./components/pages/Blogsingle'))
const Comingsoon = React.lazy(() => import('./components/pages/Comingsoon'))
const Error = React.lazy(() => import('./components/pages/Error'))
const Legal = React.lazy(() => import('./components/pages/Legal'))
const Listinglist = React.lazy(() => import('./components/pages/Listinglist'))
const Listingdetails = React.lazy(() =>
  import('./components/pages/Listingdetails')
)

const Contacts = React.lazy(() => import('./components/pages/Contacts'))

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div></div>}>
          <Preloader />
          <Switch>
            <Route exact path='/coming-soon' component={Comingsoon} />
            <Route
              path={[
                '/articles',
                '/articles/:id',
                '/listing',
                '/listing/:id',
                '/submit-listing',
                // '/site-admin',
                // '/agent-list',
                '/legal',
                '/contacts',
                // '/login',
                // '/register',
                '/',
              ]}
            >
              <MainLayout>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/articles' component={Bloglist} />
                  <Route exact path='/articles/:id' component={Blogsingle} />
                  <Route exact path='/listing' component={Listinglist} />
                  <Route
                    exact
                    path='/listing/:id'
                    component={Listingdetails}
                  />
                  <Route path='/submit-listing' component={Submitlisting} />
                  {/* <Route path='/site-admin' component={SiteAdmin} />
                  <PrivateRoute path='/agent-list' component={Agentarchive} /> */}
                  <Route path='/legal' component={Legal} />
                  <Route path='/contacts' component={Contacts} />
                  {/* <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} /> */}
                  <Route component={Error} />
                </Switch>
              </MainLayout>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
