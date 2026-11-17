import "./Footer.css"
import footerLinks from "../../data/footerLinks"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__content">
                <img className="footer__logo" src="/images/logo.svg" alt="logo" />

                <div className="footer__links">
                    {footerLinks.map((item) => {
                        return (
                            <div key={item.id} className="footer__link">
                                <h3 className="footer__title">{item.title}</h3>
                                <ul className="footer__list">
                                    {item.links.map((link) => (
                                        <li key={link}>
                                            <a href="#">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div className="footer__socials">
                    <a target="_blank" href="https://www.facebook.com">
                        <img src="/images/icon-facebook.svg" alt="Facebook icon" />
                    </a>

                    <a target="_blank" href="https://www.x.com">
                        <img src="/images/icon-twitter.svg" alt="Twitter icon" />
                    </a>

                    <a target="_blank" href="https://www.pinterest.com">
                        <img src="/images/icon-pinterest.svg" alt="Pinterest icon" />
                    </a>

                    <a target="_blank" href="https://www.instagram.com">
                        <img src="/images/icon-instagram.svg" alt="Instagram icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer