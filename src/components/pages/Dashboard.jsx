import { useState, useEffect } from "react";
import AdminCustomers from "./AdminCustomers";
import AdminOrders from "./AdminOrders";
import AdminProducts from "./AdminProducts";

export default function Dashboard({ cart, wishlist, logoutAdmin }) {
  const [tab, setTab] = useState("overview");
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  // Load orders from localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);

    // Extract unique customers
    const uniqueCustomers = [];
    savedOrders.forEach((o) => {
      if (!uniqueCustomers.find((c) => c.phone === o.customer.phone)) {
        uniqueCustomers.push(o.customer);
      }
    });
    setCustomers(uniqueCustomers);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">📊 Admin Dashboard</h2>
      <button className="btn btn-outline-danger mb-4" onClick={logoutAdmin}>
        Logout
      </button>

      {/* Navigation */}
      <div className="mb-4">
        <button
          className={`btn me-2 ${tab === "overview" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={`btn me-2 ${tab === "customers" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setTab("customers")}
        >
          Customers
        </button>
        <button
          className={`btn me-2 ${tab === "orders" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setTab("orders")}
        >
          Orders
        </button>
        <button
          className={`btn ${tab === "products" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setTab("products")}
        >
          Products
        </button>
      </div>

      {/* Tab Content */}
      {tab === "overview" && (
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>🛒 Orders</h5>
              <p className="display-6">{orders.length}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>👥 Customers</h5>
              <p className="display-6">{customers.length}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>❤️ Wishlist Items</h5>
              <p className="display-6">{wishlist.length}</p>
            </div>
          </div>
        </div>
      )}

      {tab === "customers" && <AdminCustomers customers={customers} />}
      {tab === "orders" && <AdminOrders orders={orders} />}
      {tab === "products" && <AdminProducts />}
    </div>
  );
}
