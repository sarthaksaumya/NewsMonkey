import React from 'react'

const NewsItem =(props)=> {

    let {title, description,imageUrl,newsUrl,author,date,source}=props;
    return (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-3 d-flex align-items-center">
                <img src={imageUrl} className="img-fluid rounded-start " alt="..."/>
                <span className="position-absolute bottom-0 badge bg-success">
                  {source}
                </span>
            </div>
            <div className="col-md-9">
              <div className="card-body d-flex flex-column">
                    <div>
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                    </div>
                    <p className="card-text"><small className="text-body-secondary">By {!author?'Unknown':author} on {(new Date(date)).toGMTString()}</small></p>
                    <div className="mt-auto d-flex justify-content-end">
                      <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">Read More</a>
                    </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default NewsItem
