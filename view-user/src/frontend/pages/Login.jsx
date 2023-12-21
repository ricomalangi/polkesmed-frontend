import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <section className="section-auth">
                <div className="container justify-content-center align-items-center">
                    <form action="success.html">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="mb-4 text-center">Login</h3>
                                    <form action="#" method="POST">
                                        <div className="mb-4">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control" placeholder="Masukkan email Anda" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" placeholder="Input password Anda" />
                                        </div>
                                        <div className="text-center">
                                            <Link to="/" className="btn btn-submit-janji btn-lg w-100 mt-3" type="submit">
                                                Login
                                            </Link>
                                            <p className="mt-3">
                                                Belum punya akun? <Link to="/register">Daftar Disini</Link>
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

export default Login;
