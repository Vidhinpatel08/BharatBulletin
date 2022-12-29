import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const capitalized = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }

    const updateNews = async () => {
        props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
        props.setProgress(10)
        setLoading(true)
        props.setProgress(20)
        let data = await fetch(url)
        props.setProgress(50)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `${capitalized(props.category)} - NewsMonkey`
        updateNews()
    }, [])


    const fetchMoreData = async () => {
        // setState({ page: page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setPage(page + 1)
    }

    return (
        <div className='container my-3'>
            <h1 className='text-center ' style={{ marginTop: '80px' }}><strong>NewsMonkey - Top {capitalized(props.category)} Headlines</strong></h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />} style={{ overflow: 'hidden' }}>
                <div className="container">
                    <div className="row my-3">
                        {articles.map((element) => {
                            return <div className="col-md-4 " key={element.url} >
                                <NewsItem title={element.title ? element.title : ''} desc={element.description ? element.description : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://media.istockphoto.com/id/547356494/video/loading-symbol-loop.jpg?s=640x640&k=20&c=TU113GZc5CUv3yC0wAgY94Um6hbedSbs0i58jTi7Nx8='} newsUrl={element.url} author={element.author ? element.author : 'Unknown'} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

// default props in classbasd components
News.defaultProps = {
    country: 'in',
    category: 'general',
    pagesize: 12
}

// Propstype in classbasd components
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
}

export default News
