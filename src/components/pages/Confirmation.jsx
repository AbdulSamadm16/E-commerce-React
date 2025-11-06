export default function Confirmation({ setPage }) {
  return (
    
    <div className="container my-5 text-center">
      <div className="p-5 bg-light rounded shadow-sm">
        <h2 className="mb-4 text-success">✅ Order Placed Successfully!</h2>
        <p className="lead">Thank you for shopping with us, your order is being processed.</p>
        <p className="text-muted">You’ll receive a confirmation message shortly.</p>
        <button className="btn btn-dark mt-4" onClick={() => setPage("shop")}>
          Continue Shopping
        </button>
        <button className="btn btn-outline-dark mt-3 ms-2" onClick={() => setPage("home")}>
          Go to Home
        </button>
      </div>
    </div>
  );
}