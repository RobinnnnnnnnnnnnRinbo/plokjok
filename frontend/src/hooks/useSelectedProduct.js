import { useState } from "react";

export function useSelectedProduct() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return {
    selectedProduct,
    setSelectedProduct,
    handleSelectProduct,
  };
}
