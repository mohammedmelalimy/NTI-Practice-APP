import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/thunk/products.js";
import Product from "./Product.jsx";

const Products = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-8 text-lg dark:text-white">Loading products...</p>;
  if (error) return <p className="text-center mt-8 text-red-600">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {list.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
