import React, { useRef, useState } from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import Category from "../Components/Category";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => setCartCount((c) => c + 1);

  const categoryRef = useRef();
  const productRef = useRef();
  const heroRef = useRef();
  return (
    <main>
      <NavBar
        productRef={productRef}
        categoryRef={categoryRef}
        heroRef={heroRef}
        cartCount={cartCount}
      />
      <HeroSection ref={heroRef} />
      <Category ref={categoryRef} />
      <Brand />
      <ProductList onAddToCart={handleAddToCart} />
      <Footer />
    </main>
  );
};

export default HomePage;
