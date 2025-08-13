import { useState, useEffect } from "react";
import axios from "axios";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //   const products = [
  //     {
  //       id: 1,
  //       name: "Headphone",
  //       img_url:
  //         "https://products.shureweb.eu/cdn-cgi/image/width=1380,height=1380,format=auto/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp",
  //       price: 19.99,
  //       description: "This is a sample product description.",
  //       category: "Sample Category",
  //       stock: 100,
  //       rating: 4.5,
  //     },
  //     {
  //       id: 2,
  //       name: "Gaming Mouse",
  //       img_url:
  //         "https://www.pngplay.com/wp-content/uploads/2/Gaming-Pc-Mouse-PNG-Clipart-Background.png",
  //       price: 29.99,
  //       description: "This is another sample product description.",
  //       category: "Sample Category",
  //       stock: 50,
  //       rating: 4.0,
  //     },
  //     {
  //       id: 3,
  //       name: "Game Controller",
  //       img_url:
  //         "https://static.vecteezy.com/system/resources/previews/043/016/304/non_2x/ai-generated-3d-rendering-of-a-game-controller-on-transparent-background-ai-generated-free-png.png",
  //       price: 39.99,
  //       description: "This is yet another sample product description.",
  //       category: "Sample Category",
  //       stock: 20,
  //       rating: 4.8,
  //     },
  //     {
  //       id: 4,
  //       name: "Keyboard",
  //       img_url:
  //         "https://static.vecteezy.com/system/resources/thumbnails/052/855/141/small_2x/rgb-illuminated-mechanical-gaming-keyboard-free-png.png",
  //       price: 49.99,
  //       description: "This is a fourth sample product description.",
  //       category: "Sample Category",
  //       stock: 10,
  //       rating: 4.2,
  //     },
  //     {
  //       id: 5,
  //       name: "Nuclear Bomb",
  //       img_url:
  //         "https://wallpapers.com/images/featured/nuclear-bomb-png-jrzj712nv8jd9oei.jpg",
  //       price: 59.99,
  //       description: "This is a fifth sample product description.",
  //       category: "Sample Category",
  //       stock: 5,
  //       rating: 4.9,
  //     },
  //     {
  //       id: 6,
  //       name: "Gaming Microphone",
  //       img_url:
  //         "https://png.pngtree.com/png-clipart/20240126/original/pngtree-gaming-microphone-png-image_14158865.png",
  //       price: 69.99,
  //       description: "This is a sixth sample product description.",
  //       category: "Sample Category",
  //       stock: 2,

  //       rating: 4.7,
  //     },
  //   ];

  // Simulate fetching products
  return { products, loading, error, setProducts, setLoading, setError };
}
