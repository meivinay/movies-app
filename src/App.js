import React, { Component } from 'react';
import axios from 'axios';
import "./index.css"
import { API_KEY, API_URL } from './apikey';
import Movies from './Component/Movies/Movies';
import Header from './Component/Header/Header';
import Pagination from './Component/Pagination/Pagination';
import MovieDetail from './Component/MovieDetail/MovieDetail';
import Favourite from './Component/Favourite/Favourite';
import {BrowserRouter as Router , generatePath, Route, Switch} from "react-router-dom"

// Header ==> Header always visible
// Movies ==> Simply return multiple "Movie"(Component) cards
// Movie ==> A Single Card on Home Page .. show thumbnail, title, rating
// movieDetail ==> Show Details of the Movie when "Movie" card thumbnail is clicked
// Pagination ==> One time only 20 movies are returned by the api in one call, we have to make multiple calls to get all movies related to searched movie 
class App extends Component {
  state = {
    moviesData: [],
    defaultMovie: "lord of the rings",
    pages:[],
    currPage:1
  };
  componentDidMount() {
    //fetch api using api_key, page,query
    // in 1 page max 20 movies
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: 1, query: this.state.defaultMovie }
    }).then((apiData) => {
      let pagesCount = apiData.data.total_pages;
      let totalPages = []
      for(let i =1;i<=pagesCount;i++){
        totalPages.push(i);
      }
      this.setState({ moviesData: apiData.data.results, pages: totalPages});
    })
  }

  setMovies = (newMovieName) => {
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: 1, query: newMovieName }
    }).then((apiData) => {
      let pagesCount = apiData.data.total_pages;
      let totalPages = []
      for(let i=1;i<=pagesCount;i++){
        totalPages.push(i);
      }
      this.setState({ moviesData: apiData.data.results,pages:totalPages, defaultMovie:newMovieName, currPage:1 });
    })
  }

  setPage = (newPage)=>{
    console.log("pages "+this.state.pages);
    console.log("setting page"+ newPage);
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: newPage, query: this.state.defaultMovie }
    }).then((apiData) => {
      this.setState({ moviesData: apiData.data.results, currPage:newPage});
    })
  }
  previousPage = ()=>{
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: this.state.currPage-1, query: this.state.defaultMovie }
    }).then((apiData) => {
      this.setState({ moviesData: apiData.data.results, currPage:this.state.currPage-1});
    })
  }
  nextPage = ()=>{
    axios.get(API_URL + "/search/movie", {
      params: { api_key: API_KEY, page: this.state.currPage+1, query: this.state.defaultMovie }
    }).then((apiData) => {
      this.setState({ moviesData: apiData.data.results, currPage:this.state.currPage+1});
    })
  }
  render() {
    return (
      <>
       <Router>
        <Header setMovies={this.setMovies}></Header>
        <Switch >
          <Route exact path="/">
        {
          //conditonal render ... if api not working or wrong search than say movie not found
          this.state.moviesData.length !== 0 ? <> <Movies movie={this.state.moviesData}></Movies>
           <Pagination setPage = {this.setPage} 
                       previousPage = {this.previousPage}
                       nextPage = {this.nextPage}
                       pages = {this.state.pages}
                       currPage = {this.state.currPage}></Pagination></> 
                       :<h1>Oops no movies found</h1>
        }
          </Route>
        </Switch>

          <Switch >
        <Route exact path="/fav">
            <Favourite></Favourite>
        </Route>
          </Switch>

          <Switch>
            <Route exact path="/moviedetails" component={MovieDetail}></Route>
          </Switch>
                
        </Router>
      </>
    );
  }
}

export default App;
