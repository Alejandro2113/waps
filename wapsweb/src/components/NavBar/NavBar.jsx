import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navStyle fixed-top">

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WAPSONLINE</a>

                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">APPLE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">SAMSUNG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">ACCESORIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONSOLAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTOS</a>
                        </li>
                    </ul>

                    <CartWidget></CartWidget>
                </div>
            </nav>

        </nav >
    )
}

export default NavBar
