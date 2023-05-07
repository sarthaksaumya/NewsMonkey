import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import ImageNotAvailable from './ImageNotAvailable.png'

export class News extends Component {

  static defaultProps = {
      country:"in",
      pageSize:12,
      category:"general"
  };
  static propTypes = {
    category: PropTypes.string,
    pageSize:PropTypes.number,
    country:PropTypes.string,
  };

  constructor(props){
    super(props);
    this.state={
        apiKey:"c663e15a0c4d4460bd06c2f1099e70dc",
        articles:[],
        loading:false,
        page:1
    }
    document.title=`${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`
  }
  async componentDidMount(){
    this.setState({loading:true});
    let URL=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data=await fetch(URL);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      articles:parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false})
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      console.log('Country changed:', this.props.country);
      this.componentDidMount();
      //  Note: We can remove this componentdidMOunt from here and then create seperate fetchData function which will make api request, and then we can use that method here and also in compoenentDidMount function. Because after changing the country the compoenent was not fetching the data again, so we added here to manually fetch the data again. 
      //  Make the API request or perform any necessary actions based on the new country value
    }
  }

handlePrevClick=async()=>{
    this.setState({loading:true});
    let URL=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c663e15a0c4d4460bd06c2f1099e70dc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(URL);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      loading:false
    })
}
handleNextClick=async()=>{
    this.setState({loading:true})
    let URL=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c663e15a0c4d4460bd06c2f1099e70dc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(URL);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      loading:false
    })
}

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Top Headlines - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} </h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-5">
          {!this.state.loading && this.state.articles.map((element)=>{
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
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark btn-lg btn-block" onClick={this.handlePrevClick}>&laquo; Previous Page</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark btn-lg btn-block" onClick={this.handleNextClick}>Next Page &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
