import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Index from "../pages/Index";
// pages poliklinik
import IndexPoliklinik from "../pages/poliklinik/Index";
import PoliklinikAdd from "../pages/poliklinik/Add";
import PoliklinikEdit from "../pages/poliklinik/Edit";
import Jadwal from "../pages/poliklinik/Jadwal";

// pages dokter
import IndexDokter from "../pages/dokter/Index";
import DokterAdd from "../pages/dokter/Add";
import DOkterEdit from "../pages/dokter/Edit";

export const router = createBrowserRouter([
    {
        path: "dashboard",
        element: <RootLayout />,
        children: [
            {
                path: "dashboard",
                element: <Index />,
            },
            {
                path: "poliklinik",
                element: <IndexPoliklinik />,
            },
            {
                path: "poliklinik/add",
                element: <PoliklinikAdd />,
            },
            {
                path: "poliklinik/edit/:uuid",
                element: <PoliklinikEdit />,
            },
            {
                path: "jadwal-poliklinik/:uuid",
                element: <Jadwal />,
            },
            {
                path: "dokter",
                element: <IndexDokter />,
            },
            {
                path: "dokter/add",
                element: <DokterAdd />,
            },
            {
                path: "dokter/edit/:uuid",
                element: <DOkterEdit />,
            },
        ],
    },
]);
