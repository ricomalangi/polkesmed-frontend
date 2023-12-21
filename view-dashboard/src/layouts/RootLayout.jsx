import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";
import "../assets/css/style.css";
import "../assets/vendor/apexcharts/apexcharts.min.js";
import "../assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../assets/vendor/jquery/jquery-3.7.1.min.js";
import "../assets/vendor/chart.js/chart.umd.js";
import "../assets/vendor/echarts/echarts.min.js";
import "../assets/vendor/quill/quill.min.js";
import "../assets/vendor/simple-datatables/simple-datatables.js";
import "../assets/vendor/tinymce/tinymce.min.js";
import "../assets/js/main.js";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import { Link, Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <Header />
            <Sidebar />

            <main id="main" className="main">
                <Outlet />
            </main>

            <Footer />

            <Link to="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </Link>
        </>
    );
}

export default RootLayout;
