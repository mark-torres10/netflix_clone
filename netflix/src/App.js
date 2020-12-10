import React from 'react'; 
import Row from './Row'; 
import './App.css';
import requests from './requests'; 

function App() {
  return (
    <div className="App">  
      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl = {requests.fetchComedyMovies}/>
    </div>
  );
} 

export default App;
