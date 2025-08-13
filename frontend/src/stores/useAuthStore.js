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

  createUser: (username, email, password) => {
    set((state) => ({
      users: [...state.users, { username, email, password }],
      authUser: { username, email, password, isAuth: true },
    }));
    console.log("Creating user:", username, email, password);
  },
  logInCheck: (username, email, password) => {
    console.log("Logging in with:", username || email, password);
    if (!username || (!email && !password)) {
      return { success: false, error: "Please enter username and password" };
    }
    const user = get().users.find(
      (u) => u.email === email || u.username === username
    );
    if (!user) {
      return { success: false, error: "Email or username not found." };
    }
    if (user.password !== password) {
      return { success: false, error: "Incorrect password." };
    }
    set((state) => ({
      ...state,
      authUser: { ...user, isAuth: true },
    }));
    return { success: true };
  },

  logout: () => set((state) => ({ ...state, authUser: null })),
  log: () => {
    console.log("All users:", get().users);
    console.log("Authenticated user:", get().authUser);
  },
}));
