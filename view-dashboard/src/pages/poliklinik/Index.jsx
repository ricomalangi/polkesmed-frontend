import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Index() {
    const [listPoli, setPoli] = useState([]);
    const location = useLocation();
    useEffect(() => {
        getPoli();
    }, []);
    const getPoli = async () => {
        const response = await axios.get("http://localhost:8000/api/v1/poliklinik");
        setPoli(response.data.data);
    };

    const deletePoliklinik = async (uuid) => {
        try {
            let isDelete = confirm("Apakah yakin ingin menghapus data ini?");
            if (isDelete) {
                await axios.delete(`http://localhost:8000/api/v1/poliklinik/${uuid}`);
                getPoli();
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body py-4">
                                <Link to="add" className="btn btn-primary btn-md mb-4">
                                    <i className="bi bi-person-plus-fill"></i> <span>Tambah Poliklinik</span>
                                </Link>
                                {location.state?.message ? (
                                    <>
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            {location.state.message}
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    </>
                                ) : (
                                    ""
                                )}

                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Poliklinik</th>
                                            <th>Jadwal</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listPoli.map((poli, i) => {
                                            return (
                                                <>
                                                    <tr key={poli.id}>
                                                        <th scope="row">{i + 1}</th>
                                                        <td>{poli.nama_poliklinik}</td>
                                                        <td>
                                                            <Link to={`/dashboard/jadwal-poliklinik/${poli.uuid}`} className="btn btn-sm btn-secondary">
                                                                Atur Jadwal
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to={`edit/${poli.uuid}`} className="btn btn-sm btn-warning" style={{ marginRight: "5px" }}>
                                                                <i className="bi bi-pencil"></i>
                                                            </Link>
                                                            <button onClick={() => deletePoliklinik(poli.uuid)} className="btn btn-sm btn-danger">
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
