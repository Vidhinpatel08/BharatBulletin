import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';

export default class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={(<News key = 'general'pagesize={9} country='in' />)}></Route>
            <Route path='/index.html' element={(<News key = 'general' pagesize={9} country='in'  />)} ></Route>
            <Route path='/business' element={(<News key = 'business' pagesize={9} country='in' category='business' />)} ></Route>
            <Route path='/entertainment' element={(<News  key = 'entertainment' pagesize={9} country='in' category='entertainment' />)} ></Route>
            <Route path='/general' element={(<News key = 'general' pagesize={9} country='in' category='general' />)} ></Route>
            <Route path='/health' element={(<News key = 'health' pagesize={9} country='in' category='health' />)} ></Route>
            <Route path='/science' element={(<News  key = 'science' pagesize={9} country='in' category='science' />)} ></Route>
            <Route path='/sports' element={(<News  key = 'sports' pagesize={9} country='in' category='sports' />)} ></Route>
            <Route path='/technology' element={(<News key = 'technology' pagesize={9} country='in' category='technology' />)} ></Route>
            <Route path='*' element={(<Error />)}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

