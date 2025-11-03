import { create } from "zustand";
import axios from "axios";

const APIURL = "http://192.168.1.7:3000";

export const useAuthStore = create((set, get) => ({
  users: [],
  loading: null,
  error: null,
  authUser: [],

  fetchUsers: async () => {
    try {
      set({ loading: true, error: null });
      const res = await axios.get(`${APIURL}/api/users`);
      set({ users: res.data, loading: false, error: null });
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch users",
      });
    }
  },

  setAuthUserFromStorage: () => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      set({ authUser: JSON.parse(storedUser) });
    }
  },

  createUser: async (userData) => {
    try {
      set({ loading: true, error: null });
      const res = await axios.post(
        `${APIURL}/api/users/register`,
        userData
      );
      set((state) => ({
        users: [...state.users, res.data],
        authUser: { userData, is_auth: true },
        loading: true,
        error: null,
      }));
      console.log("Creating user:", userData);
      return res.data;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch users",
      });
    }
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
      authUser: { ...user, is_auth: true },
    }));
    localStorage.setItem(
      "authUser",
      JSON.stringify({ ...user, is_auth: true })
    );
    return { success: true };
  },

  logout: () => {
    set({ authUser: null });
    localStorage.removeItem("authUser");
  },
  log: () => {
    console.log("All users:", get().users);
    console.log("Authenticated user:", get().authUser);
  },
}));
