import React from 'react'

const NewsItem = (props) => {
    let { title, desc, imageUrl, newsUrl, date, author, source } = props
    return (
        <div className='my-3'>
            <div className="card mx-2" >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    right: '-10px',
                    top: '-10px',
                    position: 'absolute'
                }}>
                    <span className="badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%' }}>{source}</span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="NewsImageUrl" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
