import "./navbarMolecule.css"
import ButtonAtom from '../../atoms/button/ButtonAtom'


const NavbarMolecule = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./src/assets/img/logo.svg" alt="Logo" className="d-inline-block align-text-top"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#description">DESCRIPTION</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FEATURES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#screens">SCREENS</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    EXTRAS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">ARTICLE DETAILS</a></li>
                                    <li><a className="dropdown-item" href="#">TERMS CONDITIONS</a></li>
                                    <li><a className="dropdown-item" href="#">PRIVACY POLICY</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="https://factoriaf5.org/" target="_blank"><ButtonAtom className={"btn-style-nav"} buttonText={"DOWNLOAD"} /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavbarMolecule