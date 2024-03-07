import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 50
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
          <Route path='/' element={(<News apiKey={apiKey} setProgress={setProgress} key='news' pagesize={pageSize} countries='in' category='news' />)}></Route>
          <Route path='/index.html' element={(<News apiKey={apiKey} setProgress={setProgress} key='news' pagesize={pageSize} countries='in' category='news' />)} ></Route>
          <Route path='/business' element={(<News apiKey={apiKey} setProgress={setProgress} key='business' pagesize={pageSize} countries='in' category='business' />)} ></Route>
          <Route path='/entertainment' element={(<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pagesize={pageSize} countries='in' category='entertainment' />)} ></Route>
          <Route path='/politics' element={(<News apiKey={apiKey} setProgress={setProgress} key='politics' pagesize={pageSize} countries='in' category='politics' />)} ></Route>
          <Route path='/finance' element={(<News apiKey={apiKey} setProgress={setProgress} key='finance' pagesize={pageSize} countries='in' category='finance' />)} ></Route>
          <Route path='/science' element={(<News apiKey={apiKey} setProgress={setProgress} key='science' pagesize={pageSize} countries='in' category='science' />)} ></Route>
          <Route path='/world' element={(<News apiKey={apiKey} setProgress={setProgress} key='world' pagesize={pageSize} countries='in' category='world' />)} ></Route>
          <Route path='/sport' element={(<News apiKey={apiKey} setProgress={setProgress} key='sport' pagesize={pageSize} countries='in' category='sport' />)} ></Route>
          <Route path='/tech' element={(<News apiKey={apiKey} setProgress={setProgress} key='tech' pagesize={pageSize} countries='in' category='tech' />)} ></Route>
          <Route path='*' element={(<Error />)}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App