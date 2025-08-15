import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeletonCard = () => {
  return (
    <SkeletonTheme baseColor="#e4e4e4ff" highlightColor="#f0f0f0ff">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-48 max-h-90 mx-auto bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col my-2"
          >
            {/* Product Image */}
            <div className="p-2 flex justify-center items-center flex-1">
              <Skeleton height={138} width={160} />
            </div>

            {/* Product Details */}
            <div className="p-4 space-y-3">
              {/* Price */}
              <Skeleton width={80} height={20} />

              {/* Product Name */}
              <Skeleton width={140} height={16} />

              {/* Rating */}
              <div className="flex items-center mb-1">
                <Skeleton width={80} height={16} />
                <div className="ml-2">
                  <Skeleton width={40} height={12} />
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <Skeleton height={12} />
              </div>

              {/* Buy Buttons */}
              <div className="flex gap-2">
                <Skeleton circle width={40} height={40} /> {/* Cart button */}
                <Skeleton width={110} height={40} /> {/* Buy now button */}
              </div>
            </div>
          </div>
        ))}
    </SkeletonTheme>
  );
};

export default ProductSkeletonCard;
