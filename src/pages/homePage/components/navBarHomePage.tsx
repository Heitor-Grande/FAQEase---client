import "../../../styles/coresPadroes.css"
function NavbarHomePage() {
    return (
        <nav className="navbar navbar-dark bg-preto">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">FAQEase</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end bg-preto" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Fazer login</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Produtos
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">Bot para suporte</a></li>
                                    <li><a className="dropdown-item" href="#">Bot para delivery</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Chat personalizado com IA própria</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarHomePage