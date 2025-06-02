import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className=" w-screen max-w-full ">
                <div className="pl-2 pr-2 text-black flex justify-between items-center h-98/100">
                    <div className="ml-8 text-6xl font-title p-2 ">
                        <Link to={"/"}>Clubs</Link>
                    </div>
                    <IoIosNotifications className="mr-8 size-10 text-primary cursor-pointer" />
                </div>
                <hr className="mr-4 ml-4 h-0.5 bg-black" />
            </div>
        </>
    );
};

export default Header;
