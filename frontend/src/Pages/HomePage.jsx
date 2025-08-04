import React, { useRef, useState } from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import Category from "../Components/Category";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";

const HomePage = ({ cartCount, handleAddToCart }) => {
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
      <ProductList ref={productRef} onAddToCart={handleAddToCart} />
      <Footer ref={aboutRef} />
    </>
  );
};

export default HomePage;
