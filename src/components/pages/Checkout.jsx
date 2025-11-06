import { useState } from "react";

export default function Checkout({ cart, setPage }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleOrder = () => {
    if (!name || !address || !phone) {
      alert("Please fill in all shipping details.");
      return;
    }

    const orderDetails = {
      id: Date.now(), // unique order id
      customer: { name, address, phone },
      paymentMethod: payment,
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    // ✅ Save order in localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, orderDetails]));

    // ✅ Clear cart (optional)
    // localStorage.removeItem("cart"); // if you were persisting cart too

    // ✅ Redirect to confirmation page
    setPage("confirmation");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🧾 Checkout</h2>

      <form className="mb-4">
        <h5>Shipping Info</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="tel"
          className="form-control mb-2"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <h5 className="mt-4">Payment Method</h5>
        <select
          className="form-select mb-3"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Credit/Debit Card</option>
        </select>
      </form>

      <div className="bg-light p-3 rounded shadow-sm">
        <h5>Order Summary</h5>
        <p>Total Items: {cart.length}</p>
        <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
        <button className="btn btn-dark mt-3" onClick={handleOrder}>
          Place Order
        </button>
        <button
          className="btn btn-outline-dark mt-3 ms-2"
          onClick={() => setPage("cart")}
        >
          Back to Cart
        </button>
      </div>
    </div>
  );
}
