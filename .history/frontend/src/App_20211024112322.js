import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { auth } from './firebase/firebase.utils'
import { getAuth } from 'firebase/auth'

import { Provider } from 'react-redux'
import store from './store'
import PrivateRoute from './components/layouts/PrivateRoute'

import MainLayout from './components/layouts/MainLayout'
import SecondaryLayout from './components/layouts/SecondaryLayout'

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
            <Route
              path={[
                '/articles',
                '/articles/:id',
                '/coming-soon',
                '/events',
                '/contacts',
                '/login',
                '/reset',
                '/',
              ]}
            >
              <MainLayout>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/index.php/programmy' component={Programs} />
                  <Route path='/events' component={Events} />
                  <Route path='/contacts' component={Contacts} />
                  <Route path='/login' component={Login} />
                  <Route path='/reset' component={PassReset} />
                </Switch>
              </MainLayout>
            </Route>

            {/* Homepages */}
            {/* <Route exact path='/' component={Home} /> */}
            {/* Blog */}
            {/* <Route exact path='/articles' component={Bloglist} /> */}
            {/* <Route exact path='/articles/:id' component={Blogsingle} /> */}
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














return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            exact
            path='/password/reset/confirm/:uid/:token'
            component={ResetPasswordConfirm}
          />
          <Route
            path={[
              '/dashboard/main',
              '/dashboard/study/students',
              '/dashboard/study/teachers',
              '/dashboard/study/programs',
              '/dashboard/study/groups',
              '/dashboard/study/subjects',
              '/dashboard/study/materials',
              '/dashboard/study/schedule',
              '/dashboard/study/admittance',
              '/dashboard/study/milestones',
              '/dashboard/study/library',
              '/dashboard/study/Tasks',
              '/dashboard/my-page',
            ]}
          >
            <AdminLayout>
              <Switch>
                <Route path='/dashboard/my-page' component={Profile} />
                <Route path='/dashboard/study/students' component={Students} />
                <Route path='/dashboard/study/teachers' component={Teachers} />
                <Route
                  path='/dashboard/study/programs'
                  component={AdminPrograms}
                />
                <Route path='/dashboard/study/groups' component={Groups} />
                <Route path='/dashboard/study/subjects' component={Subjects} />
                <Route
                  path='/dashboard/study/materials'
                  component={StudyMaterials}
                />
                <Route path='/dashboard/study/schedule' component={Schedule} />
                <Route
                  path='/dashboard/study/admittance'
                  component={Admittance}
                />
                <Route
                  path='/dashboard/study/milestones'
                  component={Milestones}
                />
                <Route path='/dashboard/study/library' component={Library} />
                <Route path='/dashboard/study/tasks' component={Tasks} />
                <Route path='/dashboard/main' component={Dashboard} />
                {/* <Route path='/dashboard/main' component={Test} /> */}
              </Switch>
            </AdminLayout>
          </Route>
          <Route
            path={[
              '/about',
              '/index.php/programmy',
              '/events',
              '/contacts',
              '/login',
              '/reset',
              '/',
            ]}
          >
            <Layout>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/index.php/programmy' component={Programs} />
                <Route path='/events' component={Events} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/login' component={Login} />
                <Route path='/reset' component={PassReset} />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )

export default App
