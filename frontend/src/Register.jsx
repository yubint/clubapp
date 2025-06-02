import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="flex max-w-xs basis-2/5 max-h-6/10 min-h-120 bg-secondary/50 rounded-xl flex-col w-xs shadow-3xl justify-between items-center mt-22 pb-6 pt-6 ml-20">
                <input
                    className="pl-3 p-2 mt-5 ml-2 mb-5 bg-bg rounded-md font-input"
                    type="text"
                    placeholder="Name"
                />
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
                <button className=" pl-2 pr-2 p-2 mt-5 ml-2 mb-5 bg-primary text-white rounded-md w-25/100">
                    Register
                </button>
                <div className="w-full">
                    <hr className="bg-black m-2 mr-4 ml-4 w-auto" />
                </div>
                <button className="pl-2 pr-2 p-2 mt-5 ml-2 mb-5 outline rounded-md w-1/4">
                    <Link to={"/login"}>Login</Link>
                </button>
            </div>
        </>
    );
};

export default Register;
