import { useLocation, Navigate } from "react-router-dom";
import { useAuthStore } from "./store";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = () => {
    const isAutheticated = useAuthStore((state) => state.isAuthenticated);
    const location = useLocation();

    if (!isAutheticated) {
        return (
            <Navigate
                to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
                replace
            />
        );
    }

    return (
        <>
            <div className="flex flex-col min-h-lvh max-w-vw ">
                <Header />
                <div className="flex grow">
                    <NavBar />
                    <div className="bg-bg2 grow mr-5 mt-10 p-4 rounded-2xl shadow-3xl overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
