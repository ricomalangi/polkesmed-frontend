import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
    const [namaPoli, setNamaPoli] = useState("");
    const navigate = useNavigate();
    const { uuid } = useParams();
    useEffect(() => {
        getDataById();
    }, []);
    const getDataById = async () => {
        const response = await axios.get(`http://localhost:8000/api/v1/poliklinik/${uuid}`);
        setNamaPoli(response.data.data[0].nama_poliklinik);
    };

    const updatePoliklinik = async (e) => {
        e.preventDefault();
        try {
            const data = {
                nama_poliklinik: namaPoli,
            };
            await axios.put(`http://localhost:8000/api/v1/poliklinik/${uuid}`, data);
            navigate("/dashboard/poliklinik", { state: { message: "Data berhasil diupdate" } });
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
                            <div className="card-body">
                                <h5 className="card-title">Form Tambah Poliklinik</h5>
                                <form className="row g-3" onSubmit={updatePoliklinik}>
                                    <div className="col-12">
                                        <label className="form-label">Nama Poliklinik</label>
                                        <input type="text" value={namaPoli} onChange={(e) => setNamaPoli(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Edit;
