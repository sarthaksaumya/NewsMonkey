import React, {  Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      country:"in"
    }
  }
  handleCountryChange = (c) => {
    this.setState({ country: c });
  }
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar onCountryChange={this.handleCountryChange}/>
          <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={12} apiKey={this.apiKey} country={this.state.country} category="general"/>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={12} apiKey={this.apiKey} country={this.state.country} category="general"/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={12} apiKey={this.apiKey} country={this.state.country} category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={12} apiKey={this.apiKey} country={this.state.country} category="entertainment"/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={12} apiKey={this.apiKey} country={this.state.country} category="health"/>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={12} apiKey={this.apiKey} country={this.state.country} category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={12} apiKey={this.apiKey} country={this.state.country} category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={12} apiKey={this.apiKey} country={this.state.country} category="technology"/>} />
          </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
