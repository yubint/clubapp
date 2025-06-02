import { useUserStore } from "./store";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavBar = () => {
    const name = useUserStore((state) => state.user.name);
    return (
        <div className=" text-2xl flex flex-col justify-between min-h-full mt-10 mr-15 ml-15 max-h-[85lvh] min-w-45 ">
            <div className="flex flex-col p-4 ">
                <div className="pb-3 font-title">
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="pt-3 pb-3 font-title  ">
                    {" "}
                    <Link to={"/allclubs"}>All Clubs</Link>
                </div>
                <div className="pt-3 pb-3 font-title ">Manage Clubs</div>
                <div className="pt-3 pb-3 font-title ">Preferences</div>
            </div>
            <div className="flex p-4 mb-20 items-center">
                <div className="pr-2 basis-1/10">
                    <CgProfile className="size-8" />
                </div>
                <div className="basis-9/10">{name}</div>
            </div>
        </div>
    );
};

export default NavBar;
