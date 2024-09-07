import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, buttonProp }) => {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button
                color={buttonProp ? "#D60B00" : "teal"}
                text={buttonProp ? "Close" : "\xa0Add\xa0 "}
                onClick={onAdd}
            />}
        </header>
    );
};

Header.defaultProps = {
    title: "Tasker",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

//CS styling in JS
// const headerStyles = {
//     color: 'white',
//     backgroundColor: '#252525'
// }
export default Header;
