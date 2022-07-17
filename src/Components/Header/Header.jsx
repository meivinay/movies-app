
import "./Header.css"
import {Link} from "react-router-dom"
import Button from "../Form/Button/Button";
import searchApi from "../../api";
import InputBox from "../Form/InputBox/InputBox";
// class Header extends Component {
//     state = { 
//         newMovieName:""
//      }
//     handleSearch = (e)=>{
//         if(e.key === "Enter"){
//             this.props.setMovies(this.state.newMovieName);
//         }
//     }
// handleOnChange = (e)=>{
//     this.setState({newMovieName:e.target.value})
// }
//     render() { 
//         return ( 
//         <div className = "header">
//             <h2>Vinay Movies App</h2>  
//             <input type="text" placeholder="search" onChange={(e)=>{this.handleOnChange(e)}} onKeyPress={(e)=>{this.handleSearch(e)}} />
//             <div className= "header-links">
//                 <div className = "home-link">
//                     <Link to="/">Home</Link>
//                 </div>
//                 <div className = "favourite-link">
//                     <Link to = "./fav">Favourite</Link>
//                 </div>
//             </div>
//         </div>
//     );}
// }

const Header = () => (
    <div className="header-container">
        <h1 className="header">
            Movie App by Vinay Tanwar
        </h1>
        <InputBox 
            name='movie-search-input'
            onChange={ (e) => {
                const currentTarget = e.currentTarget;
                const value = currentTarget.value || '';
                setInputBoxValue(value);
            }}
        />
        <Button text='search' onClick={searchApi()}/>
    </div>
)

export default Header;