import { Link } from "react-router-dom";
import { useLanguageContext } from "../contexts/LanguageContext";

const Header = () => {
    const {language, toggleLanguage} = useLanguageContext()
    return (
        <header>
            <button className="mybtn" onClick={toggleLanguage}>Current Language is {language}</button>
            <Link className="mylink" to={'/'}>Main Page</Link>
            <Link className="mylink" to={'/create'}>Create Page</Link>
        </header>
    )
}

export default Header;