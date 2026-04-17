import { NavLink } from "react-router-dom";
import { FaHome, FaChartPie, FaClock } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="font-bold text-xl">Keen<span className="font-normal">Keeper</span></h1>

      <div className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "bg-green-800 text-white px-2 rounded-sm" : "text-green-80 px-2"}>
          <FaHome className="inline mr-1" /> Home
        </NavLink>

        <NavLink to="/timeline" className={({ isActive }) => isActive ? "bg-green-800 text-white px-2 rounded-sm" : "text-green-80 px-2"}>
          <FaClock className="inline mr-1" /> Timeline
        </NavLink>

        <NavLink to="/stats" className={({ isActive }) => isActive ? "bg-green-800 text-white px-2 rounded-sm" : "text-green-80 px-2"}>
          <FaChartPie className="inline mr-1" /> Stats
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;