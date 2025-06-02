import ClubCard from "./ClubCard";

const ClubsCollection = ({ clubs }) => {
    return (
        <>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3  overflow-visible">
                {clubs.map((club) => (
                    <ClubCard key={club._id} club={club} />
                ))}
            </div>
        </>
    );
};

export default ClubsCollection;
