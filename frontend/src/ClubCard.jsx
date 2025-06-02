import { Link } from "react-router-dom";

const ClubCard = ({ club }) => {
    return (
        <Link to={`/club/${club.name}`}>
            <div className="bg-secondary/50 rounded-xl grid grid-cols-3 p-2 aspect-3/2 hover:scale-103 hover:-translate-y-1 hover:bg-secondary/85 transition duration-150 ease-in-out">
                <div className=" col-span-1 flex items-center p-6 ">
                    <img
                        src={club.image}
                        className="rounded-lg object-cover aspect-square"
                    />
                </div>
                <div className="col-span-2">
                    <h1 className="text-2xl font-title">{club.name}</h1>
                    <hr />
                    <div className="line-clamp-2 sm:line-clamp-3 md:line-clamp-5 lg:line-clamp-7">
                        {club.description}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ClubCard;
