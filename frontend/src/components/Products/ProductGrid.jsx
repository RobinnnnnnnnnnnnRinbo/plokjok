import ProductCard from "./ProductCard";
import ProductSkeletonCard from "./ProductSkeletonCard";

const ProductGrid = ({ products, loading, error, setSelectedProduct }) => {
  return (
    <div className="bg-white">
      <div className="flex flex-wrap h-screen overflow-y-auto">
        {/* FrontEnd  */}
        {loading && <ProductSkeletonCard />}
        {products.length === 0 && !error && !loading && (
          <span>Product not found</span>
        )}
        {error && <span>{error}</span>}
        {products.map((product, index) => (
          <ProductCard
            item={product}
            setSelectedProduct={setSelectedProduct}
            key={index}
            name={product.product_name}
            price={product.price}
            img={product.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
