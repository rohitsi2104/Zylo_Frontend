import { Outlet } from "react-router-dom";
import { MainFooter, MainHeader } from "./sections";

// ==============================|| LAYOUT ||============================== //

const Layout = () => (
  <div className="bg-blue-50 text-gray-800 w-full md:px-32">
    <MainHeader />
    <Outlet />
    <MainFooter />
  </div>
);

export default Layout;
