import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    // default props in classbasd components
    static defaultProps = {
        country: 'in',
        category: 'general',
        pagesize: 12
    }

    // Propstype in classbasd components
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pagesize: PropTypes.number,
    }


    // RUN BEFORE RENDER
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalized(this.props.category)} - NewsMonkey`
    }

    capitalized = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }

    async updateNews() {
        // console.log(this.state.page)
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({
            loading: true
        });
        let data = await fetch(url)
        this.props.setProgress(50)
        let parsedData = await data.json()
        this.props.setProgress(70)

        this.setState({
            loading: false,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        this.props.setProgress(100)
    }

    // RUN AFTER RENDER
    async componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = async () => {
        // this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1 }&pagesize=${this.props.pagesize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            // loading: false,
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            page: this.state.page + 1
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center my-4'><strong>NewsMonkey - Top {this.capitalized(this.props.category)} Headlines</strong></h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />} style = {{overflow: 'hidden'}}>
                    <div className="container">
                        <div className="row my-3">
                            {this.state.articles.map((element) => {
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
}

export default News
