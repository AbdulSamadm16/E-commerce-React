export default function Wishlist({ wishlist, removeFromWishlist, addToCart, setPage }) {
  return (
    <div className="container my-4 text-center">
      <h2 className="mb-4">❤️ Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty💔</p>
      ) : (
        <div className="row g-4">
          {wishlist.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <div className="card shadow-sm h-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">₹{item.price}</p>
                  <button
                    className="btn btn-dark mb-2"
                    onClick={() => addToCart(item)}
                  >
                    Move to Cart 🛒
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="btn btn-dark mt-4" onClick={() => setPage("shop")}>
        Back to Shop
      </button>
    </div>
  );
}
