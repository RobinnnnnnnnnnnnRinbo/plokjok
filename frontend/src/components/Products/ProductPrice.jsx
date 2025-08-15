const ProductPrice = ({ name, price }) => {
  return (
    <div className="flex flex-col text-center">
      <span className="font-semibold">{name}</span>
      <span className="">${price}</span>
    </div>
  );
};

export default ProductPrice;
