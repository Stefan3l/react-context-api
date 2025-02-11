import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-[url('../image/background-login.jpg')]  h-screen bg-cover bg-center flex justify-center items-center">
      <div className="bg-[url('../image/background-login.jpg')] w-full max-w-3xl h-2/4 flex justify-center items-center p-4 rounded-2xl shadow-2xl border-amber-50 border-9">
        <Outlet />
      </div>
    </div>
  );
}
