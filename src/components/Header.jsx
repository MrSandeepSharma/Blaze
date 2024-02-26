import Logo from "./Logo"
import Navbar from "./Navbar"
import { LinkButton } from "./Button"
import { Link } from "react-router-dom"

function Header() {
    const navItems = [
        {
            name: "Heros",
            path: "heros"
        },
        {
            name: "Pricing",
            path: "pricing"
        }
    ]

    return (
        <header className="header">
            <Link className="header__logo" to="/"><Logo /></Link>
            <Navbar className="header__nav" aria-label="primary navigation" items={navItems} />
            <LinkButton className="header__cta" text="Try Now" />
        </header>
    )
} 

export default Header