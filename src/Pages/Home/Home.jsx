import { Link } from "react-router-dom";

const Home = () => (
    <div className="home-container">
        Home container
        <Link to='/'>
            Home
        </Link>
        <Link to='/movies'>
            movies
        </Link>
        <Link to='/moviepage'>
            moviepage
        </Link>
    </div>
)

export default Home;