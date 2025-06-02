import { useClubStore } from "./store";
import ClubsCollection from "./ClubsCollection";

const AllClubs = () => {
    const clubs = useClubStore((state) => state.clubs);

    if (clubs.length === 0) {
        return (
            <text className="text-2xl pt-4">
                Oops There are no Clubs to browse. Ask an admin to add a Club.
            </text>
        );
    }

    return <ClubsCollection clubs={clubs} />;
};

export default AllClubs;
