import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            <div className="bg-[url(https://portal.tu.edu.np/medias/mmc19_2023_08_11_08_29_39.jpg)] bg-center bg-cover ">
                <div className="w-full h-screen flex bg-linear-to-r from-white from-30% to-white/0 to-100%">
                    <Outlet />
                    <div className="basis-3/5 flex items-center justify-end">
                        <div className="pb-100 relative">
                            <div className="font-title font-bold text-[13rem] leading-[10rem]">
                                Clubs
                            </div>
                            <div className="font-title text-4xl absolute right-0">
                                MMAMC
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
