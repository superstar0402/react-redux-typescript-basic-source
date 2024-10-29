import { FC } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Layout: FC = () => {
  return (
    <div className="flex h-auto min-h-[100vh] w-full flex-col">
      <Header />
      <main id="main" className="h-auto w-full overflow-x-hidden bg-[white]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
