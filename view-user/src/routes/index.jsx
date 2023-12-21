import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../frontend/layouts/RootLayout";
import Index from "../frontend/pages/Index";
import Doctor from "../frontend/pages/Doctor";
import Layanan from "../frontend/pages/Layanan";
import TentangKami from "../frontend/pages/TentangKami";
import Appointment from "../frontend/pages/Appointment";
import Login from "../frontend/pages/Login";
import Register from "../frontend/pages/Register";
import Success from "../frontend/pages/Success";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "doctor",
                element: <Doctor />,
            },
            {
                path: "layanan",
                element: <Layanan />,
            },
            {
                path: "tentang-kami",
                element: <TentangKami />,
            },
            {
                path: "appointment",
                element: <Appointment />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/success",
        element: <Success />,
    },
]);
