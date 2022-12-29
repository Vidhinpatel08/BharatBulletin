import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 15
  const apiKey = process.env.REACT_APP_NEWS_API
  // create .env.local file  & write [REACT_APP_NEWS_API = 'NewsApiKey']
  let [progress, setProgress] = useState(0)

  return (
    <div >
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={(<News apiKey={apiKey} setProgress={setProgress} key='general' pagesize={pageSize} country='in' />)}></Route>
          <Route path='/index.html' element={(<News apiKey={apiKey} setProgress={setProgress} key='general' pagesize={pageSize} country='in' />)} ></Route>
          <Route path='/business' element={(<News apiKey={apiKey} setProgress={setProgress} key='business' pagesize={pageSize} country='in' category='business' />)} ></Route>
          <Route path='/entertainment' element={(<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pagesize={pageSize} country='in' category='entertainment' />)} ></Route>
          <Route path='/general' element={(<News apiKey={apiKey} setProgress={setProgress} key='general' pagesize={pageSize} country='in' category='general' />)} ></Route>
          <Route path='/health' element={(<News apiKey={apiKey} setProgress={setProgress} key='health' pagesize={pageSize} country='in' category='health' />)} ></Route>
          <Route path='/science' element={(<News apiKey={apiKey} setProgress={setProgress} key='science' pagesize={pageSize} country='in' category='science' />)} ></Route>
          <Route path='/sports' element={(<News apiKey={apiKey} setProgress={setProgress} key='sports' pagesize={pageSize} country='in' category='sports' />)} ></Route>
          <Route path='/technology' element={(<News apiKey={apiKey} setProgress={setProgress} key='technology' pagesize={pageSize} country='in' category='technology' />)} ></Route>
          <Route path='*' element={(<Error />)}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App