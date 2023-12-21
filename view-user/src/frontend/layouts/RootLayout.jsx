import "../assets/libraries/bootstrap/css/bootstrap.min.css";
import "../assets/libraries/fontawesome/css/all.min.css";
import "../assets/styles/main.css";
import "../assets/libraries/jquery/jquery-3.7.1.min.js";
import "../assets/libraries/bootstrap/js/bootstrap.bundle.js";
import Navbar from "../componentes/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../componentes/Footer.jsx";
function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootLayout;
