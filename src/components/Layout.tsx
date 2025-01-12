import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const Layout = (): ReactElement => {
  return (
    <main className="max-w-4xl my-2 mx-auto p-5">
      <Outlet />
    </main>
  );
};

export default Layout;
