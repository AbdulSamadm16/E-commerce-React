export default function AdminProducts() {
  const products = [
    { id: 1, name: "iPhone 15", price: 80000 },
    { id: 2, name: "MacBook Pro", price: 150000 },
  ];

  return (
    <div>
      <h3>🛍 Products</h3>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
