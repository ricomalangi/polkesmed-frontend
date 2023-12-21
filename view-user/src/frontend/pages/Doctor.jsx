import { Link } from "react-router-dom";
import SectionHeader from "../componentes/SectionHeader";
import axios from "axios";
import { useEffect, useState } from "react";
function Doctor() {
    const [listPoli, setPoli] = useState([]);
    const [listDoctor, setDoctor] = useState([]);
    useEffect(() => {
        getDoctor();
        getPoli();
    }, []);
    const getDoctor = async () => {
        const response = await axios.get("http://localhost:8000/api/v1/doctor");
        setDoctor(response.data.data);
    };
    const getPoli = async () => {
        const response = await axios.get("http://localhost:8000/api/v1/poliklinik");
        setPoli(response.data.data);
    };
    return (
        <>
            <SectionHeader title="Dokter" />
            <section className="section-page-dokter">
                <div className="container">
                    <form className="row">
                        <div className="col-lg-6 col-sm-4">
                            <select name="filter_poliklnik" className="form-select form-select-lg">
                                <option selected disabled>
                                    Cari dokter berdasarkan poli...
                                </option>
                                {listPoli.map((item, index) => {
                                    return (
                                        <>
                                            <option value={item.uuid}>{item.nama_poliklinik}</option>
                                        </>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <div className="d-grid">
                                <button type="submit" className="btn btn-filter-dokter btn-lg mb-3 btn-block">
                                    Cari
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="d-grid">
                                <Link to="/appointment" className="btn btn-buat-janji btn-lg mb-3 btn-block">
                                    Janji Temu Dokter
                                </Link>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <div className="row list-dokter">
                        {listDoctor.map((item, index) => {
                            return (
                                <div className="col-md-6 col-lg-4 mb-sm-2 mb-lg-4" key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="dokter-thumbnail">
                                                        <div className="dokter-image" style={{ backgroundImage: `url('http://localhost:8000/images/doctor/${item.picture}')` }}></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <p className="card-kategori-dokter">{item.nama_poliklinik}</p>
                                                    <h5 className="card-title">{item.nama_dokter}</h5>
                                                    <p className="card-text">Sel, 5 Nov | 09.00 - 17.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Doctor;
