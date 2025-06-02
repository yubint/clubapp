import { Link, useParams } from "react-router-dom";
import { useClubStore, useUserStore } from "./store";
import JoinedClub from "./JoinedClub";
import UnjoinedClub from "./UnjoinedClub";

const Club = () => {
    const joinedClubsId = useUserStore((state) => state.user.clubs);
    const clubs = useClubStore((state) => state.clubs);

    const params = useParams();
    const name = params.name;

    for (let index = 0; index < clubs.length; index++) {
        const club = clubs[index];
        // when club name in url matches the club name in Array
        if (club.name === name) {
            // checking if the club is joined or not
            if (club._id in joinedClubsId) {
                return <JoinedClub club={club} />;
            }

            return <UnjoinedClub club={club} />;
        }
    }

    return (
        <div className="text-2xl">
            Oops, the club you're looking for ({name}) wasn't found!{" "}
            <Link className="text-accent" to={"/allclubs"}>
                Browse all Clubs
            </Link>
        </div>
    );
};

export default Club;
