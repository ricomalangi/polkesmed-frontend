import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Jadwal() {
    const { uuid } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getDataById();
    }, []);
    const [inputFields, setInputFields] = useState([
        {
            hari: "",
            jam_buka: "",
            jam_tutup: "",
        },
    ]);
    const getDataById = async () => {
        const response = await axios.get(`http://localhost:8000/api/v1/poliklinik/${uuid}`);
        if (JSON.parse(response.data.data[0].jadwal)) {
            setInputFields(JSON.parse(response.data.data[0].jadwal));
        }
    };
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    };
    const tambahJadwal = () => {
        let newfield = { hari: "", jam_buka: "", jam_tutup: "" };
        setInputFields([...inputFields, newfield]);
    };
    const submit = async (e) => {
        e.preventDefault();
        const data = {
            jadwal: inputFields,
        };
        await axios.put(`http://localhost:8000/api/v1/jadwal-poliklinik/${uuid}`, data);
        navigate("/dashboard/poliklinik", { state: { message: "Berhasil menambahkan jadwal" } });
    };
    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Jadwal Poliklinik</h5>
                                <button className="btn btn-sm btn-primary mb-3" onClick={tambahJadwal}>
                                    {" "}
                                    <i className="bi bi-calendar-plus-fill" style={{ marginRight: "10px" }}></i>Tambah Jadwal
                                </button>
                                <form className="g-3" onSubmit={submit}>
                                    {inputFields.map((input, index) => {
                                        return (
                                            <div key={index} className="row mb-3">
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Hari</label>
                                                    <select name="hari" className="form-select" value={input.hari} onChange={(event) => handleFormChange(index, event)}>
                                                        <option hidden>--pilih hari--</option>
                                                        <option value="senin">Senin</option>
                                                        <option value="selasa">Selasa</option>
                                                        <option value="rabu">Rabu</option>
                                                        <option value="kamis">Kamis</option>
                                                        <option value="jumat">Jumat</option>
                                                        <option value="sabtu">Sabtu</option>
                                                        <option value="minggu">Minggu</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label className="form-label">Jam Buka</label>
                                                            <input type="time" name="jam_buka" value={input.jam_buka} className="form-control" onChange={(event) => handleFormChange(index, event)} />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Jam Tutup</label>
                                                            <input type="time" name="jam_tutup" value={input.jam_tutup} className="form-control" onChange={(event) => handleFormChange(index, event)} />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                            </div>
                                        );
                                    })}
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

export default Jadwal;
