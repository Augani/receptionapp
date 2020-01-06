import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Pages from './pages'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/meeting'>
          <Pages.Meeting />
        </Route>
        <Route path='/delivery'>
          <Pages.Delivery />
        </Route>
        <Route path='/enquiry'>
          <Pages.Enquiry />
        </Route>
        <Route path='/asset'>
          <Pages.Asset />
        </Route>
        <Route path='/'>
          <Pages.WelcomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
