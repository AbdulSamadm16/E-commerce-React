import { useState } from "react";

export default function Footer({ setPage }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert("LooQue Team will Reach You Shortly");
      setEmail(""); // optional: clear input
    }
  };

  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-md-4">
            <h5 className="fw-bold">LooQue</h5>
            <p className="text-muted small">
              Radiance redefined. Because your skin deserves the spotlight.
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="fw-semibold">Links</h6>
            <ul className="list-unstyled small">
              <li>
                <button
                  className="btn btn-link link-secondary text-decoration-none p-0"
                  onClick={() => setPage("shop")}
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  className="btn btn-link link-secondary text-decoration-none p-0"
                  onClick={() => setPage("wishlist")}
                >
                  Wishlist
                </button>
              </li>
              <li>
                <button
                  className="btn btn-link link-secondary text-decoration-none p-0"
                  onClick={() => setPage("cart")}
                >
                  Cart
                </button>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-semibold">For queries</h6>
            <form className="d-flex gap-2" onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control"
                placeholder="sam@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-dark" disabled={!email.trim()}>
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center pt-3 mt-3 border-top">
          <span className="small text-muted">© 2025 LooQue</span>
          <div className="small">
            <button
              className="btn btn-link link-secondary text-decoration-none me-3 p-0"
              onClick={() => setPage("about")}
            >
              About
            </button>
            <button
              className="btn btn-link link-secondary text-decoration-none p-0"
              onClick={() => setPage("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}