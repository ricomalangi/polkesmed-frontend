import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Link</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <Link to="/" className="nav-link p-0">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link href="/#jadwal" className="nav-link p-0">
                                        Jadwal
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="layanan" className="nav-link p-0">
                                        Layanan
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="tentang-kami" className="nav-link p-0">
                                        Tentang Kami
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="login" className="nav-link p-0">
                                        Login/Register
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Contact</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">Jl. Jamin Ginting KM. 13,5 Kel. Lau Cih Medan - Tuntungan</li>
                                <li className="nav-item mb-2">061-8368633</li>
                                <li className="nav-item mb-2">poltekkes-medan@yahoo.com</li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Jadwal Poliklinik</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">Poli umum - Senin (10.00 - 14.00) | Selasa (10.00 - 14.00) | Rabu (10.00 - 14.00)</li>
                                    <li className="nav-item mb-2">Poli gigi - Senin (10.00 - 14.00) | Selasa (10.00 - 14.00) | Rabu (10.00 - 14.00)</li>
                                    <li className="nav-item mb-2">Poli KIA - Senin (10.00 - 14.00) | Selasa (10.00 - 14.00) | Rabu (10.00 - 14.00)</li>
                                    <li className="nav-item mb-2">Poli Fisioterapi - Senin (10.00 - 14.00) | Selasa (10.00 - 14.00) | Rabu (10.00 - 14.00)</li>
                                    <li className="nav-item mb-2">Konsultasi Gizi - Senin (10.00 - 14.00) | Selasa (10.00 - 14.00) | Rabu (10.00 - 14.00)</li>
                                </ul>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>Copyright © 2023 Polkesmed Medan. All right reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
