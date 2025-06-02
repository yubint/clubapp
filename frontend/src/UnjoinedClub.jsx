const UnjoinedClub = ({ club }) => {
    return (
        <>
            <div className="flex relative h-full">
                <div className="basis-4/10 m-3 p-6">
                    <img src={club.image} className="rounded-2xl" />
                </div>

                <div className="grow">
                    <div className="font-title font-bold text-5xl text-center">
                        {club.name}
                    </div>

                    <div className="mt-15 mb-15 text-2xl">
                        {club.description}
                    </div>
                </div>

                <div className="absolute bottom-4 right-4 p-3 cursor-pointer">
                    <div className="bg-primary pr-12 pl-12 pt-2 pb-2 text-3xl text font-title rounded-2xl text-white">
                        Join
                    </div>
                </div>
            </div>
        </>
    );
};

export default UnjoinedClub;
