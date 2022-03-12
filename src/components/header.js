import { Link } from "react-router-dom";
import "../style/header.scss";

const Header = props => {

    const title = props.title;

    return (
      <div class="header">
        <h1>{title}</h1>

        <div class="menu">
        <Link to="">Click to view our home page</Link>
        <Link to="about">Click to view our about page</Link>
        </div>

      </div>
    );
}

export default Header;