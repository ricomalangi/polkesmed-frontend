import SectionHeader from "../componentes/SectionHeader";

function Layanan() {
    return (
        <>
            <SectionHeader title="Layanan" />
            <section className="section-layanan">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card-layanan">
                                <img src="http://localhost:8000/images/layanan/layanan-kesehatan.jpg" alt="Gambar Card" />
                                <div className="card-overlay">
                                    <p className="card-text text-center">Pemeriksaan Kesehatan Dasar</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-layanan">
                                <img src="http://localhost:8000/images/layanan/layanan-gigi.jpg" alt="Gambar Card" />
                                <div className="card-overlay">
                                    <p className="card-text text-center">Poliklinik Gigi</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-layanan">
                                <img src="http://localhost:8000/images/layanan/layanan-gizi.jpg" alt="Gambar Card" />
                                <div className="card-overlay">
                                    <p className="card-text text-center">Konsultasi Gizi</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-layanan">
                                <img src="http://localhost:8000/images/layanan/layanan-lab.jpg" alt="Gambar Card" />
                                <div className="card-overlay">
                                    <p className="card-text text-center">Pemeriksaan Lab Sederhana</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-layanan">
                                <img src="http://localhost:8000/images/layanan/layanan-camaba.jpg" alt="Gambar Card" />
                                <div className="card-overlay">
                                    <p className="card-text text-center">Pemeriksaan Kesehatan CAMABA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card-layanan">
                                <img src="http://localhost:8000/images/layanan/layanan-narkoba.jpg" alt="Gambar Card" />
                                <div className="card-overlay">
                                    <p className="card-text text-center">Pemeriksaan Narkoba</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Layanan;
