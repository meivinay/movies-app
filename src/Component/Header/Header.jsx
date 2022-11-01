import React, { Component } from 'react';
import "./Header.css"
import {Link} from "react-router-dom"
class Header extends Component {
    state = { 
        newMovieName:""
     }
    handleSearch = (e)=>{
        if(e.key === "Enter"){
            this.props.setMovies(this.state.newMovieName);
        }
    }
handleOnChange = (e)=>{
    this.setState({newMovieName:e.target.value})
}
    render() { 
        return ( 
        <div className = "header">
            <h2>Vinay Movies App</h2>  
            <input type="text" placeholder="search" onChange={(e)=>{this.handleOnChange(e)}} onKeyPress={(e)=>{this.handleSearch(e)}} />
            <div className= "header-links">
                <div className = "home-link">
                    <Link to="/movies-app">Home</Link>
                </div>
                <div className = "favourite-link">
                    <Link to = "./fav">Favourite</Link>
                </div>
            </div>
        </div>
    );}
}
 
export default Header;