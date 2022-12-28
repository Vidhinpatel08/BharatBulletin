import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 15
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div >
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path='/' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='general' pagesize={this.pageSize} country='in' />)}></Route>
            <Route path='/index.html' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='general' pagesize={this.pageSize} country='in' />)} ></Route>
            <Route path='/business' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='business' pagesize={this.pageSize} country='in' category='business' />)} ></Route>
            <Route path='/entertainment' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='entertainment' pagesize={this.pageSize} country='in' category='entertainment' />)} ></Route>
            <Route path='/general' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='general' pagesize={this.pageSize} country='in' category='general' />)} ></Route>
            <Route path='/health' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='health' pagesize={this.pageSize} country='in' category='health' />)} ></Route>
            <Route path='/science' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='science' pagesize={this.pageSize} country='in' category='science' />)} ></Route>
            <Route path='/sports' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='sports' pagesize={this.pageSize} country='in' category='sports' />)} ></Route>
            <Route path='/technology' element={(<News  apiKey = {this.apiKey} setProgress = {this.setProgress} key='technology' pagesize={this.pageSize} country='in' category='technology' />)} ></Route>
            <Route path='*' element={(<Error />)}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

