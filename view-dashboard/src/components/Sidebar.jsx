import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link" : "nav-link collapsed")} to="">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link" : "nav-link collapsed")} to="poliklinik">
                            <i className="bi bi-building"></i>
                            <span>Poliklinik</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link" : "nav-link collapsed")} to="dokter">
                            <i className="bi bi-person"></i>
                            <span>Dokter</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link" : "nav-link collapsed")} to="pasien">
                            <i className="bi bi-person"></i>
                            <span>Pasien</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link" : "nav-link collapsed")} to="appointment">
                            <i className="bi bi-person"></i>
                            <span>Jadwa Janji</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default Sidebar;
