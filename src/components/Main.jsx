import { Outlet } from "react-router-dom";
import { useSidebar } from "./ui/sidebar";
import HolographicBackground from "./HolographicBackground";

function Main() {
    // const { state } = useSidebar();
  return (
    <main className={`flex-grow transition-all duration-300 ease-in-out`}>
      <HolographicBackground />
    <Outlet />
  </main>
  );
}

export default Main;