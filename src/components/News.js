import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import ImageNotAvailable from './ImageNotAvailable.png'
import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=> {

  News.defaultProps = {
      country:"in",
      pageSize:12,
      category:"general"
  };
  News.propTypes = {
    category: PropTypes.string,
    pageSize:PropTypes.number,
    country:PropTypes.string,
  };
  const apiKey=props.apiKey;
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  // document.title=`${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`;

  const updateNews=async()=>{
    props.setProgress(10);
    setLoading(true);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data=await fetch(url);
    props.setProgress(30);
    let parsedData=await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setLoading(false);
    props.setProgress(100);
  }
  const fetchMoreData = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setPage(page+1);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
  };

  useEffect(() => {
    const fetchData = async () => {
      await updateNews();
    };
    fetchData();
  },[props.country]);
    return (
      <>
        <h1 className="text-center">Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
          <div className="container">
            <div className="row my-5">
              {articles.map((element)=>{
                return <div className="col-md-12" key={element.url}>
                  <NewsItem 
                    title={element.title?element.title.slice(0,200):""} 
                    description={element.description?element.description.slice(0,600):""} 
                    imageUrl={element.urlToImage || ImageNotAvailable } 
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )

}

export default News
