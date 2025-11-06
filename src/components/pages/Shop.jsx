export default function Shop({ setPage, addToCart, addToWishlist }) {
  const products = [
    { id: 4, name: "✨ Night Repair Oil", price: 1299, img: "https://i.pinimg.com/736x/fc/06/4f/fc064feee7b7f3a07cf2b61af212005e.jpg" },
    { id: 2, name: "💧 Glow Cream", price: 799, img: "https://i.pinimg.com/736x/f8/b5/a2/f8b5a2a03810fe6ab3f49a8a5758fd76.jpg" },
    { id: 3, name: "🌿 Herbal Face Wash", price: 499, img: "https://i.pinimg.com/736x/24/23/f6/2423f6700f586896c8aaa8a14f2b7678.jpg" },
    { id: 6, name: "🫧 Hair Oil", price: 699, img: "https://i.pinimg.com/736x/35/31/cc/3531cc5c1bd28f7f8bff9d9a0bcb08f4.jpg" },
    { id: 5, name: "☀️ Sun Protection Lotion", price: 699, img: "https://i.pinimg.com/736x/87/94/46/8794465203cd2c75d04117496ec0357b.jpg" },
    { id: 1, name: "🌸 Premium Serum", price: 999, img: "https://i.pinimg.com/1200x/c2/49/d8/c249d88ccb5d1055652caa3510bd883c.jpg" },
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">🛍️ Shop Our Collection</h2>
      <div className="row g-4">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4">
            <div
              className="card h-100 shadow-sm border-0"
              style={{
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 6px rgba(0,0,0,0.1)";
              }}
            >
              <img src={p.img} className="card-img-top" alt={p.name} style={{ width: "300px", height: "300px", objectFit: "cover", margin: "10px auto"}}/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text fw-bold text-success">₹{p.price}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => addToCart(p)}
                    className="btn btn-dark w-100 mb-2"
                  >
                    Add to Cart 🛒
                  </button>
                  <button
                    onClick={() => addToWishlist(p)}
                    className="btn btn-outline-danger w-100"
                  >
                    ❤️ Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}