import React, { useRef, useState } from "react";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import Category from "../Components/Category";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";

const HomePage = ({
  cartCount,
  handleAddToCart,
  products,
  fetchProducts,
  loading,
  setLoading,
  error,
  setError,
}) => {
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
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        products={products}
        ref={productRef}
        fetchProducts={fetchProducts}
        handleAddToCart={handleAddToCart}
      />
      <Footer ref={aboutRef} />
    </>
  );
};

export default HomePage;
