import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <section className="section-auth">
                <div className="container justify-content-center align-items-center">
                    <form action="success.html">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="mb-4 text-center">Register</h3>
                                    <form action="#" method="POST">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-4">
                                                    <label className="form-label">Nama Lengkap</label>
                                                    <input type="text" className="form-control" placeholder="Masukkan nama lengkap Anda" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-4">
                                                    <label className="form-label">Nomor Telepon</label>
                                                    <input type="text" className="form-control" placeholder="081xxx" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" placeholder="Input email Anda" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" placeholder="Input password Anda" />
                                        </div>
                                        <div className="text-center">
                                            <Link to="/login" className="btn btn-submit-janji btn-lg w-100 mt-3">
                                                Register
                                            </Link>
                                            <p className="mt-3">
                                                Sudah punya akun? <Link to="/login">Login Disini</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Register;
