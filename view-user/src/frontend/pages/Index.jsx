import { Link } from "react-router-dom";
import gambarDirectur from "../assets/images/hero-directur.png";
import introImage from "../assets/images/intro-image.png";
import axios from "axios";
import { useEffect, useState } from "react";
function Index() {
    const [listPoli, setPoli] = useState([]);
    const [listDoctor, setDoctor] = useState([]);
    useEffect(() => {
        getPoli();
        getDoctor();
    }, []);
    const getPoli = async () => {
        const response = await axios.get("http://localhost:8000/api/v1/poliklinik");
        setPoli(response.data.data);
    };
    const getDoctor = async () => {
        const response = await axios.get("http://localhost:8000/api/v1/doctor");
        setDoctor(response.data.data);
    };
    return (
        <>
            <section className="section-welcome">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
                            <div className="welcome-content">
                                <h2>POLKESMED HEALTH CARE</h2>
                                <h5>&quot;Making Your Life Healthier and Happier&quot;</h5>
                                <Link to="appointment" className="btn btn-lg btn-buat-janji">
                                    Janji Temu Dokter
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="welcome-image">
                                <img src={gambarDirectur} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-featured">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 featured-detail">
                            <i className="far fa-calendar-check"></i>
                            <p>Janji Temu Dengan Dokter</p>
                        </div>
                        <div className="col-md-4 featured-detail">
                            <i className="fas fa-file-medical"></i>
                            <p>Histori Rekam Medis</p>
                        </div>
                        <div className="col-md-4 featured-detail">
                            <i className="fas fa-pills"></i>
                            <p>Pelayanan Kesehatan Terpadu</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
                            <div className="intro-content">
                                <h2>
                                    Selamat Datang di <br />
                                    Polkesmed Health Care
                                </h2>
                                <p>
                                    Kami senang menyambut Anda di Polkesmed Health Care. Tim medis kami yang berpengalaman siap membantu Anda dalam menerima perawatan kesehatan terbaik. Kami berkomitmen untuk memberikan perawatan yang penuh perhatian
                                    dan ramah kepada setiap pasien. Terima kasih telah memilih kami. Kami harap Anda memiliki pengalaman perawatan kesehatan yang positif dan pemulihan yang cepat. Selamat datang kembali!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="intro-image">
                                <img src={introImage} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-statistik">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p>
                                <span>{listDoctor.length}</span> Dokter Handal
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p>
                                <span>{listPoli.length}</span> Poliklinik
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p>
                                <span>230</span> Pasien Berobat
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-jadwal">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="jadwal-title">Jadwal Praktek Poliklinik</h2>
                            <div className="accordion" id="accordionExample">
                                {listPoli.map((item, index) => {
                                    let jadwalArray = typeof item.jadwal === "string" ? JSON.parse(item.jadwal) : item.jadwal;
                                    return (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`} aria-expanded="true" aria-controls={`collapse-${item.id}`}>
                                                    {item.nama_poliklinik}
                                                </button>
                                            </h2>
                                            <div id={`collapse-${item.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <table className="table text-center">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Hari</th>
                                                                <th scope="col">Jam Buka</th>
                                                                <th scope="col">Jam Tutup</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {Array.isArray(jadwalArray) && jadwalArray.length > 0 ? (
                                                                <>
                                                                    {jadwalArray.map((schedule, scheduleIndex) => (
                                                                        <tr key={scheduleIndex}>
                                                                            <td>{schedule.hari}</td>
                                                                            <td>{schedule.jam_buka}</td>
                                                                            <td>{schedule.jam_tutup}</td>
                                                                        </tr>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <p>No schedule available</p>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-dokter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="dokter-title">Dokter</h2>
                        </div>
                    </div>
                    <div className="row">
                        {listDoctor.slice(0, 4).map((item, index) => {
                            return (
                                <div className="col-md-3" key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dokter-thumbnail">
                                                <div className="dokter-image" style={{ backgroundImage: `url('http://localhost:8000/images/doctor/${item.picture}')` }}></div>
                                            </div>
                                            <h5 className="card-title">{item.nama_dokter}</h5>
                                            <p className="card-text">{item.nama_poliklinik}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Link to="doctor" className="btn btn-lg btn-dokter-selengkapnya">
                                Selengkapnya
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
