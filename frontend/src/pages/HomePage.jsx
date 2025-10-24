import React, { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { useProductsStore } from "../stores/useProductsStore";

const HomePage = ({ cartCount, handleAddToCart }) => {
  const { initializeCart, fetchCart, currentCartId } = useProductsStore();

  useEffect(() => {
    let isMounted = true;

    const loadCart = async () => {
      if (!currentCartId && isMounted) {
        const cartId = await initializeCart();
        if (cartId && isMounted) {
          await fetchCart();
        }
      }
    };

    loadCart();

    return () => {
      isMounted = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const categoryRef = useRef();
  const productRef = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  return (
    <>
      <NavBar
        productRef={productRef}
        categoryRef={categoryRef}
        heroRef={heroRef}
        cartCount={cartCount}
        aboutRef={aboutRef}
      />
      <HeroSection ref={heroRef} />
      <Category ref={categoryRef} />
      <Brand />
      <ProductList
        handleAddToCart={handleAddToCart}
        cartCount={cartCount}
        ref={productRef}
      />
      <Footer ref={aboutRef} />
    </>
  );
};

export default HomePage;
