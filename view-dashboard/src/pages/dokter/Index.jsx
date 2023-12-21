import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Index() {
    const [listDokter, setDokter] = useState([]);
    const location = useLocation();
    useEffect(() => {
        getDoctor();
    }, []);

    const getDoctor = async () => {
        const response = await axios.get("http://localhost:8000/api/v1/doctor");
        setDokter(response.data.data);
    };

    const deleteData = async (uuid) => {
        try {
            let isDelete = confirm("Apakah yakin ingin menghapus data ini?");
            if (isDelete) {
                await axios.delete(`http://localhost:8000/api/v1/doctor/${uuid}`);
                getDoctor();
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
                                    <i className="bi bi-person-plus-fill"></i> <span>Tambah Dokter</span>
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
                                            <th scope="col">Nama Dokter</th>
                                            <th>Gambar</th>
                                            <th>Poliklinik</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listDokter.map((data, i) => {
                                            return (
                                                <>
                                                    <tr key={data.id}>
                                                        <th scope="row">{i + 1}</th>
                                                        <td>{data.nama_dokter}</td>
                                                        <td>{data.picture ? <img src={`http://localhost:8000/images/doctor/${data.picture}`} alt="" width={100} /> : <img src={`https://placehold.co/100`} />}</td>
                                                        <td>{data.nama_poliklinik ?? "not set"}</td>
                                                        <td>
                                                            <Link to={`edit/${data.uuid}`} className="btn btn-sm btn-warning" style={{ marginRight: "5px" }}>
                                                                <i className="bi bi-pencil"></i>
                                                            </Link>
                                                            <button onClick={() => deleteData(data.uuid)} className="btn btn-sm btn-danger">
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
