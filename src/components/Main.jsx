import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="flex-grow">
      <Outlet />
    </main>
  );
}

export default Main;