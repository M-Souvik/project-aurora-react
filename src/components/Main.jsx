import { Outlet } from "react-router-dom";
import { useSidebar } from "./ui/sidebar";

function Main() {
    // const { state } = useSidebar();
  return (
    <main className={`flex-grow transition-all duration-300 ease-in-out`}>
    <Outlet />
  </main>
  );
}

export default Main;