import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
