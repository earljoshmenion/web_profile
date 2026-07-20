import { Outlet } from "react-router";
import Navbar from "../ui/Navbar";
export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />



    </main>
  );
}
