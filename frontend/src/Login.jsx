import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useAuthStore } from "./store";

const Login = () => {
    const login = useAuthStore((state) => state.login);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const [searchPrams] = useSearchParams();
    const navigate = useNavigate();

    console.log(isAuthenticated);

    const handleLogin = () => {
        login();
        const redirectTo = searchPrams.get("redirect") || "/";
        navigate(redirectTo, { replace: true });
    };

    return (
        <>
            <div className="flex max-w-xs basis-2/5 max-h-5/10 min-h-100 bg-secondary/50 rounded-xl flex-col w-xs shadow-3xl justify-between items-center mt-22 pb-6 pt-6 ml-20">
                <input
                    className="pl-3 p-2 mt-5 ml-2 mb-5 bg-bg rounded-md font-input"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className=" pl-3 p-2 mt-5 ml-2 mb-5 bg-bg rounded-md font-input"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="pl-2 pr-2 p-2 mt-5 ml-2 mb-5 bg-primary text-white rounded-md w-25/100"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <div className="w-full">
                    <hr className="bg-black m-2 mr-4 ml-4 w-auto" />
                </div>
                <button className="pl-2 pr-2 p-2 mt-5 ml-2 mb-5 outline rounded-md w-1/4">
                    <Link to={"/register"}>Register</Link>
                </button>
            </div>
        </>
    );
};

export default Login;
