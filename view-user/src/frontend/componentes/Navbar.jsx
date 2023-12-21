import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        {" "}
                        <span className="brand-1">Polkesmed</span>
                        <span className="brand-2">-Health Care</span>{" "}
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link" activeClassName="active" to="">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link" activeClassName="active" to="doctor">
                                    Dokter
                                </NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link" activeClassName="active" to="layanan">
                                    Layanan
                                </NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link" activeClassName="active" to="tentang-kami">
                                    Tentang Kami
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to="login" className="btn btn-login-register my-2 my-sm-0 px-3">
                                Login/Register
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
