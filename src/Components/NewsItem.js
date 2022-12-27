import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, newsUrl, date } = this.props
        return (
            <div className='my-3'>
                <div className="card mx-2" >
                    <img src={imageUrl} className="card-img-top" alt="NewsImageUrl" />
                    <div className="card-body">
                        <p className="fs-6k">{date}</p>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
