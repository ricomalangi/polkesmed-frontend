import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
    const [namaDokter, setDokter] = useState("");
    const [poliklinikUuid, setPoliklinikUuid] = useState("");
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [listPoli, setListPoli] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPoli();
    }, []);

    const getPoli = async () => {
        const response = await axios.get(`http://localhost:8000/api/v1/poliklinik`);
        setListPoli(response.data.data);
    };

    const addData = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("nama_dokter", namaDokter);
            formData.append("poliklinik_id", poliklinikUuid);
            formData.append("picture", selectedPhoto);

            await axios.post(`http://localhost:8000/api/v1/doctor`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/dashboard/dokter", { state: { message: "Berhasil menambahkan dokter" } });
        } catch (e) {
            alert(`Eror ${e.response.data.message.message}`);
        }
    };
    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Form Tambah Dokter</h5>
                                <form className="row g-3" onSubmit={addData}>
                                    <div className="col-12">
                                        <label className="form-label">Nama Dokter</label>
                                        <input type="text" value={namaDokter} onChange={(e) => setDokter(e.target.value)} className="form-control" placeholder="nama dokter" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Poliklinik</label>
                                        <select className="form-select" onChange={(e) => setPoliklinikUuid(e.target.value)} required>
                                            <option hidden value="">
                                                --pilih poliklinik--
                                            </option>
                                            {listPoli.map((data, index) => {
                                                return (
                                                    <option value={`${data.uuid}`} key={index}>
                                                        {data.nama_poliklinik}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Photo</label>
                                        <input type="file" className="form-control" onChange={(e) => setSelectedPhoto(e.target.files[0])} />
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
