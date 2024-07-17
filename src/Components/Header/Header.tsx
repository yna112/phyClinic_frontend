import { Link } from "react-router-dom";
import "./Header.css";
import { RiHome7Fill, RiHome7Line } from "react-icons/ri";


function Header(): JSX.Element {
    return (
        <div className="Header flex-around">
         <h1>הקליניקה שלי</h1>
         <div className="home-icon">
         <Link to="/"><RiHome7Fill/> </Link>
         </div>

			
        </div>
    );
}

export default Header;
