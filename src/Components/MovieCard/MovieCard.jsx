
// import { API_KEY, API_URL, POSTER_URL } from '../../apikey';
import "./MovieCard.css";
// import axios from 'axios';
// import {Link} from "react-router-dom"
// class Movie extends Component {
//     state = { 
//         movieDetails:{}
//      }
// async componentDidMount(){
    
//    let response  = await axios(`${API_URL}/movie/ ${this.props.movie.id}?api_key=${API_KEY}`);
//    let detailedMovieObj = response.data;
//    let posterPath = POSTER_URL+detailedMovieObj.poster_path;
//    this.setState({movieDetails:{...detailedMovieObj, poster_path:posterPath}})
// }

//     render() { 
//         let {poster_path, title, vote_average} = this.props.movie
        
//         let posterPath = POSTER_URL+poster_path;
//         return (
//             <div className = "movies-item">
//                 <div className ="movies-poster">
//                     <Link to ={{pathname:"./moviedetails" ,state:this.state.movieDetails}}>
//                 <img src = {posterPath} alt=""></img>
//                     </Link>
//                 </div>
//                 <div className="movies-details">
//                     <div className = "movies-title">{title}</div>
//                     <div className ="other-details">
//                     <div className = "movies-genre">genre</div>
//                     <div className ="movies-rating">IMDB {vote_average}</div>
//                     </div>
//                 </div>

//             </div>
//           );
//     }
// }
const MovieCard = () => (
    <div className="container">
        <img src='movieSrc' lazyload alt='movieName'/>
        <div className="movie-details">
            <span className="movie-title"></span>
            <div className="other-details">
                <div className="movie-genre">
                    moview card
                </div>
                <div className="movie-rating">
                </div>
            </div>
        </div>
    </div>
)
export default MovieCard;