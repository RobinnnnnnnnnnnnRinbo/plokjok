import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const HomePage = ({ cartCount, handleAddToCart, setSelectedProduct }) => {
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
        setSelectedProduct={setSelectedProduct}
        handleAddToCart={handleAddToCart}
        cartCount={cartCount}
        ref={productRef}
      />
      <Footer ref={aboutRef} />
    </>
  );
};

export default HomePage;
