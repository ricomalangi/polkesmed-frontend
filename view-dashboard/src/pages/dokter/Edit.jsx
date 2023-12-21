import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
    const [namaDokter, setDokter] = useState("");
    const [poliklinikUuid, setPoliklinikUuid] = useState("");
    const [listPoli, setListPoli] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const navigate = useNavigate();

    const { uuid } = useParams();

    useEffect(() => {
        getDataById();
        getPoli();
    }, []);

    const getDataById = async () => {
        const response = await axios.get(`http://localhost:8000/api/v1/doctor/${uuid}`);
        setDokter(response.data.data[0].nama_dokter);
        setPoliklinikUuid(response.data.data[0].poliklinik_id);
        setSelectedPhoto(response.data.data[0].picture);
    };

    const getPoli = async () => {
        const response = await axios.get(`http://localhost:8000/api/v1/poliklinik`);
        setListPoli(response.data.data);
    };

    const updateDokter = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("nama_dokter", namaDokter);
            formData.append("poliklinik_id", poliklinikUuid);
            formData.append("picture", selectedPhoto);

            await axios.put(`http://localhost:8000/api/v1/doctor/${uuid}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/dashboard/dokter", { state: { message: "Data berhasil diupdate" } });
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
                                <h5 className="card-title">Edit Dokter</h5>
                                <form className="row g-3" onSubmit={updateDokter}>
                                    <div className="col-12">
                                        <label className="form-label">Nama Dokter</label>
                                        <input type="text" value={namaDokter} onChange={(e) => setDokter(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Poliklinik</label>
                                        <select className="form-select" value={poliklinikUuid} onChange={(e) => setPoliklinikUuid(e.target.value)}>
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
                                        <div>
                                            <small className="text-muted">kosongkan jika tidak ingin merubah foto</small>
                                        </div>
                                        {selectedPhoto ? <img src={`http://localhost:8000/images/doctor/${selectedPhoto}`} alt="" width={250} className="mt-4" /> : <img src={`https://placehold.co/100`} />}
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
