import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    // default props in classbasd components
    static defaultProps = {
        country: 'in',
        category: 'general',
        pagesize: 9
    }

    // Propstype in classbasd components
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pagesize: PropTypes.number,
    }


    // RUN BEFORE RENDER
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    

    // RUN AFTER RENDER
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c16715a456f64335a3a7c582cbe2a202&page=1&pagesize=${this.props.pagesize}`
        this.setState({
            loading: true
        });
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            loading: false,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c16715a456f64335a3a7c582cbe2a202&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        this.setState({
            loading: true
        });
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            loading: false,
            articles: parsedData.articles,
            page: this.state.page - 1
        })
    }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c16715a456f64335a3a7c582cbe2a202&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
            this.setState({
                loading: true
            });
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                loading: false,
                articles: parsedData.articles,
                page: this.state.page + 1
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center my-4'>NewsMonkey - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase()} News</h1>
                {this.state.loading && <Spinner />}
                <div className="row my-3">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 " key={element.url} >
                            <NewsItem title={element.title ? element.title : ''} desc={element.description ? element.description : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://media.sukabumiupdate.com/media/2022/12/26/1672045147_63a9625be9db2_xq9Uiif1HsjItWeHjCcV.jpg'} newsUrl={element.url} date={element.publishedAt.slice(0, 10)} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
