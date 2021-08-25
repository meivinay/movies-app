import React, { Component } from 'react';
import YoutTube from "react-youtube";
import "./MovieDetail.css";
import axios from 'axios';
import { API_KEY, API_URL } from '../../apikey';
class MovieDetail extends Component {
    state = {
        movieName: "",
        overview: "",
        tagline: "",
        rating: "",
        posterPath:"",
        moviesId:""
    }
    async componentDidMount() {
        let movieObj = this.props.location.state;
        //https://api.themoviedb.org/3/movie/736074/videos?api_key=7cab9ea3170bca62eb51763f7f06c818&language=en-US 
       
        let response = await axios(`${API_URL}/movie/${movieObj.id}/videos?api_key=${API_KEY}&language=en-US`)
        let videoObj = response.data.results;
        let filteredArr =  videoObj.filter(obj=>{
            if(obj.type === "Trailer" && obj.site === "YouTube"){
                return true;
            }
            else{
                return false;
            }
        })
            // console.log(filteredArr);
        this.setState({
            movieName: movieObj.title, overview: movieObj.overview,
            tagline: movieObj.tagline,
            rating: movieObj.vote_average,
            posterPath:movieObj.poster_path,
            moviesId:filteredArr[0]
        })
    }
    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
        return (<>
        <div className="movie-page">
            <div className = "movie-poster">
            <img src={this.state.posterPath} alt=""></img>
            </div>
          <div className="movie-details">
            <div className="movie-name-overview">
            <h1>{this.state.movieName}</h1>
            <span><h4>
                {this.state.tagline}
            </h4>
                </span>
            <span>
                <h6>
                {this.state.overview}
                </h6>
                </span>
            <span>
                IMDB {this.state.rating}
                </span>
            </div>
            <div className="movie-trailer">
            <YoutTube videoId={this.state.moviesId.key} opts={opts}>
                
            </YoutTube>
            </div>
        </div>
          </div>
        </>);
    }
}

export default MovieDetail;