import { Link } from "react-router-dom";

import ProductPrice from "./ProductPrice";
import { StarReviews } from "./StarReviews";
import { useProductsStore } from "../../stores/useProductsStore";

const ProductCard = ({ name, price, img, item, description }) => {
  const { addToCart, log, selectProduct } = useProductsStore();

  const handleAddToCart = () => {
    addToCart(item, 1);
  };

  return (
    <div className="w-46 max-h-94 mx-auto bg-white rounded-lg border border-gray-500 overflow-hidden flex flex-col my-2">
      {/* Product Image */}
      <div className="bg-gray-50 p-2 flex justify-center items-center flex-1">
        <Link to={"/detail"}>
          <img
            onClick={() => {
              selectProduct(item.product_id);
              log();
            }}
            src={img}
            alt="Fresh watermelon cut in half showing red flesh"
            className="w-36 h-36 object-contain"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        {/* Price */}
        <div className="text-lg font-semibold text-gray-900 mb-1">${price}</div>

        {/* Product Name */}
        <h3 className="ext-sm font-md text-gray-900 mb-2 truncate">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-1">
          <StarReviews />
          <span className="text-xs text-gray-500 ml-2">86 reviews</span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 mb-4 italic">
          {description ? description : "Product has no description"}
        </p>

        {/* Buy Button */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="border border-gray-500 text-pm active:bg-pm hover:border-pm hover:bg-pm hover:text-white text-sm font-medium rounded-full transition-colors duration-200 px-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              viewBox="0 0 15 15"
            >
              <path
                fill="none"
                stroke="currentColor"
                d="M4.5 4v-.5a3 3 0 0 1 6 0V4m-3 3v5M5 9.5h5M2.401 6.39l-.778 7a1 1 0 0 0 .994 1.11h9.766a1 1 0 0 0 .994-1.11l-.778-7a1 1 0 0 0-.994-.89h-8.21a1 1 0 0 0-.994.89Z"
              />
            </svg>
          </button>
          <button className="w-full active:bg-pm border border-gray-500 text-pm hover:bg-pm hover:border-pm hover:text-white text-sm font-medium py-2.5 px-4 rounded-full transition-colors duration-200">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
