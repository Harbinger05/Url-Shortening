import { useState } from "react"
import { Menu } from "lucide-react"
import "./Header.css"

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <header className="header">
            <img className="header__logo" src="/images/logo.svg" alt="Logo" />

            <button onClick={() => setMenuOpen(!menuOpen)} className="header__toggle">
                <Menu size={19} />
            </button>

            <div className={menuOpen ? "header__menu header__menu--open" : "header__menu"}>
                <nav className="header__nav">
                    <ul className="header__nav-items">
                        <li className="header__nav-item"><a href="#">Features</a></li>
                        <li className="header__nav-item"><a href="#">Pricing</a></li>
                        <li className="header__nav-item"><a href="#">Resources</a></li>
                    </ul>
                </nav>

                <div className="header__actions">
                    <button className="header__btn header__btn--login">Login</button>
                    <button className="header__btn header__btn--signup">Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Header