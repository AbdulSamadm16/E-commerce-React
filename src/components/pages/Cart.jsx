export default function Cart({ cart, removeFromCart, increaseQty, decreaseQty, setPage }) {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="lead">Your cart is empty 😔</p>
          <button className="btn btn-outline-dark mt-3" onClick={() => setPage("shop")}>
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {cart.map((item) => (
              <div key={item.id} className="col-12 col-md-6">
                <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid rounded me-3"
                    style={{ width: "100px", objectFit: "cover" }}
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-2 text-muted">₹{item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>
                      <span className="mx-2 fw-bold">{item.qty}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm ms-3"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-5 p-4 bg-light rounded shadow-sm text-center">
            <h5>🧾 Cart Summary</h5>
            <p>Total Items: <strong>{totalItems}</strong></p>
            <p>Total Price: <strong>₹{totalPrice.toFixed(2)}</strong></p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
              <button className="btn btn-success" onClick={() => setPage("checkout")}>
                Proceed to Checkout
              </button>
              <button className="btn btn-outline-dark" onClick={() => setPage("shop")}>
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}