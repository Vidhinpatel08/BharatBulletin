import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ apiKey, setProgress, pageSize, category, language }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalized = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const updateNews = async () => {
    // Fetch news data with the updated language
    const url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${category}&when=7d&page_size=${pageSize}&lang=${language}&countries=in`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArticles(data.articles);
      setLoading(false);
      setTotalResults(data.total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const titleOfDoc = `${capitalized(category)} - BharatBulletin`
    document.title = titleOfDoc
    updateNews();
    // eslint-disable-next-line
  }, [category, language]);

  const fetchMoreData = async () => {
    // Fetch more news data with the updated language
    const url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${category}&when=7d&page_size=${pageSize}&lang=${language}&countries=in`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
      },
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArticles([...articles, ...data.articles]);
      setTotalResults(data.total);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Implement exponential backoff
      await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, page)));
      // Retry fetch after delay
      fetchMoreData();
    }
  };

  return (
    <div className='main-container-box'>
      <div className='container pt-3'>
        <h1 className='text-center title-div select-none' id='title-news'>
          <strong>BharatBulletin - Top {capitalized(category)} Headlines</strong>
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          style={{ overflow: 'hidden' }}>
          <div className='container'>
            <div className='row my-3'>
              {articles.map((Article) => {
                return (
                  <div className='col-md-4 News-div' key={Article.link}>
                    <NewsItem
                      title={Article.title ? Article.title : ''}
                      desc={Article.excerpt ? Article.excerpt : ''}
                      summary={Article.summary ? Article.summary : ''}
                      imageUrl={Article.media ? Article.media : 'default'}
                      newsUrl={Article.link}
                      author={Article.author ? Article.author : 'Unknown'}
                      date={Article.published_date}
                      source={Article.clean_url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

// Default props
News.defaultProps = {
  pageSize: 18,
};

// Prop types
News.propTypes = {
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default News;
