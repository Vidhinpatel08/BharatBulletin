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
            <div className="card mx-2 border border-dark Card-Box " >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    right: '-10px',
                    top: '-10px',
                    position: 'absolute',
                    fontSize: '18px'
                }}>
                    <span className="badge rounded-pill bg-danger select-none" style={{ zIndex: '1', left: '90%' }}>{source.split('.')[0]}</span>
                </div>

                <div className="img-container select-none">
                    <img src={imageUrl !== 'default' ? imageUrl : defaultimage} className="card-img-top" alt="loading" width={400} height={220} />
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-semibold mukta-vaani-bold">{title}</h5>
                    <p className="card-text card-text-desc select-none mukta-vaani-regular">{fullArticle ? summary : desc}</p>
                    <p className="card-text select-none mukta-light"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    {fullArticle && <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark select-none">Read the Full Story</a>}
                    {!fullArticle && <button type="button" className="btn btn-sm btn-dark select-none" onClick={readMoreData}>See Full Article</button>}
                </div>
            </div>
        </div>
    )
}

export default NewsItem
