import React, { useState } from 'react'

const NewsItem = (props) => {
    let { title, desc, imageUrl, newsUrl, summary, date, author, source } = props
    let [fullArticle, setFullArticle] = useState(false);
    var defaultimage = ("https://media.istockphoto.com/id/547356494/video/loading-symbol-loop.jpg?s=640x640&k=20&c=TU113GZc5CUv3yC0wAgY94Um6hbedSbs0i58jTi7Nx8=");
    const readMoreData = (e) => {
        setFullArticle(true)
    }

    return (
        <div className='my-3'>
            <div className="card mx-2 border border-dark " >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    right: '-10px',
                    top: '-10px',
                    position: 'absolute',
                    fontSize: '18px'
                }}>
                    <span className="badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%' }}>{source}</span>
                </div>
                <img src={imageUrl !== 'default' ? imageUrl : defaultimage} className="card-img-top" alt="NewsImageUrl" width={400} height={220}/>
                <div className="card-body">
                    <h5 className="card-title fw-semibold">{title}</h5>
                    {/* <hr/> */}
                    <p className="card-text">{fullArticle ? summary : desc}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    {fullArticle && <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read the Full Story</a>}
                    {!fullArticle && <button type="button" className="btn btn-sm btn-dark" onClick={readMoreData}>See Full Article</button>}
                </div>
            </div>
        </div>
    )
}

export default NewsItem
