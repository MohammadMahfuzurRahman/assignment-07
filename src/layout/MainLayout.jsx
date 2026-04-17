import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;