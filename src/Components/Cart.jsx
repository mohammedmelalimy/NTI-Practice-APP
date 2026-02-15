import { useSelector } from "react-redux";

const Cart = () => {
  const { specificProduct, loading, error } = useSelector((state) => state.specific);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;

  if (specificProduct.length === 0) {
    return (
      <h1 className="py-30 text-center font-extrabold text-6xl dark:text-white">
        No products in cart
      </h1>
    );
  }

  return (
    <div className="p-9 dark:text-white  w-5/6 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specificProduct.map((product) => (
          <div key={product.id} className="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
            
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4 mx-auto"
            />

            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            
            <p className="text-gray-600 dark:text-gray-300">{product.category}</p>

            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              ${product.price}
            </p>

            <button className="bg-blue-300 px-4 py-2 rounded-md hover:bg-blue-400">
              Checkout
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
