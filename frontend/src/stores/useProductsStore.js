import { create } from "zustand";
import axios from "axios";

export const useProductsStore = create((set, get) => ({
  products: [],
  cart: [],
  finalCart: [],
  loading: null,
  error: null,
  selectedProduct: null,
  selectedCartProduct: null, 

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
    set((state) => {
      const nextCart = state.cart.filter((item) => item.product_id !== productId);
      const nextFinal = state.finalCart.filter((it) => it.product_id !== productId);
      return { cart: nextCart, finalCart: nextFinal };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        const nextCart = state.cart.filter((it) => it.product_id !== productId);
        const nextFinal = state.finalCart.filter((it) => it.product_id !== productId);
        return { cart: nextCart, finalCart: nextFinal };
      }
      const nextCart = state.cart.map((it) =>
        it.product_id === productId ? { ...it, quantity } : it
      );
      const isSelected = state.finalCart.some((it) => it.product_id === productId);
      const nextFinal = isSelected
        ? state.finalCart.map((it) =>
            it.product_id === productId ? { ...it, quantity } : it
          )
        : state.finalCart;
      return { cart: nextCart, finalCart: nextFinal };
    }),
  getTotalItems: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  },

   getFinalTotalPrice: () => {
    const { finalCart } = get();
    return finalCart.reduce((t, it) => t + it.price * it.quantity, 0);
  },



  selectCartProduct: (id) => {
    console.log(id)
    const product = get().cart.find((p) => p.product_id === id);
    set({
      selectedCartProduct: product || null
    });
  },
  isFinalSelected: (productId) => {
    return get().finalCart.some((it) => it.product_id === productId);
  }, 
  setFinalCart: (productId, selected) =>
    set((state) => {
      const itemInCart = state.cart.find((it) => it.product_id === productId);
      // always start by removing it; add back if selected
      let nextFinal = state.finalCart.filter((it) => it.product_id !== productId);
      if (selected && itemInCart) nextFinal = [...nextFinal, itemInCart];
      return { finalCart: nextFinal };
    }),

  clearCart: () => set({ cart: [] }),

  log: () => {
    const state = get();
    console.log("Products:", state.products);
    console.log("Cart:", state.cart);
    console.log("Selected Product:", state.selectedProduct);
    console.log("Selected Cart Product:", state.selectedCartProduct);
    console.log("Final Cart:", state.finalCart);
  },
}));
