import { useDispatch } from "react-redux";
import { fetchProductById } from "../Store/thunk/cart";
const Product = ({ product }) => {
  
  const dispatch = useDispatch()
  const specificHandler = ()=>{
    dispatch(fetchProductById(product.id))
  }  
  
  return (
    <div
      key={product.id}
      className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4 rounded-lg"
      />

      <h2 className="text-lg font-bold text-center">{product.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-1 text-center">{product.category}</p>
      <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2 text-center">${product.price}</p>

      <button className="mt-auto w-full bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 hover:bg-blue-400 text-black dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
      onClick={specificHandler}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
