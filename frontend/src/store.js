import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist(
        (set) => ({
            isAuthenticated: false,
            token: null,
            login: () => set({ isAuthenticated: true }),
            logout: () => set({ isAuthenticated: false }),
        }),
        {
            name: "auth-storage",
        }
    )
);

export const useUserStore = create((set) => ({
    user: {
        _id: "679e20ba174f840b4a2537fc",
        email: "khatiwadaanupam13@gmail.com",
        batch: "10th",
        name: "Anupam",
        clubs: [],
        isAdmin: true,
        __v: 0,
    },
    getuser: () => set({ user: null }),
}));

export const useClubStore = create((set) => ({
    clubs: [
        {
            _id: "679e338358b28941ec6b9dab",
            name: "Chess Club",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihtBsV_Ob18LP5Xo8_JDne2zpKsBQzi9pUw&s",
            description:
                "Discussion and Talks about Chess. Hosts Occasional Chess Competitions",
            events: [
                {
                    date: "2081-10-25",
                    title: "Intra Club Rapid Chess Tournament",
                },
                {
                    date: "2081-10-23",
                    title: "Opening Theory Discussion",
                },
                {
                    date: "2081-10-25",
                    title: "Intra Club Online Blitz Tournament",
                },
                {
                    date: "2081-10-25",
                    title: "Intra Club Chess Tournament | Time Control - 60|30",
                },
                {
                    date: "2081-10-25",
                    title: "Intra Club Rapid Chess Tournament",
                },
            ],
            notices: [
                {
                    date: "2081-10-25",
                    title: "Winner of Rapid Tournament - Randy Orton",
                },
                {
                    date: "2081-10-23",
                    title: "President Changed to - Randy Orton",
                },
            ],
            president: "679e20ba174f840b4a2537fc",
            createdAt: "2025-02-01T14:45:23.516Z",
            updatedAt: "2025-02-01T14:45:23.516Z",
            __v: 0,
        },
    ],
    addclub: () => set({ clubs: null }),
    joinclub: () => set({ clubs: null }),
    leaveclub: () => set({ clubs: null }),
}));
