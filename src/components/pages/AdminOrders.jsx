export default function AdminOrders({ orders }) {
  return (
    <div>
      <h3>📦 Orders</h3>
      {orders.length === 0 ? (
        <p className="text-muted mt-3">No orders placed yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Phone</th>
              <th>Items</th>
              <th>Total (₹)</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr key={index}>
                <td>{o.customer.name}</td>
                <td>{o.customer.phone}</td>
                <td>
                  {o.items.map((item, i) => (
                    <div key={i}>
                      {item.name} × {item.qty}
                    </div>
                  ))}
                </td>
                <td>₹{o.total.toFixed(2)}</td>
                <td>{o.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
