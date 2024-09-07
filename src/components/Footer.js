import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return (
        <footer>
            <pre>KUNAL.CO&trade; Copyright &copy; 2023 Kunal.INC</pre>
            {location.pathname === "/" && <Link to="/about"><b>About</b></Link>}
        </footer>
    );
};

export default Footer;
