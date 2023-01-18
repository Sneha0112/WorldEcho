import React from 'react'

const NewsItem=(props)=>{
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
       <div className="card" >
        <div style={{display:'flex', justifyCcontent:'flex-end',position:'absolute',right:'0'}}>
       <span className="badge rounded-pill bg-danger" >{source}</span>
       </div>
  <img src={!imageUrl?"https://m-cdn.phonearena.com/images/article/144719-wide-two_1200/Samsung-Galaxy-S23-preorder-reservations-are-live-score-an-S23-Ultra-deal.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem