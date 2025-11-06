export default function Cart({ setPage, cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{item.name} - ₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mt-4">Total: ₹{total}</h3>
        </div>
      )}

      <button
        onClick={() => setPage("shop")}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Continue Shopping
      </button>
    </div>
  );
}
