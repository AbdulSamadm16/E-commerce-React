export default function AdminCustomers({ customers }) {
  return (
    <div>
      <h3>👥 Customers</h3>
      {customers.length === 0 ? (
        <p className="text-muted mt-3">No customers yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.address}</td>
                <td>{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
