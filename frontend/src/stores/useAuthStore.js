import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  users: [
    {
      username: "Leo Messi",
      email: "hello@example.com",
      password: "ASDqwert!@##123",
      isAuth: true,
    },
  ],
  authUser: [],

  createUser: (username, email, password) =>
    set((state) => ({
      users: [...state.users, { username, email, password }],
      authUser: { username, email, password, isAuth: true },
    })),

  logInCheck: (username, email, password) => {
    const user = get().users.find(
      (u) =>
        (u.email === email || u.username === username) &&
        u.password === password
    );

    if (user) {
      set((state) => ({
        ...state,
        authUser: { ...user, isAuth: true },
      }));
      return true;
    }
    return false;
  },

  logout: () => set((state) => ({ ...state, authUser: null })),
  log: () => {
    console.log("All users:", get().users);
    console.log("Authenticated user:", get().authUser);
  },
}));
