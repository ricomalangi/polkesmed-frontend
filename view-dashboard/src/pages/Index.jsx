import { Link } from "react-router-dom";
function Index() {
    return (
        <>
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-xxl-4 col-md-6">
                                <div className="card info-card sales-card">
                                    <div className="filter">
                                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>

                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Today
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    This Month
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    This Year
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Sales <span>| Today</span>
                                        </h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-cart"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>145</h6>
                                                <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <div className="card info-card revenue-card">
                                    <div className="filter">
                                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>

                                            <li>
                                                <Link className="dropdown-item" to="#">
                                                    Today
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#">
                                                    This Month
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="#">
                                                    This Year
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Revenue <span>| This Month</span>
                                        </h5>

                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-currency-dollar"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>$3,264</h6>
                                                <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
