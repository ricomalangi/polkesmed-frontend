import { Link } from "react-router-dom";
import SectionHeader from "../componentes/SectionHeader";

function Appointment() {
    return (
        <>
            <SectionHeader title="Buat Janji Temu Dengan Dokter" />
            <section className="section-page-janji-dengan-dokter">
                <div className="container">
                    <form action="success.html">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 col-page-janji">
                                        <h5 className="card-title">Informasi Pribadi</h5>
                                        <div className="card-form">
                                            <div className="mb-4">
                                                <label className="form-label">Nama Lengkap</label>
                                                <input type="text" className="form-control" value="Yola Anggraini" disabled />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" value="yola@gmail.com" disabled />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">No HP</label>
                                                <input type="text" className="form-control" value="081237573018" disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-page-janji">
                                        <h5 className="card-title">Informasi Janji Temu</h5>
                                        <div className="card-form">
                                            <div className="mb-4">
                                                <label className="form-label">Poli</label>
                                                <select name="" id="" className="form-select">
                                                    <option selected disabled hidden>
                                                        --pilih poli--
                                                    </option>
                                                    <option value="">Poli Umum</option>
                                                    <option value="">Poli Gigi</option>
                                                    <option value="">Poli Mata</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Jadwal Temu</label>
                                                <select name="" id="" className="form-select">
                                                    <option selected disabled hidden>
                                                        --pilih jadwal--
                                                    </option>
                                                    <option value="">Senin (08.00 - 13.00)</option>
                                                    <option value="">Selasa (08.00 - 13.00)</option>
                                                    <option value="">Rabu (08.00 - 13.00)</option>
                                                </select>
                                                <div id="emailHelp" className="form-text">
                                                    Anda akan mendapatkan jam temu setelah buat janji
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Tanggal</label>
                                                <input type="date" className="form-control" />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Keluhan</label>
                                                <textarea name="" id="" rows="3" className="form-control" placeholder="tuliskan keluhan Anda disini"></textarea>
                                                <span className="badge bg-secondary">200 Karekter tersisa</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="text-center">
                                    <Link to="/success" className="btn btn-submit-janji btn-lg w-100">
                                        Buat Janji
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Appointment;
