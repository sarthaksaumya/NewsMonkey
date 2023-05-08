import React, { useState} from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const pageSize=12;
  const [country,setCountry]=useState('in');
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress,setProgress]=useState(0);
  
  const handleCountryChange = (c) => {
    setCountry(c);
  }
  const setProgressBar=(p)=>{
    setProgress(p)
  }

    return (
      <div>
        <BrowserRouter>
        <NavBar onCountryChange={handleCountryChange}/>
          <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgressBar} key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="general"/>} />
            <Route exact path="/general" element={<News setProgress={setProgressBar} key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgressBar} key="business" pageSize={pageSize} apiKey={apiKey} country={country} category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgressBar} key="entertainment" pageSize={pageSize} apiKey={apiKey} country={country} category="entertainment"/>} />
            <Route exact path="/health" element={<News setProgress={setProgressBar} key="health" pageSize={pageSize} apiKey={apiKey} country={country} category="health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgressBar} key="science" pageSize={pageSize} apiKey={apiKey} country={country} category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgressBar} key="sports" pageSize={pageSize} apiKey={apiKey} country={country} category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgressBar} key="technology" pageSize={pageSize} apiKey={apiKey} country={country} category="technology"/>} />
          </Routes>
      </BrowserRouter>
      </div>
    )
}
export default App