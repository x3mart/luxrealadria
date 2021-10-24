import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { auth } from './firebase/firebase.utils'
import { getAuth } from 'firebase/auth'

import { Provider } from 'react-redux'
import store from './store'
import PrivateRoute from './components/layouts/PrivateRoute'

// Preloader
const Preloader = React.lazy(() => import('./components/layouts/Preloader'))

// Home Pages
const Home = React.lazy(() => import('./components/pages/Home'))
// Blog
const Bloglist = React.lazy(() => import('./components/pages/Bloglist'))
const Blogsingle = React.lazy(() => import('./components/pages/Blogsingle'))
// Pages

const Comingsoon = React.lazy(() => import('./components/pages/Comingsoon'))
const Error = React.lazy(() => import('./components/pages/Error'))
const Login = React.lazy(() => import('./components/pages/Login'))
const Register = React.lazy(() => import('./components/pages/Register'))
const Legal = React.lazy(() => import('./components/pages/Legal'))
// Listings
const Listinglist = React.lazy(() => import('./components/pages/Listinglist'))

const Listingdetailstwo = React.lazy(() =>
  import('./components/pages/Listingdetailstwo')
)

const Submitlisting = React.lazy(() =>
  import('./components/pages/Submitlisting')
)
const SiteAdmin = React.lazy(() => import('./components/pages/SiteAdmin'))

// Agents
const Agentarchive = React.lazy(() => import('./components/pages/Agentarchive'))

const Contacts = React.lazy(() => import('./components/pages/Contacts'))

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div></div>}>
          <Preloader />
          <Switch>
            {/* Homepages */}
            <Route exact path='/' component={Home} />
            {/* Blog */}
            <Route exact path='/articles' component={Bloglist} />
            <Route exact path='/articles/:id' component={Blogsingle} />
            {/* Pages */}

            <Route path='/coming-soon' component={Comingsoon} />

            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />

            {/* Listings */}
            <Route exact path='/listing' component={Listinglist} />
            <Route exact path='/listing/:id' component={Listingdetailstwo} />
            <Route path='/submit-listing' component={Submitlisting} />
            <Route path='/site-admin' component={SiteAdmin} />
            {/* Agents */}
            <PrivateRoute path='/agent-list' component={Agentarchive} />
            {/* Agency */}
            <Route path='/legal' component={Legal} />
            <Route path='/contacts' component={Contacts} />
            <Route component={Error} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
