import { useUserStore } from "./store";
import { Link } from "react-router-dom";
import ClubsCollection from "./ClubsCollection";

const Home = () => {
    const clubs = useUserStore((state) => state.user.clubs);

    if (clubs.length === 0) {
        return (
            <text className="text-2xl pt-4">
                Oops You haven't Joined any Club.{" "}
                <text className="text-accent">
                    <Link to={"/allclubs"}>Join a Club!</Link>
                </text>
            </text>
        );
    }

    return <ClubsCollection clubs={clubs} />;
};

export default Home;
