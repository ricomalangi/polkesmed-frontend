import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
    const [namaPoli, setNamaPoli] = useState("");
    const navigate = useNavigate();
    const addPoli = async (e) => {
        e.preventDefault();
        try {
            const data = {
                nama_poliklinik: namaPoli,
            };
            await axios.post("http://localhost:8000/api/v1/poliklinik", data);
            navigate("/dashboard/poliklinik", { state: { message: "Data berhasil dibuat" } });
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
                                <form className="row g-3" onSubmit={addPoli}>
                                    <div className="col-12">
                                        <label className="form-label">Nama Poliklinik</label>
                                        <input type="text" value={namaPoli} onChange={(e) => setNamaPoli(e.target.value)} className="form-control" required />
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
