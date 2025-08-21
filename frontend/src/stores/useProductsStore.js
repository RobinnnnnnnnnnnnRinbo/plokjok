import { create } from "zustand";
import axios from "axios";

export const useProductsStore = create((set, get) => ({
  products: [],
  cart: [],
  loading: null,
  error: null,
  selectedProduct: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`http://192.168.0.172:3000/api/products`);
      set({
        products: res.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch products",
      });
    }
  },


  selectProduct: (id) => {
    const product = get().products.find((p) => p.product_id === id);
    set({
      selectedProduct: product || null, // Store the actual product object
    });
  },

  createProduct: async (productData) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        "http://localhost:3000/api/products",
        productData
      );
      set((state) => ({
        products: [...state.products, res.data],
        loading: false,
        error: null,
      }));
      return res.data;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to create product.",
      });
      throw error;
    }
  },
  editProduct: async (productData) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.put(
        "http://localhost:3000/api/products/:id",
        productData
      );
      set((state) => ({
        products: [...state.products, res.data],
        loading: false,
        error: null,
      }));
      return res.data;
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to create product.",
      });
      throw error;
    }
  },

  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product_id === product.product_id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product_id === product.product_id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity }],
        };
      }
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product_id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          cart: state.cart.filter((item) => item.product_id !== productId),
        };
      }
      return {
        cart: state.cart.map((item) =>
          item.product_id === productId ? { ...item, quantity } : item
        ),
      };
    }),

  getTotalItems: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    const state = get();
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  clearCart: () => set({ cart: [] }),

  log: () => {
    const state = get();
    console.log("Products:", state.products);
    console.log("Cart:", state.cart);
    console.log("Selected Product:", state.selectedProduct);
  },
}));
