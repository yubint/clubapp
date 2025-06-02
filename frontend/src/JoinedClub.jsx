const JoinedClub = ({ club }) => {
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

                    <div className="mt-15 mb-15">
                        <div className="text-2xl font-title">Events</div>
                        <hr className="mt-2" />
                        <div>
                            {club.events.map((event) => {
                                return <Event key={event.name} event={event} />;
                            })}
                        </div>
                    </div>

                    <div className="mt-15">
                        <div className="text-2xl font-title">Notices</div>
                        <hr className="mt-2" />
                        <div>
                            {club.notices.map((notice) => {
                                return (
                                    <Event key={notice.title} event={notice} />
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 p-3 text-red-400 text-sm cursor-pointer">
                    leave the club?
                </div>
            </div>
        </>
    );
};

const Event = ({ event }) => {
    console.log(event);
    return (
        <>
            <div className=" flex flex-row ">
                <div className="mr-15 m-2">{event.date}</div>
                <div className="m-2 ">{event.title}</div>
            </div>
        </>
    );
};

export default JoinedClub;
