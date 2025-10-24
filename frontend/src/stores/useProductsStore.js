import { create } from "zustand";
import { useAuthStore } from "./useAuthStore";
import axios from "axios";

export const useProductsStore = create((set, get) => ({
  products: [],
  cart: [],
  currentCartId: null,
  loading: null,
  selectedProduct: null,
  selectedCartProduct: null,
  error: null,

  //PRODUCT DETAILS

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
      selectedProduct: product || null,
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

  //CART DETAILS

  initializeCart: async () => {
    if (get().currentCartId) {
    console.log("Cart already initialized:", get().currentCartId);
    return get().currentCartId;
  }

  const authUser = useAuthStore.getState().authUser;
  if (!authUser?.user_id) { 
    set({ error: "User not authenticated" }); 
    return null; 
  }

  set({ loading: true, error: null });
  try {
    let res;
    try {
      res = await axios.get(`http://192.168.0.172:3000/api/carts/user/${authUser.user_id}`);
      console.log("Found existing cart:", res.data.cart_id);
    } catch (error) {
      if (error.response?.status === 404) {
        res = await axios.post(`http://192.168.0.172:3000/api/carts/user/${authUser.user_id}`);
        console.log("Created new cart:", res.data.cart_id);
      } else {
        throw error;
      }
    }
    
    const cartId = res.data.cart_id;
    set({ currentCartId: cartId, loading: false });
    return cartId;
  } catch (error) {
    console.error("Failed to initialize cart:", error);
    set({
      loading: false,
      error: error.message || "Failed to initialize cart.",
    });
    return null;
  }
},

  fetchCart: async () => {
    let currentCartId = get().currentCartId;
    console.log(currentCartId)
    let cartId = get().currentCartId;
    if (!cartId) {
      cartId = await get().initializeCart();
      if (!cartId) return;
    }
    set({ loading: true, error: null });
    try {
      const res = await axios.get(
        `http://192.168.0.172:3000/api/carts/${cartId}/items`
      );
      set({
        cart: res.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.message || "Failed to fetch cart.",
      });
    }
  },

    // OPTIMISTIC UPDATES

  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product_id === product.product_id
      );
      
      const updatedCart = existingItem
        ? state.cart.map((item) =>
            item.product_id === product.product_id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...state.cart, { ...product, quantity }];

      return { cart: updatedCart };
    });

    get().syncAddToCart(product, quantity);
  },

  // BACKEND SYNCING

  syncAddToCart: async (product, quantity) => {
    let cartId = get().currentCartId;
    
    if (!cartId) {
      cartId = await get().initializeCart();
      if (!cartId) return;
    }

    try {
      await axios.post(`http://192.168.0.172:3000/api/carts/${cartId}/items`, {
        product_id: product.product_id,
        quantity: quantity
      });
    } catch (error) {
      console.error("Failed to sync add to cart:", error);
      set({ error: "Failed to sync cart changes" });
    }
  },

  log: () => {
    const state = get();
    console.log("Products:", state.products);
    console.log("Cart:", state.cart);
    console.log("Selected Product:", state.selectedProduct);
    console.log("Selected Cart Product:", state.selectedCartProduct);
    console.log("Final Cart:", state.finalCart);
  },
}));
