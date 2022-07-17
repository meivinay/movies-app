
import "./MoviesList.css"

// this recieves props from App.js, it is redirecting props to a single Movie Component , this is called prop drilling
// we can solve this(Props Drilling) using ContextApi or Redux

// class Movies extends Component {
     
//     render() { 
      
//         return (
//         <div className ="movies"> 
//         {this.props.movie.map((movieObject) => {
//           return <MovieCard key={movieObject.id} movie={movieObject}></MovieCard>;
//         })}
//         </div> 
//         );
//     }
// }
 
const MovieList = () => (
  <div className="list-container">
    movie list
  </div>
)
export default MovieList;