import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
