import { Link } from "react-router-dom";
import successImage from "../assets/images/success.png";
const Success = () => {
    return (
        <>
            <section className="section-success">
                <div className="container text-center">
                    <img src={successImage} alt="" />
                    <h2>Berhasil Buat Janji Dengan Dokter!</h2>
                    <p>
                        Silahkan cek jam temu di halaman{" "}
                        <u>
                            <Link to="https://www.figma.com/proto/a2aMrFHmcqrfKeS3u3E0Qi/Hifi-Massive?type=design&node-id=560-1124&t=oULNv0LedUxLOnMf-0&scaling=scale-down-width&page-id=560%3A334&starting-point-node-id=560%3A1124" target="__blank   ">
                                dashboard Anda
                            </Link>
                        </u>
                    </p>
                    <Link to="/" className="btn btn-success-janji btn-lg">
                        Home Page
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Success;
