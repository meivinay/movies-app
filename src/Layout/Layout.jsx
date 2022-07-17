import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer"
const Layout = ({children}) => (
    <div>
        <Header/>
        {
            children
        }
        <Footer />
    </div>
)

export default Layout