import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import LoadingBar from 'react-top-loading-bar';
import ScrollTop from './Components/ScrollTop';

const App = () => {
  const pageSize = 100;
  const apiKey = process.env.REACT_APP_NEWS_API;   // create .env.local file  & write [REACT_APP_NEWS_API = 'NewsApiKey']
  const defaultLanguage = localStorage.getItem('language') || 'en';

  let [progress, setProgress] = useState(0);
  let [language, setLanguage] = useState(defaultLanguage);

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
    handleScrollToTop()
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: -15,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <div>
      <Router>
        <Navbar language={language} changeLanguage={changeLanguage} handleScrollToTop={handleScrollToTop}/>
        <ScrollTop handleScrollToTop={handleScrollToTop}></ScrollTop>
        <LoadingBar color='#f11946' progress={progress} />
        <Routes>
          <Route path='/' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} language={language} />} />
          <Route path='/business' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category='business' language={language} />} />
          <Route path='/entertainment' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category='entertainment' language={language} />} />
          <Route path='/politics' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category='politics' language={language} />} />
          <Route path='/finance' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category='finance' language={language} />} />
          <Route path='/science' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category='science' language={language} />} />
          <Route path='/world' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category='world' language={language} />} />
          <Route path='/sport' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category='sport' language={language} />} />
          <Route path='/tech' element={<NewsPage apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category='tech' language={language} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

const NewsPage = ({ apiKey, setProgress, pageSize, category = 'news', language }) => {
  return <News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} category={category} language={language} />;
};

export default App;
