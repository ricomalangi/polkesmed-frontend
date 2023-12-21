import SectionHeader from "../componentes/SectionHeader";

function TentangKami() {
    return (
        <>
            <SectionHeader title="Tentang Kami" />
            <section className="section-layanan">
                <div className="container mt-5" style={{ width: "60%" }}>
                    <h2 className="text-center">Selamat Datang di Polkesmed-Health Care</h2>
                    <p style={{ textAlign: "justify", marginTop: "30px" }}>
                        Poltekkes Kemenkes Medan adalah salah satu Politeknik Kesehatan yang berkontribusi pada peningkatan sumber daya manusia untuk meningkatkan kesehatan masyarakat. Oleh karena itu, diperlukan kemudahan penggunaan dana yang
                        diperoleh dari masyarakat untuk operasional dan pengembangan pendidikan Poltekkes Kemenkes Medan. Selain itu, terdapat peluang bagi Politeknik Kesehatan Kemenkes Medan untuk mengumpulkan dana dari masyarakat yang dapat
                        digunakan untuk meningkatkan kualitas Tiga Pilar Pendidikan Tinggi.
                        <br />
                        <br />
                        &quot;Poltekkes Kemenkes Medan has been designated as a government agency that implements the Public Service Agency Financial Management (PK-BLU) based on the Decree of the Minister of Finance of the Republic of Indonesia
                        Number 500/KMK.05/2009 dated December 17, 2009. This Business Plan and Budget is an implementation of the Business Strategy Plan in order to implement the Public Service Agency Financial Management (PK-BLU).&quot;
                    </p>
                </div>
            </section>
        </>
    );
}

export default TentangKami;
